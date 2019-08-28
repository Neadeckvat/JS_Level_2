'use strict';

import {CatalogListComponent} from './catalog.js'
import {CartListComponent} from './cart.js'
import {SearchComponent} from './search.js'

const app = new Vue({
    el: '#app',
    data: {
        catalogList: [],
        filteredCatalogList: []
    },
    methods: {
        makeGETRequest(url) {
            return fetch(url)
                .then(response => response.json())
        }
    },
    components: {
        'catalog-list': CatalogListComponent,
        'cart-list': CartListComponent,
        'search': SearchComponent
    },
});


// const app = new Vue({
//     el: '#app',
//     data: {
//         catalogList: [],
//         filteredCatalogList: [],
//         searchLine: '',
//         isVisibleCart: false
//     },
//     methods: {
//         makeGETRequest(url) {
//             fetch(url)
//             .then(response => response.json())
//             .then(myJson => {
//                 this.catalogList = myJson;
//                 this.filteredCatalogList = myJson;
//             });
//         },
//         filterCatalogList() {
            // const pattern = new RegExp(this.searchLine, 'i')
            // this.filteredCatalogList = this.catalogList.filter(el => pattern.test(el.product_name));
//         }
//     },
//     mounted() {
//         this.makeGETRequest(url);
//     }
// });

// Vue.component('catalog-list', {
//     props: ['list'],
//     template: `
//         <div class="catalog-list">
//             <catalog-item v-for="item_list in list" :item="item_list"></catalog-item>
//         </div>
//     `
// });

// Vue.component('catalog-item', {
//     props: ['item'],
//     template: `
//         <div class="catalog-item">
//             <h3>{{item.product_name}}</h3>
//             <img src="https://placehold.it/200x150" alt="Some img">
//             <p>{{item.price}}</p>
//         </div>
//     `
// });