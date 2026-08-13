import type { Exercise } from "@/data/exercises";
import { htmlCssExercises } from "@/data/exercises";

/* =========================================================
   TIPOS
   ========================================================= */

export type QuizOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
};

export type Concept = {
  title: string;
  explanation: string;
  example?: string;
};

export type Lesson = {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  duration: string;
  theory: string[];
  concepts: Concept[];
  exercises: Exercise[];
  quiz: QuizQuestion[];
};

export type CourseModule = {
  id: string;
  slug: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  icon: string;
  modules: CourseModule[];
};

/* =========================================================
   QUIZ — HTML FUNDAMENTOS
   ========================================================= */

const htmlFundamentalsQuiz: QuizQuestion[] = [
  {
    id: "html-q1",
    question: "¿Qué significa HTML?",
    options: [
      {
        id: "a",
        text: "HyperText Markup Language",
      },
      {
        id: "b",
        text: "HighText Machine Language",
      },
      {
        id: "c",
        text: "HyperTool Modern Language",
      },
      {
        id: "d",
        text: "Home Tool Markup Language",
      },
    ],
    correctAnswer: "a",
    explanation:
      "HTML significa HyperText Markup Language y se utiliza para estructurar el contenido de una página web.",
  },

  {
    id: "html-q2",
    question: "¿Cuál es la función principal de HTML?",
    options: [
      {
        id: "a",
        text: "Crear la lógica de una aplicación",
      },
      {
        id: "b",
        text: "Dar estructura y significado al contenido",
      },
      {
        id: "c",
        text: "Crear bases de datos",
      },
      {
        id: "d",
        text: "Administrar servidores",
      },
    ],
    correctAnswer: "b",
    explanation:
      "HTML define la estructura y el significado del contenido de una página.",
  },

  {
    id: "html-q3",
    question: "¿Qué etiqueta se utiliza normalmente para el título principal de una página?",
    options: [
      {
        id: "a",
        text: "<p>",
      },
      {
        id: "b",
        text: "<div>",
      },
      {
        id: "c",
        text: "<h1>",
      },
      {
        id: "d",
        text: "<title>",
      },
    ],
    correctAnswer: "c",
    explanation:
      "La etiqueta h1 representa normalmente el encabezado principal visible del contenido.",
  },
];

/* =========================================================
   LECCIÓN 1
   ========================================================= */

const htmlLesson1: Lesson = {
  id: "html-lesson-1",
  slug: "que-es-html",
  title: "¿Qué es HTML?",
  description:
    "Comprende qué es HTML, para qué sirve y cómo se estructura una página web desde sus fundamentos.",
  level: "Principiante",
  duration: "25 min",

  theory: [
    "HTML es el lenguaje utilizado para estructurar el contenido de las páginas web. Permite indicar al navegador qué elementos existen y qué significado tiene cada uno.",

    "Una página web puede contener títulos, párrafos, imágenes, enlaces, formularios, listas, tablas y muchos otros elementos. HTML proporciona la estructura que organiza todo ese contenido.",

    "HTML no es un lenguaje de programación tradicional. Su función principal es describir la estructura y semántica del documento.",

    "Para crear una página HTML normalmente utilizamos elementos formados por etiquetas. Por ejemplo, un párrafo puede escribirse utilizando la etiqueta p.",

    "A medida que avancemos en la academia aprenderás a combinar HTML con CSS para crear interfaces visuales y con JavaScript para agregar comportamiento e interacción.",
  ],

  concepts: [
    {
      title: "HTML",
      explanation:
        "HTML significa HyperText Markup Language. Es el lenguaje de marcado utilizado para estructurar documentos que serán interpretados por los navegadores.",
      example: "<h1>Mi primera página</h1>",
    },

    {
      title: "Elemento HTML",
      explanation:
        "Un elemento HTML normalmente está formado por una etiqueta de apertura, contenido y una etiqueta de cierre.",
      example:
        "<p>Este es un párrafo.</p>",
    },

    {
      title: "Etiqueta",
      explanation:
        "Las etiquetas permiten indicar qué tipo de contenido estamos creando.",
      example:
        "<h1>Título</h1>\n<p>Párrafo</p>",
    },

    {
      title: "Atributos",
      explanation:
        "Los atributos proporcionan información adicional a los elementos HTML.",
      example:
        '<a href="https://example.com">Visitar sitio</a>',
    },
  ],

  exercises: [
    htmlCssExercises[0],
  ],

  quiz: htmlFundamentalsQuiz,
};

