/**
 * Заполняет форму
 */
function fillForm() {

  // Создание полей с единственным выбором
  for (var i = 0; i < ONE.length; i++) {
    form.addMultipleChoiceItem()
      .setTitle(QUESTIONS_ONE_ANSWER[[i]])
      .setChoiceValues(ONE[i])
      .setRequired(true);
  }

  // Создание полей с множественным выбором
  form.addCheckboxItem()
    .setTitle(QUESTION_MULTIPLE_ANSWERS)
    .setChoiceValues(LANGUAGES)
    .setRequired(true);

  // Создание полей с вводом текста
  for (var i = 0; i < QUESTIONS_WRITING.length; i++) {
    form.addTextItem()
      .setTitle(QUESTIONS_WRITING[[i]])
      .setRequired(true);
  }
}
