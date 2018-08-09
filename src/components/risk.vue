<template>
  <div id="risk" class="row">
    <!-- #头部 -->
    <header-vue></header-vue>
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left z-index-20">
      <div class="overlay"></div>
      <template>
        <div class="toolleft margin-right0">
          <section>
              <div class="tool-charmax">
                  <div>
                      <!--需要按照  1.16/1 的宽高比例进行创建 可自适应布局-->
                      <canvas id="canvas-big" width="260" height="200"></canvas>
                  </div>
                  <div class="tool-charmaxvalue">
                      <p class="line-height86 size-60 font-blue"><span class="size-100">8</span>.7</p>
                      <div id="myChart1" style="width: 130%;height:50px;margin: 0 auto;"></div>
                  </div>
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
                  <p class="font-blue size-16">风险评估
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                    </span>
                  </p>
                </li>
                <li>
                  <div class="table-responsive">
                    <table class="table size-12 table-condensed toolroute-table margin-top10">
                    <thead>
                      <tr>
                        <th>序号</th>
                        <th>建筑名称</th>
                        <th>所属单位</th>
                        <th class="safe">安全评分</th>
                        <th class="risk">风险系数</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>瑞和家园3号楼</td>
                        <td>瑞和家园</td>
                        <td class="safe">
                         <span class="bgbox-max bg-red font-black" data-toggle="tooltip" title="安全评分">1.9</span> 
                        </td>
                        <td class="risk">91.86%</td>
                        <td>
                          <a @click="moren">
                            <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>实验教学楼7号</td>
                        <td>实验小学</td>
                        <td class="safe">
                         <span class="bgbox-max bg-orange font-black" data-toggle="tooltip" title="安全评分">2.7</span> 
                        </td>
                        <td class="risk">73.14%</td>
                        <td>
                          <a @click="moren">
                            <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>三年级教学楼</td>
                        <td>实验小学</td>
                        <td class="safe">
                         <span class="bgbox-max bg-orange font-black" data-toggle="tooltip" title="安全评分">3.3</span> 
                        </td>
                        <td class="risk">65.89%</td>
                        <td>
                          <a @click="moren">
                            <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>二年级教学楼</td>
                        <td>实验小学</td>
                        <td class="safe">
                         <span class="bgbox-max bg-yellow font-black" data-toggle="tooltip" title="安全评分">4.3</span> 
                        </td>
                        <td class="risk">56.92%</td>
                        <td>
                          <a @click="moren">
                            <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>瑞和家园8号</td>
                        <td>瑞和家园</td>
                        <td class="safe">
                         <span class="bgbox-max bg-yellow font-black" data-toggle="tooltip" title="安全评分">4.8</span> 
                        </td>
                        <td class="risk">54.73%</td>
                        <td>
                          <a @click="moren">
                            <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>三年级教学楼</td>
                        <td>实验小学</td>
                        <td class="safe">
                         <span class="bgbox-max bg-blue font-black" data-toggle="tooltip" title="安全评分">7.7</span> 
                        </td>
                        <td class="risk">31.74%</td>
                        <td>
                          <a @click="moren">
                            <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>瑞和家园7号</td>
                        <td>瑞和家园</td>
                        <td class="safe">
                         <span class="bgbox-max bg-blue font-black" data-toggle="tooltip" title="安全评分">8.4</span> 
                        </td>
                        <td class="risk">23.86%</td>
                        <td>
                          <a @click="moren">
                            <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>瑞和家园12号</td>
                        <td>瑞和家园</td>
                        <td class="safe">
                         <span class="bgbox-max bg-blue font-black" data-toggle="tooltip" title="安全评分">8.7</span> 
                        </td>
                        <td class="risk">20.47%</td>
                        <td>
                          <a @click="moren">
                            <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>五年级教学楼</td>
                        <td>实验小学</td>
                        <td class="safe">
                         <span class="bgbox-max bg-blue font-black" data-toggle="tooltip" title="安全评分">9.0</span> 
                        </td>
                        <td class="risk">13.07%</td>
                        <td>
                          <a @click="moren">
                            <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>一年级教学楼</td>
                        <td>实验小学</td>
                        <td class="safe">
                         <span class="bgbox-max bg-blue font-black" data-toggle="tooltip" title="安全评分">9.2</span> 
                        </td>
                        <td class="risk">10.35%</td>
                        <td>
                          <a @click="moren">
                            <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="查看详情"></i>
                          </a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
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
                          <el-select class="upd-elselect bg-black upd-widht100" size="mini" v-model="value7" placeholder="请选择">
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
            <section class="risk-iteminfo display-none" >
              <a class="btn-back" @click="jianzhu"><i class="el-icon-arrow-left"></i>返回</a>
              <section>
                <div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                          <!-- 已选择 -->
                          <div class="personinfo">
                              <p>
                              <span class="size-20 font-blue">中心小学</span>                        
                              <span class="float-right">
                                  <span class="bgbox-max bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                              </span>
                              </p>
                              <p class="col-sm-5 text-left padding0">
                                  <span>
                                      <i class="fas fa-industry"></i> 良庆区中心小学</span>
                              </p>
                              <P class="col-sm-7 text-right padding0">
                                  <span class="text-right">
                                  最新更新<span class="font-gray-999">2018.07.09 08:00:00</span>
                                  </span>
                              </P>                        
                          </div>
                  </div>
              </section>
              <section>
                <div class="toolcount margin-top10 clearfix">
                  <!-- <h4 class="p-title">安全评分</h4> -->
                  <div class="col-sm-4 font-gray-999 padding-right0 margin-top40">
                    <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                      <li>
                        <p class="line-height86 size-60 font-blue"><span class="size-100">8</span>.7</p>
                      </li>
                      <li>
                        <div id="riskchar1" style="width: 130%;height:50px;margin: 0 auto;"></div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-8 font-gray-999 padding-left0 padding-right0 margin-top0">
                    <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                      <li>
                        <!-- <p class="size-18 font-gray-ccc">路线统计</p>s -->
                        <div id="riskchar2" style="width: 230px;height:150px;margin: 0 auto;"></div>
                      </li>
                    </ul>              
                  </div>
                </div>
              </section>

              <section id="inspectbtn-company">
                <div class="toolcompanyrate">
                    <h4 class="p-title">单项风险</h4>
                  <ul class="row padding0 margin0 size-12 font-gray-999">
                    <li class="col-sm-4">
                      <div class="row margin0 padding0">
                        <div class="toolcompanyrate-char col-sm-6 padding0">
                          <p>
                            <span class="toolcompanyrate-char-bg">
                                <span class="toolcompanyrate-char-qg" style="width:50%;"></span>
                            </span>
                          </p>
                          <p>瑞和家园</p>
                        </div>
                        <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                          <span class="">97.6%</span>
                        </div>
                      </div>
                    </li>
                    <li class="col-sm-4">
                      <div class="row margin0 padding0">
                        <div class="toolcompanyrate-char col-sm-6 padding0">
                          <p>
                                        <span class="toolcompanyrate-char-bg">
                                            <span class="toolcompanyrate-char-qg" style="width:79%;"></span>
                                        </span>
                          </p>
                          <p>实验教学楼</p>
                        </div>
                        <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                          <span class="">97.6%</span>
                        </div>
                      </div>
                    </li>
                    <li class="col-sm-4">
                      <div class="row margin0 padding0">
                        <div class="toolcompanyrate-char col-sm-6 padding0">
                          <p>
                                        <span class="toolcompanyrate-char-bg">
                                            <span class="toolcompanyrate-char-qg" style="width:15%;"></span>
                                        </span>
                          </p>
                          <p>体育教学楼</p>
                        </div>
                        <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                          <span class="">97.6%</span>
                        </div>
                      </div>
                    </li>
                    <li class="col-sm-4">
                      <div class="row margin0 padding0">
                        <div class="toolcompanyrate-char col-sm-6 padding0">
                          <p>
                                        <span class="toolcompanyrate-char-bg">
                                            <span class="toolcompanyrate-char-qg" style="width:67%;"></span>
                                        </span>
                          </p>
                          <p>瑞和商业楼</p>
                        </div>
                        <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                          <span class="">97.6%</span>
                        </div>
                      </div>
                    </li>
                    <li class="col-sm-4">
                      <div class="row margin0 padding0">
                        <div class="toolcompanyrate-char col-sm-6 padding0">
                          <p>
                                        <span class="toolcompanyrate-char-bg">
                                            <span class="toolcompanyrate-char-qg" style="width:34%;"></span>
                                        </span>
                          </p>
                          <p>音乐大厅</p>
                        </div>
                        <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                          <span class="">97.6%</span>
                        </div>
                      </div>
                    </li>
                    <li class="col-sm-4">
                      <div class="row margin0 padding0">
                        <div class="toolcompanyrate-char col-sm-6 padding0">
                          <p>
                                        <span class="toolcompanyrate-char-bg">
                                            <span class="toolcompanyrate-char-qg" style="width:22%;"></span>
                                        </span>
                          </p>
                          <p>会议中心</p>
                        </div>
                        <div class="col-sm-6 padding-top7 padding-left5 padding-right5 font-blue size-16 text-center">
                          <span class="">97.6%</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
              <section>
                <div class="toolcount margin-top30">
                  <h4 class="p-title">
                    安全评分变化趋势
                    <span class="float-right xunjian-left-main-bottom-padding8 popup-inspectbtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-14"></i>
                    </span>
                  </h4>
                  <div id="riskchar3" style="width: 100%;height:180px;margin: 0 auto;"></div>
                </div>
              </section>

              
            </section>

            <section class="risk-lineinfo">
              <section>
                <div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                          <!-- 已选择 -->
                          <div class="personinfo">
                              <p>
                              <span class="size-20 font-blue">中心小学</span>                        
                              <span class="float-right">
                                  <span class="bgbox-max bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                              </span>
                              </p>
                              <p class="col-sm-5 text-left padding0">
                                  <span>
                                      <i class="fas fa-industry"></i> 良庆区中心小学</span>
                              </p>
                              <P class="col-sm-7 text-right padding0">
                                  <span class="text-right">
                                  最新更新<span class="font-gray-999">2018.07.09 08:00:00</span>
                                  </span>
                              </P>                        
                          </div>
                  </div>
              </section>
              <section>
                <div class="toolcount margin-top20">
                  <h4 class="p-title">安全评分</h4>
                  <div class="col-sm-7 font-gray-999 padding-right0 size-12">
                    <div class="row text-center margin-top30">
                      <div class="col-sm-12 text-left margin-bottom20">
                              <p class="">单位评分 <span class="font-blue">3处</span> <span>低于</span> <span>4.0</span></p>
                            </div>
                      <div class="col-sm-4 personnel-borderright">
                        <p class="size-16 font-red">2</p>
                        <p>红色预警</p>
                      </div>
                      <div class="col-sm-4 personnel-borderright">
                        <p class="size-16 font-orange">无</p>
                        <p>橙色预警</p>
                      </div>
                      <div class="col-sm-4">
                        <p class="size-16 font-yellow">3</p>
                        <p>黄色预警</p>
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
                  <h4 class="p-title">风险系数</h4>
                  <div class="row margin-top20 padding-left10">
                        <el-radio-group v-model="workervalue">
                          <el-radio :label="1" class="col-xs-3">建筑防火</el-radio>
                          <el-radio :label="2" class="col-xs-3">消防设施</el-radio>
                          <el-radio :label="3" class="col-xs-3">火灾危险源</el-radio>
                          <el-radio :label="4" class="col-xs-3">消防安全管理</el-radio>
                          <el-radio :label="5" class="col-xs-3">灭火救援</el-radio>
                        </el-radio-group>
                    </div>
                  <div id="axis1" style="width: 100%;height:200px;margin: 0 auto;"></div>
                </div>
              </section>
              <section>
                <div class="toolcount margin-top40">
                  <h4 class="p-title">安全评分变化趋势
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-12"></i>
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
  // import Risk_leftVue from './risk_left.vue';
  // import Risk_rightVue from './risk_right.vue';
  export default {
    components:{
      'header-vue':HeaderVue,
      // 'risk_left-vue':Risk_leftVue,
      // 'risk_right-vue':Risk_rightVue
    },
    data() {
    return {
      // 单选按钮
      workervalue:1,
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
      options: [
        {
          value: "选项1",
          label: "路线名称1"
        },
        {
          value: "选项2",
          label: "路线名称2"
        },
        {
          value: "选项3",
          label: "路线名称3"
        },
        {
          value: "选项4",
          label: "路线名称4"
        },
        {
          value: "选项5",
          label: "路线名称5"
        }
      ],
    };
  },
  methods: {
    moren() {
      $(".risk-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".risk-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    jianzhu() {
      $(".risk-lineinfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".risk-iteminfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
   
        chart_left(){
          function go(num) {
          //清除画布,每次重绘
          var canvas_big = document.getElementById("canvas-big");
          var cxt = canvas_big.getContext("2d");
          canvas_big.width = canvas_big.width;
          canvas_big.height = canvas_big.height;
                    cxt.fillStyle='rgba(0,0,0,0)';
          //适配处理
          var width = canvas_big.height * 0.8;
          var height = canvas_big.height * 0.8;
          var r = width / 2;
          var arclineWidth = width / 16.666666;
          var arclen = width / 33.333333;
          var arclen3 = width / 20;
          var radi2 = r * 0.855;
          var radi3 = r * 1
          var bacColor = '#333';
          var forColor = '#b7d216';
          cxt.translate(width / 2, height / 2 + height * 0.2);

          //中间文字说明
          cxt.textAlign = "center";
          cxt.textBaseline = "middle";
          cxt.fillStyle = "#888";
          cxt.font = "normal 12px 黑体";
          cxt.fillText("当日综合评估", -8, -20);

          cxt.fillStyle = "#b7d216";
          cxt.font = "normal 24px 黑体";
          cxt.fillText("安全评分", 0, 0);

          cxt.fillStyle = "#f4f4f4";
          cxt.font = "normal 12px 黑体";
          cxt.fillText("风险系数:" + num + '%', 0, 24);

          //右上角字体说明
          cxt.fillStyle = "#999";
          cxt.textAlign = "left";
          cxt.font = "normal 12px 黑体";
          cxt.fillText("报警 ", radi2 * 0.2 * 1.5, 0 - radi2 - r * 0.38);

          cxt.fillStyle = "#f13131";
          cxt.textAlign = "left";
          cxt.font = "normal 12px 黑体";
          cxt.fontWeight = '900';
          cxt.fillText(num, radi2 * 0.2 * 3.5, 0 - radi2 - r * 0.38);

          cxt.fillStyle = "#999";
          cxt.font = "normal 12px 黑体";
          cxt.fontWeight = '900';
          cxt.fillText("隐患", radi2 * 0.2 * 5.6, 0 - radi2 - r * 0.38);

          cxt.fillStyle = "#ffcc00";
          cxt.textAlign = "left";
          cxt.font = "normal 12px 黑体";
          cxt.fontWeight = '900';
          cxt.fillText(num, radi2 * 0.2 * 7.5, 0 - radi2 - r * 0.38);

          cxt.fillStyle = "#999";
          cxt.font = "normal 12px 黑体";
          cxt.fontWeight = '900';
          cxt.fillText("危险品", radi2 * 0.2 * 9, 0 - radi2 - r * 0.38);

          cxt.fillStyle = "#ff7800";
          cxt.textAlign = "left";
          cxt.font = "normal 12px 黑体";
          cxt.fontWeight = '900';
          cxt.fillText(num, radi2 * 0.2 * 12.2, 0 - radi2 - r * 0.38);

          //画底格
          for(var i = 0, angle = Math.PI, tmp, len; i < 30; i++) {
            cxt.beginPath();
            cxt.lineWidth = arclineWidth;
            len = arclen;
            cxt.strokeStyle = bacColor;
            //          cxt.fillStyle　=　'#0099FF';
            tmp = radi2;
            cxt.moveTo(
              tmp * Math.sin(angle),
              tmp * Math.cos(angle),
            );
            tmp -= len;
            cxt.lineTo(tmp * Math.sin(angle), tmp * Math.cos(angle));
            cxt.stroke();
            cxt.closePath();
            angle += Math.PI / 15;
          }

          // 画内圆
          cxt.beginPath();
          cxt.lineWidth = 1;
          cxt.arc(0, 0, r * 0.75, 0, 2 * Math.PI);
          cxt.stroke();
          cxt.closePath();

          // 画外圆
          cxt.beginPath();
          cxt.lineWidth = 1;
          cxt.arc(0, 0, r * 0.9, 0, 2 * Math.PI);
          cxt.stroke();
          cxt.closePath();

          //画右上角装饰中心实体圆
          cxt.beginPath();
          cxt.lineWidth = 1;
          cxt.arc(radi2 * 0.2, 0 - radi2, r * 0.02, 0, 2 * Math.PI);
          cxt.fillStyle = bacColor
          cxt.fill();
          cxt.stroke();
          cxt.closePath();

          //画右上角装饰小小圆
          cxt.beginPath();
          cxt.strokeStyle = bacColor;
          cxt.lineWidth = 1;
          cxt.arc(radi2 * 0.2, 0 - radi2, r * 0.25, 0, 2 * Math.PI);
          cxt.stroke();
          cxt.closePath();

          //画右上角折线条
          cxt.beginPath();
          cxt.lineWidth = 1;
          cxt.strokeStyle = '#999';
          cxt.moveTo(radi2 * 0.2, 0 - radi2);
          cxt.lineTo(radi2 * 0.2, 0 - radi2 - r * 0.17);
          cxt.lineTo(radi2 * 0.2 * 1.8, 0 - radi2 - r * 0.28);
          cxt.lineTo(radi2 * 0.2 * 20, 0 - radi2 - r * 0.28);
          cxt.stroke();
          cxt.closePath();

          //画最外圈装饰
          for(var i = 0, angle = Math.PI, tmp, len; i < 160; i++) {
            cxt.beginPath();
            cxt.lineWidth = 1;
            len = arclen3;
            cxt.strokeStyle = bacColor;
            tmp = radi3;
            cxt.moveTo(
              tmp * Math.sin(angle),
              tmp * Math.cos(angle),
            );
            tmp -= len;
            cxt.lineTo(tmp * Math.sin(angle), tmp * Math.cos(angle));
            cxt.stroke();
            cxt.closePath();
            angle += Math.PI / 80;
          }

          //计算要画的前景色块比例
          var n = Math.round(num / 100 * 360 * 0.0833333);
          //再次绘制比例圆
          for(var i = 0, angle = Math.PI, tmp, len; i < n; i++) {
            cxt.beginPath();
            cxt.lineWidth = arclineWidth;
            len = arclen;
            cxt.strokeStyle = forColor;
            tmp = radi2;
            cxt.moveTo(
              tmp * Math.sin(angle),
              tmp * Math.cos(angle)
            );
            tmp -= len;
            cxt.lineTo(tmp * Math.sin(angle), tmp * Math.cos(angle));
            cxt.stroke();
            cxt.closePath();
            angle += Math.PI / 15;
          }
          //齐活儿
                }
                // clearInterval(setinter);
                // var setinter=setInterval(function() {
        //  var a = (99 * Math.random()).toFixed(2);
        //  go(a);
        // }, 1000)
            go(23);
            
            // 横向柱子
            var option11 = {
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
                                return "#666";
                            } else if (params.value >= 100 && params.value <= 600) {
                                return "#999";
                            } else if (params.value >= 200 && params.value <= 900) {
                                return "#ccc";
                            }
                            return "#bad616";
                            }
                        }
                        },
                        data: [220, 532, 901]
                    }
                ]
            };
            let myChart11 = this.$echarts.init(document.getElementById("myChart1"));
            myChart11.setOption(option11);
        },
    // 右侧图表
    chart_right() {
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
            let riskchar1b = this.$echarts.init(document.getElementById("riskchar1"));
            riskchar1b.setOption(riskchar1f);
            let riskchar2b = this.$echarts.init(document.getElementById("riskchar2"));
            riskchar2b.setOption(option1);
            let riskchar3b = this.$echarts.init(document.getElementById("riskchar3"));
            riskchar3b.setOption(option);
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption(option);
      let mypie1 = this.$echarts.init(document.getElementById("pieb1"));
      mypie1.setOption(pie);
      let myChart1 = this.$echarts.init(document.getElementById("axis1"));
      myChart1.setOption(option1);
    }
  },
  mounted() {
    // 右侧图表
    this.chart_right();
    // 左侧图表  
    this.chart_left();
  }
}
</script>

<style scoped>

</style>
