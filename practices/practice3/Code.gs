function onOpen() {
  
  // Кастомное меню с кнопкой для заполнения формы
  FormApp.getUi()
  .createMenu('FORM')
  .addItem('Заполнить форму', 'fillForm')
  .addToUi();
}
