Vue.component('productCard', {
    template: `<div class="card">
                    <div class="card-image">
                        <img src="/assets/img/bg.jpg">
                        <span class="card-title"> {{ product.name }} </span>
                    </div>
                    <div class="card-content">
                        <ul>
                            <li>種類： {{ product.category }} </li>
                            <li>價格： {{ product.price }}</li>
                            <li>評分： {{ product.hot }}</li>
                        </ul>
                    </div>
                    <div class="card-action">
                        <a class="waves-effect waves-light btn"><i class="large material-icons">add_shopping_cart</i>加入購物車</a>
                    </div>
                </div>`,
    props: [
        'product',
    ],
})