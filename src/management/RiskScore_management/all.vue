<!--suppress ALL -->
<template>
  <section class="em-tab">
    <!-- 标题 -->
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-fengxianfenxi-xian-"></i>
        <h2>风险分析</h2>
      </div>
      <div class="main_nav float-right">
        <span class="btn_add" @click="btn_save"><i class="el-icon-circle-check-outline"></i>提交</span>
      </div>
    </div>
    <el-tabs>
      <!-- 修改评分 -->
          <el-tab-pane class="risk-score">
            <span slot="label"><i class="icon iconfont icon-fengxianfenxi-xian-"></i>风险评估</span>
            <!-- 主体 -->
            <div class="main_all_content">
              <!-- 筛选 -->
              <div class="main_content_top">
                <!-- 筛选 -->
                <el-form ref="form" status-icon :model="form" class="float-left">
                  <el-select v-model="unit" placeholder="选择单位" class="select">
                    <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                  </el-select>
                  <el-select
                    v-model="building"
                    placeholder="选择建筑"  class="start">
                      <el-option
                        v-for="item in buildList"
                        :label="item.name"
                        :value="item.id">
                      </el-option>
                    </el-select>
                </el-form>
              </div>
              <!-- 表格 -->
              <div class="main_content_table position-relative big-list-table">
                <div class="table-scroll">
                  <table class="table toolroute-table">
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
                      <td rowspan="7">多屏监控</td>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                     <tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                     <tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr><tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr><tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr><tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr><tr>
                      <td>灭火设备定位</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                     </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <!-- 单位模板 -->
          <el-tab-pane>
            <span slot="label"><i class="icon iconfont icon-danweiguanli-xian-2"></i>单位权重</span>
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
                      </tr>
                    </thead>
                    <tbody>
                     <tr>
                       <td rowspan="2" class="unitB">建筑防火</td>
                       <td rowspan="2"><input id="b64" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitC">防火间距及防火间隔</td>
                       <td><input id="c71" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">建筑间防火间距</td>
                       <td><input id="d72" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitC">安全疏散条件</td>
                       <td><input id="c73" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">事故广播系统</td>
                       <td><input id="d74" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                    <tr>
                      <td rowspan="11"  class="unitB">火灾危险源</td>
                      <td rowspan="11"><input id="b65" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td rowspan="2" class="unitC">避雷</td>
                      <td rowspan="2"><input id="c75" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td class="unitD">防雷检查系统</td>
                      <td><input id="d76" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                     <tr>
                       <td class="unitD">避雷设施定期检查</td>
                       <td><input id="d77" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="4" class="unitC">明火</td>
                       <td rowspan="4"><input id="c78" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">燃灯焚香祭祀</td>
                       <td><input id="d79" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">施工作业项目</td>
                       <td><input id="d80" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">人员因素影响（明火）</td>
                       <td><input id="d81" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">其他外部因素</td>
                       <td><input id="d82" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="2" class="unitC">电气设备隐患</td>
                       <td rowspan="2"><input id="c83" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">电气火灾监控系统</td>
                       <td><input id="d84" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">电气防火定期检测</td>
                       <td><input id="d85" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="3" class="unitC">生活用火隐患</td>
                       <td rowspan="3"><input id="c86" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">燃料使用情况</td>
                       <td><input id="d87" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">燃气泄漏报警系统</td>
                       <td><input id="d88" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">油烟道定期清洗</td>
                       <td><input id="d89" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="2" class="unitB">消防设施</td>
                       <td rowspan="2"><input id="b66" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td rowspan="2" class="unitC">消防给水</td>
                       <td rowspan="2"><input id="c90" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">天然水源</td>
                       <td><input id="d91" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">室外消防栓</td>
                       <td><input id="d92" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="7" class="unitB">消防安全管理</td>
                       <td rowspan="7"><input id="b67" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td rowspan="2" class="unitC">消防安全制度与安全操作规程</td>
                       <td rowspan="2"><input id="c93" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">消防安全管理制度</td>
                       <td><input id="d94" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">消防安全操作规程</td>
                       <td><input id="d95" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="2" class="unitC">火灾应急预案编制与演练</td>
                       <td rowspan="2"><input id="c96" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">火灾应急预案按合理性</td>
                       <td><input id="d97" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">应急演练与预案修订</td>
                       <td><input id="d98" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitC">消防设施维护及保养情况</td>
                       <td><input id="c99" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">消防设施定期检测维保</td>
                       <td><input id="d100" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="2" class="unitC">消防安全培训与人员消防安全素质</td>
                       <td rowspan="2"><input id="c101" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">员工的消防培训情况</td>
                       <td><input id="d102" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">员工的消防安全素质</td>
                       <td><input id="d103" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="7" class="unitB">灭火救援</td>
                       <td rowspan="7"><input id="b68" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td rowspan="2" class="unitC">消防站点</td>
                       <td rowspan="2"><input id="c104" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">最近的消防站距离</td>
                       <td><input id="d105" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">装备配置情况</td>
                       <td><input id="d106" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="2" class="unitC">救援场地和消防车道</td>
                       <td rowspan="2"><input id="c107" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">消防车道</td>
                       <td><input id="d108" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">消防车作业场地</td>
                       <td><input id="d109" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="3" class="unitC">微型消防站</td>
                       <td rowspan="3"><input id="c110" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">微型消防站建设</td>
                       <td><input id="d111" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">装备配置情况</td>
                       <td><input id="d112" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">队员培训情况</td>
                       <td><input id="d113" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="22" class="unitB">动态评分</td>
                       <td rowspan="22"><input id="b69" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitC">建筑评分</td>
                       <td><input id="c114" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">各建筑评分固定总和/建筑数量</td>
                       <td><input id="d115" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitC">报警火情</td>
                       <td><input id="c116" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">火情发生率</td>
                       <td><input id="d117" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="3" class="unitC">隐患危险</td>
                       <td rowspan="3"><input id="c118" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">隐患问题上报</td>
                       <td><input id="d119" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">隐患问题整改</td>
                       <td><input id="d120" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">危险品处理率</td>
                       <td><input id="d121" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="5" class="unitC">巡检执勤</td>
                       <td rowspan="5"><input id="c122" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">巡检人员活跃度</td>
                       <td><input id="d123" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">巡检任务执行率</td>
                       <td><input id="d124" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">防火巡查检查</td>
                       <td><input id="d125" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">终端巡查人数</td>
                       <td><input id="d126" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">消防控制室中心人员值守</td>
                       <td><input id="d127" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitC">设备故障</td>
                       <td><input id="c128" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">设备故障率</td>
                       <td><input id="d129" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitC">预案编制</td>
                       <td><input id="c130" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">火灾应急预案编制</td>
                       <td><input id="d131" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="4" class="unitC">气象因素</td>
                       <td rowspan="4"><input id="c132" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">季节因素</td>
                       <td><input id="d133" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">温度条件</td>
                       <td><input id="d134" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">湿度条件</td>
                       <td><input id="d135" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">风力条件</td>
                       <td><input id="d136" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td rowspan="6" class="unitC">活动因素</td>
                       <td rowspan="6"><input id="c137" type="text" autocomplete="off" class="el-input__inner"></td>
                       <td class="unitD">活动重要性</td>
                       <td><input id="d138" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">参加人数</td>
                       <td><input id="d139" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">举办时间</td>
                       <td><input id="d140" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">活动是否有明火</td>
                       <td><input id="d143" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">活动是否禁烟</td>
                       <td><input id="d141" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                     <tr>
                       <td class="unitD">引入危险源</td>
                       <td><input id="d142" type="text" autocomplete="off" class="el-input__inner"></td>
                     </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </el-tab-pane>
          <!-- 建筑模板 -->
          <el-tab-pane>
            <span slot="label"><i class="icon iconfont icon-jianzhu-xian-"></i>建筑权重</span>
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
                      <td rowspan="14"><input id="b1" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td rowspan="6">建筑参数</td>
                      <td rowspan="6"><input id="c5" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>建筑重要性</td>
                      <td><input id="d70" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑高度</td>
                      <td><input id="d6" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑面积</td>
                      <td><input id="d7" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑用途</td>
                      <td><input id="d8" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑层数</td>
                      <td><input id="d9" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑年代</td>
                      <td><input id="d10" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="3">耐火等级</td>
                      <td rowspan="3"><input id="c11" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>结构类型</td>
                      <td><input id="d12" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>室内陈设</td>
                      <td><input id="d13" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>装饰装修</td>
                      <td><input id="d14" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>防火间距及防火分隔</td>
                      <td><input id="c15" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>建筑内防火间距</td>
                      <td><input id="d16" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="4">安全疏散条件</td>
                      <td rowspan="4"><input id="c17" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>安全出口数量</td>
                      <td><input id="d18" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>疏散宽度</td>
                      <td><input id="d19" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>疏散距离</td>
                      <td><input id="d20" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>应急照明设施</td>
                      <td><input id="d21" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="7">火灾危险源</td>
                      <td rowspan="7"><input id="b2" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td rowspan="4">避雷</td>
                      <td rowspan="4"><input id="c22" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>雷击接闪历史</td>
                      <td><input id="d23" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>外部防雷装置</td>
                      <td><input id="d24" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>内部防雷装置</td>
                      <td><input id="d25" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>内部金属及管线布置</td>
                      <td><input id="d26" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="3">电气设备隐患</td>
                      <td rowspan="3"><input id="c27" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>电气线路敷设</td>
                      <td><input id="d28" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>开关插座安装</td>
                      <td><input id="d29" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>电气设备</td>
                      <td><input id="d30" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="7">消防设施</td>
                      <td rowspan="7"><input id="b3" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td rowspan="3">火灾报警系统</td>
                      <td rowspan="3"><input id="c31" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>火灾探测器</td>
                      <td><input id="d32" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>手动报警按钮</td>
                      <td><input id="d33" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>火灾报警控制器和联动装置</td>
                      <td><input id="d34" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>消防给水</td>
                      <td><input id="c35" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>室内消防栓</td>
                      <td><input id="d36" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="3">灭火设施</td>
                      <td rowspan="3"><input id="c37" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>自动灭火设施</td>
                      <td><input id="d38" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>灭火器</td>
                      <td><input id="d39" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>其他灭火器材</td>
                      <td><input id="d40" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="17">建筑动态评分</td>
                      <td rowspan="17"><input id="b4" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td rowspan="2">报警火情</td>
                      <td rowspan="2"><input id="c53" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>火情发生率</td>
                      <td><input id="d54" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>建筑内报警占比</td>
                      <td><input id="d55" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="3">隐患危险</td>
                      <td rowspan="3"><input id="c56" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>隐患问题上报</td>
                      <td><input id="d57" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>隐患问题整改</td>
                      <td><input id="d58" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>危险品处理</td>
                      <td><input id="d59" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>设备故障</td>
                      <td><input id="c60" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>设备故障率</td>
                      <td><input id="d61" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>预案编制</td>
                      <td><input id="c62" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>火灾应急预案编制</td>
                      <td><input id="d63" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="4">气象因素</td>
                      <td rowspan="4"><input id="c45" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>季节因素</td>
                      <td><input id="d41" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>温度条件</td>
                      <td><input id="d42" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>湿度条件</td>
                      <td><input id="d43" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>风力条件</td>
                      <td><input id="d44" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td rowspan="6">室内活动</td>
                      <td rowspan="6"><input id="c46" type="text" autocomplete="off" class="el-input__inner"></td>
                      <td>活动重要性</td>
                      <td><input id="d47" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>参加人数</td>
                      <td><input id="d48" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>举办时间</td>
                      <td><input id="d49" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>活动是否有明火</td>
                      <td><input id="d50" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>活动是否禁烟</td>
                      <td><input id="d51" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    <tr>
                      <td>引入危险源</td>
                      <td><input id="d52" type="text" autocomplete="off" class="el-input__inner"></td>
                    </tr>
                    </tbody>
                  </table>
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
        factors : [],
        data : ""
      }
    },
    methods: {

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
                      $("#b64").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 65) {
                      $("#b65").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 66) {
                      $("#b66").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 67) {
                      $("#b67").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 68) {
                      $("#b68").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 69) {
                      $("#b69").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 71) {
                      $("#c71").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 73) {
                      $("#c73").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 75) {
                      $("#c75").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 78) {
                      $("#c78").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 83) {
                      $("#c83").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 86) {
                      $("#c86").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 90) {
                      $("#c90").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 93) {
                      $("#c93").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 96) {
                      $("#c96").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 99) {
                      $("#c99").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 101) {
                      $("#c101").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 104) {
                      $("#c104").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 107) {
                      $("#c107").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 110) {
                      $("#c110").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 114) {
                      $("#c114").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 116) {
                      $("#c116").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 118) {
                      $("#c118").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 122) {
                      $("#c122").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 128) {
                      $("#c128").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 130) {
                      $("#c130").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 132) {
                      $("#c132").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 137) {
                      $("#c137").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 72) {
                      $("#d72").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 74) {
                      $("#d74").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 76) {
                      $("#d76").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 77) {
                      $("#d77").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 79) {
                      $("#d79").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 80) {
                      $("#d80").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 81) {
                      $("#d81").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 82) {
                      $("#d82").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 84) {
                      $("#d84").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 85) {
                      $("#d85").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 87) {
                      $("#d87").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 88) {
                      $("#d88").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 89) {
                      $("#d89").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 91) {
                      $("#d91").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 92) {
                      $("#d92").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 94) {
                      $("#d94").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 95) {
                      $("#d95").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 97) {
                      $("#d97").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 98) {
                      $("#d98").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 100) {
                      $("#d100").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 102) {
                      $("#d102").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 103) {
                      $("#d103").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 105) {
                      $("#d105").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 106) {
                      $("#d106").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 108) {
                      $("#d108").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 109) {
                      $("#d109").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 111) {
                      $("#d111").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 112) {
                      $("#d112").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 113) {
                      $("#d113").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 115) {
                      $("#d115").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 117) {
                      $("#d117").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 119) {
                      $("#d119").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 120) {
                      $("#d120").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 121) {
                      $("#d121").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 123) {
                      $("#d123").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 124) {
                      $("#d124").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 125) {
                      $("#d125").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 126) {
                      $("#d126").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 127) {
                      $("#d127").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 129) {
                      $("#d129").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 131) {
                      $("#d131").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 133) {
                      $("#d133").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 134) {
                      $("#d134").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 135) {
                      $("#d135").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 136) {
                      $("#d136").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 138) {
                      $("#d138").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 139) {
                      $("#d139").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 140) {
                      $("#d140").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 141) {
                      $("#d141").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 142) {
                      $("#d142").val(response.data.treeList[i].ratio);
                  }
                  if (response.data.treeList[i].id == 143) {
                      $("#d143").val(response.data.treeList[i].ratio);
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
                  $("#b1").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 2) {
                  $("#b2").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 3) {
                  $("#b3").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 4) {
                  $("#b4").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 5) {
                  $("#c5").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 11) {
                  $("#c11").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 15) {
                  $("#c15").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 17) {
                  $("#c17").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 22) {
                  $("#c22").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 27) {
                  $("#c27").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 31) {
                  $("#c31").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 35) {
                  $("#c35").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 37) {
                  $("#c37").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 45) {
                  $("#c45").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 46) {
                  $("#c46").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 53) {
                  $("#c53").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 56) {
                  $("#c56").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 60) {
                  $("#c60").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 62) {
                  $("#c62").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 6) {
                  $("#d6").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 7) {
                  $("#d7").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 8) {
                  $("#d8").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 9) {
                  $("#d9").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 10) {
                  $("#d10").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 12) {
                  $("#d12").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 13) {
                  $("#d13").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 14) {
                  $("#d14").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 16) {
                  $("#d16").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 18) {
                  $("#d18").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 19) {
                  $("#d19").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 20) {
                  $("#d20").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 21) {
                  $("#d21").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 23) {
                  $("#d23").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 24) {
                  $("#d24").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 25) {
                  $("#d25").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 26) {
                  $("#d26").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 28) {
                  $("#d28").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 29) {
                  $("#d29").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 30) {
                  $("#d30").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 32) {
                  $("#d32").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 33) {
                  $("#d33").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 34) {
                  $("#d34").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 36) {
                  $("#d36").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 38) {
                  $("#d38").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 39) {
                  $("#d39").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 40) {
                  $("#d40").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 41) {
                  $("#d41").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 42) {
                  $("#d42").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 43) {
                  $("#d43").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 44) {
                  $("#d44").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 47) {
                  $("#d47").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 48) {
                  $("#d48").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 49) {
                  $("#d49").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 50) {
                  $("#d50").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 51) {
                  $("#d51").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 52) {
                  $("#d52").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 54) {
                  $("#d54").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 55) {
                  $("#d55").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 57) {
                  $("#d57").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 58) {
                  $("#d58").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 59) {
                  $("#d59").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 61) {
                  $("#d61").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 63) {
                  $("#d63").val(response.data.treeList[i].ratio);
                }
                if (response.data.treeList[i].id == 70) {
                  $("#d70").val(response.data.treeList[i].ratio);
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
          console.info(a.substring(1, a.length)) ;
          console.info($(this).val()) ;
        }) ;
        that.data.substring(0, that.data.length - 1);
        that.$fetch("/api/riskAssessFactor/updateFactors",{
            type : 2,
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
      saveBuildingList () {
        var that = this;
        that.data = "";
        $("#buildingTable td input").each(function(){
          var a = $(this).attr("id");
          that.data += that.data = a.substring(1, a.length) + "," + $(this).val() + ";"
        }) ;
        that.data.substring(0, that.data.length - 1);
        that.$fetch("/api/riskAssessFactor/updateFactors",{
            type : 1,
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
      btn_save() {
        this.saveBuildingList();
      }

    },
    mounted() {
      this.tableUnitList();
      this.tableBuildingList();
    },
}
</script>
<style lang="scss" scoped>
</style>
