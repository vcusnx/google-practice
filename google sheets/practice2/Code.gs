DocumentApp.getUi()
  .createMenu('Этот документ')
  .addItem('Копировать документ', 'copyDocument')
  .addSeparator()
  .addItem('Сохранить как PDF', 'saveAsPdf')
  .addItem('Отправить по почте', 'sendViaMail')
  .addItem('Заполнить плейсхолдеры', 'fillPlaceholders')
  .addToUi();

function fillPlaceholders() {
  let sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1FXe-R-Vt5ipY6ES3sGS5kXCzWWb5i-P8QaEGBTqwle4/');
  let document = DocumentApp.getActiveDocument().getBody();

  let data = sheet.getRange('A1:B4').getValues();

  Logger.log(data);

  document.replaceText('{template}', 'шаблонный');
  document.replaceText('{weather}', sheet.getName());

  document.replaceText('{today}', data[0][0]);
  document.replaceText('{temp}', data[1][1]);
  document.replaceText('{feelsLike}', data[2][1]);
  document.replaceText('{main}', data[3][1]);
}