/**
 * Для создания этой таблицы использовался сервис OpenWeatherMap (https://openweathermap.org)
 *
 * В таблице представлена погода в Краснодаре на сегодняшний день.
 * 
 * Первым делом идут запросы на сервер, затем обработка ответов.
 */

let WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=lat&lon=lon&appid=apiKey';
let WEATHER = UrlFetchApp.fetch(WEATHER_URL);

const SECTIONS = [['СЕГОДНЯ']];
const DESCRIPTION = [['Температура'], ['Ощущается как'], ['Явления']]
