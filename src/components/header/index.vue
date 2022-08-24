<template>
  <div class="m-header">
    <el-row>
        <TopBar />
    </el-row>
    <el-row>
        <SearchBar />
    </el-row>
  </div>
</template>

<script>
import TopBar from "./topBar.vue";
import SearchBar from "./searchBar.vue";
export default {
    components:{
    TopBar,
    SearchBar,
    TopBar,
    SearchBar
}
}
</script>

<style>

</style>