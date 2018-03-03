Vue.component('productsList', {
  template: `<ol v-if="seen">
              <li v-for="product in products">
                  {{ product.name }}
              </li>
             </ol>`,
  props: [
    'qqq',
    'seen',
    'products'
  ],
})