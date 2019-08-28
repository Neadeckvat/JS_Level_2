const CartItemComponent = {
    props: ['img', 'item'],
    template: `
        <div class="cart-item">
            <div class="product-bio">
                <img :src="img" alt="Some img">
                <div class="product-desc">
                    <p class="product-title">{{ item.product_name }}</p>
                    <p class="product-quantity">К-во:{{ item.quantity }}</p>
                    <p class="product-single-price">{{ item.price }} руб</p>
                </div>
            </div>
            <div class="right-block">
                <p class="product-price">{{ item.price * item.quantity }}</p>
                <button class="del-btn" @click="$root.$refs.CartListComponent.removeProduct(item)">&times;</button>
            </div>
        </div>
        `
}

const CartListComponent = {
    data () {
        return {
            imgCartItem: 'https://placehold.it/100x80',
            cartList: [],
            shown: false,
            UrlCart: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json'
        }
    },
    components: {
        'cart-item': CartItemComponent
    },
    methods: {
        addProduct(product) {
            console.log (`Product ${product.product_name} added`)
        },
        removeProduct(product) {
            console.log (`Product ${product.product_name} removed`)
        }
    },
    mounted() {
        this.$parent.makeGETRequest(this.UrlCart)
			.then(data => {
				for (let el of data.contents) {
					this.cartList.push(el)
				}
            })
        console.log(this.imgCart)
    },
    template: `
                <div>
                    <button class="cart-button" type="button" @click="shown = !shown">Корзина</button>
                    <div class="cart-content" v-show="shown">
                        <p v-if="!cartList.length"> Корзина пуста </p>
                        <cart-item 
                        v-for="product of cartList"
                        :key="product.id_product"
                        :img="imgCartItem"
                        :item="product"
                        ></cart-item>
                    </div>
                </div>
                `
}

export {
    CartListComponent
}