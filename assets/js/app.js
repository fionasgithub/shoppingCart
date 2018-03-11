Vue.config.devtools = true

var app = new Vue({
    el: '#app',
    methods: {
        filterProducts(type) {
            this.showProducts = _.orderBy(this.products, [type], ['desc']);
        },
        searchProducts(keyword) {
            this.showProducts = _.filter(this.products, function (product) {
                if (product.name.indexOf(keyword) !== -1 ||
                    product.category.indexOf(keyword) !== -1) {
                    return true
                } else {
                    return false
                }
            });
        },
        toggleShow: function () {
            this.isShow = !this.isShow
        },
    },
    created() {
        this.showProducts = this.products
    },
    mounted() {
        $('select').material_select()
    },
    data: {
        isShow: false,
        orderType: 'all',
        searchKey: '',
        cart: [],
        showProducts: [],
        products: [{
            "id": 1,
            "img": "https://i.imgur.com/BP7yWxw.jpg?1",
            "name": "季節鮮果沙拉盅",
            "price": 110,
            "category": "沙拉",
            "hot": 2
        }, {
            "id": 2,
            "img": "https://i.imgur.com/BP7yWxw.jpg?1",
            "name": "田園燻雞沙拉",
            "price": 320,
            "category": "沙拉",
            "hot": 4
        }, {
            "id": 3,
            "img": "https://i.imgur.com/BP7yWxw.jpg?1",
            "name": "醬燒杏鮑菇",
            "price": 120,
            "category": "前菜",
            "hot": 5
        }, {
            "id": 4,
            "img": "https://i.imgur.com/BP7yWxw.jpg?1",
            "name": "洋蔥海鮮濃湯",
            "price": 220,
            "category": "湯",
            "hot": 5
        }, {
            "id": 5,
            "img": "https://i.imgur.com/BP7yWxw.jpg?1",
            "name": "果香酥烤鴨胸",
            "price": 70,
            "category": "主餐",
            "hot": 3
        }, {
            "id": 6,
            "img": "https://i.imgur.com/BP7yWxw.jpg?1",
            "name": "炙烤牛肉雙味",
            "price": 90,
            "category": "主餐",
            "hot": 4
        }, {
            "id": 7,
            "img": "https://i.imgur.com/BP7yWxw.jpg?1",
            "name": "香蒜瓦片牛肉",
            "price": 110,
            "category": "主餐",
            "hot": 2
        }, {
            "id": 8,
            "img": "https://i.imgur.com/BP7yWxw.jpg?1",
            "name": "桂圓紅棗茶",
            "price": 70,
            "category": "飲料",
            "hot": 1
        }],

    }
})