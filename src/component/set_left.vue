<template>
  <div class="margin-top120 margin-right20" style="margin-left:37px;">
      <div class="clearFix">
        <span class="guanli size-66 font-white float-left">管理</span>
        <div class="float-right">
          <i class="fa fa-th-large font-gray-666 margin-top20" style="display: block;float:right;"></i>
          <span style="display: block;margin-top:60px;"><i class="fa fa-th-large font-gray-666"  ></i>收起</span>
        </div>
      </div>
      <div class="main_aside">
        <ul class="margin-top30">
          <li class="system_title">系统管理</li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>单位管理</h2>
            <span>2</span>
          </li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>建筑管理</h2>
            <span>37</span>
          </li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>设备管理</h2>
            <span>2074</span>
          </li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>危险品管理</h2>
            <span>19</span>
          </li>
          <li class="system_title">风险防控</li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>风险分析</h2>
            <span>27</span>
          </li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>巡检规划</h2>
            <span>168</span>
          </li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>报警管理</h2>
            <span>42</span>
          </li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>隐患管理</h2>
            <span>34</span>
          </li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>故障管理</h2>
            <span></span>
          </li>
          <li class="system_title">人员管理</li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>人员列表</h2>
            <span>118</span>
          </li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>人员审核</h2>
            <span>24</span>
          </li>
          <li>
            <i class="fa fa-th-large font-gray-666"></i>
            <h2>权限分配</h2>
            <span>6</span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  .clearFix:after{
    clear:both;
    content:'';
    display: block;
  }
  h2{
    margin:0;
    padding:0;
    line-height:0;
  }
  span.guanli{
    letter-spacing: 20px;
  }
  .system_title{

  }
  .main_aside{
    width:100%;
  }
  .main_aside ul{
    width:100%;
    margin:0;
    padding:0;
  }
  .main_aside ul li{
    width:100%;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    color:#999;
  }
  li>i{
    float: left; flex: 1;
  }
  li>h2{
    float: left;
    color: #fff;
    flex: 3;
  }
  li>span{
    float: right;
    text-align: right;
    flex: 1;
    color:#999;
  }
</style>
