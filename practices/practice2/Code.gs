function onOpen() {
  DocumentApp.getUi()
    .createMenu('This Document')
    .addItem('Copy Document', 'copyDocument')
    .addItem('Save as PDF', 'saveAsPdf')
    .addItem('Send via e-mail', 'sendViaMail')
    .addItem('Fill Placeholders', 'fillPlaceholders')
    .addToUi();
}
  
/**
 * Заполняет плейсхолдеры
 * 
 * Сперва получается доступ к таблице через URL
 * 
 * Затем получаем доступ к конкретному Документу и его содержанию
 * 
 * Получаем данные из определенной области, затем заменяем плейсхолдеры
 * 
  */
function fillPlaceholders() {

  // Доступ к таблице
  const sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/');
  
  // Доступ к документу
  let document = DocumentApp.getActiveDocument().getBody();
  
  // Значния из выделенной области
  const data = sheet.getRange('A1:B4').getValues();

  // Замена плейсхолдеров
  document.replaceText('{template}', 'шаблонный');
  document.replaceText('{weather}', sheet.getName());

  document.replaceText('{today}', data[0][0]);
  document.replaceText('{temp}', data[1][1]);
  document.replaceText('{feelsLike}', data[2][1]);
  document.replaceText('{main}', data[3][1]);
}
