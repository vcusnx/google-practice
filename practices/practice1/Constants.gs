<<<<<<< HEAD:practices/practice1/Constants.gs
/**
 * Для создания этой таблицы использовался сервис OpenWeatherMap (https://openweathermap.org)
 *
 * В таблице представлена погода в Краснодаре на сегодняшний день.
 * 
 * Первым делом идут запросы на сервер, затем обработка ответов.
 */

let WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=39.030873&lon=45.015701&appid=72175e87904cc005f81599496f321516';
let WEATHER = UrlFetchApp.fetch(WEATHER_URL);

const SECTIONS = [['СЕГОДНЯ']];
const DESCRIPTION = [['Температура'], ['Ощущается как'], ['Явления']]
=======
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
>>>>>>> 931ec5d277e5ff2d23316a38c690c835bab7969a:google sheets/practice1/Constants.gs
