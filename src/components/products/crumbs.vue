<template>
  <div>
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item>{{$store.state.position.name}}美团</el-breadcrumb-item>
      <el-breadcrumb-item >{{$store.state.position.name}}{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
 
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss"
</style>