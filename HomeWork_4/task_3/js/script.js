'use strict';

class FormList {
    constructor(form) {
        this.form_list_filter = this._filter(form.children);
        this._init(this.form_list_filter);
    }
    _filter(form_children) {
        const form_list = [];
        Array.from(form_children).forEach(el => {
            if ((el.localName == 'input') || (el.localName == 'textarea')) {
                form_list.push(el);
            }
        });
        return form_list;
    }
    _init(form_list_filter) {
        const class_list = {
            'name': FormName,
            'mail': FormMail,
            'number': FormNumber,
            'text': FormText,
            'submit_btn': FormSubmit,
        };
        const new_class_list = [];
        form_list_filter.forEach((el, i, list) => {
            const element = new class_list[el.classList[0]](el, list);
            new_class_list.push(element);
        });
    }
}

class FormElement {
    constructor(element, list) {
        this.element = element;
        this.list = list
        this._createEvent();
    }
    _createEvent() {
        return false;
    }
    _checkEvent(pattern) {
        if (pattern.test(this.element.value)) { 
            if (!(this.element.value.match(pattern)[0] == this.element.value)) {
                this.element.classList.add('error');
            } else if (this.element.classList.contains('error') && pattern.test(this.element.value)) {
                this.element.classList.remove('error');
            }
        } else {
            this.element.classList.add('error');
        }
    }
}

class FormName extends FormElement {
    _createEvent() {
        this.element.addEventListener('change', event => {
            const pattern = /[А-ЯA-Zа-яa-z]+/
            this._checkEvent(pattern);
        });
    }
}

class FormMail extends FormElement {
    _createEvent() {
        this.element.addEventListener('change', event => {
            const pattern = /[a-z0-9_\.-]+@[a-z0-9_\.-]+\.[a-z\.]+/g
            this._checkEvent(pattern);
        });
    }
}

class FormNumber extends FormElement {
    _createEvent() {
        this.element.addEventListener('change', event => {
            const pattern = /\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}/g
            this._checkEvent(pattern);
        });
    }
}

class FormText extends FormElement {
}

class FormSubmit extends FormElement {
    _createEvent() {
        this.element.addEventListener('click', event => {
            const error_list = this.list.filter(el => el.classList.contains('error'));
            const value_list = this.list.filter(el => (el.value == '') && (el.type != 'submit'))
            if ((error_list.length != 0) || (value_list.length != 0)) {
                alert('Вы ввели неверные данные.');
            } else {
                alert('Сообщение отправлено.');
            }
        });
    }
}

const form = document.querySelector('.feedback');
let feedback = new FormList(form);