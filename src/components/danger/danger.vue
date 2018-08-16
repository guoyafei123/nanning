<template>
  <div class="row">
    <!-- #头部 -->
    <!-- <header-vue></header-vue> -->
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left container-padding5 z-index-20">
      <div class="overlay"></div>
      <template>
        <div class="toolleft margin-right0">
          <section>
            <div class="toolcount">
              <div class="set-width-50 font-gray-999 padding-right0 size-12">
                <ul class="toolcount-left margin-bottom0 padding-right10 padding-left37" id="toolcount">
                  <li>
                    <h1 class="toolcount-p1 font-yellow">0</h1>
                  </li>
                  <li> 
                    <p class="size-10">Dangers Number</p>
                  </li>
                  <li class="margin-bottom10">
                    <p class="size-18 font-blue">当前隐患数</p>
                  </li>
                  <li>
                    <p>今日隐患发现数</p>
                    <p class="font-blue font-italic float-right size-14">{{ins_queryTroubleStats.countTrouble}}</p>
                  </li>
                  <li>
                    <p>今日隐患解决数</p>
                    <p class="font-blue font-italic float-right size-14">{{ins_queryTroubleStats.solveTrouble}}</p>
                  </li>
                  <li>
                    <p>室内隐患数</p>
                    <p class="font-blue font-italic float-right size-14">{{ins_queryTroubleStats.outdoorTrouble}}</p>
                  </li>
                  <li>
                    <p>室外隐患数</p>
                    <p class="font-blue font-italic float-right size-14">{{ins_queryTroubleStats.indoorTrouble}}</p>
                  </li>
                </ul>
              </div>
              <div class="set-width-50 display-inline-block font-gray-999 toolcount-right size-12">
                <ul class="padding-left0 margin-bottom0">
                  <li>
                    <h1 class="toolcount-p1 font-red">0</h1>
                  </li>
                  <li> 
                    <p class="size-10">Current Dangerous Number</p>
                  </li>
                  <li class="margin-bottom10">
                    <p class="size-18 font-blue">当前危险品数</p>
                  </li>
                  <li>
                    <p>今日危险品新增</p>
                    <p class="font-blue font-italic float-right size-14">{{ins_queryTroubleStats.countDangerousGoods}}</p>
                  </li>
                  <li>
                    <p>今日危险品处理</p>
                    <p class="font-blue font-italic float-right size-14">{{ins_queryTroubleStats.solveDangerousGoods}}</p>
                  </li>
                  <li>
                    <p>室内危险品数</p>
                    <p class="font-blue font-italic float-right size-14">{{ins_queryTroubleStats.indoorDangerousGoods}}</p>
                  </li>
                  <li>
                    <p>室外危险品数</p>
                    <p class="font-blue font-italic float-right size-14">{{ins_queryTroubleStats.outdoorDangerousGoods}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div class="toolroute font-gray-ccc margin-left37">
              <span class="toolroute-rect bg-blue"></span>
              <ul class="padding-left10 padding-right5">
                <li>
                  <p class="font-gray-666 size-12">中心小学</p>
                </li>
                <li>
                  <p class="font-blue size-16">隐患信息
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                                  <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                              </span>
                  </p>
                </li>
                <li>
                    <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="请选择"  @change="tolineitem">
                      <el-option v-for="item in ins_queryInspectionNameList" :key="item.id" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                    <!-- <div class="float-right">
                      <a class="upd-btn">展开表单</a>
                    </div> -->
                </li>
                <li>                    
                    <table class="table table-responsive size-12 table-condensed toolroute-table margin-top10 mini-table">
                      <thead>
                        <tr>
                          <!-- <th >序号</th> -->
                          <th >隐患单号</th>
                          <th >类型</th>
                          <th >发现时间</th>
                          <th >状态</th>
                          <th>查看</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item,index) in tableData.result" v-on:click="toitmeinfo(item)">
                          <!-- <td>{{(troubleList_parameter.currentPage-1)*troubleList_parameter.pageSize+index+1}}</td> -->
                          <td>{{item.idCode}}</td>
                          <td>{{item.type}}</td>
                          <td>{{item.createTime}}</td>
                          <td>{{item.status}}</td>
                          <td>
                            <a v-on:click="toitmeinfo(item)">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                </li>
                <li class="upd-pagin">
                  <div>
                    <el-pagination style="float: left;"
                      small
                      layout="total"
                      :total="tableData.totalRow">
                    </el-pagination>
                    <span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{Math.ceil(tableData.totalRow/this.troubleList_parameter.pageSize)}}页</span>
                    <el-pagination style="float: right;background: transparent"
                      small
                      layout="prev, pager, next"
                      :page-size="this.troubleList_parameter.pageSize"
                      :total="tableData.totalRow" 
                      current-page.sync="this.troubleList_parameter.currentPage"
                      @current-change="handleCurrentChange">
                    </el-pagination>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </template>
    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right container-padding5 z-index-20">
      <div class="overlay"></div>
      <template>
        <div class="">
          <div class="toolright">
              <section>
                  <div class="personinfo">
                      <p>
                      <span class="size-20 font-blue">南宁市良庆区</span>
                      </p>
                      <p>
                      <span><i class="fas fa-industry"></i> 良庆区中心小学</span>
                      </p>
                  </div>
              </section>
              <section>
                <div class="upd-elmdate">
                  <el-date-picker
                    v-model="value7"
                    size="mini"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2">
                  </el-date-picker>
                </div>
              </section>
              <section class="dan-lineinfo">
                <div class="toolcount">
                  <h4 class="p-title">隐患统计</h4>
                  <div class="col-sm-7 font-gray-999 padding-right0 text-center margin-top50 size-12">
                    <div class="row" v-if="ins_troubleCount.troubleCount">
                      <div class="col-sm-4 personnel-borderright">
                        <p class="size-16 font-white">{{ins_getAlarmCount.alarmSum}}</p>
                        <p>隐患总数</p>
                      </div>
                      <div class="col-sm-4 personnel-borderright">
                        <p class="size-16 font-white">{{ins_troubleCount.troubleCount.findCount}}</p>
                        <p>隐患发现</p>
                      </div>
                      <div class="col-sm-4">
                        <p class="size-16 font-white">{{ins_troubleCount.troubleCount.decideCount}}</p>
                        <p>隐患解决</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-5 font-gray-999 text-right size-12">
                    <div id="dan_charpiemin" style="width: 100%;height:140px;text-align: right;"></div>
                  </div>
                </div>
                  <section>
                      <div class="toolcount">
                          <div class="col-sm-12 font-gray-999 padding-right0 size-12">
                            <div class="text-center">
                                <template v-if="ins_troubleCount.dangerCount">
                                  <div class="col-sm-4 container-padding0 personnel-borderright">
                                  <p class="size-16 font-blue">{{ins_troubleCount.dangerCount.dangerAll}}</p>
                                  <p>危险品总数</p>
                                  </div>
                                  <div class="col-sm-4 container-padding0 personnel-borderright">
                                  <p class="size-16 font-gray-ccc">{{ins_troubleCount.dangerCount.dangerNew}}</p>
                                  <p>危险品新增</p>
                                  </div>
                                  <div class="col-sm-4 container-padding0">
                                  <p class="size-16 font-gray-ccc">{{ins_troubleCount.dangerCount.dangerResolved}}</p>
                                  <p>危险品处理</p>
                                  </div>
                                </template>
                            </div>
                          </div>
                      </div>
                      
                  </section>
                  <section>
                      <div class="toolcount">
                          <h4 class="p-title">各类型隐患占比</h4>
                          <div id="dan_charpiemax" style="width: 100%;height:200px;margin: 0 auto;text-align: center;"></div>
                      </div>
                  </section>
                  <section>
                      <div class="toolcount">
                          <h4 class="p-title">隐患历史趋势
                            <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                              <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                            </span>
                          </h4>
                          <div id="dan_charline" style="width: 100%;height:160px;margin: 0 auto;"></div>
                      </div>
                  </section>
              </section>

              <section class="dan-iteminfo display-none overflow-scr">
                <a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
                  <!-- <section>
                      <div class="personinfo">
                          <p>
                          <span class="size-20">A365 F57D 的设备详情</span>
                          <span class="bgbox-min bg-gray-666 font-black">消防栓报警按钮</span>
                          <span class="float-right">
                                  <span class="bgbox-max bg-gray-333 font-gray-999 size-10">灭火设备</span>
                              </span>
                          </p>
                          <p>
                              <span>
                                  <i class="fas fa-industry"></i> 良庆区中心小学</span>
                          </p>
                      </div>
                  </section>-->
                <section>
                  <div class="textandimg row imgs-nthof-block">
                    <h4 class="p-title">隐患信息</h4>
                    <div class="row textandimg-main padding-left15">
                      <div class="col-sm-12">
                        <span class="size-12 font-gray-666">隐患类型 </span>
                        <span class="size-12 font-gray-999">{{ins_troubleDetail.type}}</span>
                      </div>
                      <div class="col-sm-12">
                        <span class="size-12 font-gray-666">发现隐患时间 </span>
                        <span class="size-12 font-gray-999">{{ins_troubleDetail.createTime}}</span>
                      </div>
                      <div class="col-sm-12">
                        <span class="size-12 font-gray-666">隐患地点 </span>
                        <span class="size-12 font-gray-999">{{ins_troubleDetail.unitName}}</span>
                      </div>
                      <div class="col-sm-12">
                        <span class="size-12 font-gray-666">隐患描述 </span>
                        <span class="size-12 font-gray-999">{{ins_troubleDetail.cont}}</span>
                      </div>
                      <div class="textandimg-img imgs-nthof">
                        <template v-for="item in ins_troubleDetail.imgUrl">
                          <div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
                            <video :src="item" width="100%"  controls="controls"></video>
                          </div>
                        </template>
                        <template v-for="item in ins_troubleDetail.imgUrl">
                          <div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
                            <img :src="item">
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="textandimg row imgs-nthof-block ">
                    <h4 class="p-title">隐患解决</h4>
                    <div class="row textandimg-main padding-left15">
                      <div class="col-sm-12">
                        <span class="size-12 font-gray-666">解决人 </span>
                        <span class="size-12 font-gray-999">{{ins_troubleDetail.nickName}}</span>
                      </div>
                      <div class="col-sm-12">
                        <span class="size-12 font-gray-666">隐患解决时间 </span>
                        <span class="size-12 font-gray-999">{{ins_troubleDetail.reviewTime}}</span>
                      </div>
                      <div class="textandimg-img imgs-nthof">
                        <template v-for="item in ins_troubleDetail.confirmUrls">
                          <div class="col-sm-3" v-if="item.substring(item.length -3)=='mp4'">
                            <video :src="item" width="100%"  controls="controls"></video>
                          </div>
                        </template>
                        <template v-for="item in ins_troubleDetail.confirmUrls">
                          <div class="col-sm-3" v-if="item.substring(item.length -3)=='jpg' || item.substring(item.length-3)=='png'">
                            <img :src="item">
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
          </div>
          <div class="ceshi-btn">
            <!-- <button @click="moren">详情</button> -->
            <button @click="jianzhu">统计</button>
          </div>
        </div>

      </template>

    </section>

    <!-- #右边 End-->
  </div>
