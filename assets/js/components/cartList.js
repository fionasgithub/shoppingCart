Vue.component('cartList', {
    template: `<ul class="collection">
                    <li v-for="(product, key) in cart" v-model="cart" class="collection-item avatar">
                        <img :src="product.img" alt="" class="circle">
                        <span class="title">{{ product.name }}</span>
                        <p>{{ product.category }}
                            <br> {{ product.price }}
                        </p>
                        <button class="btn-floating waves-effect waves-light" @click="remove(key)">
                            <i class="material-icons">delete</i>
                        </button>
                    </li>
                </ul>`,
    props: [
        'cart',
    ],
    methods: {
        remove(key) {
            console.log(this.cart)
            this.cart.splice(key, 1)
            console.log(this.cart)
        }
    }
})