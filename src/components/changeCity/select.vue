<template>
  <div :class="['choose-wrap',disabled ? 'disabled' : '']" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
        <span>{{value}}</span>
        <i class="el-icon-caret-bottom"></i>
        <div :class="{'mt-content':true ,'active':showWrapperActive}">
            <h2>{{title}}</h2>
            <div :class="['wrapper',className]" >
                <div class="col" v-for="(listData,index) in renderList" :key="index">
                    <span :class="{'mt-item':true,'active':item.name === value}" v-for="(item,index) in listData" :key="index"  @click="changeValue(item)">{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['list','title','value','showWrapperActive','disabled','className'],
    computed:{
        renderList(){
            let col = Math.ceil(this.list.length / 12);
            let resultList = [];
            for (let i = 0; i < col; i++){
                let data = this.list.slice(i * 12,i * 12 + 12);
                // console.log(data);
                resultList.push(data);
            };
            // console.log(resultList);
            return resultList;
        }
    },
    methods:{
        showWrapper(e){
            if(!this.disabled){
                this.$emit('change_active',true);
            }
            e.stopPropagation();//阻止事件冒泡
            // this.showWrapperActive = true;
        },
        documentClick(){
            // console.log("documentClick");
            // this.showWrapperActive = false;
            this.$emit('change_active',false);
        },
        changeValue(item){
            this.$emit('change',item)
            // console.log(item)
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss"
</style>