/**
 * Функция получения данных из JSON.
 * 
 * @param json Получает данные из указанного JSON файла / URL с JSON файлом
 */

function getJSON(json) {
  if (json != null) {
    return JSON.parse(json);
  } else {
    return 'Не указан JSON файл / Адрес на JSON';
  }
}
