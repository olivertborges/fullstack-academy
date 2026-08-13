"use client";

import { useEffect, useState } from "react";
import type { Exercise } from "@/data/exercises";
import {
  completeExercise,
  isExerciseCompleted,
} from "@/lib/progress";

type CodePlaygroundProps = {
  exercise: Exercise;
};

type ValidationResult = {
  property: string;
  expected: string;
  actual: string;
  correct: boolean;
};

export default function CodePlayground({
  exercise,
}: CodePlaygroundProps) {
  const [htmlCode, setHtmlCode] = useState(
    exercise.initialHtml
  );

  const [cssCode, setCssCode] = useState(
    exercise.initialCss
  );

  const [previewHtml, setPreviewHtml] = useState(
    exercise.initialHtml
  );

  const [previewCss, setPreviewCss] = useState(
    exercise.initialCss
  );

  const [message, setMessage] = useState(
    "Listo para ejecutar tu código."
  );

  const [validationResults, setValidationResults] =
    useState<ValidationResult[]>([]);

  const [completed, setCompleted] =
    useState(false);

  const [hintLevel, setHintLevel] =
    useState(0);

  const [showSolution, setShowSolution] =
    useState(false);

  const [xpEarned, setXpEarned] =
    useState(false);

  useEffect(() => {
    setCompleted(
      isExerciseCompleted(exercise.id)
    );
  }, [exercise.id]);

  function executeCode() {
    setPreviewHtml(htmlCode);
    setPreviewCss(cssCode);

    setMessage(
      "Código ejecutado correctamente."
    );
  }

  function resetCode() {
    setHtmlCode(exercise.initialHtml);
    setCssCode(exercise.initialCss);

    setPreviewHtml(exercise.initialHtml);
    setPreviewCss(exercise.initialCss);

    setValidationResults([]);
    setHintLevel(0);
    setShowSolution(false);
    setXpEarned(false);

    setMessage(
      "Ejercicio reiniciado."
    );
  }

  function normalize(value: string) {
    return value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function checkExercise() {
    const results: ValidationResult[] = [];

    const selector =
      exercise.validation.selector;

    const selectorRegex = new RegExp(
      `${escapeRegExp(
        selector
      )}\\s*\\{([\\s\\S]*?)\\}`,
      "i"
    );

    const match = cssCode.match(
      selectorRegex
    );

    const cssBlock = match
      ? match[1]
      : "";

    for (const [
      property,
      expected,
    ] of Object.entries(
      exercise.validation.properties
    )) {
      const propertyRegex =
        new RegExp(
          `${escapeRegExp(
            property
          )}\\s*:\\s*([^;]+)`,
          "i"
        );

      const propertyMatch =
        cssBlock.match(
          propertyRegex
        );

      const actual =
        propertyMatch
          ? propertyMatch[1].trim()
          : "";

      results.push({
        property,
        expected,
        actual,
        correct:
          normalize(actual) ===
          normalize(expected),
      });
    }

    const allCorrect =
      results.length > 0 &&
      results.every(
        (result) => result.correct
      );

    setValidationResults(results);

    if (allCorrect) {
      setCompleted(true);

      const alreadyCompleted =
        isExerciseCompleted(
          exercise.id
        );

      if (!alreadyCompleted) {
        completeExercise(
          exercise.id,
          100
        );

        setXpEarned(true);

        window.dispatchEvent(
          new Event(
            "academy-progress-updated"
          )
        );
      }

      setMessage(
        "🎉 ¡Excelente! Has completado correctamente el ejercicio."
      );
    } else {
      setCompleted(false);
      setXpEarned(false);

      setMessage(
        "Todavía falta corregir algunos elementos."
      );
    }
  }

  function showNextHint() {
    if (
      hintLevel <
      exercise.hints.length
    ) {
      setHintLevel(
        hintLevel + 1
      );
    }
  }

  function toggleSolution() {
    setShowSolution(
      !showSolution
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">

      {/* HEADER */}

      <div className="border-b border-slate-800 bg-slate-900 p-4">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div>

            <div className="mb-2 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
              Ejercicio práctico
            </div>

            <h3 className="text-sm font-bold text-white">
              {exercise.title}
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {exercise.description}
            </p>

          </div>

          <div className="flex shrink-0 gap-2">

            <button
              type="button"
              onClick={resetCode}
              className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-300"
            >
              Reiniciar
            </button>

            <button
              type="button"
              onClick={executeCode}
              className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950"
            >
              ▶ Ejecutar
            </button>

          </div>

        </div>

      </div>

      {/* OBJETIVO */}

      <div className="border-b border-slate-800 bg-slate-950 p-4">

        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">

          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
            🎯 Objetivo
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            {exercise.objective}
          </p>

        </div>

      </div>

      {/* EDITOR + RESULTADO */}

      <div className="grid lg:grid-cols-2">

        {/* EDITOR */}

        <div className="min-w-0 border-b border-slate-800 lg:border-b-0 lg:border-r">

          <div className="border-b border-slate-800 bg-slate-900/80 px-4 py-3">

            <span className="text-xs font-bold text-orange-400">
              HTML
            </span>

          </div>

          <textarea
            value={htmlCode}
            onChange={(event) => {
              setHtmlCode(
                event.target.value
              );

              setMessage(
                "Cambios sin ejecutar."
              );
            }}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            className="block h-48 w-full resize-none border-0 bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200 outline-none"
          />

          <div className="border-y border-slate-800 bg-slate-900/80 px-4 py-3">

            <span className="text-xs font-bold text-blue-400">
              CSS
            </span>

          </div>

          <textarea
            value={cssCode}
            onChange={(event) => {
              setCssCode(
                event.target.value
              );

              setMessage(
                "Cambios sin ejecutar."
              );
            }}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            className="block h-80 w-full resize-none border-0 bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200 outline-none"
          />

        </div>

        {/* PREVIEW */}

        <div className="min-w-0 bg-white">

          <div className="border-b border-slate-200 bg-slate-100 px-4 py-3">

            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Resultado
            </span>

          </div>

          <div className="min-h-[560px] overflow-auto bg-white p-6">

            <style>
              {previewCss}
            </style>

            <div
              dangerouslySetInnerHTML={{
                __html: previewHtml,
              }}
            />

          </div>

        </div>

      </div>

      {/* CONTROLES */}

      <div className="border-t border-slate-800 bg-slate-900/70 p-4">

        <div className="grid gap-2 sm:grid-cols-2">

          <button
            type="button"
            onClick={checkExercise}
            className={`rounded-xl px-4 py-3 text-sm font-bold ${
              completed
                ? "bg-emerald-500 text-white"
                : "bg-violet-500 text-white"
            }`}
          >
            {completed
              ? "✓ Ejercicio completado"
              : "✓ Comprobar ejercicio"}
          </button>

          <button
            type="button"
            onClick={showNextHint}
            disabled={
              hintLevel >=
              exercise.hints.length
            }
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-bold text-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            💡{" "}
            {hintLevel >=
            exercise.hints.length
              ? "No hay más pistas"
              : "Mostrar pista"}
          </button>

        </div>

        {/* XP */}

        {xpEarned && (
          <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5 text-center">

            <div className="text-3xl">
              🏆
            </div>

            <p className="mt-2 text-lg font-black text-yellow-400">
              +100 XP
            </p>

            <p className="mt-1 text-xs text-slate-400">
              ¡Has ganado experiencia completando este ejercicio!
            </p>

          </div>
        )}

        {/* PISTAS */}

        {hintLevel > 0 && (
          <div className="mt-4 space-y-2">

            {exercise.hints
              .slice(
                0,
                hintLevel
              )
              .map((hint) => (
                <div
                  key={hint.level}
                  className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4"
                >

                  <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                    💡 Pista {hint.level}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {hint.text}
                  </p>

                </div>
              ))}

          </div>
        )}

        {/* SOLUCIÓN */}

        <div className="mt-4">

          <button
            type="button"
            onClick={toggleSolution}
            className="text-xs font-semibold text-slate-500 underline underline-offset-4"
          >
            {showSolution
              ? "Ocultar solución"
              : "Ver solución"}
          </button>

          {showSolution && (
            <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950 p-4">

              <p className="text-xs leading-6 text-slate-400">
                {exercise.solutionExplanation}
              </p>

              <pre className="mt-4 overflow-x-auto rounded-lg bg-black p-4 text-xs leading-6 text-cyan-300">
{exercise.solutionCss}
              </pre>

            </div>
          )}

        </div>

        {/* RESULTADOS */}

        {validationResults.length > 0 && (
          <div className="mt-4 space-y-2">

            {validationResults.map(
              (result) => (
                <div
                  key={result.property}
                  className={`rounded-lg border p-3 ${
                    result.correct
                      ? "border-emerald-400/20 bg-emerald-400/5"
                      : "border-red-400/20 bg-red-400/5"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-xs text-slate-300">
                      {result.property}
                    </span>

                    <span>
                      {result.correct
                        ? "✅"
                        : "❌"}
                    </span>

                  </div>

                  {!result.correct && (
                    <p className="mt-1 text-xs text-slate-500">

                      Esperado:{" "}
                      <span className="font-mono text-slate-300">
                        {result.expected}
                      </span>

                      {" · "}

                      Actual:{" "}

                      <span className="font-mono text-red-300">
                        {result.actual ||
                          "no encontrado"}
                      </span>

                    </p>
                  )}

                </div>
              )
            )}

          </div>
        )}

        <p className="mt-4 text-center text-xs text-slate-500">
          {message}
        </p>

      </div>

    </div>
  );
}

function escapeRegExp(
  value: string
) {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}
