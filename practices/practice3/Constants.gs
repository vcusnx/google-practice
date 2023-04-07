// Доступ к текущей форме
let form = FormApp.getActiveForm();

/**
 * Секция с вопросами
 * 
 * Первая переменная - создает поле с множественным выбором
 * Вторая переменная - создает поля с единственным вариантом
 * Третья переменная - создает поля с текстом
 */
const QUESTION_MULTIPLE_ANSWERS = 'Какими языками программирования Вы владеете?';
const QUESTIONS_ONE_ANSWER = ['Какой у Вас уровень английского?', 'На какую позицию хотите к нам поступить?'];
const QUESTIONS_WRITING = ['С какими технологиями работали?', 'Сколько Вам лет?'];

// Вопрос с выбором уровня английского
const ENGLISH_LEVEL = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'Native'];

// Вопрос с выбором позиции
const POSITIONS = [
  'Backend Software Engineer (C, C++, Rust, Java, Kotlin, PostgreSQL)',
  'Frontend Software Engineer (JavaScript, TypeScript)',
  'Desktop Developer (C, C++, C#, Java, Kotlin)',
  'Android Native Developer (Java, Kotlin)',
  'IOS Native Developer (Swift)',
  'Security Engineer'
];

// Вопрос с выбором языков программирования
const LANGUAGES = [
  'C',
  'C#',
  'C++',
  'SQL',
  'Rust',
  'Java',
  'Kotlin',
  'JavaScript / TypeScript'
];

// Массивы с единиственным вариантом выбора
const ONE = [ENGLISH_LEVEL, POSITIONS];
