<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
        <dt>全部分类</dt>
        <dd v-for="(items, index) in menuList" :key="index" @mouseenter="menuEnter(items)">
            <i :class="items.type"></i>
            {{items.name}}
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="homestay"></i>
            民宿
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="movie"></i>
            猫眼电影
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="airport"></i>
            机票/火车票
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="ktv"></i>
            休闲娱乐/KTV
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="life"></i>
            生活服务
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="hair"></i>
            丽人/美发/医学美容
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="marry"></i>
            结婚/婚纱摄影/婚宴
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="offspring"></i>
            亲子/儿童乐园/幼教
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="sport"></i>
            运动健身/健身中心
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="furniture"></i>
            家装/建材/家居
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="study"></i>
            学习培训/音乐培训
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="health"></i>
            医疗健康/宠物/爱车
            <span class="arrow"></span>
        </dd>
        <dd>
            <i class="bar"></i>
            酒吧/密室逃脱
            <span class="arrow"></span>
        </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
        <div v-for="(item, index) in curDetail.items" :key="index">
            <h4 >{{item.title}}</h4>
            <span v-for="(v,i) in item.items" :key="i + '_'  + v">{{v}}</span>  
        </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return{
            curDetail:null,
            menuList:[]
        }
    },
    created(){
        api.getMenuList().then((res)=>{
            // console.log(res);
            this.menuList = res.data.data;
        })
    },
    methods: {
        menuEnter(items){
            // console.log(items)
            this.curDetail = items;
        },
        menuLeave(){
            let self = this;
            this.timer = setTimeout(() => self.curDetail = null,300);
        },
        detailEnter(){
            clearTimeout(this.timer);
        },
        detailLeave(){
            this.curDetail = null;
        }
    }
}
</script>

<style>

</style>