<<<<<<< HEAD:practices/practice1/Code.gs
/**
 * Кастомное меню в таблице
 * 
 * Актуализирует данные на текущий момент
 */
SpreadsheetApp.getUi()
  .createMenu('Weather')
  .addItem('(⊙_⊙)？Update', 'fillSheet')
  .addToUi();

/**
 * Обработка данных с сервера
 * 
 * Переводит полученную температуру из Кельвина в Цельсий
 * 
 * Также с помощью Google Translate переводит описание на русский
 * 
 * Возвращает массив для заполнения таблицы
 */
function getData() {
  let todayTemp = getJSON(WEATHER).main.temp - 273.15; // Конвертация в градусы
  let feelsLike = getJSON(WEATHER).main.feels_like - 273.15;
  let weatherDesc = getJSON(WEATHER).weather[0]['description'];

  return [[todayTemp], [feelsLike], [LanguageApp.translate(weatherDesc, 'en', 'ru')]];
}

/**
 * Заполнение таблицы
 * 
 * Первичное заполнение - заголовки
 * 
 * Вторичное заполнение - контент в соответствии с названием таблицы
 */
function fillSheet() {
  // Получение доступа к текущей таблице
  let spreadsheet = SpreadsheetApp.getActiveSheet();

  // Первичное заполнение
  // Заполнение и форматирование заголовков
  spreadsheet.getRange('A1:A1')
    .setValue(SECTIONS[0][0])
    .setBackground('#d9ead3')
    .setFontSize(16)
    .setHorizontalAlignment('center')
    .setFontFamily('roboto');

  spreadsheet.getRange('A2:A4')
    .setValues(DESCRIPTION)
    .setBackground('#ffcccc')
    .setFontSize(16)
    .setHorizontalAlignment('center')
    .setFontFamily('roboto')

  // Вторичное заполнение
  // Заполнение информации
  spreadsheet.getRange('B2:B4')
    .setValues(getData())
    .setBackground('#fff2cc')
    .setFontSize(14)
    .setHorizontalAlignment('center')
    .setFontFamily('roboto')
}
=======
/**
 * Кастомное меню в таблице
 * 
 * Актуализирует данные на текущий момент
 */
SpreadsheetApp.getUi()
  .createMenu('Weather')
  .addItem('Update', 'fillSheet')
  .addToUi();

/**
 * Обработка данных с сервера
 * 
 * Переводит полученную температуру из Кельвина в Цельсий
 * 
 * Также с помощью Google Translate переводит описание на русский
 * 
 * Возвращает массив для заполнения таблицы
 */
function getData() {
  let todayTemp = getJSON(WEATHER).main.temp - 273.15;
  let feelsLike = getJSON(WEATHER).main.feels_like - 273.15;
  let weatherDesc = getJSON(WEATHER).weather[0]['description'];

  return [[todayTemp], [feelsLike], [LanguageApp.translate(weatherDesc, 'en', 'ru')]];
}

/**
 * Заполнение таблицы
 * 
 * Первичное заполнение - заголовки
 * 
 * Вторичное заполнение - контент в соответствии с названием таблицы
 */
function fillSheet() {
  
  // Получение доступа к текущей таблице
  let spreadsheet = SpreadsheetApp.getActiveSheet();

  // Первичное заполнение
  // Заполнение и форматирование заголовков
  spreadsheet.getRange('A1:A1')
    .setValue(SECTIONS[0][0])
    .setBackground('#d9ead3')
    .setFontSize(16)
    .setHorizontalAlignment('center')
    .setFontFamily('roboto');

  spreadsheet.getRange('A2:A4')
    .setValues(DESCRIPTION)
    .setBackground('#ffcccc')
    .setFontSize(16)
    .setHorizontalAlignment('center')
    .setFontFamily('roboto')

  // Вторичное заполнение
  // Заполнение информации
  spreadsheet.getRange('B2:B4')
    .setValues(getData())
    .setBackground('#fff2cc')
    .setFontSize(14)
    .setHorizontalAlignment('center')
    .setFontFamily('roboto')
}
>>>>>>> 931ec5d277e5ff2d23316a38c690c835bab7969a:google sheets/practice1/Code.gs
