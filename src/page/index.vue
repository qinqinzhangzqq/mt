<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <MMenu />
      </el-col>
      <el-col :span="19">
        <MLift />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <MContainer :nav="istyle"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <MContainer  :nav="navlist"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu.vue";
import MLift from "@/components/index/lift.vue";
import MContainer from "@/components/index/container.vue";
export default {
  data(){
    return{
      istyle:{
        title:"有格调",
        list:[{
          text: "全部",
          tab:"all"
        },{
          text: "天津",
          tab:"tianjin"
        },{
          text: "济南",
          tab:"jinan"
        },{
          text: "大连",
          tab:"dalian"
        },{
          text: "太原",
          tab:"taiyuan"
        },]
      },
      navlist:{
        title:"有格调",
        list:[{
          text: "全部",
          tab:"all"
        },{
          text: "天津",
          tab:"tianjin"
        },{
          text: "济南",
          tab:"jinan"
        },{
          text: "大连",
          tab:"dalian"
        },{
          text: "太原",
          tab:"taiyuan"
        },]
      }
    }
  },
  components: {
    MMenu,
    MLift,
    MContainer,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>