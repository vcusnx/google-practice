<<<<<<< HEAD:practices/practice1/Json.gs
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
=======
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
>>>>>>> 931ec5d277e5ff2d23316a38c690c835bab7969a:google sheets/practice1/Json.gs