/* =========================================================
   LECCIÓN 2
   ========================================================= */

const htmlLesson2: Lesson = {
  id: "html-lesson-2",
  slug: "estructura-documento-html",
  title: "Estructura de un documento HTML",
  description:
    "Aprende la estructura básica de un documento HTML y comprende qué función cumple cada parte.",
  level: "Principiante",
  duration: "30 min",

  theory: [
    "Un documento HTML moderno comienza normalmente utilizando la declaración DOCTYPE. Esta declaración indica al navegador que estamos utilizando el estándar HTML moderno.",

    "Después encontramos el elemento html, que contiene todo el documento.",

    "Dentro de html existen principalmente dos grandes partes: head y body.",

    "El elemento head contiene información sobre el documento que no necesariamente se muestra directamente dentro de la página, como el título, metadatos y enlaces a hojas de estilos.",

    "El elemento body contiene el contenido visible de la página.",
  ],

  concepts: [
    {
      title: "DOCTYPE",
      explanation:
        "Indica al navegador que el documento debe interpretarse utilizando el estándar HTML.",
      example:
        "<!DOCTYPE html>",
    },

    {
      title: "html",
      explanation:
        "Es el elemento raíz que contiene todo el documento HTML.",
      example:
        "<html>\n  ...\n</html>",
    },

    {
      title: "head",
      explanation:
        "Contiene metadatos e información utilizada por el navegador.",
      example:
        "<head>\n  <title>Mi página</title>\n</head>",
    },

    {
      title: "body",
      explanation:
        "Contiene el contenido visible de la página.",
      example:
        "<body>\n  <h1>Hola mundo</h1>\n</body>",
    },
  ],

  exercises: [],

  quiz: [
    {
      id: "html-structure-q1",
      question:
        "¿Qué elemento contiene normalmente el contenido visible de una página?",
      options: [
        {
          id: "a",
          text: "<head>",
        },
        {
          id: "b",
          text: "<body>",
        },
        {
          id: "c",
          text: "<meta>",
        },
        {
          id: "d",
          text: "<title>",
        },
      ],
      correctAnswer: "b",
      explanation:
        "El elemento body contiene el contenido que normalmente se muestra dentro de la página.",
    },

    {
      id: "html-structure-q2",
      question:
        "¿Qué declaración se utiliza al comienzo de un documento HTML moderno?",
      options: [
        {
          id: "a",
          text: "<html5>",
        },
        {
          id: "b",
          text: "<doctype>",
        },
        {
          id: "c",
          text: "<!DOCTYPE html>",
        },
        {
          id: "d",
          text: "<document>",
        },
      ],
      correctAnswer: "c",
      explanation:
        "La declaración correcta es <!DOCTYPE html>.",
    },
  ],
};

/* =========================================================
   LECCIÓN 3
   ========================================================= */

