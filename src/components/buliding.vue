<template>
  <div class="row" id="building">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left z-index-20">
      <div class="overlay"></div>
      <template>
        <div class="toolleft margin-right0">
          <section>
            <div class="row toolcount">
              <div class="col-sm-6 font-gray-999 padding-right0">
                <ul class="toolcount-left margin-bottom0 padding-left37" id="toolcount">
                  <li>
                    <h1 class="toolcount-p1">26</h1>
                  </li>
                  <li>
                    <p class="size-10">Building Total</p>
                  </li>
                  <li>
                    <p class="size-18 font-blue">当前建筑总数</p>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 font-gray-999 padding-left0 padding-right0 size-12">
                <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                  <li>
                    <p class="set-width-50">辖区单位</p>
                    <p class="display-inline-block font-white font-italic size-14">452</p>
                  </li>
                  <li>
                    <p class="set-width-50">重要建筑</p>
                    <p class="display-inline-block font-yellow font-italic size-14">34</p>
                  </li>
                  <li>
                    <p class="set-width-50">超高层建筑</p>
                    <p class="display-inline-block font-blue font-italic size-14">4</p>
                  </li>
                  <li>
                    <p class="set-width-50">高危结构</p>
                    <p class="display-inline-block font-red font-italic size-14">567</p>
                  </li>
                  <li>
                    <p class="set-width-50">微型消防站</p>
                    <p class="display-inline-block font-blue font-italic size-14">178</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div class="toolcompanyrate margin-top50">
              <ul class="row padding0 margin0 size-12 font-gray-999">
                <li class="col-sm-6">
                  <div class="row margin0 padding0">
                    <div class="toolcompanyrate-char col-sm-7 padding-top10 padding-left5">
                      <small class="font-red">
                        实验教学楼
                      </small>
                      <p class="size-16">最低评分</p>
                    </div>
                    <div class="col-sm-5 padding-left0 text-left">
                      <span class="size-40 font-red">2.6</span>
                    </div>
                  </div>
                </li>
                <li class="col-sm-6">
                  <div class="row margin0 padding0">
                    <div class="toolcompanyrate-char col-sm-7 padding-top10 padding-left5">
                      <small class="font-yellow">
                        职工楼22号
                      </small>
                      <p class="size-16">最高评分</p>
                    </div>
                    <div class="col-sm-5 padding-left0 text-left">
                      <span class="size-40 font-yellow">8.7</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div class="toolroute font-gray-ccc margin-left37">
              <span class="toolroute-rect bg-blue"></span>
              <ul class="padding-left10 padding-right5 clearfix">
                <li>
                  <p class="font-gray-666 size-12">中心小学</p>
                </li>
                <li>
                  <p class="font-blue size-16">建筑信息
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                    </span>
                  </p>
                </li>
                <li>
                  <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="全部单位"  @change="tolineitem">
                    <el-option v-for="item in ins_queryInspectionNameList" :key="item.name" :label="item.name" :value="item.name">
                      </el-option>
                  </el-select>
                </li>
                <li>
                    <table class="table table-responsive size-12 table-condensed toolroute-table margin-top10">
                      <thead>
                      <tr>
                        <th>序号</th>
                        <th>建筑名称</th>
                        <th>所属单位</th>
                        <th>房间</th>
                        <th>设备</th>
                        <th>位置</th>
                        <th>操作</th>
                      </tr>
                      </thead>
                      <tbody id="">
                      <tr>
                        <td>1</td>
                        <td>实验室教学楼1号</td>
                        <td>中心小学</td>
                        <td>124</td>
                        <td>318</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>瑞和家园3号商业楼</td>
                        <td>瑞和家园</td>
                        <td>108</td>
                        <td>424</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>瑞和家园1号商业楼</td>
                        <td>瑞和家园</td>
                        <td>108</td>
                        <td>373</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>四年级教学楼</td>
                        <td>中心小学</td>
                        <td>20</td>
                        <td>72</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>瑞和家园2号楼</td>
                        <td>瑞和家园</td>
                        <td>124</td>
                        <td>318</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>瑞和家园2号楼</td>
                        <td>瑞和家园</td>
                        <td>88</td>
                        <td>248</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>六年级教学楼</td>
                        <td>中心小学</td>
                        <td>12</td>
                        <td>36</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>二年级教学楼</td>
                        <td>中心小学</td>
                        <td>12</td>
                        <td>89</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>瑞和家园7号楼</td>
                        <td>瑞和家园</td>
                        <td>124</td>
                        <td>364</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>实验室教学楼12号</td>
                        <td>中心小学</td>
                        <td>68</td>
                        <td>675</td>
                        <td>
                          <a v-on:click="toitmeinfo(item)">
                            <i class="el-icon-location" data-toggle="tooltip" title="查看位置"></i>
                          </a>
                        </td>
                        <td>
                          <a @click="moren">
                          <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                </li>
                <li>
                  <span class="size-12">分页</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </template>
    </section>
    <!-- #左边 End-->
    <!-- #右边 -->
    <section id="right" class="position-fixed-right z-index-20">
      <div class="overlay"></div>
      <template>
        <div class="toolright">
          <!-- 筛选 -->
            <section class="my-filter padding5 bg-gray-222 clearfix">
                      <!-- 单位筛选 -->
                      <div class="col-sm-3 padding0">
                        <el-select class="upd-elselect bg-black upd-widht100" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="全部单位">
                          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                          </el-option>
                        </el-select>
                      </div>
                      <!-- 日期筛选 -->
                      <div class="col-sm-9 padding0">
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
                      </div>
            </section>
            <!-- 详情 -->
            <section class="bulid-iteminfo display-none">
              <a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>                
                <div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                    <!-- 已选择 -->
                    <div class="personinfo">
                            <p>
                            <span class="size-20 font-blue">实验教学楼</span>
                            <span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                            <span class="float-right">
                                    <span class="bgbox-max bg-gray-333 font-gray-999 size-10">灭火设备</span>
                                </span>
                            </p>
                            <p class="col-sm-7 text-left padding0">
                                <span>
                                    <i class="fas fa-industry"></i> 广西省南宁市良庆区银海大道710-2号</span>
                            </p>
                            <P class="col-sm-5 text-right padding0">
                                <span class="text-right">
                                录入时间：<span class="font-gray-999">2018.07.09 08:00:00</span>
                                </span>
                            </P>                        
                    </div>
                </div>
                <section>
                  <div class="row toolcount margin-top20">
                      <div class="col-sm-4 font-gray-999 padding-right0">
                        <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                          <li>
                            <h1 class="toolcount-p1">360</h1>
                          </li>
                          <li>
                            <p class="size-10 ">Running State</p>
                          </li>
                          <li>
                            <p class="size-16 font-blue">总房间数量</p>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
                        <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                          <li>
                            <p class="size-18 font-white">信息统计</p>
                          </li>
                          <li>
                            <p class="size-10 set-scaleright">Repair Statistics</p>
                          </li>
                          <li>
                            <p class="set-width-50">楼层数量 <span class="font-gray-ccc">14 </span>&nbsp;&nbsp; 预案 <span class="font-gray-ccc">6 </span> </p>
                            <p class="set-width-50">使用 <span class="font-gray-ccc">10</span>年<span class="font-gray-ccc">12</span>月</p>
                            </li>
                          <li class="row text-center padding-right16 margin-top10">
                            <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-white">4563</p>
                              <p>设备总数</p>
                            </div>
                            <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-white">538</p>
                              <p>隐患总数</p>
                            </div>
                            <div class="col-sm-4">
                              <p class="size-16 show font-white">678</p>
                              <p>隐患总数</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                  </div>
                </section>
                <section>
                    <div class="textandimg margin-top30">
                        <h4 class="p-title">建筑信息</h4>
                        <div class="row textandimg-main margin-top20 size-12">
                            <div class="col-sm-6">
                                <span>建筑用途 </span>
                                <strong>公共 </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>建筑类型 </span>
                                <strong>超高层</strong>
                            </div>

                            <div class="col-sm-6">
                                <span>建筑年份 </span>
                                <strong>2014年 </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>结构类型 </span>
                                <strong>钢混</strong>
                            </div>

                            <div class="col-sm-6">
                                <span>楼层数量 </span>
                                <strong>14层</strong>
                            </div>
                            <div class="col-sm-6">
                                <span>房间数量 </span>
                                <strong>112个</strong>
                            </div>

                            <div class="col-sm-6">
                                <span>占地面积 </span>
                                <strong>2354 m² </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>建筑高度 </span>
                                <strong>545m</strong>
                            </div>
                            <div class="col-sm-6">
                                <span>建筑经度 </span>
                                <strong>12.54951 </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>建筑维度 </span>
                                <strong>26.6659</strong>
                            </div>
                            <div class="col-sm-6">
                                <span>管理单位 </span>
                                <strong>中心小学 </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>负 责 人 </span>
                                <strong>赵堆船</strong>
                            </div>

                            <div class="col-sm-6">
                                <span>平 面 图 </span>
                                <strong>按钮 </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>建筑标码 </span>
                                <strong>按钮</strong>
                            </div>                    
                        </div>
                    </div>
                </section>
                <section>
                  <div class="row toolcount margin-top30">
                    <h4 class="p-title">
                      历史趋势
                      <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666" data-toggle="tooltip" title="全屏">
                              <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                          </span>
                    </h4>
                    <div id="myChart" style="width: 100%;height:180px;margin: 0 auto;"></div>
                  </div>
                </section>
            </section>
            <!-- 统计 -->
            <section class="bulid-lineinfo">
              <div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                        <!-- 已选择 -->
                        <div class="personinfo">
                            <p>
                            <span class="size-20 font-blue">中心小学</span>
                            <span class="float-right">
                                    <span class="bgbox-max bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                                </span>
                            </p>
                            <p class="col-sm-7 text-left padding0">
                                <span>
                                    <i class="fas fa-industry"></i> 良庆区中心小学</span>
                            </p>
                            <P class="col-sm-5 text-right padding0">
                                <span class="text-right">
                                录入时间：<span class="font-gray-999">2018.07.09 08:00:00</span>
                                </span>
                            </P>                        
                        </div>
              </div>
              <section>
                <div class="toolcount margin-top20">
                  <h4 class="p-title">建筑统计</h4>
                  <div class="col-sm-7 font-gray-999 padding-right0 size-12">
                    <div class="row text-center margin-top30">
                      <div class="col-sm-12 text-left margin-bottom20">
                              <p>总数 <span class="font-white">263 </span></p>
                            </div>
                      <div class="col-sm-4 personnel-borderright">
                        <p class="size-16 font-white">42</p>
                        <p>建筑总数</p>
                      </div>
                      <div class="col-sm-4 personnel-borderright">
                        <p class="size-16 font-white">无</p>
                        <p>室外设备</p>
                      </div>
                      <div class="col-sm-4">
                        <p class="size-16 font-white">25</p>
                        <p>室内设备</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-5 font-gray-999 padding-left0 padding-right0">
                    <div id="pieb1" style="width: 100%;height:150px;margin: 0 auto;"></div>
                  </div>
                </div>
              </section>
              <section>
                <div class="toolcount">
                  <h4 class="p-title">建筑信息</h4>
                  <div class="row margin-top20 padding-left10">
                        <el-radio-group v-model="bulidvalue">
                          <el-radio :label="1" class="col-xs-3">房间<strong>380</strong></el-radio>
                          <el-radio :label="2" class="col-xs-3">设备<strong>380</strong></el-radio>
                          <el-radio :label="3" class="col-xs-3">预案<strong>380</strong></el-radio>
                          <el-radio :label="4" class="col-xs-3">警报<strong>380</strong></el-radio>
                          <el-radio :label="5" class="col-xs-3">隐患<strong>380</strong></el-radio>
                        </el-radio-group>
                    </div>
                  <div id="axis1" style="width: 100%;height:200px;margin: 0 auto;"></div>
                </div>
              </section>
              <section>
                <div class="toolcount margin-top30">
                  <h4 class="p-title">
                    历史趋势
                    <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                    </span>
                  </h4>
                  <div id="myChart" style="width: 100%;height:180px;margin: 0 auto;"></div>
                </div>
              </section>
          </section>
        </div>
      </template>
    </section>
    <!-- #右边 End-->
  </div>
