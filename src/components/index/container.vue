<template>
  <div class="m-istyle">
    <dl @mousemove="over">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item, index) in nav.list" :key="index" :class="{active: kind == item.tab}" :data-type="item.tab" >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="product-img"/>
          <div class="cbody">
              <p class="product-title">{{item.title}}</p>
              <p class="sub-title">
                <span>{{item.subTitle}}</span>
              </p>
              <p class="price-number numfont price" >
                <span class="price-icon">￥</span>{{item.price}}
              </p>
              <!-- <p class="price-number numfont price" v-else-if="!item.rentNum ">
                <span class="price-icon">￥</span>抢光了
              </p>
              <p class="price-number numfont price" v-else>
                <span class="price-icon">￥</span>{{item.avgPrice}}/{{item.units}}均
              </p> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js';
export default {
  props:[
    'nav'
  ],
  data(){
    return{
      kind:"all",
      resultData:{},
    }
  },
  created(){
    api.resultsByKeywords().then((res)=>{
      // console.log(res);
      this.resultData = res.data.data;
    })
    },
  methods:{
    over(e){
      // console.log(e.target);
      let dom = e.target;
      // console.log(dom.tagName)
      let tagName = dom.tagName.toLowerCase();
      if(tagName !== "dd"){
        return false;
      };
      this.kind = dom.getAttribute("data-type")
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>