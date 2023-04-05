/**
 * Отправляет сообщение с текущего адреса пользователя
 * Тому, кто указан в методе sendMail()
 */
function sendViaMail() {
  // Получаем только что сохраненный PDF
  let document = DriveApp.getFoldersByName('Copies').next().getFilesByName('Шаблонный Документ PDF').next().getBlob();

  // Отправка по почте
  MailApp.sendEmail('sqr3m@yandex.ru', 'Copy of Document', document.getAs('application/pdf').setContentType('application/pdf'));
}
