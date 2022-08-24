<template>
  <div class="layout-default">
    <el-container>
      <el-header height="">
        <MyHeader />
      </el-header>
      <el-main style="overflow: visible;">
        <router-view></router-view>
      </el-main>
      <el-footer height="">
        <MyFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/header";
import MyFooter from "@/components/footer";
export default {
  name: "DefaultPage",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>