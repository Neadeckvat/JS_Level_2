'use strict';

//Данные с сервера

const menu = {
    size: {
        id: 'size',
        name: 'Размер',
        small: {
            text: 'Маленький',
            price: 50,
            cal: 20
        },
        big: {
            text: 'Большой',
            price: 100,
            cal: 40
        }
    },
    filling: {
        id: 'filling',
        name: 'Начинка',
        cheese: {
            text: 'C сыром',
            price: 10,
            cal: 20
        },
        salad: {
            text: 'С салатом',
            price: 20,
            cal: 5
        },
        potatoes: {
            text: 'С картофелем',
            price: 15,
            cal: 10
        }
    },
    additionally: {
        id: 'additionally',
        name: 'Дополнительно',
        seasoning: {
            text: 'Посыпать приправой',
            price: 15,
            cal: 0
        },
        mayonnaise: {
            text: 'Полить майонезом',
            price: 20,
            cal: 5
        }
    }
}

//Основной код

class Hamburger {
    constructor(menu) {
        this.size = menu.size
        this.filling = menu.filling
        this.additionally = menu.additionally
        this._renderMenu()
    }
    _renderMenu() {
        const div_size = document.querySelector('.size');
        this._createTitleAndInputRadio(div_size, this.size);
        const div_filling = document.querySelector('.filling');
        this._createTitleAndInputRadio(div_filling, this.filling);
        const div_additionally = document.querySelector('.additionally');
        this._createTitleAndInputRadio(div_additionally, this.additionally);
    }
    _createTitleAndInputRadio(div, menu_item) {
        const title = `<span class="menu_item_title">${menu_item.name}</span>`
        div.insertAdjacentHTML('beforeEnd', title);
        for (let key in menu_item) {
            if (typeof menu_item[key] === 'object') {
                const input_radio_html = `<span class="menu_item_txt">
                                            ${menu_item[key].text} (${menu_item[key].price} руб., ${menu_item[key].cal} кал.)
                                            <input data-price="${menu_item[key].price}" data-cal="${menu_item[key].cal}" data-mark="no" class="${key} menu_item_input" name="${menu_item.id}" type="radio">
                                          </span>`
                div.insertAdjacentHTML('beforeEnd', input_radio_html);
                this._createEventChange(key, div);
            }
        }
    }
    _createEventChange(clas, div) {
        const input_radio = document.querySelector(`.${clas}`);
        input_radio.addEventListener('change', event => {
            const input_list = div.querySelectorAll(".menu_item_input");
            input_list.forEach(item => {
                if (item != 'length') {
                    item.dataset.mark = 'no';
                }
            });
            input_radio.dataset.mark = 'yes';
            this._renderTotalAmount();
        });
    }
    _renderTotalAmount() {
        let div_price = 0;
        let div_cal = 0;
        document.querySelectorAll('.menu_item_input').forEach(item => {
            if (item.getAttribute('data-mark') == 'yes') {
                div_price += +item.getAttribute('data-price');
                div_cal += +item.getAttribute('data-cal');
            }
        });
        const menu_right = document.querySelector('.menu_right');
        if (menu_right.children.length != 0) {
            console.dir(menu_right.children);
            for (let n = 0; n < menu_right.children.length; n) {
                menu_right.removeChild(menu_right.children[n]);
            }
        }
        const total_amount = `<span class="total_amount_price">Цена: ${div_price}</span>
                              <span class="total_amount_cal">Количество калорий: ${div_cal}</span>`;
        menu_right.insertAdjacentHTML('beforeEnd', total_amount);
    }
}

const test = new Hamburger(menu);