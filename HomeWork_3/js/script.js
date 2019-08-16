'use strict';

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><img src="https://placehold.it/200x150" alt="Some img"><p>${this.price}</p></div>`
    }
}

class GodsList {
    constructor() {
        this.goods = [];
    }
    makeGETRequest(url) {
        return new Promise ((res) => {
            let xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    res(xhr.responseText);
                }
            }
            xhr.open('GET', url, true);
            xhr.send();
        });
    }
    fetchGoods() {
        return new Promise ((res) => {
            this.makeGETRequest(url).then ((goods) => {
                this.goods = JSON.parse(goods);
                if (this.goods.length != 0) {
                    res({func: this.render, goods: this.goods});
                }
            });
        });
    }
    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
const list = new GodsList();
list.fetchGoods().then((obj) => {
    this.goods = obj.goods;
    obj.func();
});