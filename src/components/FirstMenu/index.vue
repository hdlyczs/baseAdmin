<template>
    <el-col :span="16">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
        background-color="#0066EB"
        text-color="#fff"
        active-text-color="#fff">
            <el-menu-item v-for="(item,index) in permission_routers" :key="index" :index="String(index)" v-if="!item.hidden && item.levels == 0">{{item.name}}</el-menu-item>
        </el-menu>
    </el-col>
</template>
<script>
import { mapGetters } from 'vuex'
import store from '@/store'
export default {
     data() {
        return {
            activeIndex: '0',
        };
    },
    computed: {
        ...mapGetters([
            'permission_routers'
        ])
    },
    methods: {
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
            store.dispatch('GetMenuIndex', key)
        }
    },
    mounted(){
        // console.log(this.permission_routers)
    }
}
</script>
<style>
.el-menu--horizontal{border-bottom: none;}
.el-menu--horizontal>.el-menu-item{height: 56px;}
</style>

