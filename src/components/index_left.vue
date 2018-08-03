<template>
  <div class="row toolleft margin-right0">
    <!-- 今日警报 -->
    <section class="common-left-statistics mian-warning-statistics">
        <ul class="list-unstyled">
            <li class="col-sm-7 size-50">
              <!-- 今日警报发生数量 -->
              <i class="icon iconfont icon-baojing-xian- size-50"></i> <span>696</span> 
            </li>
            <li class="col-sm-5 text-right">
              <!-- 今日警报title -->
              <small>Warning Statistics</small>
              <h3><span class="badge badge-statistics bg-blue font-black">今日</span>警报</h3>
            </li>
            <li class="col-sm-12">
              <!-- 历史未解决，已确认，复位/关闭 -->
              <h5>未解决 <span>108</span></h5>
              <h5>已确认 <span>59</span></h5>
              <h5>复位/关闭 <span>54</span></h5>
            </li>
            <li class="col-sm-12 container-padding20 mian-chart">
              <!-- 警报数量变化趋势（折线图） -->
              <div>警报数量变化趋势（折线图）</div>
            </li>
        </ul>        
    </section>
    <!-- 今日隐患 -->
    <section class="common-left-statistics mian-dangers-statistics">
        <ul class="list-unstyled">
            <li class="col-sm-7 size-50">
              <!-- 今日隐患发生数量 -->
              <i class="icon iconfont icon-yinhuan-xian- size-50"></i> <span>656</span> 
            </li>
            <li class="col-sm-5 text-right">
              <!-- 今日隐患title -->
              <small>Warning Statistics</small>
              <h3><span class="badge badge-statistics bg-blue font-black">今日</span>隐患</h3>
            </li>
            <li class="col-sm-12">
              <!-- 历史未解决，已确认，复位/关闭 -->
              <h5>未解决 <span>108</span></h5>
              <h5>危险品 <span>59</span></h5>
              <h5>已解决 <span>54</span></h5>
            </li>
            <li class="col-sm-12 container-padding20 mian-chart">
              <!-- 隐患数量变化趋势（折线图） -->
              <div>隐患数量变化趋势（折线图）</div>
            </li>
        </ul>        
    </section>
    <!-- 今日巡检完成 -->
    <section class="common-left-statistics common-top-statistics">
        <ul class="list-unstyled">
            <li class="col-sm-7 text-left">
              <!-- 今日巡检发生数量 -->
              <div class="size-50">
                <i class="icon iconfont icon-xunjian-xian- size-50"></i><span>393</span> 
              </div>
              <!-- 今日巡检title -->
              <div class="margin-top20">
                <small>Complete Statistics</small>
                <h3><span class="badge badge-statistics bg-blue font-black">今日</span>巡检完成</h3>
              </div>
            </li>
            <li class="col-sm-5 mian-pie-chart">
              <!-- 巡检完成占比（饼图） -->
              <div>巡检完成占比（饼图）</div>
            </li>
            <li class="col-sm-12 margin-top10">
              <!-- 历史未解决，已确认，复位/关闭 -->
              <h5>额定任务<span>208</span></h5>
              <h5>巡检人员<span>87</span></h5>
              <h5>巡检路线<span>12</span></h5>
            </li>
        </ul>        
    </section>
  </div>
</template>
