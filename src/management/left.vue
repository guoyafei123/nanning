<template>
  <div class="show_left toolleft manage-menu">
      <div class="row manage-menu-title size-12 clearfix">
        <h1 class="col-xs-8 size-80 font-white">管理</h1>
        <div class="col-xs-3 margin-top10 padding-right0 text-right">
          <a href="" data-toggle="tooltip" title="工作日志"><i class="icon iconfont icon-caozuorizhi-xian-"></i></a>
          <a class="span_show margin-top30" data-toggle="tooltip" title="收起导航"><i class="el-icon-arrow-left"></i>收起</a>
        </div>
      </div>
      <div class="main_aside">
        <ul class="margin-top50 list-unstyled">
          <li class="system_title">系统管理</li>
          <router-link to="/Unit_management">
            <li>
              <i class="icon iconfont icon-danweiguanli-xian-2"></i>
              <h2>单位管理</h2>
              <span>2</span>
            </li>
          </router-link>
          <router-link to="/Building_management">
            <li>
              <i class="icon iconfont icon-jianzhuguanli-xian-"></i>
              <h2>建筑管理</h2>
              <span>37</span>
            </li>
          </router-link>
          <router-link to="/Equipment_management">
            <li>
              <i class="icon iconfont icon-shebeiguanli-xian-"></i>
              <h2>设备管理</h2>
              <span>2074</span>
            </li>
          </router-link>
          <router-link to="/Dangerous_goods_management">
            <li>
              <i class="icon iconfont icon-weixianpin-xian-"></i>
              <h2>危险品管理</h2>
              <span>19</span>
            </li>
          </router-link>
          <li class="system_title">风险防控</li>
          <router-link to="/Risk_Analysis">
            <li>
              <i class="icon iconfont icon-fengxianfenxi-xian-"></i>
              <h2>风险分析</h2>
              <span>27</span>
            </li>
          </router-link>
          <router-link to="/Inspection_plan">
            <li>
              <i class="icon iconfont icon-xunjianguihua-xian-"></i>
              <h2>巡检规划</h2>
              <span>168</span>
            </li>
          </router-link>
          <router-link to="/Alarm_management">
            <li>
              <i class="icon icon icon-baojingguanli-xian-"></i>
              <h2>报警管理</h2>
              <span>42</span>
            </li>
          </router-link>
          <router-link to="/Hidden_danger_management">
            <li>
              <i class="icon iconfont icon-yinhuanguanli-xian-"></i>
              <h2>隐患管理</h2>
              <span>34</span>
            </li>
          </router-link>
          <router-link to="/Fault_management">
            <li>
              <i class="icon iconfont icon-guzhangguanli-xian-"></i>
              <h2>故障管理</h2>
              <span></span>
            </li>
          </router-link>
          <li class="system_title">人员管理</li>
          <router-link to="/List_of_people">
            <li>
              <i class="icon iconfont icon-renyuanliebiao-xian-"></i>
              <h2>人员列表</h2>
              <span>118</span>
            </li>
          </router-link>
          <router-link to="/Personnel_review">
            <li>
              <i class="icon iconfont icon-renyuanshenhe-xian-"></i>
              <h2>人员审核</h2>
              <span>24</span>
            </li>
          </router-link>
          <router-link to="/Authority_allocation">
            <li>
              <i class="icon iconfont icon-quanxianfenpei-xian-"></i>
              <h2>权限分配</h2>
              <span>6</span>
            </li>
          </router-link>
        </ul>
      </div>
  </div>
</template>

<script>

    export default {
      methods:{
// 收起左侧列表
        moreSetupMenuRemove () {
          // $('.show_left').css({
          //     'animation':'move 1s',
          //     'animation-fill-mode': 'forwards'
          // })
          // console.log(1)
          $('.show_left').slideToggle(1000,function(){
            $('#left').css('width','0');
          $('main').css('margin-left','0');
            $('.fix').show();
          });

        },
        globalClick(callback) {
          document.getElementsByClassName('span_show')[0].onclick = function () {
            callback();
          };
        }

      },
      mounted(){
        this.globalClick(this.moreSetupMenuRemove);
      }
    }
</script>

<style lang="scss" scoped>  
</style>
