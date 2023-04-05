/**
 * Копирует документ
 */
function copyDocument() {

  // Получем имя текущего документа
  let documentName = DocumentApp.getActiveDocument().getName();

  // Создание копии файла в папку Copies
  DriveApp.getFilesByName(documentName).next().makeCopy(documentName, DriveApp.getFoldersByName('Copies').next());
}