</template>

<script>
  import HeaderVue from './header.vue';
  export default {
    components:{
      'header-vue':HeaderVue
    },
    mounted() {
      this.$store.commit('route_path',this.$route.path);
      // console.log(this.$route.path);
      // this.$router.path
      
    }
  }
</script>
<script>
  import HeaderVue from './header.vue';
  export default {
  components:{
      'header-vue':HeaderVue
  },
  data() {
    return {
      // 单选按钮
      bulidvalue:1,
      // 时间筛选
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
    };
  },
  methods: {
    moren() {
      $(".bulid-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".bulid-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    jianzhu() {
      $(".bulid-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".bulid-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    chart_one() {
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "123", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        // 图例
        legend: {
          data: ["高", "低"]
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
            data: [100, 499, 50, 1111, 45, 345, 907],
            name: "低",
            type: "line",
            symbol: "none",
            smooth: true,
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#333"
                }
              ]
            }
          },
          {
            data: [300, 950, 900, 800, 700, 600, 700],
            name: "高",
            type: "line",
            symbol: "none",
            smooth: true,
            areaStyle: { normal: {} },
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(255,255,255,0.3)" // 0% 处的颜色
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
      var pie = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "70%"],
            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            color: ["#bad616", "#333"],
            data: [
              { value: 335, name: "50%", selected: true },
              { value: 679, name: "" }
            ]
          }
        ]
      };

      // 根据值判断柱子颜色的柱状图
      var option1 = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            show: true,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "12"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false
          }
        ],
        grid: {
          y: 40,
          x2: 0,
          y2: 20,
          x: 0,
          borderWidth: 1
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220, 192],
            itemStyle: {
              normal: {
                // 值显示在柱子顶部
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: function(params) {
                      if (params.value > 0 && params.value < 100) {
                        return "#333333";
                      } else if (params.value >= 100 && params.value <= 200) {
                        return "#666666";
                      } else if (params.value >= 200 && params.value <= 300) {
                        return "#999999";
                      }
                      return "#bad616";
                    }
                  },
                  formatter: function(params) {
                    if (params.value == 0) {
                      return "";
                    } else {
                      return params.value;
                    }
                  }
                },
                color: function(params) {
                  if (params.value > 0 && params.value < 100) {
                    return "#333333";
                  } else if (params.value >= 100 && params.value <= 200) {
                    return "#666666";
                  } else if (params.value >= 200 && params.value <= 300) {
                    return "#999999";
                  }
                  return "#bad616";
                }
              }
            }
          }
        ]
      };
        // 横向柱子
            var riskchar1f = {
                            tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '0',
                    right: '0',
                    bottom: '0',
                    top:'0'
                },
                xAxis:  {
                    type: 'value',
                    show:false
                },
                yAxis: {
                    type: 'category',
                    show:false
                },
                series: [
                    {
                        name: '搜索引擎',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                color:'#000'
                            }
                        },
                        itemStyle: {
                        normal: {
                            
                            color: function(params) {
                            if (params.value > 0 && params.value < 300) {
                                return "#333333";
                            } else if (params.value >= 100 && params.value <= 600) {
                                return "#666666";
                            } else if (params.value >= 200 && params.value <= 900) {
                                return "#999999";
                            }
                            return "#bad616";
                            }
                        }
                        },
                        data: [220, 532, 901]
                    }
                ]
            };
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
      let myChart2 = this.$echarts.init(document.getElementById("myChart1"));
      myChart2.setOption(option);
      let mypie1 = this.$echarts.init(document.getElementById("pieb1"));
      mypie1.setOption(pie);
      let myChart1 = this.$echarts.init(document.getElementById("axis1"));
      myChart1.setOption(option1);
    }
  },
  mounted() {
    this.chart_one();
    this.$store.commit('route_path',this.$route.path);
      // console.log(this.$route.path);
      // this.$router.path
    
  }
};
</script>
