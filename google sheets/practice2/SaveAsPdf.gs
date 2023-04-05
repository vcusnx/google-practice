/**
 * Сохраняет документ в формате PDF
 */
function saveAsPdf() {

  // Получем ID и имя текущего документа
  let documentId = DocumentApp.getActiveDocument().getId();
  let documentName = DocumentApp.getActiveDocument().getName();

  // Сохраняем файл в формате PDF
  let document = DriveApp.getFileById(documentId).getBlob();
  DriveApp.createFile(document).setName(`${documentName} PDF`).moveTo(DriveApp.getFoldersByName('Copies').next());
}
