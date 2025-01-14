describe('template vacancies', () => {
  it("Позитивный тест вакансии (Добавление вакансии)", () => {
    cy.fixture('Test').then(data => {
      cy.log('Переход на страницу')
      cy.visit(data.login_url)

      cy.log('Ввод логина')
      cy.get('.form-input--text')
        .type(data.login_Employer)

      cy.log('Ввод пароля')
      cy.get('.form-input--password')
        .type(data.password)

      cy.log('Клик по кнопке "Войти"')
      cy.get(':nth-child(3) > .button').click()
      cy.wait(2000)

      cy.log('Заходим в раздел Вакансии')
      cy.get(':nth-child(7) > .menu-item__item-name').click()
      cy.log('Кликаем на создание вакансии')
      cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button').click()
      cy.log('Прописываем должность')
      cy.get(".vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--")
        .type(data.positions, { force: true })
      cy.log('Прописываем зарплату')
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > .radio-component__label').click()
      cy.log('Прописываем тип занятости работы')
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected').click()
      cy.get('.form-select__items > :nth-child(1)').click()
      cy.log('Прописываем график работы')
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(2)').click()
      cy.log('Прописываем требования')
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
        .type(data.requirements_vacancy)
      cy.log('Прописываем обязанности')
      cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
        .type(data.responsibilities_vacancy)
      cy.log('Кликаем на кнопку создания вакансии')
      cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button').click({ force: true })
    })
  })
})