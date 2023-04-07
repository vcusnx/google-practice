/**
 * Заполняет форму
 */
function fillForm() {

  // Создает поля с единственным вариантом выбора
  for (var i = 0; i < ONE.length; i++) {
    form.addMultipleChoiceItem()
      .setTitle(QUESTIONS_ONE_ANSWER[[i]])
      .setChoiceValues(ONE[i])
      .setRequired(true);
  }

  // Создает поля с множественными варинтами выбора
  form.addCheckboxItem()
    .setTitle(QUESTION_MULTIPLE_ANSWERS)
    .setChoiceValues(LANGUAGES)
    .setRequired(true);

  // Создает поля с текстовыми полями
  for (var i = 0; i < QUESTIONS_WRITING.length; i++) {
    form.addTextItem()
      .setTitle(QUESTIONS_WRITING[[i]])
      .setRequired(true);
  }
}
