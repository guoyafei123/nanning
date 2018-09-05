<template>
  <header id="header" class="position-fixed-top z-index-30">
    <div class="header-main">
      <div class="header-left margin-top30 position-left20 z-index-100">
        <p class="version-title">
          <!-- 数雨如歌 -->智慧消防大数据监控平台 政府版
          <span class="size-10 version-num">BETA3.0</span>
        </p>
        <el-select v-model="unitvalue" size="mini" @change="optionchange">
          <el-option v-for="item in queryUnit" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="header-middle">
        <ul>
          <li>
            <canvas class="bg-none" id="header-canvas-people" width="50" height="50"></canvas>
            <div class="display-inline-block">
              <p>
                <span class="font-blue">{{userAnalyseDate.userOnlineCount}}</span>/
                <span>{{userAnalyseDate.userCount}}</span>
              </p>
              <p class="size-12">人员在线</p>
            </div>
          </li>
          <li>
            <canvas class="bg-none" id="header-canvas-host" width="50" height="50"></canvas>
            <div class="display-inline-block">
              <p>
                <span class="font-blue">{{transmissionDate.transmissionOnlineCount}}</span>/
                <span>{{transmissionDate.transmissionCount}}</span>
              </p>
              <p class="size-12">主机在线</p>
            </div>
          </li>
          <el-tooltip class="item" placement="top">
            <div slot="content" class="text-center"> {{dateFormat(date)}}<br><span v-if="weatherData!=null">{{weatherData.weather}}</span></div>
            <li class="header-time">

              <p class="font-blue size-12">
                <!-- <i class="icon iconfont icon-qinglang-xian- size-14"></i>--><span v-if="weatherData!=null">{{weatherData.weather}}</span>
              </p>
              <p class="size-36 font-white">
                {{TimeFormat(date)}}
              </p>
            </li>
          </el-tooltip>
          <li>
            <canvas class="bg-none" id="header-canvas-cpu" width="50" height="50"></canvas>
            <div class="display-inline-block">
              <p>
                <span>{{buildCount}}</span>
              </p>
              <p class="size-12">建筑数量</p>
            </div>
          </li>
          <li>
            <canvas class="bg-none" id="header-canvas-memory" width="50" height="50"></canvas>
            <div class="display-inline-block">
              <p>
                <span>{{deviceCount}}</span>
              </p>
              <p class="size-12">设备数量</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="header-right margin-top30 font-gray-666">
        <div class="header-head">
					<span class="">
                <div class="display-inline-block">
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        <span class="header-head-portrait">
                            <img src="../../assets/images/people.png" class="img-responsive img-circle">
                        </span>
					<span class="user-name">{{username}}</span>
					<span class="caret"></span>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item><span @click="signIn()"><i
              class="icon iconfont icon-huiyuanquerendaodian size-14"></i> 打卡</span></el-dropdown-item>
						<el-dropdown-item><span @click="getUserInfogetUserInfo()"><i
              class="icon iconfont icon-xunjianyuan-mian- size-14"></i> 个人信息</span></el-dropdown-item>
						<el-dropdown-item><router-link to="/operationLog"><i
              class="icon iconfont icon-caozuorizhi-xian- size-14"></i> 操作日志</router-link></el-dropdown-item>
						<span @click="logout"><el-dropdown-item><i
              class="icon iconfont icon-guanbi2 size-14"></i> 注销</el-dropdown-item></span>
					</el-dropdown-menu>
					</el-dropdown>
				</div>
				</span>
        </div>
        <ul class="top-btn">
          <li>
            <span class="point"></span>
            <a class="showMessages" @click="showMessages()">
              <el-tooltip class="item" content="消息" placement="top">
                <i class="icon iconfont icon-xiaoxi-mian--"></i>
              </el-tooltip>
            </a>
          </li>
          <li>
            <a href="#">
              <el-tooltip class="item" content="搜索" placement="top">
                <i class="icon iconfont icon-sousuo-mian-"></i>
              </el-tooltip>
            </a>
          </li>
          <li>
            <router-link to="/Unit_management" @click.native="management">
              <el-tooltip class="item" content="管理" placement="top">
                <i class="icon iconfont icon-shezhi-mian-"></i>
              </el-tooltip>
            </router-link>
          </li>
          <li>
            <router-link to="/Add_alarm">
              <el-tooltip class="item" content="添加警报" placement="top">
                <i class="icon iconfont icon-jingshi-xian-"></i>
              </el-tooltip>
            </router-link>
          </li>
          <!-- <li>
                      <a href="#">
                          <el-tooltip class="item" content="九屏监控" placement="top">
                              <i class="icon iconfont icon-jiuping-mian-"></i>
                          </el-tooltip>
                      </a>
                  </li> -->
          <li>
            <a @click="voice()" class="voice">
              <el-tooltip class="item" content="声音" placement="top">
                <i class="icon iconfont icon-tongzhi-mian-"></i>
              </el-tooltip>
            </a>
          </li>
          <li>
            <a href="#" @click="fireAnalysis = true">
              <el-tooltip class="item" content="帮助" placement="top">
                <i class="icon iconfont icon-bangzhu-mian-" @click="queryFirehistoryData()"></i>
              </el-tooltip>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 消息模态窗 -->
    <div class="modal fade" id="showmessages" aria-labelledby="messagesLabel" aria-hidden="true">
      <!-- 消息中心 -->
      <messages-vue></messages-vue>
    </div>
    <!-- 个人信息弹窗 -->
    <el-dialog show-close :visible.sync="personnelInfo" width="30%" center>
      <div class="dialog-header">
        <h3 class="el-dialog__title">个人信息</h3>
        <small class="font-blue">{{userInfoData.unitName?userInfoData.unitName:'-'}}</small>
        <button type="button" class="el-dialog__headerbtn" @click="personnelInfo = false">
          <el-tooltip content="关闭" placement="top">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </el-tooltip>
        </button>
      </div>
      <div class="dialog-content text-center clearfix">
        <div class="myhead">
          <img :src="imageP+userInfoData.headImgUrl" class="img-responsive img-circle center-block">
          <h3>{{userInfoData.nickName?userInfoData.nickName:'-'}}</h3>
          <h4>角色：<span>{{userInfoData.roleName?userInfoData.roleName:'-'}}</span></h4><h4>账号：<span>{{userInfoData.username?userInfoData.username:'-'}}</span>
        </h4>
        </div>
        <ul class="mytotal list-inline col-sm-12">
          <li><h2 class="font-red">{{userCountData.alarmConfirmCount}}</h2>
            <p>处理报警数(次)</p></li>
          <li><h2 class="font-yellow">{{userCountData.troubleConfirmCount}}</h2>
            <p>处理隐患数(次)</p></li>
        </ul>
      </div>
      <span slot="footer" class="dialog-footer">
		    <el-button @click="personnelInfo = false">关 闭</el-button>
		  </span>
    </el-dialog>
    <!-- 签到弹窗 -->
    <div class="punchclock" :class="punchclocktrue?'punchclockani':''">
      <p class="size-16 margin-top10">{{ ''+punchStartTime.substring(11,16)}}打卡提示</p>
      <p class="size-12">有效时间: {{ punchExpireTime}}</p>
      <img class="margin-top10" :src="punchImgUrl">
      <p class="size-10 margin-top10">请通过巡检APP扫描二维码打卡</p>
    </div>
    <!-- 火情分析 -->
    <el-dialog show-close :visible.sync="fireAnalysis" center lock-scroll fullscreen="ture" show-close="false"
               append-to-body="ture" class="dialog-cont">
      <div class="dialog-content fireAnalysis clearfix">
        <!-- 标题 -->
        <div class="main_header clearFix">
          <div class="main_title col-sm-3 pull-left margin-left0 font-red clearFix">
            <i class="icon iconfont icon-huoqing-xian-"></i>
            <h2>火情分析</h2>
          </div>
          <!-- <div class="fire-tab col-sm-6" id="myScrollspy">
              <ul class="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="60">
                  <li class="active"><a href="#section-1">第一部分</a></li>
                  <li><a href="#section-2">第二部分</a></li>
                  <li><a href="#section-3">第三部分</a></li>
                  <li><a href="#section-4">第四部分</a></li>
                  <li><a href="#section-5">第五部分</a></li>
              </ul>
          </div> -->
          <div class="main_tab col-sm-3 pull-right">
            <button type="button" @click="fireAnalysis = false">
              <i class="el-icon-printer"></i> 打印
            </button>
            <button type="button" @click="fireAnalysis = false">
              <i class="el-icon-share"></i> 导出
            </button>
            <button type="button" @click="fireAnalysis = false">
              <i class="el-icon el-icon-close"></i> 关闭
            </button>
          </div>
        </div>
        <section class="col-sm-offset-3 col-sm-6 size-12" data-spy="scroll" data-target="#myScrollspy">
          <div class="row my-scroll">
            <div class="col-sm-12">
              <h2 id="section-1">火情地图</h2>
              <!-- 地图 -->
              <div class="fire-map">
                <div><!-- 地图容器 --></div>
                <article><!-- 说明 --></article>
              </div>
              <!-- 事故概况 -->
              <h2 id="section-2">事故概况</h2>
              <div class="textandimg fire-survey">
                <article>
                  <p>
                    {{queryFireSituationAlarmData.crTime}}，{{queryFireSituationAlarmData.unitName}}
                    {{queryFireSituationAlarmData.buildingName}}
                    {{queryFireSituationAlarmData.floorNumber}}
                    {{queryFireSituationAlarmData.roomNumber}}
                    {{queryFireSituationAlarmData.deviceName}}

                    {{queryFireSituationAlarmData.deviceName}}
                    <span v-if="queryFireSituationAlarmData.isUser===0">{{queryFireSituationAlarmData.nickName}}</span>发起警报，报警时中控室值守人：{{queryFireSituationFireData.lastSinginName}}，
                    警报时策略圈内的人员有｛人员名称、人员名称｝{{queryFireSituationAlarmData.confirmNickName}}于{{queryFireSituationAlarmData.confirmTime}}将该次警报确认为火情，响应时长：{确认时间-报警时间};
                    {{queryFireSituationAlarmData.cancelNickName}}于{{queryFireSituationAlarmData.cancelTime}}在系统将该火情关闭，累计持续时长：{关闭时间-报警时间}。<br>
                    报警时天气{{queryFireSituationFireData.realTimeWeatherDesc}}，温度{{queryFireSituationFireData.realTimeTmp}}，湿度{{queryFireSituationFireData.realTimeHum}}，风力{{queryFireSituationFireData.realTimeWinp}}，策略圈内微型消防站{{queryFireSituationFireData.fireHouseAmont}}个，最近消防站相距事故地点{{queryFireSituationFireData.fireHouseDis}}。
                  </p>
                </article>
                <hr>
                <div class="row textandimg-main clearfix">
                  <div class="col-sm-4">
                    <span>建筑风险评估 </span>
                    <strong>安全评分 {{queryFireSituationFireData.safeScore}} 风险系数
                      {{queryFireSituationFireData.riskScore}}%</strong>
                  </div>
                  <div class="col-sm-8">
                    <span>详细位置 </span>
                    <strong>
                      {{queryFireSituationAlarmData.unitName}}
                      {{queryFireSituationAlarmData.buildingName}}
                      {{queryFireSituationAlarmData.floorNumber}}
                      {{queryFireSituationAlarmData.roomNumber}}
                      {{queryFireSituationAlarmData.deviceName}}
                    </strong>
                  </div>
                  <div class="col-sm-4">
                    <span>报警时间 </span>
                    <strong>{{queryFireSituationAlarmData.crTime}}</strong>
                  </div>
                  <div class="col-sm-4">
                    <span>确认时间 </span>
                    <strong>{{queryFireSituationAlarmData.confirmTime}}</strong>
                  </div>
                  <div class="col-sm-4">
                    <span>关闭时间 </span>
                    <strong>{{queryFireSituationAlarmData.cancelTime}}</strong>
                  </div>
                  <div class="col-sm-4">
                    <span>响应时长 </span>
                    <strong class="font-blue">{{this.timeFn(queryFireSituationAlarmData.startTime,queryFireSituationAlarmData.confirmTime)}}秒</strong>
                  </div>
                  <div class="col-sm-8">
                    <span>持续时长 </span>
                    <strong class="font-blue" v-if="queryFireSituationAlarmData.cancelTime!=null">{{this.timeFn(queryFireSituationAlarmData.startTime,queryFireSituationAlarmData.cancelTime)}}秒</strong>
                  </div>
                  <div class="col-sm-4">
                    <span>报警源 </span>
                    <strong  v-if="queryFireSituationAlarmData.isUser===1"> {{queryFireSituationAlarmData.deviceName}}</strong>
                    <strong v-if="queryFireSituationAlarmData.isUser===0">{{queryFireSituationAlarmData.nickName}}</strong>
                  </div>
                  <div class="col-sm-4">
                    <span>确认人 </span>
                    <strong>{{queryFireSituationAlarmData.confirmNickName}}</strong>
                  </div>
                  <div class="col-sm-4">
                    <span>关闭人 </span>
                    <strong>{{queryFireSituationAlarmData.cancelNickName}}</strong>
                  </div>
                  <div class="col-sm-12">
                    <span>报警说明 </span>
                    <strong>{{queryFireSituationAlarmData.confirmReason}}</strong>
                  </div>
                  <div class="col-sm-12">
                    <span>图片视频 </span>
                    <ul class="fire-media list-inline">
                      <li v-for="item in queryFireSituationAlarmData.addAlarmImgList">
                        <img :src="item" alt="" height="80">
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-12">
                    <span>确认说明 </span>
                    <strong>{{queryFireSituationAlarmData.confirmReason}}</strong>
                  </div>
                  <div class="col-sm-12">
                    <span>图片视频 </span>
                    <ul class="fire-media list-inline">
                      <li v-for="item in queryFireSituationAlarmData.confirmAlarmImgList">
                        <img :src="item" alt="" height="80">
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-12">
                    <span>关闭说明 </span>
                    <strong>{{queryFireSituationAlarmData.cancelRemark}}</strong>
                  </div>
                  <div class="col-sm-12">
                    <span>图片视频 </span>
                    <ul class="fire-media list-inline">
                      <li v-for="item in queryFireSituationAlarmData.relieveAlarmImgList">
                        <img :src="item" alt="" height="80">
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- 起火单位最近数据 -->
              <h2 id="section-3">起火单位最近数据</h2>
              <section class="fire-unit unit-info clearfix">
                <!-- 单位统计 -->
                <ul class="list-unstyled col-sm-5">
                  <li class="position-relative">
                    <div class="position-absolute-bottom clearfix">
                      <!-- 单位信息 -->
                      <article class="unit-brief white-space col-sm-10">
                        <h3 class="size-20">{{queryUnitInfo.name}}</h3>
                        <small><i class="el-icon-location"></i> {{queryUnitInfo.location}}</small>
                      </article>
                    </div>
                    <img :src="queryUnitInfoImg" :onerror="defaultImg" class="img-responsive center-block">
                  </li>
                </ul>
                <ul class="fire-per bg-black list-unstyled col-sm-7">
                  <li></li>
                  <li>
                    <div class="pull-left">
                      <!---->
                      <h4> {{queryUnitInfo.firemenName}}</h4>
                      <small>{{queryUnitInfo.firemenTel}}</small>
                      <div>消防负责人
                      </div>
                    </div>
                    <div class="pull-right">
                      <article>
                        <h4>{{getUnitsSynthesisData.ALLALARM}}</h4>
                        <small>今日警报</small>
                      </article>
                      <article>
                        <h4>{{getUnitsSynthesisData.ALLTROUBLE}}</h4>
                        <small>今日隐患</small>
                      </article>
                      <article>
                        <h4>{{getUnitsSynthesisData.ALLINSPECTION}}</h4>
                        <small>巡检完成</small>
                      </article>
                    </div>
                  </li>
                  <li>
                    <article>
                      单位总数<span>{{getUnitsSynthesisData.UNITCOUNT}}</span>
                    </article>
                    <article>
                      建筑总数<span>{{getUnitsSynthesisData.BUILDINGCOUNT}}</span>
                    </article>
                    <article>
                      预案总数<span>{{getUnitsSynthesisData.PREARRANGECOUNT}}</span>
                    </article>
                    <article>
                      设备总数<span>{{getUnitsSynthesisData.DEVICECOUNT}}</span>
                    </article>
                    <article>
                      人员总数<span>{{getUnitsSynthesisData.STAFFNUM}}</span>
                    </article>
                    <article>
                      巡检路线<span>{{getUnitsSynthesisData.INSPECTIONPLANCOUNT}}</span>
                    </article>
                  </li>
                </ul>
                <article class="col-sm-12 container-padding20 padding-left10 padding-right10">
                  截止报警时该单位安全评分{{queryAlarmLastTimeData.safeScore}}分，
                  风险系数{{queryAlarmLastTimeData.riskScore}}。{{queryAlarmLastTimeData.elementName}}因素风险指数较高，
                  相关未解决隐患{{queryAlarmLastTimeData.noResolvedTrouble}}个，
                  其中未解决危险品{{queryAlarmLastTimeData.noResolvedDanger}}个；
                  当日相关巡检{{queryAlarmLastTimeData.inspection}}次，有{{queryAlarmLastTimeData.inspectionPeople}}人参与了巡检，累计发现隐患{{queryAlarmLastTimeData.findCount}}个，
                  解决隐患{{queryAlarmLastTimeData.resolvedTrouble}}个。<br>
                  该建筑累计发生报警{{queryAlarmLastTimeData.alarmSum}}个，其中主机报警{{queryAlarmLastTimeData.deviceAlarm}}个，人工报警{{queryAlarmLastTimeData.peopleAlarm}}个，累计火情{{queryAlarmLastTimeData.fireAlarm}}起。
                </article>
                <!-- 起火位置相关最近一次报警记录 -->
                <div class="textandimg fire-survey col-sm-12 border-none clearfix">
                  <h5>起火位置相关最近一次报警记录</h5>
                  <hr>
                  <div class="row textandimg-main clearfix"  v-for="item in queryLastTimeAlarmData" >
                    <div class="col-sm-12">
                      <span>详细位置 </span>
                      <strong>
                        {{item.unitName}}
                        {{item.buildingName}}
                        {{item.roomName}}
                        {{item.deviceName}}
                      </strong>
                    </div>
                    <div class="col-sm-4">
                      <span>报警时间 </span>
                      <strong>{{item.startTime}}</strong>
                    </div>
                    <div class="col-sm-4">
                      <span>确认时间 </span>
                      <strong>{{item.confirmTime}}</strong>
                    </div>
                    <div class="col-sm-4">
                      <span>关闭时间 </span>
                      <strong>{{item.cancelTime}}</strong>
                    </div>
                    <div class="col-sm-4">
                      <span>响应时长 </span>
                      <strong class="font-blue">{{this.timeFn(item.startTime,item.confirmTime)}}秒</strong>
                    </div>
                    <div class="col-sm-8">
                      <span>持续时长 </span>
                      <strong class="font-blue">{{this.timeFn(item.startTime ,item.cancelTime)}}秒</strong>
                    </div>
                    <div class="col-sm-4">
                      <span>报警源 </span>
                      <strong v-if="item.eventlevel==0">{{item.deviceName}}</strong>
                      <strong v-if="item.eventlevel!=0">{{item.nickName}}</strong>
                    </div>
                    <div class="col-sm-4">
                      <span>确认人 </span>
                      <strong>{{item.confirmNickName}}</strong>
                    </div>
                    <div class="col-sm-4">
                      <span>关闭人 </span>
                      <strong>{{item.cancelNickName}}</strong>
                    </div>
                    <div class="col-sm-12">
                      <span>报警状态 </span>
                      <strong>
                        {{item.eventlevel}}
                        <span class="font-blue" v-if="item.eventlevel!= 2">未发生火情</span>
                        <span class="font-red" v-if="item.eventlevel=== 2">发生火情</span>
                      </strong>
                    </div>
                  </div>
                </div>
                <!-- 起火位置相关未解决隐患详情 -->
                <div class="textandimg fire-survey col-sm-12 border-none clearfix">
                  <h5>起火位置相关未解决隐患详情</h5>
                  <hr>
                  <div class="row textandimg-main clearfix" v-for="item in queryLastTimeTroubleData ">
                    <div class="col-sm-8">
                      <span>详细位置 </span>
                      <strong>
                        {{item.unitName}}
                        {{item.buildingName}}
                        {{item.roomName}}
                        {{item.deviceName}}
                      </strong>
                    </div>
                    <div class="col-sm-4">
                      <span>隐患类别 </span>
                      <strong>
                        {{item.type===1?'损坏物':null}}
                        {{item.type===2?'人为风险':null}}
                        {{item.type===3?'非人为风险':null}}
                        {{item.type===4?'丢失物':null}}
                        {{item.type===5?'危险品':null}}
                      </strong>
                    </div>
                    <div class="col-sm-4">
                      <span>上报时间 </span>
                      <strong>{{item.createTime}}</strong>
                    </div>
                    <div class="col-sm-4">
                      <span>上报人 </span>
                      <strong>{{item.nickName}}</strong>
                    </div>
                    <div class="col-sm-4">
                      <span>优先级</span>
                      <strong>
                        <span class="font-blue" v-if="item.levels === 1">低</span>
                        <span class="font-yellow" v-if="item.levels === 2">中</span>
                        <span class="font-red" v-if="item.levels === 3">高</span></strong>
                    </div>
                    <div class="col-sm-12">
                      <span>隐患说明 </span>
                      <strong>{{item.cont}}</strong>
                    </div>
                    <div class="col-sm-12">
                      <span>图片视频 </span>
                      <ul class="fire-media list-inline">
                        <li v-for="video in item.confirmUrls">
                          <video :src="Global.imgPath+video" alt="" height="80"></video>
                        </li>
                        <li v-for="img in item.imgUrl">
                          <img :src="Global.imgPath+img" alt="" height="80">
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- 起火位置最近一次巡检记录 -->
                <div class="textandimg fire-survey col-sm-12 border-none clearfix">
                  <h5>起火位置最近一次巡检记录</h5>
                  <hr>
                  <div class="row textandimg-main clearfix">
                    <div class="col-sm-4">
                      <span>任务名称： </span>
                      <strong>{{queryLastTimeInspectionData.inspectionName}}</strong>
                    </div>
                    <div class="col-sm-8">
                      <span>相关节点 </span>
                      <strong v-for="(item,index) in queryLastTimeInspectionData.inspectionNodes"
                              v-if="index<1 || index >(queryLastTimeInspectionData.inspectionNodes.length-2)">
                        {{index<1?'起点：':'终点：'}}{{item.buildingName}}{{item.floorNumber}}{{item.roomNumber}}{{item.deviceName}};
                      </strong>
                    </div>
                    <div class="col-sm-4">
                      <span>巡检员 </span>
                      <span>{{queryLastTimeInspectionData.userName}}</span>
                    </div>
                    <div class="col-sm-8">
                      <span>节点相关起止时间 </span>
                      <strong>{{queryLastTimeInspectionData.receiveTime}} 至
                        {{queryLastTimeInspectionData.finishedTime}}</strong>
                    </div>
                    <div class="col-sm-4">
                      <span>发现隐患 </span>
                      <strong class="font-blue">{{queryLastTimeInspectionData.findTroubleCount}}个</strong>
                    </div>
                    <div class="col-sm-8">
                      <span>解决隐患 </span>
                      <strong class="font-blue">{{queryLastTimeInspectionData.decideCount}}个</strong>
                    </div>
                  </div>
                </div>
              </section>
              <!-- 历史数据分析 -->
              <h2 id="section-3">历史数据分析</h2>
              <div class="textandimg fire-survey">
                <!-- 筛选 -->
                <section class="my-filter padding5 bg-gray-111 clearfix">
                  <!-- 日期筛选 -->
                  <div class="pull-left padding-left50">
                    <section>
                      <div class="upd-elmdate">
                       <el-date-picker
                        v-model="dateValue"
                        type="datetime"
                        placeholder="选择日期时间"
                        align="center"
                        :picker-options="pickerOptions1">
                        </el-date-picker>
                      </div>
                    </section>
                  </div>
                </section>
                <div style="width: 750px;height: 600px; " id="fireLineChart"><!-- 折线图 --></div>
                <!-- 表格 -->
                <div class="main_content_table">
                  <el-table
                    :data="tableData"
                    border="true"
                    width="100">
                    <el-table-column
                      prop="hour"
                      label="时间"
                      width="150">
                    </el-table-column>
                    <el-table-column
                      prop="inspectionPersonCount"
                      label="巡检人数">
                    </el-table-column>
                    <el-table-column
                      prop="inspectionFinishCount"
                      label="巡检任务完成次数">
                    </el-table-column>
                    <el-table-column
                      prop="alarmNumCount"
                      label="报警数">
                    </el-table-column>
                    <el-table-column
                      prop="alarmAffirmNumCount"
                      label="报警确认数">
                    </el-table-column>
                    <el-table-column
                      prop="troubleUnSolvedCount"
                      label="隐患数">
                    </el-table-column>
                    <el-table-column
                      prop="troubleDangerUnSolvedCount"
                      label="危险品数">
                    </el-table-column>
                    <el-table-column
                      prop="buildingScore"
                      label="建筑安全评分">
                    </el-table-column>
                    <el-table-column
                      prop="unitnScore"
                      label="单位安全评分">
                    </el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
            <!-- 按钮 -->
            <div class="main_tab col-sm-offset-4 col-sm-4">
              <button type="button" @click="fireAnalysis = false">
                <i class="el-icon-printer"></i> 打印
              </button>
              <button type="button" @click="fireAnalysis = false">
                <i class="el-icon-share"></i> 导出
              </button>
              <button type="button" @click="fireAnalysis = false">
                <i class="el-icon el-icon-close"></i> 关闭
              </button>
            </div>
          </div>
        </section>
      </div>
    </el-dialog>
  </header>

