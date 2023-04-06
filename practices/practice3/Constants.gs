// Доступ к текущей форме
let form = FormApp.getActiveForm();

// Вопрос с множеством ответов
const QUESTION_MULTIPLE_ANSWERS = 'Какими языками программирования Вы владеете?';

// Вопрос с единственным ответом
const QUESTIONS_ONE_ANSWER = ['Какой у Вас уровеь английского?', 'На какую позицию хотите к нам поступить?'];

// Вопросы на которые нужно писать ответ
const QUESTIONS_WRITING = ['С какими технологиями работали?', 'Сколько Вам лет?'];

// Для вопроса про языки
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

// Для вопроса про уровень английского
const ENGLISH_LEVEL = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'Native'];

// Для вопроса с выбором позиции
const POSITIONS = [
  'Backend | Server Software Engineer (C++, Java, Kotlin, PostgreSQL)',
  'Frontend Software Engineer (JavaScript, TypeScript)',
  'Desktop Developer (C++, Java, Kotlin)',
  'Android Native Developer (Java, Kotlin)',
  'IOS Native Developer (Swift)',
  'Security Engineer'
]

const ONE = [ENGLISH_LEVEL, POSITIONS];
