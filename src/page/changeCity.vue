<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <HotCity title="热门城市:" :list="hotList" />
    </el-row>
    <el-row>
      <HotCity  title="最近访问:" :list="recentList" />
    </el-row>
    <el-row>
      <Categore />
    </el-row>
  </div>
</template>

<script>
import province from "@/components/changeCity/province.vue";
import HotCity from "../components/changeCity/hotCity.vue";
import Categore from "@/components/changeCity/categore.vue";
import api from "@/api";
export default {
  components: {
    province,
    HotCity,
    Categore,
  },
  data() {
    return {
      hotList: [],
      recentList:[]
    };
  },
  created(){
    api.getHotCity().then(res => {
      // console.log(res)
      this.hotList = res.data.data;
    });
    api.getRecentCity().then(res => {
      this.recentList  = res.data.data;
    });
  }
};
</script>

<style>
</style>