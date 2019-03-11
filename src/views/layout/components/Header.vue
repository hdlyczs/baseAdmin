<template>
    <el-col :span="24" class="header">
        <el-col class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">{{collapsed?'':sysName}}</el-col>
        <navbar/>
    </el-col>
</template>
<script>
import Navbar from './Navbar'
export default {
    name: 'AppHeader',
    components: {
        Navbar,
    },
    data(){
        return{
            sysName:'这里是logo',
            collapsed:false,
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.header{
    display:flex;
    height: 60px;
    line-height: 60px;
    background: #0066EB;
    color:#fff;
    .logo{
        width: 180px;
        height: 100%;
        line-height: 60px;
        text-align: center;
        font-size: 30px;
    }
    .logo-with{
        width:180px;
    }
    .logo-collapse-width{
        width:36px;
    }
}
</style>


