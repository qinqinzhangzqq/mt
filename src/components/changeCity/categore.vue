<template>
  <div>
    <dl class="m-categroy">
      <dt>按首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      class="m-categroy-section"
      v-for="(item, index) in cityList"
      :key="index"
      :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{ city.name }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      list: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      cityList: {},
    };
  },
  created() {
    api.getCityList().then((res) => {
      // console.log(res);
      let obj = {};
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
    //   console.log(obj);
      this.cityList = obj;
    });
  },
  methods:{
    changeCity(item){
        console.log(item);
        this.$store.dispatch('setPosition', item)
        this.$router.push({name:'index'})
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>