const htmlLesson3: Lesson = {
  id: "html-lesson-3",
  slug: "titulos-y-parrafos",
  title: "Títulos y párrafos",
  description:
    "Aprende a organizar contenido utilizando encabezados y párrafos.",
  level: "Principiante",
  duration: "25 min",

  theory: [
    "Los encabezados permiten organizar jerárquicamente el contenido de una página.",

    "HTML proporciona encabezados desde h1 hasta h6. h1 representa el nivel principal y los siguientes niveles permiten crear una jerarquía.",

    "Los párrafos se representan mediante el elemento p y se utilizan para agrupar bloques de texto.",

    "Utilizar correctamente la jerarquía de encabezados ayuda tanto a las personas como a los motores de búsqueda y tecnologías de asistencia a comprender la estructura del contenido.",
  ],

  concepts: [
    {
      title: "Encabezado principal",
      explanation:
        "h1 representa normalmente el encabezado principal de una página o sección.",
      example:
        "<h1>Full Stack Academy</h1>",
    },

    {
      title: "Subencabezados",
      explanation:
        "Los elementos h2, h3 y siguientes permiten representar niveles inferiores dentro de la jerarquía.",
      example:
        "<h2>Curso de HTML</h2>\n<h3>Introducción</h3>",
    },

    {
      title: "Párrafos",
      explanation:
        "El elemento p representa un párrafo de texto.",
      example:
        "<p>Estoy aprendiendo desarrollo web.</p>",
    },
  ],

  exercises: [
    htmlCssExercises[1],
  ],

  quiz: [
    {
      id: "html-text-q1",
      question:
        "¿Qué etiqueta representa normalmente el encabezado principal?",
      options: [
        {
          id: "a",
          text: "<h1>",
        },
        {
          id: "b",
          text: "<header1>",
        },
        {
          id: "c",
          text: "<heading>",
        },
        {
          id: "d",
          text: "<main-title>",
        },
      ],
      correctAnswer: "a",
      explanation:
        "h1 es el elemento utilizado normalmente para el encabezado principal.",
    },

    {
      id: "html-text-q2",
      question:
        "¿Qué elemento se utiliza para crear un párrafo?",
      options: [
        {
          id: "a",
          text: "<text>",
        },
        {
          id: "b",
          text: "<paragraph>",
        },
        {
          id: "c",
          text: "<p>",
        },
        {
          id: "d",
          text: "<para>",
        },
      ],
      correctAnswer: "c",
      explanation:
        "La etiqueta p representa un párrafo.",
    },
  ],
};

/* =========================================================
   MÓDULO 1 — FUNDAMENTOS
   ========================================================= */

const htmlModule1: CourseModule = {
  id: "html-module-1",
  slug: "fundamentos-html",
  title: "Fundamentos de HTML",
  description:
    "Construye una base sólida comprendiendo qué es HTML, cómo funciona y cómo se estructura un documento.",

  lessons: [
    htmlLesson1,
    htmlLesson2,
    htmlLesson3,
  ],
};

/* =========================================================
   MÓDULO 2 — CONTENIDO
   ========================================================= */

