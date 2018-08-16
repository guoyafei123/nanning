<template>
  <div class="row" id="device">
    <!-- #头部 -->
    <!-- <header-vue></header-vue> -->
    <!-- #头部 End-->
    <!-- #左边 -->
    <section id="left" class="position-fixed-left z-index-20">
      <div class="overlay"></div>
      <!-- <infor_left-vue></infor_left-vue> -->
      <template>
        <div class="toolleft margin-right0">
          <section>
            <div class="row toolcount">
              <div class="col-sm-6 font-gray-999 padding-right0">
                <ul class="toolcount-left margin-bottom0 padding-left37" id="toolcount">
                  <li>
                    <h1 class="toolcount-p1">569{{ins_deviceCountByUnit.deviceTotal}}</h1>
                  </li>
                  <li>
                    <p class="size-10">Device Number</p>
                  </li>
                  <li>
                    <p class="size-18 font-blue">当前设备总数</p>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 font-gray-999 padding-left0 padding-right0 size-12">
                <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15">
                  <li>
                    <p class="set-width-50">室内设备</p>
                    <p class="display-inline-block font-gray-ccc font-italic size-14">637{{ins_deviceCountByUnit.innerCount}}</p>
                  </li>
                  <li>
                    <p class="set-width-50">室外设备</p>
                    <p class="display-inline-block font-gray-ccc font-italic size-14">136{{ins_deviceCountByUnit.outsideCount}}</p>
                  </li>
                  <li>
                    <p class="set-width-50">灭火设备</p>
                    <p class="display-inline-block font-red font-italic size-14">167{{ins_deviceCountByUnit.outfireCount}}</p>
                  </li>
                  <li>
                    <p class="set-width-50">预警设备</p>
                    <p class="display-inline-block font-yellow font-italic size-14">124{{ins_deviceCountByUnit.inductionCount}}</p>
                  </li>
                  <li>
                    <p class="set-width-50">安防设备</p>
                    <p class="display-inline-block font-blue font-italic size-14">36{{ins_deviceCountByUnit.safetyCount}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div class="toolroute font-gray-ccc margin-left37 margin-top100">
              <span class="toolroute-rect bg-blue"></span>
              <ul class="padding-left10 padding-right5 clearfix">
                <li>
                  <p class="font-gray-666 size-12">中心小学</p>
                </li>
                <li>
                  <p class="font-blue size-16">设备信息
                    <span class="float-right toolroute-padding8 popup-routebtn font-gray-666" data-toggle="tooltip" title="全屏">
                      <i class="icon iconfont icon-weibiaoti10 size-12"></i>
                    </span>
                  </p>
                </li>
                <li>
                  <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="全部单位"  @change="tolineitem">
                      <el-option v-for="item in ins_queryInspectionNameList" :key="item.id" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                    <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="全部建筑"  @change="tolineitem">
                      <el-option v-for="item in ins_queryInspectionNameList" :key="item.id" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                    <el-select class="upd-elselect upd-elselect-bordernone upd-widht100 margin-top5 pull-right" size="mini" v-model="ins_queryInspectionNameListvalue" placeholder="全部类别"  @change="tolineitem">
                      <el-option v-for="item in ins_queryInspectionNameList" :key="item.id" :label="item.name" :value="item.id">
                      </el-option>
                    </el-select>
                </li>
                <li>                  
                    <table class="table table-responsive size-12 table-condensed toolroute-table margin-top10 mini-table">
                      <thead>
                        <tr>
                          <!-- <th >序号</th> -->
                          <th>设备名称</th>
                          <th>所属建筑</th>
                          <th>所属单位</th>
                          <th>设备类型</th>
                          <th>状态</th>
                          <th>查看</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>AE12WD56W</td>
                          <td>瑞和家园2号楼</td>
                          <td>瑞和家园</td>
                          <td class="dec-type"><i class="icon iconfont icon-qitimiehuoxitong-" data-toggle="tooltip" title="气体灭火系统"></i></td>
                          <td class="font-blue">正常</td>
                          <td>
                            <a @click="moren">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>AE12WD56W</td>
                          <td>实验教学楼</td>
                          <td>中心小学</td>
                          <td class="dec-type"><i class="icon iconfont icon-ganyanqi-" data-toggle="tooltip" title="烟雾感应器"></i></td>
                          <td class="font-orange">故障</td>
                          <td>
                            <a @click="moren">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>AE12WD56W</td>
                          <td>瑞和写字楼</td>
                          <td>瑞和家园</td>
                          <td class="dec-type"><i class="icon iconfont icon-hongwaiyanhuoganying-" data-toggle="tooltip" title="声光报警器"></i></td>
                          <td class="font-yellow">隐患</td>
                          <td>
                            <a @click="moren">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>AE12WD56W</td>
                          <td>瑞和家园2号楼</td>
                          <td>瑞和家园</td>
                          <td class="dec-type"><i class="icon iconfont icon-qitimiehuoxitong-" data-toggle="tooltip" title="气体灭火系统"></i></td>
                          <td class="font-blue">正常</td>
                          <td>
                            <a @click="moren">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>AE12WD56W</td>
                          <td>实验教学楼</td>
                          <td>中心小学</td>
                          <td class="dec-type"><i class="icon iconfont icon-ganyanqi-" data-toggle="tooltip" title="烟雾感应器"></i></td>
                          <td class="font-orange">故障</td>
                          <td>
                            <a @click="moren">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>AE12WD56W</td>
                          <td>瑞和写字楼</td>
                          <td>瑞和家园</td>
                          <td class="dec-type"><i class="icon iconfont icon-hongwaiyanhuoganying-" data-toggle="tooltip" title="声光报警器"></i></td>
                          <td class="font-yellow">隐患</td>
                          <td>
                            <a @click="moren">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>AE12WD56W</td>
                          <td>瑞和家园2号楼</td>
                          <td>瑞和家园</td>
                          <td class="dec-type"><i class="icon iconfont icon-qitimiehuoxitong-" data-toggle="tooltip" title="气体灭火系统"></i></td>
                          <td class="font-blue">正常</td>
                          <td>
                            <a @click="moren">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>AE12WD56W</td>
                          <td>实验教学楼</td>
                          <td>中心小学</td>
                          <td class="dec-type"><i class="icon iconfont icon-ganyanqi-" data-toggle="tooltip" title="烟雾感应器"></i></td>
                          <td class="font-orange">故障</td>
                          <td>
                            <a @click="moren">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>AE12WD56W</td>
                          <td>瑞和写字楼</td>
                          <td>瑞和家园</td>
                          <td class="dec-type"><i class="icon iconfont icon-hongwaiyanhuoganying-" data-toggle="tooltip" title="声光报警器"></i></td>
                          <td class="font-yellow">隐患</td>
                          <td>
                            <a @click="moren">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
                            </a>
                          </td>
                        </tr>
                        <tr v-for="(item,index) in tableData.result" v-on:click="toitmeinfo(item)">
                          <!-- <td>{{(deviceList_parameter.currentPage-1)*deviceList_parameter.pageSize+index+1}}</td> -->
                          <td>{{item.name}}</td>
                          <td>{{item.buildingName}}</td>
                          <td>{{item.deviceTypeName}}</td>
                          <td>{{item.status}}</td>
                          <td>
                            <a v-on:click="toitmeinfo(item)">
                              <i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i>
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
                    <span style="float: left;margin-top:5px;color: #666;margin-left:-5px;">{{Math.ceil(tableData.totalRow/this.deviceList_parameter.pageSize)}}页</span>
                    <el-pagination style="float: right;background: transparent"
                      small
                      layout="prev, pager, next"
                      :page-size="this.deviceList_parameter.pageSize"
                      :total="tableData.totalRow" 
                      current-page.sync="this.deviceList_parameter.currentPage"
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
    <section id="right" class="position-fixed-right z-index-20">
      <div class="overlay"></div>
      <!-- <infor_right-vue></infor_right-vue> -->
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
              <!-- 统计 -->
              <section class="dan-lineinfo ">
                <div class="unit-info toolcount font-gray-999 size-12 margin-top20 clearfix">
                    <!-- 已选择 -->
                    <div class="personinfo">
                        <p>
                        <span class="size-20 font-blue">中心小学</span>
                        <span class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                        </p>
                        <p class="col-sm-7 text-left padding0">
                            <span><i class="el-icon-location"></i> 怀化市银海大道710-2号</span>
                        </p>
                        <P class="col-sm-5 text-right padding0">
                            <span class="text-right">
                            录入时间：<span class="font-gray-999">2018.07.09 08:00:00</span>
                            </span>
                        </P>                        
                    </div>
                </div>
                  <!-- <section>
                    <div class="toolcount">
                      <h4 class="p-title">设备统计</h4>
                      <div class="col-sm-7  font-gray-999 padding-right0">
                        <div class="row text-center margin-top70">
                          <div class="col-sm-4 container-padding0 personnel-borderright">
                            <p class="size-16 font-white">{{ins_alarmAndMalfunctionDeviceCount.deviceTotal}}</p>
                            <p>设备总数</p>
                          </div>
                          <div class="col-sm-4 container-padding0 personnel-borderright">
                            <p class="size-16 font-white">{{ins_alarmAndMalfunctionDeviceCount.malfunctionCount}}</p>
                            <p>故障设备</p>
                          </div>
                          <div class="col-sm-4 container-padding0">
                            <p class="size-16 font-white">{{ins_alarmAndMalfunctionDeviceCount.alaramCount}}</p>
                            <p>报警设备</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-5 font-gray-999 padding-left0 padding-right0">
                        <div id="call_charpiemin" style="width: 100%;height:150px;margin: 0 auto;"></div>
                      </div>
                    </div>
                  </section> -->
                  <section>
                        <div class="toolcount margin-top20">
                            <h4 class="p-title">设备统计</h4>
                            <template>
                              <div class="padding-left15 margin-top20">
                                <el-radio-group @change="callradiopie" v-model="radiovaluepie">
                                  <el-radio  label="1">故障设备 {{ins_alarmAndMalfunctionDeviceCount.malfunctionCount}}</el-radio>
                                  <el-radio  label="2">报警设备 {{ins_alarmAndMalfunctionDeviceCount.alaramCount}}</el-radio>
                                </el-radio-group>
                              </div>
                            </template>
                            <div id="call_charpiemax" style="width: 100%;height:130px;margin: 0 auto;"></div>
                        </div>
                    </section>
                  <section>
                        <div class="toolcount margin-top10">
                            <h4 class="p-title">各类型设备概况</h4>
                            <template>
                              <div class="padding-left15 margin-top20">
                                <el-radio-group @change="callradio" v-model="radiovalue">
                                  <el-radio  label="1">故障率</el-radio>
                                  <el-radio  label="2">报警率</el-radio>
                                </el-radio-group>
                              </div>
                              
                            </template>
                            <div id="call_charaxis" style="width: 100%;height:170px;margin: 0 auto;"></div>
                        </div>
                    </section>
                    <section>
                        <div class="toolcount margin-top10">
                            <h4 class="p-title">历史趋势</h4>
                            <div class="padding-left15 margin-top20">
                              <el-radio-group @change="callradiohis" v-model="radiovaluehis">
                                <el-radio  label="1">故障率</el-radio>
                                <el-radio  label="2">报警率</el-radio>
                              </el-radio-group>
                            </div>
                            <div id="call_charline" style="width: 100%;height:140px;margin: 0 auto;"></div>
                        </div>
                    </section>
              </section>
              <!-- 详情 -->
              <section class="dan-iteminfo overflow-scr display-none">
                <a class="btn-back"><i class="el-icon-arrow-left"></i>返回</a>
                <div class="toolcount font-gray-999 size-12 margin-top20 clearfix">
                  <!-- 已选择 -->
                  <div class="personinfo">
                        <p>                       
                        <span class="size-20 font-blue">
                          <i class="icon iconfont icon-jiankong-mian- size-20" data-toggle="tooltip" title="监控摄像头"></i> <span>AE12WD56W</span>
                        </span>
                        <span class="float-right">
                                <span class="bgbox-max bg-gray-333 font-gray-999 size-10">安防设备</span>
                            </span>
                        </p>
                        <p class="col-sm-7 text-left padding0">
                            <span>
                                <i class="fas fa-industry"></i> 怀化市中心小学</span>
                        </p>
                        <P class="col-sm-5 text-right padding0">
                            <span class="text-right">
                            最后更新：<span class="font-gray-999">2018.07.09 08:00:00</span>
                            </span>
                        </P>                        
                  </div>
                </div>
                <!-- 设备信息统计 -->
                <section>
                  <div class="toolcount margin-top20 clearfix">
                    <div class="col-sm-4 font-gray-999 padding0">
                        <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                          <li>
                            <h1 class="toolcount-p1"><span class="font-blue"></span>正常</h1>
                          </li>
                          <li class="margin-top30">
                            <p class="size-10 ">Device Status</p>
                          </li>
                          <li>
                            <p class="size-16 font-blue">设备运行状态</p>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
                        <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                          <li>
                            <p class="size-18 font-white">信息统计</p>
                          </li>
                          <li class="margin-bottom5">
                            <p class="size-10 set-scaleright">Repair Statistics</p>
                          </li>
                          <li class="margin-top10">
                            <p class="set-width-50">运行时长 <span class="font-blue">639 </span>天</p>
                            <p class="pull-right">
                              <a class="bgbox-min bg-blue font-black size-10" data-toggle="tooltip" title="查看监控摄像头">
                              <i class="icon iconfont icon-jiankong-mian-"></i> 监控</a>
                            </p>
                            </li>
                          <li class="row text-center padding-right16 margin-top10">
                            <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-red">18</p>
                              <p>报警次数</p>
                            </div>
                            <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-orange">6</p>
                              <p>故障次数</p>
                            </div>
                            <div class="col-sm-4">
                              <p class="size-16 show font-white">360</p>
                              <p>更换周期</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                  </div>
                </section>
                <!-- 设备基本信息 -->
                <section>
                    <div class="textandimg margin-top30">
                        <h4 class="p-title">设备信息</h4>
                        <div class="row textandimg-main margin-top20 size-12">
                            <div class="col-sm-6">
                                <span>设备名称 </span>
                                <strong>AE12WD56W </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>设备类型 </span>
                                <strong>监控摄像头</strong>
                            </div>

                            <div class="col-sm-6">
                                <span>投入时间 </span>
                                <strong>2015-10-17 </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>设备标码 </span>
                                <strong>
                                  <a href="" class="font-blue display-inline-block" data-toggle="tooltip" title="预览二维码">预览</a> 
                                  <a href="" class="font-blue display-inline-block" data-toggle="tooltip" title="下载二维码">下载</a>
                                </strong>
                            </div>
                            <div class="col-sm-12">
                                <span>设备位置 </span>
                                <strong>中心小学实验教学楼6层</strong>
                            </div>
                            <div class="col-sm-6">
                                <span>设备坐标 </span>
                                <strong>X:236 Y:678</strong>
                            </div>

                            <div class="col-sm-6">
                                <span>离地高度 </span>
                                <strong>223cm</strong>
                            </div>
                            <div class="col-sm-6">
                                <span>距离顶部 </span>
                                <strong>65cm</strong>
                            </div>                            
                            <div class="col-sm-6">
                                <span>生产日期</span>
                                <strong>2015-09-27</strong>
                            </div>
                            <div class="col-sm-12">
                                <span>生产厂商 </span>
                                <strong>怀化市精密仪器有限公司 <a href="tel:0760693575" class="font-blue display-inline-block"  data-toggle="tooltip" title="拨打电话0760693575"><i class="icon iconfont icon-dianhua size-14"></i></a></strong>
                            </div>                   
                        </div>
                    </div>
                </section>
                <!-- 维保信息 -->
                <section>
                    <div class="textandimg margin-top30">
                        <h4 class="p-title">维保信息</h4>
                        <div class="row textandimg-main margin-top20 size-12">
                            <div class="col-sm-6">
                                <span>维保单位 </span>
                                <strong>中心小学 </strong>
                            </div>
                            <div class="col-sm-6">
                                <span>维保人员 </span>
                                <strong>赵堆船 <a href="tel:13645678956" class="font-blue display-inline-block"  data-toggle="tooltip" title="拨打电话 13645678956"><i class="icon iconfont icon-dianhua size-14"></i></a></strong>
                            </div>
                            <div class="col-sm-6">
                                <span>更换周期 </span>
                                <strong><span class="font-blue">360</span>天</strong>
                            </div>                   
                        </div>
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
import HeaderVue from "../publick/header.vue";
// import Infor_leftVue from './infor_left.vue';
// import Infor_rightVue from './infor_right.vue';
export default {
  components: {
    "header-vue": HeaderVue
    // 'call_left-vue':Call_leftVue,
    // 'call_right-vue':Call_rightVue
  },
  data() {
    return {
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
      options: [
        {
          value: "选项1",
          label: "怀化市"
        },
        {
          value: "选项2",
          label: "怀化市兴宁区"
        },
        {
          value: "选项3",
          label: "怀化市横县"
        }
      ],
      ins_queryInspectionNameList: Object,
      ins_queryInspectionNameListvalue: "全部建筑",
      // 表格-请求
      deviceList_parameter: {
        unitId: "4",
        currentPage: 1,
        pageSize: 10
      },
      // 报警统计-请求
      tableData: Object,
      deviceCountByUnit_parameter: {
        unitId: "4"
      },

      ins_deviceCountByUnit: Object,
      // 报警数据统计
      alarmAndMalfunctionDeviceCount_parameter: {
        unitId: "4",
        beginTime: "2018-06-01",
        endTime: "2018-07-30",
        type:1
      },
      radiovalue: "1",
      radiovaluehis:'1',
      radiovaluepie:'1',
      ins_alarmAndMalfunctionDeviceCount: Object,
      // 饼图数据
      queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter: {
        unitId: '',
        startTime: "",
        endTime: "",
        type: 1
      },
      ins_queryDeviceMacfunctionOrAlarmOfTypeByTime: Object,
      // 折线图数据
      trendLine_parameter: {
        unitId: "",
        startTime: "",
        endTime: "",
        type: 1
      },
      ins_trendLine: Object,
      // 报警详情
      getAlarmDetail_parameter: {
        alarmId: 555
      },
      ins_getAlarmDetail: Object,
      infoShow: true
    };
  },
  methods: {
    
    moren() {
      $(".dan-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
      
    },
    toitmeinfo(item) {
      $(".dan-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".dan-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
      // 请求报警详情
      let eventLevel = item.eventLevel;
      console.log(item);
      if (eventLevel == 0 || eventLevel == 2) {
        this.infoShow = true;
      } else {
        this.infoShow = false;
      }
      this.getAlarmDetail_parameter.alarmId = item.id;
      this.$fetch("/api/alarm/getAlarmDetail", this.getAlarmDetail_parameter)
        .then(response => {
          if (response) {
            console.log(response);
            this.ins_getAlarmDetail = response.data.alarm;
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      console.log(`当前页:` + val);
      this.deviceList_parameter.currentPage = val;
      this.getTable();
    },
    tolineitem() {
      console.log(this.ins_queryInspectionNameListvalue);
      $("#lookroute").removeClass("upd-btn-dis");
    },
    callradio() {
      console.log(this.radiovalue);
      this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.type = this.radiovalue;
      this.get_axis();
    },
    callradiohis() {
      console.log(this.radiovaluehis);
      this.trendLine_parameter.type = this.radiovaluehis;
      this.get_line();
    },
    callradiopie() {
      console.log(this.radiovaluepie);
      this.alarmAndMalfunctionDeviceCount_parameter.type = this.radiovaluepie;
      this.get_pie();
    },
    getTable() {
      // 请求报警列表
      this.$fetch("/api/device/deviceList", this.deviceList_parameter)
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
      // 请求报警统计
      this.$fetch(
        "/api/device/deviceCountByUnit",
        this.deviceCountByUnit_parameter
      )
        .then(response => {
          if (response) {
            console.log(response);
            this.ins_deviceCountByUnit = response.data;
            
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    get_pie(){
      // 请求报警数据统计
      this.$fetch(
        "/api/device/alarmAndMalfunctionDeviceCount",
        this.alarmAndMalfunctionDeviceCount_parameter
      )
        .then(response => {
          if (response) {
            console.log(response);
            this.ins_alarmAndMalfunctionDeviceCount = response.data;
            // this.draw_piemin("call_charpiemin", response.data);
            this.draw_piemax("call_charpiemax",response.data,this.alarmAndMalfunctionDeviceCount_parameter.type)
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    get_line(){
      // 请求折线图数据
      this.$fetch(
        "/api/device/trendLine",
        this.trendLine_parameter
      )
      .then(response => {
        if (response) {
          this.ins_trendLine = response.data;
          console.log(this.ins_trendLine);
          this.draw_line("call_charline", response.data,this.trendLine_parameter.type);
        }
      })
      .then(err => {
        console.log(err);
      });
    },
    get_axis() {
      // 请求报警饼图数据
      this.$fetch(
        "/api/device/queryDeviceMacfunctionOrAlarmOfTypeByTime",
        this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter
      )
        .then(response => {
          if (response) {
            this.ins_queryDeviceMacfunctionOrAlarmOfTypeByTime = response.data.rate
            this.draw_axis(
              "call_charaxis",
              this.ins_queryDeviceMacfunctionOrAlarmOfTypeByTime,
              this.queryDeviceMacfunctionOrAlarmOfTypeByTime_parameter.type
            );
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    draw_piemin(id, data) {
      let a = data.peopleAlarm / data.alarmSum * 100;
      let b = data.deviceAlarm / data.alarmSum * 100;
      let d;
      if (data.alarmSum == 0) {
        d = [
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
      } else {
        d = [
          {
            value: data.peopleAlarm,
            name: "人工报警" + a.toFixed(2) + "%",
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: "inner",
                show: true
              }
            }
          },
          {
            value: data.deviceAlarm,
            name: "设备报警" + b.toFixed(2) + "%",
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: "inner",
                show: true
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
            if (data.name.substring(0, 3) == "人工报") {
              name = "人工报警";
            } else if (data.name.substring(0, 3) == "设备报") {
              name = "设备报警";
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
    draw_piemax(id, data, type) {
      let name,value1,value2;
      if (type == 1) {
        name = "设备故障率" + data.malfunctionRate*100 + "%";
        value1=data.malfunctionCount
        value2=data.deviceTotal-data.malfunctionCount
      } else {
        name = "设备报警率" + data.alarmRate*100 + "%";
        value1=data.alaramCount
        value2=data.deviceTotal-data.alaramCount
      }
      let d = [
        {
          value: value1,
          // value: 2,
          name: name
        },
        {
          value: value2,
          // value: 4,
          name: "其他",
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
      var char = {
        tooltip: {
          trigger: "item",
          // formatter: "{a} <br/>{b} {c}次"
          formatter: function(data) {
            var name = "";
            if (data.name.substring(0, 4) == "设备故障") {
              name = "设备故障数";
            } else if (data.name.substring(0, 4) == "设备报警") {
              name = "设备报警数";
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
            color: ["#bad616", "#c69e00", "#ff7800", "#f13131", "#ccc"],
            data: d
          }
        ]
      };
      let chars = this.$echarts.init(document.getElementById(id));
      // chars.setOption({});
      chars.setOption(char);
    },
    draw_line(id, data,type) {
      // 巡检完成率历史趋势曲线图
      let a = [],
        b = [],
        d;
      console.log(data.alarmRate[0].lineDate);
      if (type == 1) {
        d = data.malfunctionRate;
      } else {
        d = data.alarmRate;
      }
      console.log(d);
      for (var i = 0; i < d.length; i++) {
        if (type == 1) {
          b.push(d[i].malfunctionCount);
        } else {
          b.push(d[i].alarmCount);
        }
        a.push(d[i].lineDate);
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
          y: 10,
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
    draw_axis(id, data, type) {
      let a = [],
        b = [];
      
      for (var i = 0; i < data.length; i++) {
        a.push(data[i].deviceTypeName);
        if (type == 1) {
          b.push(data[i].malfunctionCount);
        } else {
          b.push(data[i].alarmCount);
        }
      }

      var axis = {
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
          bottom: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            show: true,
            data: a,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval:0,
              rotate:40
            },
            axisLine: {
            lineStyle: {
              color: "#999"
            }
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
          y: 20,
          x2: 0,
          y2: 100,
          x: 30,
          borderWidth: 1
        },
        series: [
          {
            name: "数量",
            type: "bar",
            barWidth: "60%",
            data: b,
            itemStyle: {
              normal: {
                // 值显示在柱子顶部
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: function(params) {
                      if (params.value > 0 && params.value < 3) {
                        return "#666";
                      } else if (params.value >= 3 && params.value <= 6) {
                        return "#999";
                      } else if (params.value >= 6 && params.value <= 9) {
                        return "#ccc";
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
                  if (params.value > 0 && params.value < 3) {
                        return "#666";
                      } else if (params.value >= 3 && params.value <= 6) {
                        return "#999";
                      } else if (params.value >= 6 && params.value <= 9) {
                        return "#ccc";
                      }
                  return "#bad616";
                }
              }
            }
          }
        ]
      };
      let axisf = this.$echarts.init(document.getElementById(id));
      axisf.setOption(axis);
    }
  },
  mounted() {
    this.$store.commit('route_path',this.$route.path);
    // this.getTable();
    // this.getData();
    this.get_axis();
    this.get_line();
    this.get_pie();
  }
};
</script>

<style scoped>
.row {
  position: relative;
  z-index: 22;
}
</style>
