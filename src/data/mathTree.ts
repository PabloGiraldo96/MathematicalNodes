import type { CoreNodeData, TreeNode } from "../types";

export const CORE_NODE: CoreNodeData = {
  name: { es: "MATHEMATICS", en: "MATHEMATICS" },
  tag: { es: "ORIGEN", en: "ORIGIN" },
};

/**
 * Top-level branches. Each is currently a leaf (no `children`) — add your
 * own subtopics later by giving any of these an array of child TreeNodes
 * with the same shape (see the README for the recommended max depth of 3
 * levels total: branch -> subtopic -> sub-subtopic).
 */
export const MATH_TREE: TreeNode[] = [
  {
    id: "foundations",
    tag: "A",
    name: { es: "Foundations", en: "Foundations" },
    length: 4.0,
    description: {
      es: "Los cimientos lógicos de las matemáticas: axiomas, teoría de conjuntos y la base sobre la que se construye todo lo demás.",
      en: "The logical bedrock of mathematics: axioms, set theory, and the base everything else is built on.",
    },
    wikipediaTitle: { es: "Fundamentos de las matemáticas", en: "Foundations of mathematics" },
  },
{
  id: "arithmetic",
  tag: "B",
  name: { es: "Arithmetic", en: "Arithmetic" },
  length: 4.12,
  description: {
    es: "Operaciones básicas con números: suma, resta, multiplicación y división, y sus propiedades.",
    en: "Basic operations on numbers: addition, subtraction, multiplication and division, and their properties.",
  },
  wikipediaTitle: { es: "Aritmética", en: "Arithmetic" },
  children: [
    {
      id: "suma-resta",
      tag: "B.1",
      name: { es: "Suma y Resta", en: "Addition and Subtraction" },
      length: 1.7,
      description: {
        es: "Las operaciones fundamentales para combinar y comparar cantidades.",
        en: "The fundamental operations for combining and comparing quantities.",
      },
      wikipediaTitle: { es: "Adición", en: "Addition" },
      // sin children -> este es una hoja, no abre nada al hacer clic
    },
    {
      id: "mult-div",
      tag: "B.2",
      name: { es: "Multiplicación y División", en: "Multiplication and Division" },
      length: 1.95,
      description: {
        es: "Escalar cantidades y repartirlas en partes iguales.",
        en: "Scaling quantities and splitting them into equal parts.",
      },
      wikipediaTitle: { es: "Multiplicación", en: "Multiplication" },
      children: [
        {
          id: "tablas-multiplicar",
          tag: "B.2.1",
          name: { es: "Tablas de Multiplicar", en: "Multiplication Tables" },
          length: 1.1,
          description: {
            es: "La memorización de productos básicos como base para el cálculo mental.",
            en: "Memorizing basic products as a foundation for mental math.",
          },
          wikipediaTitle: { es: "Tabla de multiplicar", en: "Multiplication table" },
        },
      ],
    },
  ],
},
  {
    id: "algebra",
    tag: "C",
    name: { es: "Algebra", en: "Algebra" },
    length: 4.24,
    description: {
      es: "El uso de símbolos y reglas para representar y resolver relaciones entre cantidades.",
      en: "The use of symbols and rules to represent and solve relationships between quantities.",
    },
    wikipediaTitle: { es: "Álgebra", en: "Algebra" },
  },
  {
    id: "analysis",
    tag: "D",
    name: { es: "Analysis", en: "Analysis" },
    length: 4.36,
    description: {
      es: "El estudio riguroso del cambio continuo: límites, derivadas, integrales y series.",
      en: "The rigorous study of continuous change: limits, derivatives, integrals, and series.",
    },
    wikipediaTitle: { es: "Análisis matemático", en: "Mathematical analysis" },
  },
  {
    id: "geometry",
    tag: "E",
    name: { es: "Geometry", en: "Geometry" },
    length: 4.0,
    description: {
      es: "El estudio de formas, tamaños, posiciones y las propiedades del espacio.",
      en: "The study of shapes, sizes, positions, and the properties of space.",
    },
    wikipediaTitle: { es: "Geometría", en: "Geometry" },
  },
  {
    id: "topology",
    tag: "F",
    name: { es: "Topology", en: "Topology" },
    length: 4.12,
    description: {
      es: "Las propiedades del espacio que se conservan bajo deformaciones continuas, sin cortes ni pegados.",
      en: "The properties of space that survive continuous deformation, without cutting or gluing.",
    },
    wikipediaTitle: { es: "Topología", en: "Topology" },
  },
  {
    id: "number-theory",
    tag: "G",
    name: { es: "Number Theory", en: "Number Theory" },
    length: 4.24,
    description: {
      es: "El estudio de los números enteros, la divisibilidad y los números primos.",
      en: "The study of integers, divisibility, and prime numbers.",
    },
    wikipediaTitle: { es: "Teoría de números", en: "Number theory" },
  },
  {
    id: "combinatorics",
    tag: "H",
    name: { es: "Combinatorics", en: "Combinatorics" },
    length: 4.36,
    description: {
      es: "El arte de contar, ordenar y combinar elementos de un conjunto.",
      en: "The art of counting, arranging, and combining elements of a set.",
    },
    wikipediaTitle: { es: "Combinatoria", en: "Combinatorics" },
  },
  {
    id: "probability",
    tag: "I",
    name: { es: "Probability", en: "Probability" },
    length: 4.0,
    description: {
      es: "El estudio matemático del azar y la incertidumbre.",
      en: "The mathematical study of chance and uncertainty.",
    },
    wikipediaTitle: { es: "Teoría de la probabilidad", en: "Probability theory" },
  },
  {
    id: "statistics",
    tag: "J",
    name: { es: "Statistics", en: "Statistics" },
    length: 4.12,
    description: {
      es: "La recolección, el análisis y la interpretación de datos.",
      en: "The collection, analysis, and interpretation of data.",
    },
    wikipediaTitle: { es: "Estadística", en: "Statistics" },
  },
  {
    id: "discrete-mathematics",
    tag: "K",
    name: { es: "Discrete Mathematics", en: "Discrete Mathematics" },
    length: 4.24,
    description: {
      es: "Estructuras matemáticas fundamentalmente discretas en lugar de continuas: grafos, lógica y más.",
      en: "Mathematical structures that are fundamentally discrete rather than continuous: graphs, logic, and more.",
    },
    wikipediaTitle: { es: "Matemática discreta", en: "Discrete mathematics" },
  },
  {
    id: "differential-equations",
    tag: "L",
    name: { es: "Differential Equations", en: "Differential Equations" },
    length: 4.36,
    description: {
      es: "Ecuaciones que relacionan una función con sus propias derivadas.",
      en: "Equations that relate a function to its own derivatives.",
    },
    wikipediaTitle: { es: "Ecuación diferencial", en: "Differential equation" },
  },
  {
    id: "numerical-mathematics",
    tag: "M",
    name: { es: "Numerical Mathematics", en: "Numerical Mathematics" },
    length: 4.0,
    description: {
      es: "Algoritmos para aproximar soluciones a problemas matemáticos continuos.",
      en: "Algorithms for approximating solutions to continuous mathematical problems.",
    },
    wikipediaTitle: { es: "Análisis numérico", en: "Numerical analysis" },
  },
  {
    id: "optimization-operations-research",
    tag: "N",
    name: { es: "Optimization / Operations Research", en: "Optimization / Operations Research" },
    length: 4.12,
    description: {
      es: "Encontrar la mejor solución posible entre muchas alternativas, sujeta a restricciones.",
      en: "Finding the best possible solution among many alternatives, subject to constraints.",
    },
    wikipediaTitle: { es: "Investigación de operaciones", en: "Operations research" },
  },
  {
    id: "applied-mathematics",
    tag: "O",
    name: { es: "Applied Mathematics", en: "Applied Mathematics" },
    length: 4.24,
    description: {
      es: "El uso de métodos matemáticos en la ciencia, la ingeniería y la industria.",
      en: "The use of mathematical methods in science, engineering, and industry.",
    },
    wikipediaTitle: { es: "Matemática aplicada", en: "Applied mathematics" },
  },
];
