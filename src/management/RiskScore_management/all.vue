<!--suppress ALL -->
<template>
  <section class="em-tab">
    <!-- 标题 -->
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-fengxianfenxi-xian-"></i>
        <h2>风险评分</h2>
      </div>
      <!--<div class="main_nav float-right">
        <span class="btn_add" @click="btn_save"><i class="el-icon-circle-check-outline"></i>提交</span>
      </div>-->
    </div>
    <el-tabs>
          <!-- 单位评分 -->
          <el-tab-pane>
            <span slot="label"><i class="icon iconfont icon-danweiguanli-xian-2"></i>单位评分</span>
            <div class="main_all_content">
              <div class="main_content_top">
                <!-- 筛选 -->
                <el-form ref="form" status-icon :model="form" class="float-left">
                  <el-select v-model="unitId">
                    <el-option v-for="item in unitList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                </el-form>
                <div class="main_nav_two float-right">
                  <span class="btn_add" @click="saveUnitScore"><i class="el-icon-circle-check-outline"></i>提交</span>
                </div>
              </div>
            <div class="main_content_table position-relative big-list-table">
                <div class="table-scroll">
                  <table id="unitTable" class="table toolroute-table">
                    <thead>
                      <tr>
                        <th>B级要素</th>
                        <th>B级权重</th>
                        <th>C级要素</th>
                        <th>C级权重</th>
                        <th>D级要素</th>
                        <th>D级权重</th>
                        <th>评分</th>
                      </tr>
                    </thead>
                    <tbody>
                     <tr>
                       <td rowspan="2" class="unitB">建筑防火</td>
                       <td rowspan="2" id="b64"></td>
                       <td class="unitC">防火间距及防火间隔</td>
                       <td id="c71"></td>
                       <td class="unitD">建筑间防火间距</td>
                       <td id="d72"></td>
                       <td><input id="s72" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitC">安全疏散条件</td>
                       <td id="c73"></td>
                       <td class="unitD">事故广播系统</td>
                       <td id="d74"></td>
                       <td><input id="s74" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                    <tr>
                      <td rowspan="11"  class="unitB">火灾危险源</td>
                      <td rowspan="11" id="b65"></td>
                      <td rowspan="2" class="unitC">避雷</td>
                      <td rowspan="2" id="c75"></td>
                      <td class="unitD">防雷检查系统</td>
                      <td id="d76"></td>
                      <td><input id="s76" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                     <tr>
                       <td class="unitD">避雷设施定期检查</td>
                       <td id="d77"></td>
                       <td><input id="s77" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="4" class="unitC">明火</td>
                       <td rowspan="4" id="c78"></td>
                       <td class="unitD">燃灯焚香祭祀</td>
                       <td id="d79"></td>
                       <td><input id="s79" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">施工作业项目</td>
                       <td id="d80"></td>
                       <td><input id="s80" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">人员因素影响（明火）</td>
                       <td id="d81"></td>
                       <td><input id="s81" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">其他外部因素</td>
                       <td id="d82"></td>
                       <td><input id="s82" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="2" class="unitC">电气设备隐患</td>
                       <td rowspan="2" id="c83"></td>
                       <td class="unitD">电气火灾监控系统</td>
                       <td id="d84"></td>
                       <td><input id="s84" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">电气防火定期检测</td>
                       <td id="d85"></td>
                       <td><input id="s85" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="3" class="unitC">生活用火隐患</td>
                       <td rowspan="3" id="c86"></td>
                       <td class="unitD">燃料使用情况</td>
                       <td id="d87"></td>
                       <td><input id="s87" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">燃气泄漏报警系统</td>
                       <td id="d88"></td>
                       <td><input id="s88" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">油烟道定期清洗</td>
                       <td id="d89"></td>
                       <td><input id="s89" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="2" class="unitB">消防设施</td>
                       <td rowspan="2" id="b66"></td>
                       <td rowspan="2" class="unitC">消防给水</td>
                       <td rowspan="2" id="c90"></td>
                       <td class="unitD">天然水源</td>
                       <td id="d91"></td>
                       <td><input id="s91" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">室外消防栓</td>
                       <td id="d92"></td>
                       <td><input id="s92" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="7" class="unitB">消防安全管理</td>
                       <td rowspan="7" id="b67"></td>
                       <td rowspan="2" class="unitC">消防安全制度与安全操作规程</td>
                       <td rowspan="2" id="c93"></td>
                       <td class="unitD">消防安全管理制度</td>
                       <td id="d94"></td>
                       <td><input id="s94" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">消防安全操作规程</td>
                       <td id="d95"></td>
                       <td><input id="s95" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="2" class="unitC">火灾应急预案编制与演练</td>
                       <td rowspan="2" id="c96"></td>
                       <td class="unitD">火灾应急预案按合理性</td>
                       <td id="d97"></td>
                       <td><input id="s97" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">应急演练与预案修订</td>
                       <td id="d98"></td>
                       <td><input id="s98" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitC">消防设施维护及保养情况</td>
                       <td id="c99"></td>
                       <td class="unitD">消防设施定期检测维保</td>
                       <td id="d100"></td>
                       <td><input id="s100" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="2" class="unitC">消防安全培训与人员消防安全素质</td>
                       <td rowspan="2" id="c101"></td>
                       <td class="unitD">员工的消防培训情况</td>
                       <td id="d102"></td>
                       <td><input id="s102" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">员工的消防安全素质</td>
                       <td id="d103"></td>
                       <td><input id="s103" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="7" class="unitB">灭火救援</td>
                       <td rowspan="7" id="b68"></td>
                       <td rowspan="2" class="unitC">消防站点</td>
                       <td rowspan="2" id="c104"></td>
                       <td class="unitD">最近的消防站距离</td>
                       <td id="d105"></td>
                       <td><input id="s105" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">装备配置情况</td>
                       <td id="d106"></td>
                       <td><input id="s106" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="2" class="unitC">救援场地和消防车道</td>
                       <td rowspan="2" id="c107"></td>
                       <td class="unitD">消防车道</td>
                       <td id="d108"></td>
                       <td><input id="s108" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">消防车作业场地</td>
                       <td id="d109"></td>
                       <td><input id="s109" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="3" class="unitC">微型消防站</td>
                       <td rowspan="3" id="c110"></td>
                       <td class="unitD">微型消防站建设</td>
                       <td id="d111"></td>
                       <td><input id="s111" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">装备配置情况</td>
                       <td id="d112"></td>
                       <td><input id="s112" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">队员培训情况</td>
                       <td id="d113"></td>
                       <td><input id="s113" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="22" class="unitB">动态评分</td>
                       <td rowspan="22" id="b69"></td>
                       <td class="unitC">建筑评分</td>
                       <td id="c114"></td>
                       <td class="unitD">各建筑评分固定总和/建筑数量</td>
                       <td id="d115"></td>
                       <td><input id="s115" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitC">报警火情</td>
                       <td id="c116"></td>
                       <td class="unitD">火情发生率</td>
                       <td id="d117"></td>
                       <td><input id="s117" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="3" class="unitC">隐患危险</td>
                       <td rowspan="3" id="c118"></td>
                       <td class="unitD">隐患问题上报</td>
                       <td id="d119"></td>
                       <td><input id="s119" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">隐患问题整改</td>
                       <td id="d120"></td>
                       <td><input id="s120" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">危险品处理率</td>
                       <td id="d121"></td>
                       <td><input id="s121" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="5" class="unitC">巡检执勤</td>
                       <td rowspan="5" id="c122"></td>
                       <td class="unitD">巡检人员活跃度</td>
                       <td id="d123"></td>
                       <td><input id="s123" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">巡检任务执行率</td>
                       <td id="d124"></td>
                       <td><input id="s124" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">防火巡查检查</td>
                       <td id="d125"></td>
                       <td><input id="s125" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">终端巡查人数</td>
                       <td id="d126"></td>
                       <td><input id="s126" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">消防控制室中心人员值守</td>
                       <td id="d127"></td>
                       <td><input id="s127" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitC">设备故障</td>
                       <td id="c128"></td>
                       <td class="unitD">设备故障率</td>
                       <td id="d129"></td>
                       <td><input id="s129" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitC">预案编制</td>
                       <td id="c130"></td>
                       <td class="unitD">火灾应急预案编制</td>
                       <td id="d131"></td>
                       <td><input id="s131" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="4" class="unitC">气象因素</td>
                       <td rowspan="4" id="c132"></td>
                       <td class="unitD">季节因素</td>
                       <td id="d133"></td>
                       <td><input id="s133" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">温度条件</td>
                       <td id="d134"></td>
                       <td><input id="s134" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">湿度条件</td>
                       <td id="d135"></td>
                       <td><input id="s135" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">风力条件</td>
                       <td id="d136"></td>
                       <td><input id="s136" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="6" class="unitC">活动因素</td>
                       <td rowspan="6" id="c137"></td>
                       <td class="unitD">活动重要性</td>
                       <td id="d138"></td>
                       <td><input id="s138" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">参加人数</td>
                       <td id="d139"></td>
                       <td><input id="s139" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">举办时间</td>
                       <td id="d140"></td>
                       <td><input id="s140" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">活动是否有明火</td>
                       <td id="d143"></td>
                       <td><input id="s143" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">活动是否禁烟</td>
                       <td id="d141"></td>
                       <td><input id="s141" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">引入危险源</td>
                       <td id="d142"></td>
                       <td><input id="s142" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <!-- 建筑评分 -->
          <el-tab-pane>
            <span slot="label"><i class="icon iconfont icon-jianzhu-xian-"></i>建筑评分</span>
            <div class="main_all_content">
              <!-- 筛选 -->
              <div class="main_content_top">
                <!-- 筛选 -->
                <el-form ref="form" status-icon :model="form" class="float-left">
                  <el-select v-model="unitId">
                    <el-option v-for="item in unitList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                  <el-select v-model="buildingId">
                    <el-option
                      v-for="item in buildingList"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form>
                <div class="main_nav_two float-right">
                  <span class="btn_add" @click="saveBuildingScore"><i class="el-icon-circle-check-outline"></i>提交</span>
                </div>
              </div>
            <div class="main_content_table position-relative big-list-table">
                <div class="table-scroll">
                  <table id="buildingTable" class="table toolroute-table">
                    <thead>
                      <tr>
                        <th>B级要素</th>
                        <th>B级权重</th>
                        <th>C级要素</th>
                        <th>C级权重</th>
                        <th>D级要素</th>
                        <th>D级权重</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td rowspan="14">建筑防火</td>
                      <td rowspan="14" id="b1"></td>
                      <td rowspan="6">建筑参数</td>
                      <td rowspan="6" id="c5"></td>
                      <td>建筑重要性</td>
                      <td id="d70"></td>
                      <td><input id="s70" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑高度</td>
                      <td id="d6"></td>
                      <td><input id="s6" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑面积</td>
                      <td id="d7"></td>
                      <td><input id="s7" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑用途</td>
                      <td id="d8"></td>
                      <td><input id="s8" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑层数</td>
                      <td id="d9"></td>
                      <td><input id="s9" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑年代</td>
                      <td id="d10"></td>
                      <td><input id="s10" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="3">耐火等级</td>
                      <td rowspan="3" id="c11"></td>
                      <td>结构类型</td>
                      <td id="d12"></td>
                      <td><input id="s12" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>室内陈设</td>
                      <td id="d13"></td>
                      <td><input id="s13" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>装饰装修</td>
                      <td id="d14"></td>
                      <td><input id="s14" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>防火间距及防火分隔</td>
                      <td id="c15"></td>
                      <td>建筑内防火间距</td>
                      <td id="d16"></td>
                      <td><input id="s16" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="4">安全疏散条件</td>
                      <td rowspan="4" id="c17"></td>
                      <td>安全出口数量</td>
                      <td id="d18"></td>
                      <td><input id="s18" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>疏散宽度</td>
                      <td id="d19"></td>
                      <td><input id="s19" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>疏散距离</td>
                      <td id="d20"></td>
                      <td><input id="s20" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>应急照明设施</td>
                      <td id="d21"></td>
                      <td><input id="s21" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="7">火灾危险源</td>
                      <td rowspan="7" id="b2"></td>
                      <td rowspan="4">避雷</td>
                      <td rowspan="4" id="c22"></td>
                      <td>雷击接闪历史</td>
                      <td id="d23"></td>
                      <td><input id="s23" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>外部防雷装置</td>
                      <td id="d24"></td>
                      <td><input id="s24" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>内部防雷装置</td>
                      <td id="d25"></td>
                      <td><input id="s25" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>内部金属及管线布置</td>
                      <td id="d26"></td>
                      <td><input id="s26" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="3">电气设备隐患</td>
                      <td rowspan="3" id="c27"></td>
                      <td>电气线路敷设</td>
                      <td id="d28"></td>
                      <td><input id="s28" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>开关插座安装</td>
                      <td id="d29"></td>
                      <td><input id="s29" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>电气设备</td>
                      <td id="d30"></td>
                      <td><input id="s30" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="7">消防设施</td>
                      <td rowspan="7" id="b3"></td>
                      <td rowspan="3">火灾报警系统</td>
                      <td rowspan="3" id="c31"></td>
                      <td>火灾探测器</td>
                      <td id="d32"></td>
                      <td><input id="s32" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>手动报警按钮</td>
                      <td id="d33"></td>
                      <td><input id="s33" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>火灾报警控制器和联动装置</td>
                      <td id="d34"></td>
                      <td><input id="s34" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>消防给水</td>
                      <td id="c35"></td>
                      <td>室内消防栓</td>
                      <td id="d36"></td>
                      <td><input id="s36" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="3">灭火设施</td>
                      <td rowspan="3" id="c37"></td>
                      <td>自动灭火设施</td>
                      <td id="d38"></td>
                      <td><input id="s38" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>灭火器</td>
                      <td id="d39"></td>
                      <td><input id="s39" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>其他灭火器材</td>
                      <td id="d40"></td>
                      <td><input id="s40" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="17">建筑动态评分</td>
                      <td rowspan="17" id="b4"></td>
                      <td rowspan="2">报警火情</td>
                      <td rowspan="2" id="c53"></td>
                      <td>火情发生率</td>
                      <td id="d54"></td>
                      <td><input id="s54" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑内报警占比</td>
                      <td id="d55"></td>
                      <td><input id="s55" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="3">隐患危险</td>
                      <td rowspan="3" id="c56"></td>
                      <td>隐患问题上报</td>
                      <td id="d57"></td>
                      <td><input id="s57" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>隐患问题整改</td>
                      <td id="d58"></td>
                      <td><input id="s58" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>危险品处理</td>
                      <td id="d59"></td>
                      <td><input id="s59" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>设备故障</td>
                      <td id="c60"></td>
                      <td>设备故障率</td>
                      <td id="d61"></td>
                      <td><input id="s61" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>预案编制</td>
                      <td id="c62"></td>
                      <td>火灾应急预案编制</td>
                      <td id="d63"></td>
                      <td><input id="s63" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="4">气象因素</td>
                      <td rowspan="4" id="c45"></td>
                      <td>季节因素</td>
                      <td id="d41"></td>
                      <td><input id="s41" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>温度条件</td>
                      <td id="d42"></td>
                      <td><input id="s42" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>湿度条件</td>
                      <td id="d43"></td>
                      <td><input id="s43" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>风力条件</td>
                      <td id="d44"></td>
                      <td><input id="s44" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="6">室内活动</td>
                      <td rowspan="6" id="c46"></td>
                      <td>活动重要性</td>
                      <td id="d47"></td>
                      <td><input id="s47" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>参加人数</td>
                      <td id="d48"></td>
                      <td><input id="s48" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>举办时间</td>
                      <td id="d49"></td>
                      <td><input id="s49" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>活动是否有明火</td>
                      <td id="d50"></td>
                      <td><input id="s50" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>活动是否禁烟</td>
                      <td id="d51"></td>
                      <td><input id="s51" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>引入危险源</td>
                      <td id="d52"></td>
                      <td><input id="s52" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </el-tab-pane>
        </el-tabs>
  </section>
