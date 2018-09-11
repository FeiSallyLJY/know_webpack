let css_json = require('./todoList.css');
let img = require('./images/big.jpg');
console.log(css_json);

Vue.component('todoList',{
    template:
            `<div :class="css_json.wrap">
                    好忙啊这周!!!
                    <div :class="css_json.a">
                    123456
                    </div>
                    <div class=".b">
                    1235456
                    </div>
                    <img :src="img" alt="">
             </div>`,
    data(){
        return{
            css_json:css_json,
            img:img
        }
    },
    methods:{
        fn(){
            let [d,,e] = [1,2,3];
            console.log(d)
            console.log(e)
        }
    }
})