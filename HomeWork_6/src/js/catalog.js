const CatalogItemComponent = {
    props: ['item', 'img'],
    template: `
        <div class="catalog-item">
            <h3>{{item.product_name}}</h3>
            <img :src="img" alt="Some img">
            <p>{{item.price}}</p>
        </div>
    `
}

const CatalogListComponent = {
    data() {
        return {
            imgCatalogItem: "https://placehold.it/200x150",
            UrlCatalog: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
        }
    },
    props: ['list'],
    template: `
        <div class="catalog-list">
            <catalog-item 
            v-for="item in list"
            :key="item.id_item" 
            :item="item" 
            :img="imgCatalogItem"
            ></catalog-item>
        </div>
    `,
    components: {
        'catalog-item': CatalogItemComponent
    },
    mounted() {
        this.$parent.makeGETRequest(this.UrlCatalog)
            .then(myJson => {
            this.$parent.catalogList = myJson;
            this.$parent.filteredCatalogList = myJson;
        });;
    }
}

export {
    CatalogListComponent
}