/**
 * Сохраняет документ в формате PDF
 */
function saveAsPdf() {

  // Получем ID и имя текущего документа
  const documentId = DocumentApp.getActiveDocument().getId();
  const documentName = DocumentApp.getActiveDocument().getName();

  // Сохраняем файл в формате PDF
  let document = DriveApp.getFileById(documentId).getBlob();

  // Создаем копию документа и перемещаем в папку Copies
  DriveApp.createFile(document).setName(documentName).moveTo(DriveApp.getFoldersByName('Copies').next());
}
