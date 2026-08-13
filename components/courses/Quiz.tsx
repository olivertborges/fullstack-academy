"use client";

import { useState } from "react";

type QuizOption = {
  id: string;
  text: string;
};

type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
};

type QuizProps = {
  questions: QuizQuestion[];
};

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-400">
          Esta lección todavía no tiene preguntas disponibles.
        </p>
      </div>
    );
  }

  const question = questions[currentQuestion];

  function selectAnswer(answerId: string) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerId);

    if (answerId === question.correctAnswer) {
      setScore((previous) => previous + 1);
    }
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  }

  const percentage = Math.round((score / questions.length) * 100);

  if (finished) {
    let message = "";

    if (percentage === 100) {
      message = "¡Excelente! Dominas perfectamente estos conceptos.";
    } else if (percentage >= 70) {
      message = "¡Muy bien! Tienes una buena comprensión del tema.";
    } else if (percentage >= 50) {
      message = "Buen comienzo. Repasa algunos conceptos y vuelve a intentarlo.";
    } else {
      message = "No te preocupes. Repasa la lección y vuelve a intentarlo.";
    }

    return (
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div className="border-b border-slate-800 bg-slate-950 p-6 text-center">
          <div className="text-5xl">
            {percentage === 100
              ? "🏆"
              : percentage >= 70
                ? "🎉"
                : percentage >= 50
                  ? "📚"
                  : "💪"}
          </div>

          <h3 className="mt-4 text-2xl font-black text-white">
            Quiz completado
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {message}
          </p>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Puntuación
            </p>

            <p className="mt-2 text-3xl font-black text-cyan-400">
              {score}/{questions.length}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Resultado
            </p>

            <p className="mt-2 text-3xl font-black text-emerald-400">
              {percentage}%
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              XP
            </p>

            <p className="mt-2 text-3xl font-black text-yellow-400">
              +{score * 25}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 p-6">
          <button
            type="button"
            onClick={restartQuiz}
            className="w-full rounded-xl bg-cyan-500 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-400"
          >
            🔄 Repetir quiz
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      {/* CABECERA */}

      <div className="border-b border-slate-800 bg-slate-950 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Quiz interactivo
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Pregunta {currentQuestion + 1} de {questions.length}
            </p>
          </div>

          <div className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-400">
            {score} correctas
          </div>
        </div>

        {/* PROGRESO */}

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-cyan-500 transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* PREGUNTA */}

      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-black leading-7 text-white sm:text-xl">
          {question.question}
        </h3>

        {/* OPCIONES */}

        <div className="mt-6 space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isAnswerCorrect =
              option.id === question.correctAnswer;

            let optionClass =
              "border-slate-800 bg-slate-950 hover:border-cyan-500/50 hover:bg-slate-800";

            if (selectedAnswer !== null) {
              if (isAnswerCorrect) {
                optionClass =
                  "border-emerald-500 bg-emerald-500/10";
              } else if (isSelected && !isAnswerCorrect) {
                optionClass =
                  "border-red-500 bg-red-500/10";
              } else {
                optionClass =
                  "border-slate-800 bg-slate-950 opacity-60";
              }
            }

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => selectAnswer(option.id)}
                disabled={selectedAnswer !== null}
                className={`w-full rounded-xl border p-4 text-left transition ${optionClass}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black ${
                      selectedAnswer !== null &&
                      option.id === question.correctAnswer
                        ? "bg-emerald-500 text-white"
                        : selectedAnswer === option.id
                          ? "bg-red-500 text-white"
                          : "bg-slate-800 text-cyan-400"
                    }`}
                  >
                    {option.id.toUpperCase()}
                  </span>

                  <span className="pt-1 text-sm leading-6 text-slate-300">
                    {option.text}
                  </span>

                  {selectedAnswer !== null &&
                    option.id === question.correctAnswer && (
                      <span className="ml-auto text-lg">
                        ✅
                      </span>
                    )}

                  {selectedAnswer === option.id &&
                    option.id !== question.correctAnswer && (
                      <span className="ml-auto text-lg">
                        ❌
                      </span>
                    )}
                </div>
              </button>
            );
          })}
        </div>

        {/* RESULTADO */}

        {selectedAnswer !== null && (
          <div
            className={`mt-6 rounded-xl border p-5 ${
              isCorrect
                ? "border-emerald-400/20 bg-emerald-400/5"
                : "border-red-400/20 bg-red-400/5"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">
                {isCorrect ? "🎉" : "💡"}
              </span>

              <p
                className={`font-black ${
                  isCorrect
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {isCorrect
                  ? "¡Respuesta correcta!"
                  : "Respuesta incorrecta"}
              </p>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {question.explanation}
            </p>
          </div>
        )}

        {/* SIGUIENTE */}

        {selectedAnswer !== null && (
          <button
            type="button"
            onClick={nextQuestion}
            className="mt-5 w-full rounded-xl bg-cyan-500 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-400"
          >
            {currentQuestion === questions.length - 1
              ? "🏁 Ver resultado"
              : "Siguiente pregunta →"}
          </button>
        )}
      </div>
    </div>
  );
}
