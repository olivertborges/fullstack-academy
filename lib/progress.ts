export type AcademyProgress = {
  completedExercises: string[];
  completedLessons: string[];
  xp: number;
  streak: number;
  lastActivity: string | null;
  badges: string[];
};

const STORAGE_KEY = "fullstack-academy-progress";

const DEFAULT_PROGRESS: AcademyProgress = {
  completedExercises: [],
  completedLessons: [],
  xp: 0,
  streak: 0,
  lastActivity: null,
  badges: [],
};

export function getProgress(): AcademyProgress {
  if (typeof window === "undefined") {
    return DEFAULT_PROGRESS;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return DEFAULT_PROGRESS;
    }

    const parsed = JSON.parse(stored);

    return {
      completedExercises: Array.isArray(parsed.completedExercises)
        ? parsed.completedExercises
        : [],

      completedLessons: Array.isArray(parsed.completedLessons)
        ? parsed.completedLessons
        : [],

      xp: typeof parsed.xp === "number" ? parsed.xp : 0,

      streak:
        typeof parsed.streak === "number"
          ? parsed.streak
          : 0,

      lastActivity:
        typeof parsed.lastActivity === "string"
          ? parsed.lastActivity
          : null,

      badges: Array.isArray(parsed.badges)
        ? parsed.badges
        : [],
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveProgress(progress: AcademyProgress) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  );
}

function updateActivity(progress: AcademyProgress) {
  const today = new Date().toISOString().slice(0, 10);

  if (progress.lastActivity === today) {
    return progress;
  }

  if (!progress.lastActivity) {
    progress.streak = 1;
  } else {
    const last = new Date(progress.lastActivity);
    const current = new Date(today);

    const difference =
      Math.round(
        (current.getTime() - last.getTime()) /
          (1000 * 60 * 60 * 24)
      );

    if (difference === 1) {
      progress.streak += 1;
    } else {
      progress.streak = 1;
    }
  }

  progress.lastActivity = today;

  return progress;
}

export function completeExercise(
  exerciseId: string,
  xpAmount = 100
): AcademyProgress {
  const progress = getProgress();

  if (
    progress.completedExercises.includes(
      exerciseId
    )
  ) {
    return progress;
  }

  progress.completedExercises.push(
    exerciseId
  );

  progress.xp += xpAmount;

  updateActivity(progress);

  checkBadges(progress);

  saveProgress(progress);

  return progress;
}

export function completeLesson(
  lessonId: string,
  xpAmount = 50
): AcademyProgress {
  const progress = getProgress();

  if (
    progress.completedLessons.includes(
      lessonId
    )
  ) {
    return progress;
  }

  progress.completedLessons.push(
    lessonId
  );

  progress.xp += xpAmount;

  updateActivity(progress);

  checkBadges(progress);

  saveProgress(progress);

  return progress;
}

export function isExerciseCompleted(
  exerciseId: string
) {
  return getProgress()
    .completedExercises
    .includes(exerciseId);
}

export function isLessonCompleted(
  lessonId: string
) {
  return getProgress()
    .completedLessons
    .includes(lessonId);
}

export function getLevel(xp: number) {
  return Math.floor(xp / 500) + 1;
}

export function getLevelProgress(xp: number) {
  const currentLevelXp =
    xp % 500;

  return Math.round(
    (currentLevelXp / 500) * 100
  );
}

export function getXpForNextLevel(
  xp: number
) {
  return 500 - (xp % 500);
}

export function getModuleProgress(
  exerciseIds: string[]
) {
  if (exerciseIds.length === 0) {
    return 0;
  }

  const progress = getProgress();

  const completed =
    exerciseIds.filter((id) =>
      progress.completedExercises.includes(id)
    ).length;

  return Math.round(
    (completed / exerciseIds.length) * 100
  );
}

function checkBadges(
  progress: AcademyProgress
) {
  if (
    progress.completedExercises.length >= 1 &&
    !progress.badges.includes(
      "first-exercise"
    )
  ) {
    progress.badges.push(
      "first-exercise"
    );
  }

  if (
    progress.completedExercises.length >= 5 &&
    !progress.badges.includes(
      "five-exercises"
    )
  ) {
    progress.badges.push(
      "five-exercises"
    );
  }

  if (
    progress.completedExercises.length >= 10 &&
    !progress.badges.includes(
      "ten-exercises"
    )
  ) {
    progress.badges.push(
      "ten-exercises"
    );
  }

  if (
    progress.streak >= 3 &&
    !progress.badges.includes(
      "three-day-streak"
    )
  ) {
    progress.badges.push(
      "three-day-streak"
    );
  }
}