</template>

<script>
import HeaderVue from "../publick/header.vue";
export default {
  components: {
    "header-vue": HeaderVue
  },
  data() {
    return {
      // 表格-请求
      // troubleList_parameter: {
      //   id: null,
      //   unitId: 4,
      //   type: null,
      //   inspectionName: null,
      //   status: null,
      //   currentPage: "1",
      //   pageSize: 10
      // },
      // // 表格返回
      // tableData: Object,
      // 时间配置
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value7: "",

      ins_queryInspectionNameList: Object,
      ins_queryInspectionNameListvalue: "全部类型",
      // 表格-请求
      troubleList_parameter: {
        unitId: "4",
        currentPage: 1,
        pageSize: 10
      },
      // 表格-请求
      tableData: Object,
      queryTroubleStats_parameter: {
        unitId: "4"
      },

      ins_queryTroubleStats: Object,
      // 饼图数据
      troubleCount_parameter:{
        unitId:'4',
        beginTime:'2018-07-01',
        endTime:'2018-07-12'
      },
      ins_troubleCount:Object,
      // 折线图数据
      troubleRate_parameter:{
        unitId:'4',
        beginTime:'2018-06-21',
        endTime:'2018-07-12',
        type:2
      },
      ins_troubleRate:Object,
      // 隐患详情
      troubleDetail_parameter:{
        troubleId:156
      },
      ins_troubleDetail:Object,
    };
  },
  methods: {
    jianzhu() {
      $(".dan-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    toitmeinfo(item){
      $(".dan-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
      // 请求隐患详情
      this.troubleDetail_parameter.troubleId=item.id;
      this.$fetch(
        "/api/trouble/troubleDetail",
        this.troubleDetail_parameter
      )
      .then(response => {
        if (response) {
          console.log(response);
          this.ins_troubleDetail = response.data.trouble;
        }
      })
      .then(err => {
        console.log(err);
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页:` + val);
      this.troubleList_parameter.currentPage = val;
      this.getTable();
    },
    tolineitem() {
      console.log(this.ins_queryInspectionNameListvalue);
      $("#lookroute").removeClass("upd-btn-dis");
    },
    getTable() {
      // 请求隐患列表
      this.$fetch("/api/trouble/troubleList", this.troubleList_parameter)
        .then(response => {
          if (response) {
            console.log(response);
            this.tableData = response.data.pager;
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    getData() {
      // 请求隐患统计
      this.$fetch(
        "/api/trouble/queryTroubleStats",
        this.queryTroubleStats_parameter
      )
      .then(response => {
        if (response) {
          console.log(response);
          this.ins_queryTroubleStats = response.data.result;
        }
      })
      .then(err => {
        console.log(err);
      });

      // 请求隐患饼图数据
      this.$fetch(
        "/api/trouble/troubleCount",
        this.troubleCount_parameter
      )
      .then(response => {
        if (response) {
          this.ins_troubleCount = response.data;
          this.draw_piemin('dan_charpiemin',this.ins_troubleCount.troubleCount);
          this.draw_piemax('dan_charpiemax',this.ins_troubleCount.troubleRatio);
        }
      })
      .then(err => {
        console.log(err);
      });

      // 请求折线图数据
      this.$fetch(
        "/api/trouble/troubleRate",
        this.troubleRate_parameter
      )
      .then(response => {
        if (response) {
          this.ins_troubleRate = response.data;
          console.log(this.ins_troubleRate);
          this.draw_line('dan_charline',response.data.troubleRate);
        }
      })
      .then(err => {
        console.log(err);
      });
    },
    draw_piemin(id, data) {
      var fin_per = data.decideCount / data.troubleAll * 100;
      let d;
      if(data.troubleAll==0){
        d=[
          {
            value: 0,
            name: "暂无统计",
            label: {
              normal: {
                position: "inner",
                show: true
              }
            }
          }
        ];
      }else{
        d = [
        {
          value: data.decideCount,
          name: "解决率 " + fin_per.toFixed(2) + "%",
          label: {
            normal: {
              position: "inner",
              show: true
            }
          }
        },
        {
          value: data.troubleAll - data.decideCount,
          name: "未完成",
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              position: "inner",
              show: false
            }
          }
        }
      ];
      }
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 3) == "解决率") {
              name = "已完成";
            } else {
              name = data.name;
            }
            return name + ":" + data.value + "个";
          }
        },
        series: [
          {
            name: "说明:",
            type: "pie",
            radius: [0, "70%"],
            color: ["#bad616", "#333"],
            data: d
          }
        ]
      };
      let chars = this.$echarts.init(document.getElementById(id));
      chars.setOption(char);
    },
    draw_piemax(id, data) {
      let count=data.damageCount+data.lackCount+data.peopleCount+data.unPeopleCount+data.dangerCount;
      let d = [
        {
          value: data.damageCount,
          // value: 2,
          name: "损坏" + (data.damageCount/count*100).toFixed(2) + "%",
        },
        {
          value: data.lackCount,
          // value: 4,
          name: "缺失" + (data.lackCount/count*100).toFixed(2) + "%",
        },
        {
          value: data.peopleCount,
          // value: 8,
          name: "人为因素" + (data.peopleCount/count*100).toFixed(2) + "%",
        },
        {
          value: data.unPeopleCount,
          // value: 10,
          name: "非人为因素" + (data.unPeopleCount/count*100).toFixed(2) + "%",
        },
        {
          value: data.dangerCount,
          // value: 6,
          name: "危险品" + (data.dangerCount/count*100).toFixed(2) + "%",
        },
      ];
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 2) == "损坏") {
              name = "损坏";
            } else if (data.name.substring(0, 2) == "缺失"){
              name = "缺失";
            } else if (data.name.substring(0, 2) == "人为"){
              name = "人为因素";
            } else if (data.name.substring(0, 2) == "非人"){
              name = "非人为因素";
            } else if (data.name.substring(0, 2) == "危险"){
              name = "危险品";
            }
            return name + ":" + data.value + "个";
          }
        },
        series: [
          {
            name: "说明:",
            type: "pie",
            radius: [0, "70%"],
            color: ["#bad616", "#c69e00","#ff7800", "#f13131","#ccc"],
            data: d
          }
        ]
      };
      let chars = this.$echarts.init(document.getElementById(id));
      chars.setOption(char);
    },
    draw_line(id, data) {
      // 巡检完成率历史趋势曲线图
      // let data = response.data.result.dateMap;
        let a=[],b=[];
        for (var value in data) {			
        a.push(value);
        b.push(data[value]);
      }
      console.log(a);
      console.log(b);
      var char = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: a,
          show: true,
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          }
        },

        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ["#333"]
            }
          }
        },

        // 调整实际显示的 margin
        grid: {
          y: 30,
          x2: 10,
          y2: 30,
          x: 40,
          borderWidth: 1
        },
        // 数据
        series: [
          {
            data: b,
            type: "line",
            symbol: "none",
            smooth: true,
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#999"
                }
              ]
            }
          }
        ],
        tooltip: {
          enterable: true,
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          }
        }
      };
      let charf = this.$echarts.init(document.getElementById(id));
      charf.setOption(char);
    },
  },
  mounted() {
    this.$store.commit('route_path',this.$route.path);
    this.getTable();
    this.getData();
  }
};
</script>

<style scoped>
  .line-height40{
    line-height: 57px;
  }
</style>
