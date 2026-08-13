export type ExerciseValidation = {
  type: "css";
  selector: string;
  properties: Record<string, string>;
};

export type ExerciseHint = {
  level: number;
  text: string;
};

export type Exercise = {
  id: string;
  title: string;
  description: string;
  objective: string;

  initialHtml: string;
  initialCss: string;

  solutionHtml: string;
  solutionCss: string;

  hints: ExerciseHint[];

  solutionExplanation: string;

  validation: ExerciseValidation;
};

export const htmlCssExercises: Exercise[] = [
  {
    id: "html-css-001",

    title: "Tu primer cuadro con CSS",

    description:
      "Crea un cuadro utilizando HTML y CSS. Aprenderás cómo una clase HTML puede utilizarse para aplicar estilos desde CSS.",

    objective:
      "Crea un cuadro de 200px de ancho y 100px de alto con fondo azul.",

    initialHtml: `<div class="box">
  Hola mundo
</div>`,

    initialCss: `.box {
  width: 200px;
  height: 100px;
  background: red;
  color: white;
}`,

    solutionHtml: `<div class="box">
  Hola mundo
</div>`,

    solutionCss: `.box {
  width: 200px;
  height: 100px;
  background: blue;
  color: white;
}`,

    hints: [
      {
        level: 1,
        text: "El ancho de un elemento se controla mediante la propiedad CSS width.",
      },
      {
        level: 2,
        text: "El objetivo pide un ancho de 200px y un alto de 100px.",
      },
      {
        level: 3,
        text: "Busca dentro de .box las propiedades width, height y background.",
      },
    ],

    solutionExplanation:
      "Para completar el ejercicio necesitamos modificar tres propiedades. width define el ancho del cuadro, height define su altura y background define su color de fondo.",

    validation: {
      type: "css",

      selector: ".box",

      properties: {
        width: "200px",
        height: "100px",
        background: "blue",
      },
    },
  },

  {
    id: "html-css-002",

    title: "Redondeando las esquinas",

    description:
      "Utiliza la propiedad border-radius para modificar la forma de un elemento.",

    objective:
      "Haz que las esquinas del cuadro tengan un radio de 20px.",

    initialHtml: `<div class="card">
  Mi primera tarjeta
</div>`,

    initialCss: `.card {
  width: 250px;
  height: 150px;
  background: purple;
  color: white;
}`,

    solutionHtml: `<div class="card">
  Mi primera tarjeta
</div>`,

    solutionCss: `.card {
  width: 250px;
  height: 150px;
  background: purple;
  color: white;
  border-radius: 20px;
}`,

    hints: [
      {
        level: 1,
        text: "Existe una propiedad CSS que permite redondear las esquinas.",
      },
      {
        level: 2,
        text: "La propiedad que buscas comienza con la palabra border.",
      },
      {
        level: 3,
        text: "La propiedad es border-radius y debe tener un valor de 20px.",
      },
    ],

    solutionExplanation:
      "La propiedad border-radius permite redondear las esquinas de un elemento. En este ejercicio utilizamos 20px para conseguir el resultado solicitado.",

    validation: {
      type: "css",

      selector: ".card",

      properties: {
        "border-radius": "20px",
      },
    },
  },

  {
    id: "html-css-003",

    title: "Construyendo una tarjeta",

    description:
      "Combina varias propiedades CSS para crear una tarjeta visual.",

    objective:
      "Crea una tarjeta de 300px de ancho, 180px de alto, fondo azul, texto blanco y esquinas redondeadas.",

    initialHtml: `<div class="card">
  Full Stack Academy
</div>`,

    initialCss: `.card {
  width: 200px;
  height: 100px;
  background: gray;
}`,

    solutionHtml: `<div class="card">
  Full Stack Academy
</div>`,

    solutionCss: `.card {
  width: 300px;
  height: 180px;
  background: blue;
  color: white;
  border-radius: 20px;
}`,

    hints: [
      {
        level: 1,
        text: "La tarjeta necesita modificar varias propiedades de tamaño y apariencia.", 
      },
      {
        level: 2,
        text: "Revisa width, height, background, color y border-radius.",
      },
      {
        level: 3,
        text: "Compara los valores actuales con los valores indicados en el objetivo.",
      },
    ],

    solutionExplanation:
      "La tarjeta se construye combinando propiedades de tamaño, color y forma. width y height controlan sus dimensiones, background su fondo, color el texto y border-radius sus esquinas.",

    validation: {
      type: "css",

      selector: ".card",

      properties: {
        width: "300px",
        height: "180px",
        background: "blue",
        color: "white",
        "border-radius": "20px",
      },
    },
  },
];
