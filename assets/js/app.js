var app = new Vue({
    el: '#app',
    methods: {
        showbutton() {
            this.seen = true;
        }
    },
    data: {
        message: 'Hello Vue!',
        seen: false,
        products: [{
            "id": 1,
            "img": "https://source.unsplash.com/sHG1dCUXgPY/160x110",
            "name": "季節鮮果沙拉盅",
            "price": 110,
            "catagory": "沙拉",
            "hot": 2
        }, {
            "id": 2,
            "img": "https://source.unsplash.com/FlmXvqlD-nI/160x110",
            "name": "田園燻雞沙拉",
            "price": 320,
            "catagory": "沙拉",
            "hot": 4
        }, {
            "id": 3,
            "img": "https://source.unsplash.com/YJSOou0wt8c/160x110",
            "name": "醬燒杏鮑菇",
            "price": 120,
            "catagory": "前菜",
            "hot": 5
        }, {
            "id": 4,
            "img": "https://source.unsplash.com/KSXvrqKUxnc/160x110",
            "name": "洋蔥海鮮濃湯",
            "price": 220,
            "catagory": "湯",
            "hot": 5
        }, {
            "id": 5,
            "img": "https://source.unsplash.com/w6ftFbPCs9I/160x110",
            "name": "果香酥烤鴨胸",
            "price": 70,
            "catagory": "主餐",
            "hot": 3
        }, {
            "id": 6,
            "img": "https://source.unsplash.com/oNsoDBAxybs/160x110",
            "name": "炙烤牛肉雙味",
            "price": 90,
            "catagory": "主餐",
            "hot": 4
        }, {
            "id": 7,
            "img": "https://source.unsplash.com/W7b8Sqb7PG8/160x110",
            "name": "香蒜瓦片牛肉",
            "price": 110,
            "catagory": "主餐",
            "hot": 2
        }, {
            "id": 8,
            "img": "https://source.unsplash.com/tNALoIZhqVM/160x110",
            "name": "桂圓紅棗茶",
            "price": 70,
            "catagory": "飲料",
            "hot": 1
        }],

    }
})