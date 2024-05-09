describe('Cypress Test', () => {
    it('None-existent login test', () => {
        cy.fixture('Test').then(data => {
            cy.log('Переxод на страницу авторизации')
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
        })
    })
})