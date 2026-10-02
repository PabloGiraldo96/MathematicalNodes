import type { CoreNodeData, TreeNode } from "../types";

export const CORE_NODE: CoreNodeData = {
  name: { es: "MATHEMATICA", en: "MATHEMATICS" },
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
    name: { es: "Fundaciones", en: "Foundations" },
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
  name: { es: "Aritmetica", en: "Arithmetic" },
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
      name: { es: "Multiplicación, División", en: "Multiplication and Division" },
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
    children: [
      {
          id: "ecuaciones-lineales",
          tag: "C.1",
          name: { es: "Ecuaciones Lineales", en: "Linear equation" },
          length: 1.6,
          description: {
            es: "Relaciones de primer grado y los métodos para despejar la incógnita.",
            en: "First grade polinomial equations",
          },
          wikipediaTitle: { es: "Ecuaciones Lineales", en: "Linear equation" },
        },
      {
          id: "ecuaciones-cuadraticas",
          tag: "C.2",
          name: { es: "Ecuaciones Cuadráticas", en: "Quadratic equation" },
          length: 1.3,
          description: {
            es: "Relaciones de segundo grado, su fórmula general y sus raíces.",
            en: "The quadratic equation contains only powers of X that are non-negative integers, and therefore it is a polynomial equation.",
          },
          wikipediaTitle: { es: "Ecuación de segundo grado", en: "Quadratic equation" },
        },
              {
          id: "sistemas-ecuaciones",
          tag: "C.3",
          name: { es: "Ecuaciones Lineales", en: "Linear equation" },
          length: 1.6,
          description: {
            es: "Conjuntos de ecuaciones que se resuelven de forma simultánea.",
            en: "Sets of equations resolved through different methods and techniques",
          },
          wikipediaTitle: { es: "Sistema de ecuaciones lineales", en: "Equation systems" },
        },
    ],

  },
  {
    id: "analysis",
    tag: "D",
    name: { es: "Analisis", en: "Analysis" },
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
    name: { es: "Geometría", en: "Geometry" },
    length: 4.0,
    description: {
      es: "El estudio de formas, tamaños, posiciones y las propiedades del espacio.",
      en: "The study of shapes, sizes, positions, and the properties of space.",
    },
    wikipediaTitle: { es: "Geometría", en: "Geometry" },
    children: [
            {
          id: "figuras-planas",
          tag: "E.1",
          name: { es: "Figuras Planas", en: "Plane Geometry" },
          length: 1.6,
          description: {
            es: "Formas en dos dimensiones: triángulos, círculos, polígonos y sus propiedades.",
            en: "Shapes and geometric objects formed by circles, triangles and poligons.",
          },
          wikipediaTitle: { es: "Geometría plana", en: "Plane Geometry" },
        },
      {
          id: "solidos",
          tag: "E.2",
          name: { es: "Sólidos", en: "Solids" },
          length: 1.3,
          description: {
            es: "Formas en tres dimensiones y el cálculo de su volumen y superficie.",
            en: "Geometric 3D objects and its surface and area calculations.",
          },
          wikipediaTitle: { es: "Geometría del espacio", en: "Solid geometry" },
        },
              {
          id: "transformaciones",
          tag: "E.3",
          name: { es: "Transformaciones", en: "Transformations" },
          length: 1.6,
          description: {
            es: "Traslaciones, rotaciones, reflexiones y escalamientos de figuras.",
            en: "Traslations, rotations and re shapeness of geometric figures",
          },
          wikipediaTitle: { es: "Transformación geométrica", en: "Geometric transformation" },
          children:[
          {
          id: "traslaciones",
          tag: "E.3.1",
          name: { es: "Traslaciones", en: "Translations" },
          length: 1.4,
          description: {
            es: "Las traslaciones pueden entenderse como movimientos directos sin cambios de orientación, es decir, mantienen la forma y tamaño de las figuras u objetos trasladados a las cuales deslizan según un vector. Una traslación desplaza cada punto de una figura la misma cantidad en una misma dirección.",
            en: "A translation is a geometric transformation that moves every point of a figure, shape or space by the same distance in a given direction. A translation can also be interpreted as the addition of a constant vector to every point, or as shifting the origin of the coordinate system. In a Euclidean space, any translation is an isometry.",
          },
          wikipediaTitle: { es: "Traslaciones", en: "Translations" },
            }, 
            {
          id: "rotaciones",
          tag: "E.3.2",
          name: { es: "Rotaciones", en: "Rotations" },
          length: 1.4,
          description: {
            es: "En matemáticas las rotaciones son transformaciones lineales que conservan las normas (es decir, son isométricas) en espacios vectoriales en los que se ha definido una operación de producto interno y cuya matriz tiene la propiedad de ser ortogonal y de determinante igual a ±1.",
            en: "Mathematically, a rotation is a rigid body movement which, unlike a translation, keeps at least one point fixed. This definition applies to rotations in two dimensions (in a plane), in which exactly one point is kept fixed; and also in three dimensions (in space), in which additional points may be kept fixed (as in rotation around a fixed axis, as infinite line).",
          },
          wikipediaTitle: { es: "Rotación en matemáticas", en: "Rotations" },
            },       
          ]
        },
        {
          id: "trigonometria",
          tag: "E.4",
          name: { es: "Trigonometría", en: "Trigonometry" },
          length: 1.8,
          description: {
            es: "Relaciones entre las razones Seno, Coseno y Tangente de un triángulo rectangulo.",
            en: "Sine, Cosine and its relation with a rectangle triangle.",
          },
          wikipediaTitle: { es: "Trigonometría", en: "Trigonometry" },
          children: [
            {
          id: "seno",
          tag: "E.4.1",
          name: { es: "Seno", en: "Sine" },
          length: 1.4,
          description: {
            es: "Se define como la razón entre el cateto opuesto a dicho ángulo y la hipotenusa.",
            en: "The sine and cosine of an acute angle are defined in the context of a right triangle: the sine of an acute angle of a right triangle is the ratio of the length of the side opposite that angle to the length of the longest side of the triangle, the hypotenuse;",
          },
          wikipediaTitle: { es: "Seno (trigonometría)", en: "Sine" },
            },            
                        {
          id: "coseno",
          tag: "E.4.1.2",
          name: { es: "Coseno", en: "Cosine" },
          length: 1.2,
          description: {
            es: "Se define como la razón entre el cateto opuesto a dicho ángulo y la hipotenusa.",
            en: "Once such a triangle is chosen, the sine of the angle is equal to the length of the opposite side divided by the length of the hypotenuse, and the cosine of the angle is equal to the length of the adjacent side divided by the length of the hypotenuse.",
          },
          wikipediaTitle: { es: "Coseno", en: "Cosine" },
            }, 
                        {
          id: "tangente",
          tag: "E.4.1.2",
          name: { es: "Tangente", en: "Tangent" },
          length: 1.5,
          description: {
            es: "Se define como la razón entre el cateto adyacente a dicho ángulo sobre la hipotenusa.",
            en: "In geometry, the tangent line (or simply tangent) to a plane curve at a given point is, intuitively, the straight line that just touches the curve at that point.",
          },
          wikipediaTitle: { es: "Tangente", en: "Tangent" },
            }, 
          ], 
        },
    ],
  },
  {
    id: "topology",
    tag: "F",
    name: { es: "Topología", en: "Topology" },
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
    name: { es: "Teoría de Números", en: "Number Theory" },
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
    name: { es: "Combinatoria", en: "Combinatorics" },
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
    name: { es: "Probabilidad", en: "Probability" },
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
    name: { es: "Estadística", en: "Statistics" },
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
    name: { es: "Matematicas Discretas", en: "Discrete Mathematics" },
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
    name: { es: "Ecuaciones Diferenciales", en: "Differential Equations" },
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
    name: { es: "Métodos Númericos", en: "Numerical Mathematics" },
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
    name: { es: "Optimización", en: "Optimization / Operations Research" },
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
    name: { es: "Matemáticas Aplicadas", en: "Applied Mathematics" },
    length: 4.24,
    description: {
      es: "El uso de métodos matemáticos en la ciencia, la ingeniería y la industria.",
      en: "The use of mathematical methods in science, engineering, and industry.",
    },
    wikipediaTitle: { es: "Matemática aplicada", en: "Applied mathematics" },
  },
      {
    id: "abstract-algebra",
    tag: "J",
    name: { es: "Algebra Abstracta", en: "Abstract Algebra" },
    length: 4.36,
    description: {
      es: "Es la parte de la matemática que estudia las estructuras algebraicas como las de grupo, anillo, cuerpo (a veces llamado campo), espacio vectorial, etcétera. Muchas de estas estructuras se definieron formalmente en el siglo XIX, y, de hecho, el estudio del álgebra abstracta fue motivado por la necesidad de más exactitud en las definiciones matemáticas.",
      en: "Abstract algebra or modern algebra is the study of algebraic structures, which are sets with specific operations acting on their elements.[1] Algebraic structures include groups, rings, fields, modules, vector spaces, lattices, and algebras over a field. The term abstract algebra was coined in the early 20th century to distinguish it from older parts of algebra, and more specifically from elementary algebra, the use of variables to represent numbers in computation and reasoning.",
    },
    wikipediaTitle: { es: "Álgebra abstracta", en: "Abstract algebra" },
    children:[
      {
          id: "anillos",
          tag: "J.1",
          name: { es: "Anillos", en: "Rings" },
          length: 1.5,
          description: {
            es: "Un anillo es un sistema algebraico formado por un conjunto y dos operaciones internas, llamadas usualmente «suma» y «producto», que cumplen ciertas propiedades.",
            en: "A ring is an algebraic structure consisting of a set with two binary operations typically called addition and multiplication and denoted like addition and multiplication of integers. They work similarly to integer addition and multiplication, except that multiplication in a ring does not need to be commutative.",
          },
          wikipediaTitle: { es: "Anillo (matemática)", en: "Ring (mathematics)" },
        },
      {
          id: "grupos",
          tag: "J.2",
          name: { es: "Grupos", en: "Groups" },
          length: 1.3,
          description: {
            es: "La teoría de grupos se ocupa, entre otros aspectos, de la clasificación de los grupos, el estudio de sus propiedades y de sus aplicaciones tanto dentro como fuera de las matemáticas.",
            en: "Groups recur throughout mathematics, and the methods of group theory have influenced many parts of algebra. Linear algebraic groups and Lie groups are two branches of group theory that have experienced advances and have become subject areas in their own right.",
          },
          wikipediaTitle: { es: "Teoría de grupos ", en: "Group theory" },
        },
          {
          id: "cuerpos",
          tag: "J.3",
          name: { es: "Cuerpos", en: "Groups" },
          length: 1.3,
          description: {
            es: "Es un sistema algebraico[1] en el cual las operaciones llamadas adición y multiplicación se pueden realizar y cumplen las propiedades: asociativa, conmutativa y distributiva de la multiplicación respecto de la adición,[2] además de la existencia de inverso aditivo, de inverso multiplicativo y de un elemento neutro para la adición y otro para la multiplicación,",
            en: "A field is a set on which addition, subtraction, multiplication, and division are defined and behave as the corresponding operations on rational numbers do. Fields are fundamental algebraic structures that are widely used in algebra, number theory, and many other areas of mathematics.",
          },
          wikipediaTitle: { es: "Cuerpo (matemáticas) ", en: "Field (mathematics)" },
        },
              {
          id: "espacios-vectoriales",
          tag: "J.4",
          name: { es: "Espacios Vectoriales", en: "Groups" },
          length: 1.3,
          description: {
            es: "Es una estructura algebraica creada a partir de un conjunto no vacío, una operación interna (llamada suma, definida para los elementos del conjunto) y una operación externa (llamada producto por un escalar, definida entre dicho conjunto y otro conjunto, con estructura de cuerpo) que satisface 8 propiedades fundamentales. A los elementos de un espacio vectorial se les llama vectores y a los elementos del cuerpo se les conoce como escalares.",
            en: "It is a set whose elements, often called vectors, can be added together and multiplied (scaled) by numbers called scalars. The operations of vector addition and scalar multiplication must satisfy certain requirements, called vector axioms. Real vector spaces and complex vector spaces are kinds of vector spaces based on different kinds of scalars: real numbers and complex numbers. Scalars can also be, more generally, elements of any field.",
          },
          wikipediaTitle: { es: "Espacio vectorial ", en: "Vector space" },
          children: [
              {
          id: "subespacios",
          tag: "J.4.1",
          name: { es: "Subespacio Vectorial", en: "Linear subspace" },
          length: 1.3,
          description: {
            es: "Es el subconjunto de un espacio vectorial, que satisface por sí mismo la definición de espacio vectorial con las mismas operaciones que V el espacio vectorial original.", 
            en: "A linear subspace or vector subspace[1][note 1] is a vector space that is a subset of some larger vector space. A linear subspace is usually simply called a subspace when the context serves to distinguish it from other types of subspaces..",
          },
          wikipediaTitle: { es: "Subespacio vectorial ", en: "Linear subspace" },
        },
          ],
        },
    ],
  },
];

