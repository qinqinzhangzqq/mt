<template>
  <div class="m-products-list">
    <ul>
        <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
        <Item v-for="(item,index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import Item from "./item.vue";
import api from "@/api";
export default {
    data() {
        return {
            nav: [{
                    key: "s-default",
                    name: "智能排序",
                    active: true,
                }, {
                    key: "s-price",
                    name: "价格最低",
                    active: false,
                }, {
                    key: "s-score",
                    name: "人气最高",
                    active: false,
                }, {
                    key: "s-comment",
                    name: "评价最高",
                    active: false,
                },
            ],
            productList: [],
        };
    },
    components: { Item },
    created(){
        api.getProductsList().then(res => {
            console.log(res);
            this.productList = res.data.data;
        });
    }
}
</script>

<style lang="scss"> 
@import "@/assets/css/products/list.scss"
</style>