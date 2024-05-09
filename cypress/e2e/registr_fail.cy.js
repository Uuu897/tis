describe('Register Test', () => {
    it('Registration fail test', () => {
        cy.fixture('Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.login_fail_register)
            cy.log('Ввод email')
            cy.get('.form-input--email')
                .type(data.email_fail_register)
            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
                .type(data.password_register)
            cy.log('Ввод пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
                .type(data.password_again_register)
                .wait(3000);
            cy.log('Клик по кнопке "Войти"');
            cy.get(':nth-child(4) > .button').click({ force: true });

            cy.log('Ввод фамилии')
            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
                .type(data.surname_fail_register)
            cy.log('Ввод имени')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
                .type(data.name_register)
            cy.log('Ввод отчества')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text')
                .type(data.patronymic_register)
        })
    })
})