<template>
  <div class="dashboard-container">
    <div class="main">
        <div class="main_top" v-if="titleName == true">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
                <template slot="title">
                  标题名称<i class="close_title el-icon-close" @click="clickMe"></i>
                </template>
                <div class="left_div">
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
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="main_top_right" v-if="titleName == true">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
              <template slot="title">
                标题名称<i class="close_title el-icon-close" @click="clickMe"></i>
              </template>
              <div  class="process">
                <el-progress type="circle" :percentage="todayPercentpage" color="red" :show-text="true"></el-progress>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="main_center">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
              <template slot="title">
                <b style="padding-left:8px;">7日日开户数统计</b><i class="close_title el-icon-close" @click="clickMe"></i>
              </template>
              <div id="devSec" :style="{height:'125px',width:'100%'}"></div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="main_center">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
              <template slot="title">
                <b style="padding-left:8px;">7日日抄表率统计</b><i class="close_title el-icon-close" @click="clickMe"></i>
              </template>
              <div id="devType" :style="{height: '125px',width:'100%'}"></div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="main_footer">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
              <template slot="title">
                <b style="padding-left:8px;">7日日抄表率统计</b><i class="close_title el-icon-close" @click="clickMe"></i>
              </template>
              <div id="collectCount" :style="{height: '125px',width:'100%'}"></div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="main_right">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
              <template slot="title">
                <b style="padding-left:8px;">告警统计</b><i class="close_title el-icon-close" @click="clickMe"></i>
              </template>
              <div id="alertCount" :style="{height: '125px',width:'100%',marginLeft:'0.1%'}"></div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="main_right">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
              <template slot="title">
                <b style="padding-left:8px;">阀门状态</b><i class="close_title el-icon-close" @click="clickMe"></i>
              </template>
              <div id="valveStatus" :style="{height: '125px',width:'100%'}"></div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!--<div id="devSec" :style="{height: '200px',width:'48%',marginTop:'20px'}"></div>-->
        <!--<div id="devType" :style="{height: '200px',width:'48%',marginTop:'20px'}"></div>-->
        <!--<div id="collectCount" :style="{height: '200px',width:'48%',marginTop:'20px'}"></div>-->
        <!--<div id="alertCount" :style="{height: '200px',width:'24%',marginTop:'20px',marginLeft:'2%'}"></div>
        <div id="valveStatus" :style="{height: '200px',width:'22%',marginTop:'20px'}"></div>-->
    </div>
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
        activeNames: ['1'],
        todayPercentpage:'50',//今日抄表率进度条显示变量

    }
  },
  methods:{
    handleChange(val) {
      console.log(val);
    },
    clickMe(){
      this.titleName = false;
    },
    //7日开户数统计
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
          backgroundColor: "#ffff",
          title : {
            //text : '7日收费数统计图',
            padding : 12,
            textStyle: {
              fontSize: 18,
              fontWeight: 'normal',
              color: '#333333'  // 主标题文字颜色
            }
          },
          grid: {
            top: '15%',
            left: '5%',
            right: '8%',
            bottom: 0,
            containLabel: true,
          },
          toolbox: {
            show: true,
            x:'94%',
            y:'18%',
            zlevel:0,                                   //所属图形的Canvas分层，zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
            z:2,
           /* right:"top",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
            top:"top",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
            right:"",                               //组件离容器右侧的距离,'20%'
            bottom:"auto",                              //组件离容器下侧的距离,'20%'
            width:"auto",                               //图例宽度
            height:"auto",*/
            orient:"vertical",// 水平horizontal
            feature: {
              /* dataZoom: {
                 yAxisIndex: 'none'
               },*/
              //dataView: {readOnly: false},
              magicType: {
                //show: true,
                title:"切换",
                type: ['line', 'bar']
              },
              //restore: {},
              //saveAsImage: {}
            }
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#cccc'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#6a9cd5',
                margin:15,
              },
            },
            axisTick: { show: false,},
            data: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7'],
          }],
          yAxis: [{
            type: 'value',
            min: 0,
            max:140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#ccc',
                width:1,
              }
            },
            axisLine: {show: false,},
            axisLabel: {
              margin:20,
              textStyle: {
                color: '#6a9cd5',

              },
            },
            axisTick: { show: false,},
          }],
          series: [{
            name: '异常流量',
            type: 'line',
            smooth: true, //是否平滑曲线显示
     			//symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            symbolSize:0,

            lineStyle: {
              normal: {
                color: "#3deaff",   // 线条颜色
                width:'1',
              }
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0,  color: 'rgba(61,234,255, 0.9)'},
                  { offset: 0.7,  color: 'rgba(61,234,255, 0)'}
                ], false),

                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [90, 105, 84, 125, 110, 92, 98]
          }/*,{
            //name:'直接访问',
            type:'bar',
            smooth: true, //是否平滑曲线显示
            barWidth: '60%',
          }*/

          ]
        };
        devSecChart.setOption(option);
        window.addEventListener("resize", function () {
          devSecChart.resize();
        });
      })
    },
    //7日抄表率统计
    drawDevTypeChart(){
      this.$nextTick(function () {
        var dataJsonAssType = eval(this.assetType);
        var dataJsonAssName = eval(this.assetName);
        let devTypeChart = echarts.init(document.getElementById('devType'));
        let option = {
          backgroundColor:'#fff',
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: '15%',
            left: '5%',
            right: '8%',
            bottom: 0,
            containLabel: true,
          },
          toolbox:{
            show: true,
            x:'94%',
            y:'18%',
            zlevel:0,                                   //所属图形的Canvas分层，zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
            z:2,
            orient:"vertical",// 水平horizontal
            feature: {
              magicType: {
                //show: true,
                title:"切换",
                type: ['bar', 'line']
              },

            }
          },
          xAxis : [
            {
              type : 'category',
              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'直接访问',
              type:'bar',
              barWidth: '30%',
              data:[10, 52, 200, 334, 390, 330, 220]
            }
          ]
        };
        devTypeChart.setOption(option);
        window.addEventListener("resize", function () {
          devTypeChart.resize();
        });
      })

    },
    //7日收费数统计图
    drawCollectCountChart(){
      this.$nextTick(function () {
        let collectCountChart = echarts.init(document.getElementById('collectCount'));
        let option = {
          backgroundColor: "#ffff",
          title : {
            //text : '7日收费数统计图',
            padding : 12,
            textStyle: {
              fontSize: 18,
              fontWeight: 'normal',
              color: '#333333'  // 主标题文字颜色
            }
          },
          grid: {
            top: '15%',
            left: '5%',
            right: '8%',
            bottom: 0,
            containLabel: true,
          },
          toolbox: {
            show: true,
            x:'94%',
            y:'18%',
            zlevel:0,                                   //所属图形的Canvas分层，zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
            z:2,
            /* right:"top",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
             top:"top",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
             right:"",                               //组件离容器右侧的距离,'20%'
             bottom:"auto",                              //组件离容器下侧的距离,'20%'
             width:"auto",                               //图例宽度
             height:"auto",*/
            orient:"vertical",// 水平horizontal
            feature: {
              /* dataZoom: {
                 yAxisIndex: 'none'
               },*/
              //dataView: {readOnly: false},
              magicType: {
                //show: true,
                title:"切换",
                type: ['line', 'bar']
              },
              //restore: {},
              //saveAsImage: {}
            }
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#cccc'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#6a9cd5',
                margin:15,
              },
            },
            axisTick: { show: false,},
            data: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7'],
          }],
          yAxis: [{
            type: 'value',
            min: 0,
            max:140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#ccc',
                width:1,
              }
            },
            axisLine: {show: false,},
            axisLabel: {
              margin:20,
              textStyle: {
                color: '#6a9cd5',

              },
            },
            axisTick: { show: false,},
          }],
          series: [{
            name: '异常流量',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            //symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            symbolSize:0,

            lineStyle: {
              normal: {
                color: "#3deaff",   // 线条颜色
                width:'1',
              }
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0,  color: 'rgba(61,234,255, 0.9)'},
                  { offset: 0.7,  color: 'rgba(61,234,255, 0)'}
                ], false),

                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [90, 105, 84, 125, 110, 92, 98]
          },{
            //name:'直接访问',
            type:'bar',
            smooth: true, //是否平滑曲线显示
            barWidth: '60%',
          }

          ]
        };
        collectCountChart.setOption(option);
        window.addEventListener("resize", function () {
          collectCountChart.resize();
        });

      })

    },
    //告警统计
    drawAlertCountChart(){
      this.$nextTick(function () {
          let alertCountChart = echarts.init(document.getElementById('alertCount'));
          let option = {
            backgroundColor:'#fff',
            /*title: {
              text: '告警统计',
              x:'left',
              y:'top',
              textAlign:'left',
              textStyle: {
                fontSize: 18,
                fontWeight: 'normal',
                color: '#333333'  // 主标题文字颜色
              },
              subtextStyle:{
                align:'left',
              }
            },*/
            tooltip : {
              trigger: 'axis',
              //backgroundColor: 'rgba(255,255,255,0.7)',
              axisPointer: {
                type: 'shadow'
              },
              itemStyle:{
                baseline:'top',
              }
            },
            calculable : true,
            grid: {
              left: '5%',
              right: '15%',
              bottom: '2%',
              top:'12%',
              x:40,
              x2:100,
              y2:150,
              containLabel:true
            },
            xAxis : [
              {
                type : 'value',
                axisTick: {
                  show: false
                },
                splitLine:{//去除网格线
                  show: false
                },
                splitArea : {//保留网格区域
                  show : false
                },
                axisLine: {
                  show:false
                },
                show:false,//X轴下方的标识取消
              },
            ],
            yAxis : [{
              type : 'category',
              //data : [1,155,3,4,5,6,7,8,9,0],
              axisTick: {
                alignWithLabel: false,
                show: false
              },
              splitLine:{
                show: false
              },//去除网格线
              axisLine: {
                show:false
              },
              axisLabel: {
                show: true,
                textStyle: {
                  fontSize:'14',
                },
                formatter:function (value) {
                  var values = [];
                  if(value.length >4){
                    values.push(value.substring(0,5)+'...');
                  }else{
                    values.push(value)
                  }
                  return values;
                }
              }
            },
              {
                type : 'category',
                data : [1,155,3,4,5,6,7,8,9,0],
                axisTick: {
                  alignWithLabel: false,
                  show: false
                },
                splitLine:{
                  show: false
                },//去除网格线
                axisLine: {
                  show:false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    fontSize:'14',
                  },
                  formatter:function (value) {
                    var values = [];
                    if(value.length >12){
                      values.push(value.substring(0,13)+'...');
                    }else{
                      values.push(value)
                    }
                    return values;
                  }
                }
              }
            ],
            series : [
              {
                //name:'直接访问',
                type:'bar',
                smooth:false,
                barWidth: '70%',//柱子的宽度
                barGap: '50%',//柱子间的距离
                data:[1,155,456,1000,5,64,70,568,98,80],
                //barMinHeight:10,//柱子最小高度
                //barMaxHeight:390,
                itemStyle:{
                  normal: {
                    label: {
                      show: false,//柱子值是否显示
                      textStyle: {
                        fontWeight: 'bolder',
                        fontSize: '12',
                        fontFamily: '微软雅黑'
                      },
                      position: 'right',//柱子值显示在右边
                    },
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 1, 0,
                      [
                        {offset: 0, color: 'rgb(236, 225, 199)'},
                        {offset: 1, color: 'rgb(235, 215, 168)'}

                      ]
                    )
                  },
                  barGap:'70%'
                }

              }
            ],

          };
          alertCountChart.setOption(option);
          window.addEventListener("resize", function () {
            alertCountChart.resize();
          });

      })
    },
    //阀门状态
    drawValveStatusChart(){
      this.$nextTick(function () {
        let valveStatusChart = echarts.init(document.getElementById('valveStatus'));
        let options = {
          backgroundColor:'#fff',
          /*title: {
            text: '阀门状态',
            x:'left',
            y:'top',
            textAlign:'left',
            textStyle: {
              align:'center',
              fontSize: 18,
              fontWeight: 'normal',
              color: '#333333'  // 主标题文字颜色
            }
          },*/
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
          },
          color:[
            '#fdff1a',
            '#fa8e14',
            '#f8000e',
            '#c1000b',
          ],
          /*legend: {
            orient: 'vertical',
            x: 'left',
            y:'center',
            icon:'circle',
            textStyle:{
              fontSize:'14',
              color:'red',
            },
            formatter:function (value) {
              var values = [];
              if(value.length >=10){
                values.push(value.substring(0,10)+'...');
              }else{
                values.push(value)
              }
              return values;
            }
          },*/
          series: [
            {
              type:'pie',
              radius: ['50%', '70%'],
              center: ['50%', '50%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  //show: false,
                  //position: 'center',
                  textStyle: {
                    color: '#666'  // 改变标示文字的颜色
                  }
                },

              },
              labelLine: {
                normal: {
                  show: true,
                  length:5,
                  lineStyle: {
                    color: "red"  // 改变标示线的颜色
                  },

                },
              },
              textStyle:{
                fontSize:'14',
              },
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ],
            }
          ]

        };
        valveStatusChart.setOption(options);
        window.addEventListener("resize", function () {
          valveStatusChart.resize();
        });
      })
    },


  },
  created(){
      this.drawDevSecChart();//7日开户数统计
      this.drawDevTypeChart();//7日抄表率统计
      this.drawCollectCountChart();//7日收费数统计图
      this.drawAlertCountChart();//告警统计
      this.drawValveStatusChart();//阀门状态
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
      padding:0 20px 20px 20px;
      width:100%;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
}
.main{
  width:100%;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  .main_top{
    width:49%;
    margin:10px 0;
    .close_title{
      margin-right: -40px;
      -webkit-transition: -webkit-transform .3s;
      transition: -webkit-transform .3s;
      transition: transform .3s;
      transition: transform .3s, -webkit-transform .3s;
      transition: transform .3s,-webkit-transform .3s;
      float: right;
      line-height: 48px;
      font-weight: 300;
    }
    .left_div{
      padding:10px;
      background-color: #fff;
      .left_content{
        width:100%;
        height:105px;
        line-height: 105px;
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
  .main_top_right{
    width:49%;
    margin:10px 0;
    .close_title{
      margin-right: -40px;
      -webkit-transition: -webkit-transform .3s;
      transition: -webkit-transform .3s;
      transition: transform .3s;
      transition: transform .3s, -webkit-transform .3s;
      transition: transform .3s,-webkit-transform .3s;
      float: right;
      line-height: 48px;
      font-weight: 300;
    }
    .process{
      padding-left:40px;
    }

  }
  .main_center{
    width:49%;
    .close_title{
      margin-right: -40px;
      -webkit-transition: -webkit-transform .3s;
      transition: -webkit-transform .3s;
      transition: transform .3s;
      transition: transform .3s, -webkit-transform .3s;
      transition: transform .3s,-webkit-transform .3s;
      float: right;
      line-height: 48px;
      font-weight: 300;
    }
  }
  .main_footer{
    width:49%;
    margin-top: 10px;
    .close_title{
      margin-right: -40px;
      -webkit-transition: -webkit-transform .3s;
      transition: -webkit-transform .3s;
      transition: transform .3s;
      transition: transform .3s, -webkit-transform .3s;
      transition: transform .3s,-webkit-transform .3s;
      float: right;
      line-height: 48px;
      font-weight: 300;
    }
  }
  .main_right{
    width:23.5%;
    margin-top: 10px;

    .close_title{
      margin-right: -40px;
      -webkit-transition: -webkit-transform .3s;
      transition: -webkit-transform .3s;
      transition: transform .3s;
      transition: transform .3s, -webkit-transform .3s;
      transition: transform .3s,-webkit-transform .3s;
      float: right;
      line-height: 48px;
      font-weight: 300;
    }

  }
}

</style>