</template>

<script>
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        data : "",
        unitList:[],//单位列表
        buildingList:[],
        unitId : 0,
        buildingId:0,
      }
    },
    methods: {
      unitSearch(){
        this.$fetch(
          "/api/unit/queryUnit"
        )
          .then(response => {
            if (response) {
              this.unitList = response.data.unitList;
              this.unitId = this.unitList[0].id;
              this.buildSearch(this.unitId);
              this.tableUnitScoreList();
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
          .then(err => {
            // //console.log(err);
          });
      },
      buildSearch(unitId){
        this.$fetch("/api/building/selectNode",{
          unitId:unitId
        }).then(response=>{
          if (response) {
            this.buildingList = response.data.list;
            this.buildingId = this.buildingList[0].id;
            this.tableBuildingScoreList();
            console.info(this.unitId);
            console.info(this.buildingList.length);
          }
        })
      },

      tableUnitScoreList() {
        var that = this;
        this.$fetch(
          "/api/riskAssessFactor/queryFactorScore",{
            type:2,
            unitId:that.unitId
          }
        )
          .then(response => {
          if (response.data.treeList) {
          for (var i = 0; i < response.data.treeList.length; i++) {
            if (response.data.treeList[i].factorId == 72) {
              $("#s72").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 74) {
              $("#s74").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 76) {
              $("#s76").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 77) {
              $("#s77").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 79) {
              $("#s79").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 80) {
              $("#s80").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 81) {
              $("#s81").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 82) {
              $("#s82").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 84) {
              $("#s84").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 85) {
              $("#s85").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 87) {
              $("#s87").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 88) {
              $("#s88").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 89) {
              $("#s89").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 91) {
              $("#s91").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 92) {
              $("#s92").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 94) {
              $("#s94").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 95) {
              $("#s95").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 97) {
              $("#s97").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 98) {
              $("#s98").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 100) {
              $("#s100").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 102) {
              $("#s102").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 103) {
              $("#s103").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 105) {
              $("#s105").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 106) {
              $("#s106").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 108) {
              $("#s108").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 109) {
              $("#s109").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 111) {
              $("#s111").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 112) {
              $("#s112").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 113) {
              $("#s113").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 115) {
              $("#s115").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 117) {
              $("#s117").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 119) {
              $("#s119").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 120) {
              $("#s120").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 121) {
              $("#s121").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 123) {
              $("#s123").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 124) {
              $("#s124").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 125) {
              $("#s125").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 126) {
              $("#s126").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 127) {
              $("#s127").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 129) {
              $("#s129").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 131) {
              $("#s131").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 133) {
              $("#s133").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 134) {
              $("#s134").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 135) {
              $("#s135").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 136) {
              $("#s136").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 138) {
              $("#s138").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 139) {
              $("#s139").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 140) {
              $("#s140").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 141) {
              $("#s141").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 142) {
              $("#s142").val(response.data.treeList[i].score);
            }
            if (response.data.treeList[i].factorId == 143) {
              $("#s143").val(response.data.treeList[i].score);
            }
          }
        }

      })
      .then(err => {
          // //console.log(err);
        });
      },
      tableBuildingScoreList() {
        var that = this;
        this.$fetch(
          "/api/riskAssessFactor/queryFactorScore",{
            type:1,
            buildingId:that.buildingId
          }
        )
          .then(response => {
            if (response.data.treeList) {
              for (var i = 0; i < response.data.treeList.length; i++) {
                if (response.data.treeList[i].factorId == 6) {
                  $("#s6").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 7) {
                  $("#s7").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 8) {
                  $("#s8").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 9) {
                  $("#s9").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 10) {
                  $("#s10").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 12) {
                  $("#s12").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 13) {
                  $("#s13").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 14) {
                  $("#s14").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 16) {
                  $("#s16").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 18) {
                  $("#s18").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 19) {
                  $("#s19").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 20) {
                  $("#s20").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 21) {
                  $("#s21").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 23) {
                  $("#s23").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 24) {
                  $("#s24").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 25) {
                  $("#s25").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 26) {
                  $("#s26").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 28) {
                  $("#s28").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 29) {
                  $("#s29").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 30) {
                  $("#s30").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 32) {
                  $("#s32").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 33) {
                  $("#s33").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 34) {
                  $("#s34").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 36) {
                  $("#s36").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 38) {
                  $("#s38").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 39) {
                  $("#s39").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 40) {
                  $("#s40").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 41) {
                  $("#s41").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 42) {
                  $("#s42").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 43) {
                  $("#s43").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 44) {
                  $("#s44").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 47) {
                  $("#s47").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 48) {
                  $("#s48").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 49) {
                  $("#s49").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 50) {
                  $("#s50").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 51) {
                  $("#s51").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 52) {
                  $("#s52").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 54) {
                  $("#s54").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 55) {
                  $("#s55").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 57) {
                  $("#s57").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 58) {
                  $("#s58").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 59) {
                  $("#s59").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 61) {
                  $("#s61").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 63) {
                  $("#s63").val(response.data.treeList[i].score);
                }
                if (response.data.treeList[i].factorId == 70) {
                  $("#s70").val(response.data.treeList[i].score);
                }
              }
            }

          })
          .then(err => {
          });
      },
      tableUnitList() {
        var that=this;
        this.$fetch(
          "/api/riskAssessFactor/queryList",{
            type:2
          }
        )
          .then(response => {
            if (response.data.treeList) {
              for (var i = 0; i < response.data.treeList.length; i++) {
                if (response.data.treeList[i].id == 64) {
                  $("#b64").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 65) {
                  $("#b65").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 66) {
                  $("#b66").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 67) {
                  $("#b67").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 68) {
                  $("#b68").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 69) {
                  $("#b69").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 71) {
                  $("#c71").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 73) {
                  $("#c73").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 75) {
                  $("#c75").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 78) {
                  $("#c78").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 83) {
                  $("#c83").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 86) {
                  $("#c86").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 90) {
                  $("#c90").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 93) {
                  $("#c93").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 96) {
                  $("#c96").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 99) {
                  $("#c99").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 101) {
                  $("#c101").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 104) {
                  $("#c104").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 107) {
                  $("#c107").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 110) {
                  $("#c110").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 114) {
                  $("#c114").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 116) {
                  $("#c116").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 118) {
                  $("#c118").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 122) {
                  $("#c122").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 128) {
                  $("#c128").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 130) {
                  $("#c130").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 132) {
                  $("#c132").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 137) {
                  $("#c137").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 72) {
                  $("#d72").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 74) {
                  $("#d74").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 76) {
                  $("#d76").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 77) {
                  $("#d77").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 79) {
                  $("#d79").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 80) {
                  $("#d80").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 81) {
                  $("#d81").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 82) {
                  $("#d82").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 84) {
                  $("#d84").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 85) {
                  $("#d85").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 87) {
                  $("#d87").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 88) {
                  $("#d88").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 89) {
                  $("#d89").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 91) {
                  $("#d91").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 92) {
                  $("#d92").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 94) {
                  $("#d94").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 95) {
                  $("#d95").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 97) {
                  $("#d97").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 98) {
                  $("#d98").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 100) {
                  $("#d100").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 102) {
                  $("#d102").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 103) {
                  $("#d103").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 105) {
                  $("#d105").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 106) {
                  $("#d106").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 108) {
                  $("#d108").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 109) {
                  $("#d109").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 111) {
                  $("#d111").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 112) {
                  $("#d112").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 113) {
                  $("#d113").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 115) {
                  $("#d115").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 117) {
                  $("#d117").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 119) {
                  $("#d119").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 120) {
                  $("#d120").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 121) {
                  $("#d121").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 123) {
                  $("#d123").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 124) {
                  $("#d124").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 125) {
                  $("#d125").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 126) {
                  $("#d126").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 127) {
                  $("#d127").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 129) {
                  $("#d129").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 131) {
                  $("#d131").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 133) {
                  $("#d133").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 134) {
                  $("#d134").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 135) {
                  $("#d135").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 136) {
                  $("#d136").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 138) {
                  $("#d138").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 139) {
                  $("#d139").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 140) {
                  $("#d140").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 141) {
                  $("#d141").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 142) {
                  $("#d142").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 143) {
                  $("#d143").text(response.data.treeList[i].ratio);
                }
              }
            }

          })
          .then(err => {
            // //console.log(err);
          });
      },
      tableBuildingList() {
        var that=this;
        this.$fetch(
          "/api/riskAssessFactor/queryList",{
            type:1
          }
        )
          .then(response => {
            if (response.data.treeList) {
              for (var i = 0; i < response.data.treeList.length; i++) {
                if (response.data.treeList[i].id == 1) {
                  $("#b1").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 2) {
                  $("#b2").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 3) {
                  $("#b3").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 4) {
                  $("#b4").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 5) {
                  $("#c5").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 11) {
                  $("#c11").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 15) {
                  $("#c15").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 17) {
                  $("#c17").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 22) {
                  $("#c22").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 27) {
                  $("#c27").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 31) {
                  $("#c31").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 35) {
                  $("#c35").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 37) {
                  $("#c37").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 45) {
                  $("#c45").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 46) {
                  $("#c46").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 53) {
                  $("#c53").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 56) {
                  $("#c56").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 60) {
                  $("#c60").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 62) {
                  $("#c62").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 6) {
                  $("#d6").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 7) {
                  $("#d7").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 8) {
                  $("#d8").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 9) {
                  $("#d9").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 10) {
                  $("#d10").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 12) {
                  $("#d12").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 13) {
                  $("#d13").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 14) {
                  $("#d14").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 16) {
                  $("#d16").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 18) {
                  $("#d18").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 19) {
                  $("#d19").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 20) {
                  $("#d20").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 21) {
                  $("#d21").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 23) {
                  $("#d23").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 24) {
                  $("#d24").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 25) {
                  $("#d25").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 26) {
                  $("#d26").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 28) {
                  $("#d28").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 29) {
                  $("#d29").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 30) {
                  $("#d30").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 32) {
                  $("#d32").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 33) {
                  $("#d33").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 34) {
                  $("#d34").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 36) {
                  $("#d36").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 38) {
                  $("#d38").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 39) {
                  $("#d39").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 40) {
                  $("#d40").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 41) {
                  $("#d41").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 42) {
                  $("#d42").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 43) {
                  $("#d43").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 44) {
                  $("#d44").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 47) {
                  $("#d47").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 48) {
                  $("#d48").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 49) {
                  $("#d49").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 50) {
                  $("#d50").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 51) {
                  $("#d51").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 52) {
                  $("#d52").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 54) {
                  $("#d54").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 55) {
                  $("#d55").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 57) {
                  $("#d57").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 58) {
                  $("#d58").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 59) {
                  $("#d59").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 61) {
                  $("#d61").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 63) {
                  $("#d63").text(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 70) {
                  $("#d70").text(response.data.treeList[i].ratio);
                }
              }
            }

          })
          .then(err => {
            // //console.log(err);
          });
      },
      saveUnitScore() {
        var that = this;
        that.data = "";
        $("#unitTable td input").each(function(){
          var a = $(this).attr("id");
          that.data += that.data = a.substring(1, a.length) + "," + $(this).val() + ";"
        }) ;
        that.data.substring(0, that.data.length - 1);
        that.$fetch("/api/riskAssessFactor/addFactorScore",{
            unitId : that.unitId,
            data : that.data
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        ).then(response=>{

        })
      },
      saveBuildingScore() {
        var that = this;
        that.data = "";
        $("#buildingTable td input").each(function(){
          var a = $(this).attr("id");
          that.data += that.data = a.substring(1, a.length) + "," + $(this).val() + ";"
        }) ;
        that.data.substring(0, that.data.length - 1);
        that.$fetch("/api/riskAssessFactor/addFactorScore",{
            buildingId : that.buildingId,
            data : that.data
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(response=>{

        })
      },
    },
    mounted() {
      this.unitSearch();
      this.tableUnitList();
      this.tableBuildingList();
    },
    watch:{
      unitId(val,oldVal){
        this.unitId = val ;
        this.tableUnitScoreList();
        this.buildSearch();
      },
      buildingId(curVal,oldVal){
        this.buildingId = curVal ;
        this.tableBuildingScoreList();
      },
    }
}
</script>
<style lang="scss" scoped>
</style>
