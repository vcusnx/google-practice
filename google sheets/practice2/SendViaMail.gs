/**
 * Отправляет сообщение с текущего адреса пользователя тому, 
 * кто указан в методе sendMail()
 */
function sendViaMail() {
  
  // Получем имя текущего документа
  const documentId = DocumentApp.getActiveDocument().getId();

  // Создание копии файла для отправки по почте
  let document = DriveApp.getFileById(documentId);

  // Отправка по почте
  MailApp.sendEmail('adress@mail.com', 'Copy of Document', document.getBlob())
}
