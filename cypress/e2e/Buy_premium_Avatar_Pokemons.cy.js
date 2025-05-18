describe('Покупка аватара', function () {
    it('Авторизаиця', function () {
        cy.visit('https://pokemonbattle.ru//');//Войти на сайт

        cy.get('#k_email').type('LOGIN');//Ввести логин
        cy.get('#k_password').type('PASSWORD');//Ввести пароль
        cy.get('.MuiButton-root').click();//Нажать кнопку "Войти"
        cy.get('.header_card_trainer').click();//Перейти в ЛК
        cy.get('.k_mobile > :nth-child(5)').click();//Нажать на кнопку "Купить аватар"
        cy.get('.available > button').contains('button', 'Купить').click();//Выбрать доступный аватар
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4627100101654724');//Ввести номер карты
        cy.get(':nth-child(1) > .style_1_base_input').type('1234');//Ввести срок действия карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');//Ввести код карты
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Name Surname');//Ввод Имени и Фамилии
        cy.wait(1000);//Ожидаем заполнения полей и проверку валидации
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();//Нажать кнопку "Оплатить"
        cy.get('.style_1_base_input').type('56456');//Ввести код из смс
        cy.wait(1000);
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();//Нажать кнопку "Оплатить"
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно').should('be.visible');//Содержит текст об успешной покупке
    })
})

//https://pokemonbattle.ru/
//4627100101654724	- номер карты
// 2034/12 - дата карты
// Name Surname - Имя Фамилия
// 125- разрешена оплата
//300 - не разрешена
//смс 56456