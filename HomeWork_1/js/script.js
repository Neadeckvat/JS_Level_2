'use strict';

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price) => `<div class="goods-item"><h3>${title}</h3><img src="https://placehold.it/200x150" alt="Some img"><p>${price}</p></div>`;

const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    const goodsListString = goodsList.reduce((sum, current) => sum + current, '');
    document.querySelector('.goods-list').innerHTML = goodsListString;
}

renderGoodsList(goods);