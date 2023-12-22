describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://ссылка'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('валидный имеил'); //ввели верный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('верный пароль'); //ввели верный пароль ((в переменной))
        cy.get('#loginButton').should('be.enabled'); //кнопка войти активна
        cy.get('#loginButton').click(); //клик по кнопке войти
        cy.get('#messageHeader').should('be.visible'); //видим "Авторизация прошла успешно"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
        cy.get('#exitMessageButton > .exitIcon').click(); //клик по крестику
       })

    it('Верный логин, верный пароль', function () {
        cy.visit('https://ссылка'); //захожу на сайт
        cy.get('#forgotEmailButton').click(); //Нажать «Забыли пароль»
        cy.get('#mailForgot').type('Kahl1611@yandex.ru'); //Ввести любой имейл
        cy.get('#restoreEmailButton').click(); //кликнуть "отправить код"
        cy.get('#messageHeader').should('be.visible'); //видим "Успешно отправили пароль на e-mail"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
        cy.get('#exitMessageButton > .exitIcon').click(); //клик по крестику
        })

    it('Верный логин, не верный пароль', function () {
        cy.visit('https://ссылка'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('Spirev.Aleksandr@mail.ru'); //ввели верный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('верный пароль'); //ввели верный пароль ((в переменной))
        cy.get('#loginButton').should('be.enabled'); //кнопка войти активна
        cy.get('#loginButton').click(); //клик по кнопке войти
        cy.get('#messageHeader').should('be.visible'); //видим "Такого логина или пароля нет"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
        cy.get('#exitMessageButton > .exitIcon').click(); //клик по крестику
       })

    it('Не верный логин, верный пароль', function () {
        cy.visit('https://ссылка'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('Kahl1611@gmail.com'); //ввели не верный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('верный пароль'); //ввели верный пароль ((в переменной))
        cy.get('#loginButton').should('be.enabled'); //кнопка войти активна
        cy.get('#loginButton').click(); //клик по кнопке войти
        cy.get('#messageHeader').should('be.visible'); //видим "Такого логина или пароля нет"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
        cy.get('#exitMessageButton > .exitIcon').click(); //клик по крестику
       })

    it('Логин без @, верный пароль', function () {
        cy.visit('https://Ссылка'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('Spirev.Aleksandr.ru'); //ввели логин без @
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('верный пароль'); //ввели верный пароль ((в переменной))
        cy.get('#loginButton').should('be.enabled'); //кнопка войти активна
        cy.get('#loginButton').click(); //клик по кнопке войти
        cy.get('#messageHeader').should('be.visible'); //видим "Нужно исправить проблему валидации"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
        cy.get('#exitMessageButton > .exitIcon').click(); //клик по крестику
       })

    it('Приведение к строчным буквам в логине, верный пароль', function () {
        cy.visit('https://Ссылка'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('Spirev@Aleksandr.ru'); //ввели логин с использованием разных регистров
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('верный пароль'); //ввели верный пароль ((в переменной))
        cy.get('#loginButton').should('be.enabled'); //кнопка войти активна
        cy.get('#loginButton').click(); //клик по кнопке войти
        cy.get('#messageHeader').should('be.visible'); //видим "Такого логина или пароля нет"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
        cy.get('#exitMessageButton > .exitIcon').click(); //клик по крестику
       })
})


describe('Покупка XXXX', function () {
   it('e2e тест на покупку XXXX', function () {
        cy.visit('https://сайт');
        cy.get(':nth-child(1) > .auth__input').type('Spirev.Aleksandr@mail.ru'); 
        cy.get('#password').type('верный пароль'); 
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('###############');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('####');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('###');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Aleksandr Spirev');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('Номер карты');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })
})