</template>

<script>
  import messagesVue from './messages.vue'
  import moment from 'moment'
  import {mapState} from 'vuex'
  import Global from "../../Global.vue";
  export default {
    components: {
      'messages-vue': messagesVue,
    },
    // 选择器
    data() {
      return {
        //时间
        date: new Date(),
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        dateValue:null,
        // 弹窗
        personnelInfo: false,
        fireAnalysis: false,

        areavalue: '选项2',
        unitvalue: '全部单位',
        queryUnit: Object,
        username: '-',
        //人员在线
        userAnalyseDate: Object,
        userAnalyseDate_param: {
          unitId: null
        },
        getBuildingData_parameter: {
          unitId: null
        },
        getDeviceData_parameter: {
          unitId: null
        },
        buildCount: null,
        deviceCount: null,
        //请求天气
        weatherData: Object,
        getWeatherData_parameter: {
          cityName: 'nanning'
        },
        //主机在线
        transmissionDate: Object,
        getTransmissionDate_parameter: {
          unitId: null
        },
        queryUserInfo_parameter: {
          userId: null
        },
        userCountData: Object,
        userInfoData: Object,
        punchclocktrue: false,
        punchImgUrl: '',
        punchStartTime: '',
        punchExpireMillisecond: '',
        punchExpireTime: '',
        punchInterval: null,
        //火情分析列表数据
        queryFirehistoryData_parameter: {
          buildingId: 3,
          startTime: '2018-08-31 18:24:23'
        },
        tableData: {
          id: null,
          hour: null,
          inspectionPersonCount: null,
          inspectionFinishCount: null,
          alarmNumCount: null,
          alarmAffirmNumCount: null,
          troubleUnSolvedCount: null,
          troubleDangerUnSolvedCount: null,
          buildingScore: null,
          unitnScore: null
        },
        alarmAffirmNumLineChartData:Object,
        alarmNumLineChartData:Object,
        inspectionPersonLineChartData:Object,
        troubleUnSolvedLineChartData:Object,
        troubleDangerUnSolvedLineChartData:Object,
        inspectionFinishLineChartData:Object,
        buildScoreLineChartData:Object,
        unitScoreLineChartData:Object,

        queryAlarmLastTimeData: {
          findCount: Number,
          safeScore: Number,
          ResolvedTrouble: Number,
          inspectionPeople: Number,
          deviceAlarm: Number,
          noResolvedTrouble: Number,
          alarmSum: Number,
          elementName: String,
          noResolvedDanger: Number,
          peopleAlarm: Number,
          riskScore: Number,
          fireAlarm: Number,
          inspection: Number
        },
        //起火单位最近数据
        queryAlarmLastTime_param: {
          alarmId: 2002,
        },
        //起火位置最近一次的报警记录
        queryLastTimeAlarmData: Object,
        queryLastTimeAlarm_param: {
          alarmId: 2002,
        },
        //起火位置相关未解决隐患详情
        queryLastTimeTroubleData: Object,
        queryLastTimeTrouble_param: {
          alarmId: 2002,
        },
        //起火位置最近一次巡检记录
        queryLastTimeInspectionData: Object,
        queryLastTimeInspection_param: {
          alarmId: 2002,
        },
        //事故概况
        queryFireSituationAlarmData: Object,
        queryFireSituationFireData: Object,
        queryFireSituation_param: {
          alarmId: 2002,
        },
        //单位信息
        queryUnitInfo: Object,
        queryUnitInfo_param: {
          unitId: 13
        },
        queryUnitInfoImg: require('../../assets/images/jpg01.jpg'),
        //单位统计
        getUnitsSynthesisData: Object,
        getUnitsSynthesis_param: {
          unitId: 13
        },
        imageP:''
      }
    },
    computed: mapState([
      'userinfo',
    ]),
    watch: {
      userinfo() {
        //this.getuserinfo=this.userinfo;
        //console.log(this.userinfo);
      },
      dateValue(val){//普通的watch监听
        this.queryFirehistoryData_parameter.startTime = val;
        this.queryFirehistoryData();
      },
    },
    //其他
    mounted() {
      this.imageP=Global.imgPath;
      this.userAnalyse()
      this.getBuildingData()
      this.getDeviceData()
      this.getTransmission()
      this.mini_go('header-canvas-cpu', 1)
      this.mini_go('header-canvas-memory', 1)
      $('[data-toggle=\'tooltip\']').tooltip()
      this.getunitlist()
      this.getuserinfo()
      this.getWeather()
      let _this = this //声明一个变量指向vue实例this,保证作用域一致
      this.timer = setInterval(() => {
        _this.date = new Date()//修改数据date
      }, 1000)
      this.weathers = setInterval(() => {
        _this.getWeather()
      }, 1000 * 60 * 60 * 5)
      // 获取打卡信息
      this.getPunch()

      //火情分析
      this.queryFirehistoryData();
      //this.queryAlarmLastTime();
      this.queryLastTimeAlarm();
      this.queryLastTimeTrouble();
      this.queryLastTimeInspection();
      this.getUnitsSynthesis();
      this.getQueryUnitInfo();
      this.queryFireSituation();
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer)//在vue实例销毁钱，清除我们的定时器
      }
      if (this.weathers) {
        clearInterval(this.weathers)//在vue实例销毁钱，清除我们的定时器
      }
    }
    ,

    methods: {
      timeFn: function (beginTime, endTime) {

       let iDays = parseInt(Math.abs( new Date(beginTime).getTime()-new Date(endTime).getTime()) / 1000  ) //把相差的毫秒数转换为天数
        return iDays
      },
      TimeFormat: function (time) {
        let date = new Date(time)
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        // 拼接
        return hours + ':' + minutes + ':' + seconds
      }
      ,
      dateFormat: function (time) {
        /* 在日期格式中，月份是从0开始的，因此要加0
      * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
      * */
        let date = new Date(time)
        let year = date.getFullYear()
        let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        // 拼接
        return year + '-' + month + '-' + day
      }
      ,
      // 显示消息模态窗
      modal_per() {
        $('#modal_per').modal('show')
      }
      ,
      // 打卡框
      signIn() {

      }
      ,
      // 显示消息模态窗
      showMessages() {
        $('#showmessages').modal('toggle')
        $('#showmessages').on('show.bs.modal', function () {
          $('.icon-xiaoxi-mian--').addClass('font-white')
        })
      }
      ,
      // 开关声音
      voice() {
        $('.icon-tongzhi-mian-').toggleClass('font-blue')
      }
      ,

      mini_go(id, num) {
        //画底圆
        //mini图配置
        var canvas_mini = document.getElementById(id)

        canvas_mini.width = canvas_mini.width
        canvas_mini.height = canvas_mini.height
        var cxt_mini = canvas_mini.getContext('2d')
        cxt_mini.fillStyle = 'rgba(255, 255, 255, 0)'
        // cxt_mini.globalAlpha= (Math.sin(0) + 1) / 2;
        var mini_width = canvas_mini.width
        var mini_height = canvas_mini.height
        var mini_r = mini_width / 2
        cxt_mini.translate(mini_width / 2, mini_height / 2)
        var radi2_mini = mini_r * 0.855
        cxt_mini.rotate(5.5)
        // 画底圆
        cxt_mini.translate(-25, -25)
        cxt_mini.translate(mini_width / 2, mini_height / 2)
        cxt_mini.clearRect(0, 0, mini_width, mini_height)
        cxt_mini.beginPath()
        cxt_mini.lineWidth = 2
        cxt_mini.strokeStyle = '#fff'
        cxt_mini.arc(0, 0, mini_r * 0.75, 0, 2 * Math.PI)
        cxt_mini.stroke()
        cxt_mini.closePath()
        //画比例圆
        cxt_mini.beginPath()
        cxt_mini.lineWidth = 2
        cxt_mini.strokeStyle = '#bad616'
        cxt_mini.arc(0, 0, mini_r * 0.75, 0, 2 * Math.PI * num, true)
        cxt_mini.stroke()
        cxt_mini.closePath()
        //画斜杠
        cxt_mini.beginPath()
        cxt_mini.lineWidth = 2
        cxt_mini.strokeStyle = '#fff'
        var moveto = mini_width * 0.133333333
        var lineto = mini_width * 0.377777777
        cxt_mini.moveTo(moveto, 0)
        cxt_mini.lineTo(lineto, 0)
        cxt_mini.stroke()
        cxt_mini.closePath()
      },

      //绘制折线图
      draw_line(id,data){
      //巡检人数
      let alarmAffirmNumData = data.alarmAffirmNumLineChart.lineChartsDate;
      let alarmAffirmlineChartsCount = data.alarmAffirmNumLineChart.lineChartsCount;
      //巡检任务完成数
      let alarmNumLineCount = data.alarmNumLineChart.lineChartsCount
      //报警数
      let inspectionPersonCount = data.inspectionPersonLineChart.lineChartsCount
      //报警确认数
      let troubleUnSolvedCount = data.troubleUnSolvedLineChart.lineChartsCount
      //隐患数
      let troubleDangerUnSolvedCount = data.troubleDangerUnSolvedLineChart.lineChartsCount
      //高危险平数
      let inspectionFinishCount = data.inspectionFinishLineChart.lineChartsCount
      //建筑安全评分
      let buildScoreCount = data.buildScoreLineChart.lineChartsCount
      //单位安全评分
      let unitScoreCount = data.unitScoreLineChart.lineChartsCount


       let option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:["巡检人数","巡检任务完成次数","报警数","报警确认数","隐患数","危险品数","单位安全评分","建筑安全评分"],
            selected: {
              '报警数' : false,
              '报警确认数' : false,
              '隐患数' : false,
              '危险品数' : false,
              '建筑安全评分' : false,
            }

          },
          grid: {
            left: '4%',
            right: '4%',
            bottom: '2%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: alarmAffirmNumData,
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'巡检人数',
              type:'line',
              stack: '总量',
              data:alarmAffirmlineChartsCount
            },
            {
              name:'巡检任务完成次数',
              type:'line',
              stack: '总量',
              data:alarmNumLineCount
            },
            {
              name:'报警数',
              type:'line',
              stack: '总量',
              data:inspectionPersonCount
            },
            {
              name:'报警确认数',
              type:'line',
              stack: '总量',
              data:troubleUnSolvedCount
            },
            {
              name:'隐患数',
              type:'line',
              stack: '总量',
              data:troubleDangerUnSolvedCount
            },
            {
              name:'危险品数',
              type:'line',
              stack: '总量',
              data:inspectionFinishCount
            },
            {
              name:'单位安全评分',
              type:'line',
              stack: '总量',
              data:unitScoreCount
            },
            {
              name:'建筑安全评分',
              type:'line',
              stack: '总量',
              data:buildScoreCount
            }
          ]
        };
        let charf = this.$echarts.init(document.getElementById(id));
        charf.setOption(option);
      },
      getunitlist() {
        this.$fetch('/api/unit/queryUnit')
          .then(response => {
            if (response) {
              this.queryUnit = response.data.unitList
              this.$store.commit('mapAllUnit', response.data.unitList)
              //console.log(this.queryUnit);
              //console.log(this.queryUnit.length);
              if (this.queryUnit.length == 1) {
                this.unitvalue = this.queryUnit[0].name
                this.$store.commit('unitid', this.queryUnit[0].id)
              } else if (this.queryUnit.length > 1) {
                if (sessionStorage.unitid) {
                  response.data.unitList.forEach(element => {
                    if (element.id == sessionStorage.unitid) {
                      this.unitvalue = element.name
                      return
                    }
                  })
                } else {
                  this.unitvalue = '全部单位'
                }
                this.queryUnit.unshift({
                  id: 0,
                  name: '全部单位'
                })
                this.$store.commit('unitid', null)
              }
            }
          })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      getPunch() {
        this.$fetch('/api/workPunch/getPunch')
          .then(response => {
            if (response.status == 1) {
              this.punchStartTime = response.data.startTime
              var code = encodeURI(response.data.code)
              this.punchImgUrl = '/api/qrcode/img?content=' + code
              this.punchExpireMillisecond = response.data.expireMillisecond
              this.punchclocktrue = true
              let that = this
              this.punchInterval = setInterval(() => {
                that.getExpireTime()
              }, 1000)
            } else {
              this.punchclocktrue = false
            }
          })
      }
      ,
      getExpireTime() {
        let a = new Date(this.punchStartTime).getTime()
        let b = new Date().getTime()
        let responseMillisecond = moment.duration(this.punchExpireMillisecond - moment.duration(b - a, 'ms'), 'ms')
        if (responseMillisecond <= 0) {
          this.punchclocktrue = false
        }
        let minutes = responseMillisecond.get('minutes')
        let seconds = responseMillisecond.get('seconds')
        this.punchExpireTime = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
      }
      ,
      //请求在线
      userAnalyse() {
        this.$fetch('/api/user/userAnalyse', this.userAnalyseDate_param)
          .then(response => {
            if (response) {
              this.userAnalyseDate = response.data.userAnalyse
              let number = (this.userAnalyseDate.userOnlineCount) / (this.userAnalyseDate.userCount)
              let str = Number(number).toFixed(2)
              if (str == 1) {
                str = 0
              }
              this.mini_go('header-canvas-people', 1 - str)
            }
          })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      //建筑
      getBuildingData() {
        this.$fetch('/api/building/queryBuildStatisInfo', this.getBuildingData_parameter
        ).then(response => {
          if (response.data) {
            this.buildCount = response.data.buildStats.TOTALBUILD
          }
        })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      //退出登录
      logout() {

        this.$fetch('/cas/logout',).then(response => {
          if (response.status === 1) {
            this.$router.push({path: '/login'})
          }
        })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      //请求天气接口
      getWeather() {
        this.$fetch('/api/weather/toDayWeather', this.getWeatherData_parameter
        ).then(response => {
          if (response.data) {
            this.weatherData = response.data.weather
          }
        })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      //设备
      getDeviceData() {
        this.$fetch('/api/device/alarmAndMalfunctionDeviceCount', this.getDeviceData_parameter
        ).then(response => {
          if (response.data) {
            this.deviceCount = response.data.deviceTotal
          }
        })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      //主机在线
      getTransmission() {
        this.$fetch('/api/device/transmission_analyse', this.getTransmissionDate_parameter
        ).then(response => {
          if (response.data) {
            this.transmissionDate = response.data.transmissionAnalyse
            let number = (this.userAnalyseDate.transmissionOnlineCount) / (this.userAnalyseDate.transmissionCount)
            let str = Number(number).toFixed(2)
            if (str == 1) {
              str = 0
            }
            this.mini_go('header-canvas-host', 1 - str)
          }
        })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      getUserInfogetUserInfo() {
        this.queryUserInfo_parameter.userId = localStorage.userId
        this.personnelInfo = true
        this.$fetch('/api/alarmstats/queryUserData',
          this.queryUserInfo_parameter)
          .then(response => {
            if (response.data) {
              let data = response.data
              this.userCountData = data.info
              this.userInfoData = data.info.user
            }
          })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      //火情分析折线图下列表
      queryFirehistoryData() {
        this.$fetch('/api/alarmstats/queryFirehistoryData', this.queryFirehistoryData_parameter
        ).then(response => {
          if (response.data) {
            //列表数据
            this.tableData = response.data.result.fireAnalyzeList;
            this.draw_line("fireLineChart",response.data.result)
          }
        })
          .then(err => {
            //console.log(err);
          })
      } ,

      //火情分析 起火单位最近数据
      queryAlarmLastTime() {
        this.$fetch('/api/alarmstats/queryAlarmLastTime', this.queryAlarmLastTime_param
        ).then(response => {
          if (response.data) {
            this.queryAlarmLastTimeData = response.data.trouble
          }
        })
          .then(err => {
            //console.log(err);
          })
      }  ,

      //起火位置相关最近一次报警记录
      queryLastTimeAlarm() {
        this.$fetch('/api/alarm/queryLastTimeAlarm', this.queryLastTimeAlarm_param
        ).then(response => {
          if (response.data) {
            this.queryLastTimeAlarmData = response.data.alarm
          }
        })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      //起火位置相关未解决隐患详情
      queryLastTimeTrouble() {
        this.$fetch('/api/trouble/queryLastTimeTrouble', this.queryLastTimeTrouble_param
        ).then(response => {
          if (response.data) {
            this.queryLastTimeTroubleData = response.data.troubles
          }
        })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      //起火位置最近一次巡检记录
      queryLastTimeInspection() {
        this.$fetch('/api/alarmstats/queryLastTimeInspection', this.queryLastTimeInspection_param
        ).then(response => {
          if (response.data) {
            this.queryLastTimeInspectionData = response.data.information
          }
        })
          .then(err => {
            //console.log(err);
          })
      }
      ,
      //事故概况
      queryFireSituation() {
        this.$fetch('/api/alarmstats/queryFireSituation', this.queryFireSituation_param
        ).then(response => {
          if (response.data) {
              this.queryFireSituationAlarmData = response.data.result.alarm,
              this.queryFireSituationFireData = response.data.result.alarmFire
          }
        })
          .then(err => {
            //console.log(err);
          })
      }  ,
      //单位信息
      getQueryUnitInfo() {
        this.$fetch("/api/unit/queryUnitInfo", this.queryUnitInfo_param)
          .then(response => {
            if (response.data) {
              this.queryUnitInfo = response.data.unitInfo;
              this.queryUnitInfoImg = 'http://img.nanninglq.51play.com/xf/api/unit_img/' + this.queryUnitInfo_param.unitId + '.jpg';
            }
          });
      } ,
      //单位统计
      getUnitsSynthesis() {
        this.$fetch("/api/unit/getUnitsSynthesis", this.getUnitsSynthesis_param
        ).then(response => {
          if (response.data) {
            this.getUnitsSynthesisData = response.data.result;
          }
        });
      }  ,
      optionchange() {
        sessionStorage.unitid = this.unitvalue
        this.$store.commit('unitid', this.unitvalue)
      }
      ,
      getuserinfo() {
        this.username = localStorage.name
      }
      ,
      management() {
        this.$store.commit('mapShow', false)
      }
    }
  }
</script>

<style scoped>

</style>
