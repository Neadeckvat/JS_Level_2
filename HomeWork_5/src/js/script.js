'use strict';

const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        isVisibleCart: false
    },
    methods: {
        makeGETRequest(url) {
            fetch(url)
            .then(response => response.json())
            .then(myJson => {
                this.goods = myJson;
                this.filteredGoods = myJson;
            });
        },
        filterGoods() {
            const pattern = new RegExp(this.searchLine, 'i')
            this.filteredGoods = this.goods.filter(el => pattern.test(el.product_name));
        }
    },
    mounted() {
        this.makeGETRequest(url);
    }
});