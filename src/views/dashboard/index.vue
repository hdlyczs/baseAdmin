<template>
  <div class="dashboard-container">
    <el-row class="main_header">
      <el-col :span="24" class="warp">
          <div class="header_left" v-if="titleName == true">
              <div class="left_div">
                  <div class="left_title">
                     <p @click="clickMe">标题名称</p>
                  </div>
                  <div class="left_content">
                      <div class="total_num">
                        <span>总档案数（户）1234</span>
                      </div>
                      <div class="yesterday_num">
                        昨日开户（户）
                        <span>12345</span>
                      </div>
                  </div>
              </div>

          </div>
          <div class="header_right">
              <div class="left_div">
                <div class="left_title">
                  <p>标题名称</p>
                </div>
                <div class="left_content">
                  <div class="total_num">
                    <span>总档案数（户）1234</span>
                  </div>
                  <div class="yesterday_num">
                    昨日开户（户）
                    <span>12345</span>
                  </div>
                </div>
              </div>
          </div>
          <div id="devSec" :style="{height: '367px',width:'48%',marginTop:'20px'}"></div>
          <div id="devType" :style="{height: '367px',width:'48%',marginTop:'20px'}"></div>
      </el-col>
    </el-row>
    <el-row class="main_footer">
      <el-col :span="24">
       <!-- <div id="infDev" :style="{height: '367px',width:'50%',float:'left'}"></div>
        <div id="loopReg" :style="{height: '367px',width:'48%',marginLeft:'2px',float:'right'}"></div>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import echarts from 'echarts';
export default {
  name: 'Dashboard',
  data(){
    return {
        titleName:true,

    }
  },
  methods:{
    clickMe(){
      this.titleName = false;
    },
    drawDevSecChart(){
      this.$nextTick(function () {
        var thistopValue =[];
        if(this.topValue =="{}"){
        }else{
          this.topValue = '['+this.topValue+']';
          thistopValue = eval(this.topValue);
        }
        var thistopData = eval(this.topData);
        let devSecChart = echarts.init(document.getElementById('devSec'));
        let option = {
          backgroundColor : '#ffffff',
          title : {
            //text : '最新TOP5设备漏洞走势图',
            text : '统计',
            padding : 12,
            textStyle: {
              fontSize: 18,
              fontWeight: 'normal',
              color: '#333333'  // 主标题文字颜色
            }
          },
          tooltip : {
            trigger : 'axis'
          },
          calculable : true,
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel : {
              /*formatter:function (value) {
                return value+'次'
              }*/
            },
            data: thistopData,
          },
          yAxis: {
            type: 'value',
          },
          series: thistopValue,
        };
        devSecChart.setOption(option);
        window.addEventListener("resize", function () {
          devSecChart.resize();
        });
      })
    },
    drawDevTypeChart(){
      this.$nextTick(function () {
        var dataJsonAssType = eval(this.assetType);
        var dataJsonAssName = eval(this.assetName);
        let devTypeChart = echarts.init(document.getElementById('devType'));
        let option = {
          backgroundColor:'#fff',
          title: {
            text: '未来一周气温变化',
            /*subtext: '纯属虚构'*/
          },
          tooltip: {
            trigger: 'axis'
          },
          /*legend: {
            data:['最高气温','最低气温']
          },*/
          toolbox: {
            show: true,
            feature: {
             /* dataZoom: {
                yAxisIndex: 'none'
              },*/
              //dataView: {readOnly: false},
              magicType: {
                type: ['line', 'bar']
              },
              //restore: {},
              //saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            }
          },
          series: [
            {
              name:'最高气温',
              type:'line',
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'最低气温',
              type:'line',
              data:[1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                data: [
                  {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            }
          ]
        };
        devTypeChart.setOption(option);
        window.addEventListener("resize", function () {
          devTypeChart.resize();
        });
      })

    },

  },
  created(){
      this.drawDevSecChart();
      this.drawDevTypeChart();
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
    &-container {
      margin:0 10px 10px 10px;
      width:100%;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
}
.main_header{
  width:100%;
  .warp{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap
  }
  .header_left{
    width:48%;
    .left_div{
      padding:10px;
      background-color: #fff;
      .left_title{
        width:100%;
        height:20px;
        line-height: 20px;
      }
      .left_content{
        width:100%;
        height:120px;
        line-height: 120px;
        .total_num{
          float:left;
          width:49%;
          height:100%;
          text-align: center;
          background-color: #99a9bf;
          margin-right:2%;
        }
        .yesterday_num{
          float:left;
          width:49%;
          height:100%;
          text-align: center;
          background-color: #99a9bf;
        }

      }
    }

  }
  .header_right{
    width:48%;
    .left_div{
      padding:10px;
      background-color: #fff;
      .left_title{
        width:100%;
        height:20px;
        line-height: 20px;
      }
      .left_content{
        width:100%;
        height:120px;
        line-height: 120px;
        .total_num{
          float:left;
          width:49%;
          height:100%;
          text-align: center;
          background-color: #99a9bf;
          margin-right:2%;
        }
        .yesterday_num{
          float:left;
          width:49%;
          height:100%;
          text-align: center;
          background-color: #99a9bf;
        }

      }
    }
  }
}
.main_center{
  padding-top:12px;
  .tag_float{
    float:left
  }
}
.main_footer{
  padding-top:12px;
}
</style>