const htmlModule2: CourseModule = {
  id: "html-module-2",
  slug: "contenido-html",
  title: "Contenido y semántica HTML",
  description:
    "Aprende a construir contenido real utilizando enlaces, imágenes, listas, elementos semánticos y estructuras de contenido.",

  lessons: [
    {
      id: "html-lesson-4",
      slug: "enlaces",
      title: "Enlaces",
      description:
        "Aprende a crear enlaces y conectar diferentes páginas y recursos.",
      level: "Principiante",
      duration: "30 min",

      theory: [
        "Los enlaces son una de las características fundamentales de la web. Permiten conectar documentos, páginas y recursos entre sí.",

        "El elemento a representa un enlace. Su atributo href indica el destino al que se dirigirá el usuario.",

        "Los enlaces pueden apuntar a otras páginas, recursos externos, archivos o diferentes partes del mismo documento.",
      ],

      concepts: [
        {
          title: "Elemento anchor",
          explanation:
            "El elemento a representa un enlace.",
          example:
            '<a href="/contacto">Contacto</a>',
        },

        {
          title: "href",
          explanation:
            "El atributo href indica el destino del enlace.",
          example:
            '<a href="https://example.com">Visitar</a>',
        },
      ],

      exercises: [],

      quiz: [
        {
          id: "html-links-q1",
          question:
            "¿Qué atributo indica el destino de un enlace?",
          options: [
            {
              id: "a",
              text: "src",
            },
            {
              id: "b",
              text: "href",
            },
            {
              id: "c",
              text: "link",
            },
            {
              id: "d",
              text: "url",
            },
          ],
          correctAnswer: "b",
          explanation:
            "href especifica el destino del enlace.",
        },
      ],
    },

    {
      id: "html-lesson-5",
      slug: "imagenes",
      title: "Imágenes",
      description:
        "Aprende a insertar imágenes y utilizar correctamente sus atributos.",
      level: "Principiante",
      duration: "30 min",

      theory: [
        "Las imágenes permiten incorporar contenido visual a una página web.",

        "El elemento img se utiliza para representar una imagen y utiliza el atributo src para indicar dónde se encuentra el recurso.",

        "El atributo alt proporciona una descripción alternativa de la imagen y es importante para la accesibilidad.",
      ],

      concepts: [
        {
          title: "img",
          explanation:
            "Representa una imagen dentro del documento.",
          example:
            '<img src="/imagen.jpg" alt="Descripción de la imagen" />',
        },

        {
          title: "alt",
          explanation:
            "Proporciona un texto alternativo que describe la imagen.",
          example:
            '<img src="/logo.png" alt="Logo de la academia" />',
        },
      ],

      exercises: [],

      quiz: [
        {
          id: "html-images-q1",
          question:
            "¿Qué atributo proporciona el texto alternativo de una imagen?",
          options: [
            {
              id: "a",
              text: "description",
            },
            {
              id: "b",
              text: "text",
            },
            {
              id: "c",
              text: "alt",
            },
            {
              id: "d",
              text: "label",
            },
          ],
          correctAnswer: "c",
          explanation:
            "El atributo alt proporciona el texto alternativo de una imagen.",
        },
      ],
    },

    {
      id: "html-lesson-6",
      slug: "listas",
      title: "Listas",
      description:
        "Aprende a crear listas ordenadas y no ordenadas.",
      level: "Principiante",
      duration: "25 min",

      theory: [
        "Las listas permiten organizar información relacionada de manera estructurada.",

        "HTML proporciona listas ordenadas mediante ol y listas no ordenadas mediante ul.",

        "Cada elemento individual de una lista se representa mediante li.",
      ],

      concepts: [
        {
          title: "Lista no ordenada",
          explanation:
            "Se utiliza cuando el orden de los elementos no es importante.",
          example:
            "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>",
        },

        {
          title: "Lista ordenada",
          explanation:
            "Se utiliza cuando los elementos tienen un orden determinado.",
          example:
            "<ol>\n  <li>Instalar Node.js</li>\n  <li>Crear proyecto</li>\n  <li>Ejecutar aplicación</li>\n</ol>",
        },
      ],

      exercises: [],

      quiz: [
        {
          id: "html-lists-q1",
          question:
            "¿Qué elemento representa cada elemento individual de una lista?",
          options: [
            {
              id: "a",
              text: "<item>",
            },
            {
              id: "b",
              text: "<li>",
            },
            {
              id: "c",
              text: "<list>",
            },
            {
              id: "d",
              text: "<element>",
            },
          ],
          correctAnswer: "b",
          explanation:
            "li representa cada elemento individual de una lista.",
        },
      ],
    },
  ],
};

/* =========================================================
   MÓDULO 3 — FORMULARIOS
   ========================================================= */

