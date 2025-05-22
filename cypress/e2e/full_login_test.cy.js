import * as data from "../helpers/default_data.json"

import * as main_page from "../locators/main_page.json"

import * as result_page from "../locators/result_page.json"

import * as recovery_page from "../locators/recovery_password_page.json"
describe('Проверка авторизации', function () {

        beforeEach('Начало теста', function () {
        cy.visit('/');//Зашли на сайт
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
           });

        afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible');//Крестик окна видно пользователю
        cy.get(result_page.close).click();//Нажать крестик
        });

     it('Верный логин и пароль', function () {
        cy.get(main_page.email).type('german@dolnikov.ru');//Найти поле логин и ввести правильный логин
        cy.get(main_page.password).type('iLoveqastudio1');//Найти поле пароль и ввести правильный пароль
        cy.get(main_page.login_button).click();//Найти кнопку Войти и нажать
        cy.get(result_page.title).contains('Авторизация прошла успешно');//Проверяю, что авторизация прошла успешно
        cy.get(result_page.title).should('be.visible');//Надпись видно пользователю
     })
       
     it('Верный логин и неверный пароль', function () {
        cy.get(main_page.email).type('german@dolnikov.ru');//Найти поле логин и ввести правильный логин
        cy.get(main_page.password).type('iLoveqafffio1');//Найти поле пароль и ввести НЕправильный пароль
        cy.get(main_page.login_button).click();//Найти кнопку Войти и нажать
        cy.get(result_page.title).contains('Такого логина или пароля нет');//Содержит сообщение "Такого логина или пароля нет"
        cy.get(result_page.title).should('be.visible');//Надпись видно пользователю
     })

     it('Неверный логин и верный пароль', function () {
        cy.get(main_page.email).type('germn@dolnikov.ru');//Найти поле логин и ввести НЕПРАВИЛЬНЫЙ логин
        cy.get(main_page.password).type('iLoveqastudio1');//Найти поле пароль и ввести правильный пароль
        cy.get(main_page.login_button).click();//Найти кнопку Войти и нажать
        cy.get(result_page.title).contains('Такого логина или пароля нет');//Содержит сообщение "Такого логина или пароля нет"
        cy.get(result_page.title).should('be.visible');//Надпись видно пользователю
     })
        
     it('Невалидный логин и верный пароль', function () {
        cy.get(main_page.email).type('germandolnikov.ru');//Найти поле логин и ввести НЕВАЛИДНЫЙ логин
        cy.get(main_page.password).type('iLoveqastudio1');//Найти поле пароль и ввести правильный пароль
        cy.get(main_page.login_button).click();//Найти кнопку Войти и нажать
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');//Содержит сообщение "Нужно исправить проблему валидации"
        cy.get(result_page.title).should('be.visible');//Надпись видно пользователю
     })

     it('Верный логин c заглавными буквами и верный пароль', function () {
        cy.get(main_page.email).type('gErmaN@dolnIkoV.ru');//Найти поле логин и ввести правильный логин, содержащий заглавные и строчные буквы
        cy.get(main_page.password).type('iLoveqastudio1');//Найти поле пароль и ввести правильный пароль
        cy.get(main_page.login_button).click();//Найти кнопку Войти и нажать
        cy.get(result_page.title).contains('Авторизация прошла успешно');//Проверяю, что авторизация прошла успешно
        })


    it('Восстановление пароля', function () {
        cy.get(recovery_page.fogot_pswrd).click();//Нажать на кнопку "Забыли пароль"
        cy.get(recovery_page.email).type('Fyrsh@ya.ru');//Ввести логин
        cy.get(recovery_page.send_button).contains('Отправить код');//Кнопка называется "Отправить код"
        cy.get(recovery_page.send_button).click();//Нажать на кнопку
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');//Сообщение содержит текст "Успешно отправили пароль на e-mail"
        
    })
})
// npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome