<template>
  <div class="m-product-categroy">
    <dl class="classic">
        <dt>分类</dt>
        <dt>全部</dt>
        <dd v-for="item in menuList" :key="item.type">
            <Select :name="item.title" :list="item.sub_list"/>
        </dd>
    </dl>
    <dl class="classic">
        <dt>区域</dt>
        <dt>全部</dt>
        <dd v-for="item in areaList" :key="item.sub_list.id">
            <Select :name="item.title" :list="item.sub_list"/>
        </dd>
    </dl>
  </div>
</template>

<script>
import Select from "./select.vue";
export default {
    data() {
        return {
            menuList: [
                {
                    title: "美食",
                    type: "food",
                    sub_list: [
                        {
                            name: "饮品店",
                            id: "drink"
                        }
                    ]
                },
                {
                    title: "酒店住宿",
                    type: "hotal",
                    sub_list: [
                        {
                            name: "饮品店",
                            id: "drink"
                        }
                    ]
                }
            ],
            areaList: [
                {
                    title: "推荐商圈",
                    sub_list: [
                        {
                            name: "望京",
                            id: "120000"
                        },
                        {
                            name: "昌平",
                            id: "12222"
                        },
                    ]
                },
                {
                    title: "朝阳区",
                    sub_list: [
                        {
                            name: "望京",
                            id: "120001"
                        }
                    ]
                },
            ]
        };
    },
    components: { Select }
}
</script>

<style>

</style>