const htmlModule3: CourseModule = {
  id: "html-module-3",
  slug: "formularios-html",
  title: "Formularios y entrada de datos",
  description:
    "Aprende a construir formularios, campos de entrada, botones y estructuras para recopilar información.",

  lessons: [
    {
      id: "html-lesson-7",
      slug: "formularios",
      title: "Introducción a los formularios",
      description:
        "Comprende cómo funcionan los formularios HTML y cómo recopilar información del usuario.",
      level: "Principiante",
      duration: "35 min",

      theory: [
        "Los formularios permiten que una página web reciba información introducida por el usuario.",

        "El elemento form actúa como contenedor de los controles utilizados para introducir y enviar información.",

        "Dentro de un formulario podemos utilizar inputs, labels, botones, selectores y otros elementos.",
      ],

      concepts: [
        {
          title: "form",
          explanation:
            "Representa un formulario dentro del documento.",
          example:
            "<form>\n  ...\n</form>",
        },

        {
          title: "input",
          explanation:
            "Permite crear diferentes tipos de campos de entrada.",
          example:
            '<input type="text" placeholder="Tu nombre" />',
        },

        {
          title: "label",
          explanation:
            "Proporciona una etiqueta descriptiva para un control del formulario.",
          example:
            '<label for="email">Correo electrónico</label>',
        },
      ],

      exercises: [],

      quiz: [
        {
          id: "html-forms-q1",
          question:
            "¿Qué elemento representa un formulario?",
          options: [
            {
              id: "a",
              text: "<form>",
            },
            {
              id: "b",
              text: "<input>",
            },
            {
              id: "c",
              text: "<fields>",
            },
            {
              id: "d",
              text: "<data>",
            },
          ],
          correctAnswer: "a",
          explanation:
            "form es el elemento que representa el formulario.",
        },
      ],
    },
  ],
};

/* =========================================================
   CURSO HTML
   ========================================================= */

export const htmlCourse: Course = {
  id: "html",
  slug: "html",
  title: "HTML",
  description:
    "Aprende HTML desde cero y construye una base sólida para convertirte en desarrollador Full Stack.",
  level: "Principiante",
  icon: "🌐",

  modules: [
    htmlModule1,
    htmlModule2,
    htmlModule3,
  ],
};

/* =========================================================
   FUTUROS CURSOS
   ========================================================= */

export const cssCourse: Course = {
  id: "css",
  slug: "css",
  title: "CSS",
  description:
    "Aprende a diseñar interfaces modernas, responsive y profesionales.",
  level: "Principiante",
  icon: "🎨",
  modules: [],
};

export const javascriptCourse: Course = {
  id: "javascript",
  slug: "javascript",
  title: "JavaScript",
  description:
    "Aprende programación web moderna desde los fundamentos hasta conceptos avanzados.",
  level: "Principiante",
  icon: "🟨",
  modules: [],
};

export const typescriptCourse: Course = {
  id: "typescript",
  slug: "typescript",
  title: "TypeScript",
  description:
    "Aprende tipado estático y desarrollo profesional con TypeScript.",
  level: "Intermedio",
  icon: "🔷",
  modules: [],
};

export const reactCourse: Course = {
  id: "react",
  slug: "react",
  title: "React",
  description:
    "Construye interfaces modernas y aplicaciones web utilizando React.",
  level: "Intermedio",
  icon: "⚛️",
  modules: [],
};

export const nextjsCourse: Course = {
  id: "nextjs",
  slug: "nextjs",
  title: "Next.js",
  description:
    "Aprende a construir aplicaciones Full Stack modernas con Next.js.",
  level: "Intermedio",
  icon: "▲",
  modules: [],
};

/* =========================================================
   CATÁLOGO
   ========================================================= */

export const courses: Course[] = [
  htmlCourse,
  cssCourse,
  javascriptCourse,
  typescriptCourse,
  reactCourse,
  nextjsCourse,
];

/* =========================================================
   FUNCIONES DE ACCESO
   ========================================================= */

export function getCourseBySlug(
  slug: string
): Course | undefined {
  return courses.find(
    (course) => course.slug === slug
  );
}

export function getModule(
  courseSlug: string,
  moduleSlug: string
): CourseModule | undefined {
  const course =
    getCourseBySlug(courseSlug);

  if (!course) {
    return undefined;
  }

  return course.modules.find(
    (module) =>
      module.slug === moduleSlug ||
      module.id === moduleSlug
  );
}

export function getLesson(
  courseSlug: string,
  moduleSlug: string,
  lessonSlug: string
): Lesson | undefined {
  const module = getModule(
    courseSlug,
    moduleSlug
  );

  if (!module) {
    return undefined;
  }

  return module.lessons.find(
    (lesson) =>
      lesson.slug === lessonSlug ||
      lesson.id === lessonSlug
  );
}
