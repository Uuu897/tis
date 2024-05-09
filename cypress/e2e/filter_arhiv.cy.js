describe('Cypress Test',() => {
    it ('None-existent login test',() => {
        cy.fixture('Test').then(data => {
        cy.log('Переxод на страницу автозации')
        cy.visit(data.login_url)

        cy.log('Ввод существующего логина')
        cy.get('input[class="form-input--text form-input"]')
            .type(data.login)

        cy.log('Ввод существующего пароля')
        cy.get('input[class="form-input--password form-input"]')
            .type(data.password)

        cy.log('Клик по кнопке "Войти')
        cy.get('div[class="login-form__button"] button[type="submit"]')
            .click()
        cy.wait(1500)

        cy.log('Клик по кнопке "Потребности"')
        cy.get(':nth-child(1) > .header__nav > [href="/needs"] > .header__label')
            .click()

        cy.log('Ввод в поле поиска')
        cy.get('input[class="form-input--text form-input search-input__field"]')
            .type(data.search)
        cy.get('div.search-input__field > .button')
            .click()

        cy.log('Клик по кнопке выбора(радио)')
        cy.get('.radio-list > :nth-child(1)')
            .click()
        cy.log('Клик по кнопке выбора')
        cy.get('.form-select__selected')
            .click()
        cy.get('.form-select__items > :nth-child(2)')
            .click()
    })
  })

it("Позитивный тест вакансии (В архив)", () => {
    cy.fixture('Test').then(data => {
      cy.log('Переxод на страницу авторизации')
      cy.visit(data.login_url)
      cy.log('Ввод существующего логина')
      cy.get('input[class="form-input--text form-input"]')
        .type(data.login_Employer)
      cy.log('Ввод существующего пароля')
      cy.get('input[class="form-input--password form-input"]')
        .type(data.password)
      cy.log('Клик по кнопке Войти')
      cy.get('div[class="login-form__button"] button[type="submit"]').click()
      cy.wait(1500)

      cy.log('Заходим в раздел Вакансии')
      cy.get(':nth-child(7) > .menu-item__item-name').click()

      cy.log('Клик по кнопке "В архив"')
      cy.get('.vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-red').click()

      cy.log('Клик по кнопке "Добавить в архив"')
      cy.get('.desktop-modal__button-wrapper > .button__background-color-red').click()
    })
  })
})