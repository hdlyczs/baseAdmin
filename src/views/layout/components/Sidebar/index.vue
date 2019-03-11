<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
    >
      <sidebar-item v-for="(route,index) in removeFirstMenu" :key="route.path" :item="route" :base-path="route.path" v-show="route.index == func"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar',
      'permission_routers',
      'func'
    ]),
    routes() {
      return this.$router.options.routes
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    //去掉一级菜单直接显示二级
    removeFirstMenu() {
      let arr = []
      this.permission_routers.map( function(item,index,array) {
        let Index = index;
        if(item.children){
          item.children.map(function(second){
            second.index = Index
            arr.push(second)
          })
        }
      })
      return arr;
    }
  },
  mounted(){
    console.log(this.$router.options.routes)
    console.log(this.permission_routers,this.func)
    console.log(this.removeFirstMenu)
  }
}
</script>
