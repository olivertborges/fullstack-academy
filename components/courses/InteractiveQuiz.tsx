"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/data/courses";

type InteractiveQuizProps = {
  questions: QuizQuestion[];
};

export default function InteractiveQuiz({
  questions,
}: InteractiveQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
        <div className="text-4xl">📝</div>

        <h3 className="mt-4 text-lg font-black text-white">
          Quiz próximamente
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Esta lección todavía no tiene preguntas disponibles.
        </p>
      </div>
    );
  }

  const question = questions[currentQuestion];

  const progress =
    ((currentQuestion + (answered ? 1 : 0)) / questions.length) * 100;

  function handleAnswer(optionId: string) {
    if (answered) {
      return;
    }

    setSelectedAnswer(optionId);
    setAnswered(true);

    if (optionId === question.correctAnswer) {
      setScore((previous) => previous + 1);
    }
  }

  function handleNext() {
    if (!answered) {
      return;
    }

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
    setSelectedAnswer(null);
    setAnswered(false);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    let resultTitle = "Puedes mejorar 💪";
    let resultMessage =
      "Repasa los conceptos de esta lección y vuelve a intentarlo.";

    if (percentage >= 90) {
      resultTitle = "¡Excelente! 🏆";
      resultMessage =
        "Dominas muy bien los conceptos de esta lección.";
    } else if (percentage >= 70) {
      resultTitle = "¡Muy bien! 🎉";
      resultMessage =
        "Tienes una buena comprensión de los conceptos.";
    } else if (percentage >= 50) {
      resultTitle = "Buen comienzo 👍";
      resultMessage =
        "Ya tienes una base, pero todavía puedes reforzar algunos conceptos.";
    }

    return (
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div className="border-b border-slate-800 bg-slate-950 p-6">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Resultado del quiz
          </div>

          <h3 className="mt-3 text-2xl font-black text-white">
            {resultTitle}
          </h3>
        </div>

        <div className="p-6">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-8 border-cyan-500/20">
            <div className="text-center">
              <div className="text-3xl font-black text-cyan-400">
                {percentage}%
              </div>

              <div className="text-xs text-slate-500">
                puntuación
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-bold text-white">
              {score} de {questions.length} respuestas correctas
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {resultMessage}
            </p>
          </div>

          <button
            type="button"
            onClick={restartQuiz}
            className="mt-8 w-full rounded-xl bg-cyan-500 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-400"
          >
            🔄 Volver a intentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      {/* HEADER */}
      <div className="border-b border-slate-800 bg-slate-950 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Quiz interactivo
            </div>

            <h3 className="mt-1 text-lg font-black text-white">
              Comprueba lo que aprendiste
            </h3>
          </div>

          <div className="shrink-0 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
            {currentQuestion + 1} / {questions.length}
          </div>
        </div>

        {/* BARRA DE PROGRESO */}
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-cyan-500 transition-all duration-500"
            style={{
              width: `${Math.max(progress, 5)}%`,
            }}
          />
        </div>
      </div>

      {/* PREGUNTA */}
      <div className="p-5 sm:p-6">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Pregunta {currentQuestion + 1}
          </span>

          <h4 className="mt-3 text-xl font-black leading-8 text-white">
            {question.question}
          </h4>
        </div>

        {/* OPCIONES */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.id === question.correctAnswer;

            let optionClass =
              "border-slate-800 bg-slate-950 hover:border-cyan-500/40 hover:bg-slate-800";

            if (answered && isCorrect) {
              optionClass =
                "border-emerald-400/40 bg-emerald-400/10";
            } else if (answered && isSelected && !isCorrect) {
              optionClass =
                "border-red-400/40 bg-red-400/10";
            }

            return (
              <button
                key={option.id}
                type="button"
                disabled={answered}
                onClick={() => handleAnswer(option.id)}
                className={`w-full rounded-xl border p-4 text-left transition ${optionClass} ${
                  answered
                    ? "cursor-default"
                    : "cursor-pointer"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black ${
                      answered && isCorrect
                        ? "bg-emerald-500 text-white"
                        : answered && isSelected
                          ? "bg-red-500 text-white"
                          : "bg-slate-800 text-cyan-400"
                    }`}
                  >
                    {option.id.toUpperCase()}
                  </span>

                  <span className="pt-1 text-sm leading-6 text-slate-300">
                    {option.text}
                  </span>

                  {answered && isCorrect && (
                    <span className="ml-auto pt-1">
                      ✅
                    </span>
                  )}

                  {answered && isSelected && !isCorrect && (
                    <span className="ml-auto pt-1">
                      ❌
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* EXPLICACIÓN */}
        {answered && (
          <div
            className={`mt-5 rounded-xl border p-5 ${
              selectedAnswer === question.correctAnswer
                ? "border-emerald-400/20 bg-emerald-400/5"
                : "border-amber-400/20 bg-amber-400/5"
            }`}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {selectedAnswer === question.correctAnswer
                ? "✅ Respuesta correcta"
                : "💡 Explicación"}
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              {question.explanation}
            </p>
          </div>
        )}

        {/* BOTÓN SIGUIENTE */}
        {answered && (
          <button
            type="button"
            onClick={handleNext}
            className="mt-6 w-full rounded-xl bg-violet-500 px-5 py-3 text-sm font-black text-white transition hover:bg-violet-400"
          >
            {currentQuestion === questions.length - 1
              ? "🏆 Ver resultado"
              : "Siguiente pregunta →"}
          </button>
        )}

        {/* PUNTUACIÓN */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-5">
          <span className="text-xs text-slate-500">
            Puntuación actual
          </span>

          <span className="text-sm font-black text-cyan-400">
            {score} / {questions.length}
          </span>
        </div>
      </div>
    </div>
  );
}
