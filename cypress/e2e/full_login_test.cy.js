describe('Проверка авторизации', function () {

        beforeEach('Начало теста', function () {
        cy.visit('https://login.qa.studio/');//Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
           });

        afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');//Крестик окна видно пользователю
        cy.get('#exitMessageButton > .exitIcon').click();//Нажать крестик
        });

     it('Верный логин и пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru');//Найти поле логин и ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1');//Найти поле пароль и ввести правильный пароль
        cy.get('#loginButton').click();//Найти кнопку Войти и нажать
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю, что авторизация прошла успешно
        cy.get('#messageHeader').should('be.visible');//Надпись видно пользователю
     })
       
     it('Верный логин и неверный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru');//Найти поле логин и ввести правильный логин
        cy.get('#pass').type('iLoveqafffio1');//Найти поле пароль и ввести НЕправильный пароль
        cy.get('#loginButton').click();//Найти кнопку Войти и нажать
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Содержит сообщение "Такого логина или пароля нет"
        cy.get('#messageHeader').should('be.visible');//Надпись видно пользователю
     })

     it('Неверный логин и верный пароль', function () {
        cy.get('#mail').type('germn@dolnikov.ru');//Найти поле логин и ввести НЕПРАВИЛЬНЫЙ логин
        cy.get('#pass').type('iLoveqastudio1');//Найти поле пароль и ввести правильный пароль
        cy.get('#loginButton').click();//Найти кнопку Войти и нажать
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//Содержит сообщение "Такого логина или пароля нет"
        cy.get('#messageHeader').should('be.visible');//Надпись видно пользователю
     })
        
     it('Невалидный логин и верный пароль', function () {
        cy.get('#mail').type('germandolnikov.ru');//Найти поле логин и ввести НЕВАЛИДНЫЙ логин
        cy.get('#pass').type('iLoveqastudio1');//Найти поле пароль и ввести правильный пароль
        cy.get('#loginButton').click();//Найти кнопку Войти и нажать
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//Содержит сообщение "Нужно исправить проблему валидации"
        cy.get('#messageHeader').should('be.visible');//Надпись видно пользователю
     })

     it('Верный логин c заглавными буквами и верный пароль', function () {
        cy.get('#mail').type('gErmaN@dolnIkoV.ru');//Найти поле логин и ввести правильный логин, содержащий заглавные и строчные буквы
        cy.get('#pass').type('iLoveqastudio1');//Найти поле пароль и ввести правильный пароль
        cy.get('#loginButton').click();//Найти кнопку Войти и нажать
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверяю, что авторизация прошла успешно
        })


    it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click();//Нажать на кнопку "Забыли пароль"
        cy.get('#mailForgot').type('Fyrsh@ya.ru');//Ввести логин
        cy.get('#restoreEmailButton').contains('Отправить код');//Кнопка называется "Отправить код"
        cy.get('#restoreEmailButton').click();//Нажать на кнопку
        cy.get('#message').contains('Успешно отправили пароль на e-mail');//Сообщение содержит текст "Успешно отправили пароль на e-mail"
        
    })
})

// npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome