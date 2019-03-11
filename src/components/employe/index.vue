<template>
    <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
            <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <ul style="display:flex;flex-wrap:wrap;justify-content:center">
                <li v-for="item in 5" :key="item" style="list-style:none;width:50px;height:50px;border-radius:3px;">
                    <router-link class="inlineBlock" to="/">
                    <div style="color:red;"></div>
                    <span>XX系统</span>
                    </router-link>        
                </li>
            </ul>
            <el-dropdown-item>
                <div style="display:flex">
                    <div>修改密码</div>
                    <div>退出登录</div>
                </div>
                <span style="display:block;" @click="logout">LogOut</span>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters([
        'avatar'
    ]),
    methods:{
        logout() {
            this.$store.dispatch('LogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.avatar-container {
height: 50px;
margin-top: 5px;
display: inline-block;
position: absolute;
right: 100px;
  .avatar-wrapper {
    cursor: pointer;
    margin-top: 5px;
    position: relative;
    line-height: initial;
    .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    }
    .el-icon-caret-bottom {
    position: absolute;
    right: -20px;
    top: 25px;
    font-size: 12px;
    }
  }
}
</style>


