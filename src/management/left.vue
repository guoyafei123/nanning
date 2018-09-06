<template>
  <div class="show_left toolleft manage-menu">
      <div class="row manage-menu-title size-12 clearfix">
        <h1 class="col-xs-8">管理</h1>
        <div class="col-xs-3 padding-right0 text-right">
          <router-link to="/operationLog">
            <el-tooltip class="item" content="操作日志" placement="top">
              <i class="icon iconfont icon-caozuorizhi-xian-"></i>
            </el-tooltip>
          </router-link>
          <el-tooltip class="item" content="收起导航" placement="top">
          <a class="span_show">
              <i class="el-icon-arrow-left"></i> 收起
          </a>
        </el-tooltip>
        </div>
      </div>
      <div class="main_aside">
        <ul class="list-unstyled">
          <li class="system_title">系统管理</li>
          <router-link to="/Unit_management">
            <li>
              <i class="icon iconfont icon-danweiguanli-xian-2"></i>
              <h2>单位管理</h2>
            </li>
          </router-link>
          <router-link to="/Building_management">
            <li>
              <i class="icon iconfont icon-jianzhuguanli-xian-"></i>
              <h2>建筑管理</h2>
            </li>
          </router-link>
          <router-link to="/Equipment_management">
            <li>
              <i class="icon iconfont icon-shebeiguanli-xian-"></i>
              <h2>设备管理</h2>
            </li>
          </router-link>
          <li class="system_title">风险防控</li>
          <router-link to="/Risk_management">
            <li>
              <i class="icon iconfont icon-fengxianfenxi-xian-"></i>
              <h2>风险分析</h2>
            </li>
          </router-link>
          <router-link to="/RiskScore_management">
            <li>
              <i class="icon iconfont icon-fengxianfenxi-xian-"></i>
              <h2>风险评分</h2>
            </li>
          </router-link>
          <router-link to="/Inspection_plan">
            <li>
              <i class="icon iconfont icon-xunjianguihua-xian-"></i>
              <h2>巡检规划</h2>
            </li>
          </router-link>
          <router-link to="/Dangerous_goods_management">
            <li>
              <i class="icon iconfont icon-weixianpin-xian-"></i>
              <h2>危险品管理</h2>
            </li>
          </router-link>
          <li class="system_title">人员管理</li>
          <router-link to="/Personnel_review">
            <li class="p-green">
              <i class="icon iconfont icon-renyuanshenhe-xian-"></i>
              <h2>人员审核</h2>
              <span>{{reviewCount==null?'0':reviewCount}}</span>
            </li>
          </router-link>
          <router-link to="/List_of_people">
            <li>
              <i class="icon iconfont icon-renyuanliebiao-xian-"></i>
              <h2>人员列表</h2>
            </li>
          </router-link>
          <router-link to="/Authority_allocation">
            <li>
              <i class="icon iconfont icon-quanxianfenpei-xian-"></i>
              <h2>权限分配</h2>
            </li>
          </router-link>
          <li class="system_title">档案管理</li>
          <router-link to="/Message_management">
            <li class="p-red">
              <i class="icon iconfont icon-xiaoxi-"></i>
              <h2>消息管理</h2>
            </li>
          </router-link>
          <router-link to="/Reserve_plan">
            <li>
              <i class="icon iconfont icon-yingjiyuan"></i>
              <h2>预案管理</h2>
            </li>
          </router-link>
          <router-link to="/Patrolcheck">
            <li>
              <i class="icon iconfont icon-qiandao-kaoqindaqia"></i>
              <h2>巡检打卡</h2>
            </li>
          </router-link>
          <router-link to="/ControlRoomLog">
            <li>
              <i class="icon iconfont icon-kongzhitai_"></i>
              <h2>控制室日常</h2>
            </li>
          </router-link>
        </ul>
      </div>
  </div>
</template>

<script>

    export default {
      data() {
        return {
          reviewCount:0,
          }
        },
      methods:{
// 收起左侧列表
        moreSetupMenuRemove () {
          // $('.show_left').css({
          //     'animation':'move 1s',
          //     'animation-fill-mode': 'forwards'
          // })
          // //console.log(1)
          $('.show_left').animate({'left':'toggle'},200,function(){
            $('#left').removeClass('open-left');
            $('#manage-center').addClass('open-center');
            $('.fix').show();
          });

        },
        globalClick(callback) {
          document.getElementsByClassName('span_show')[0].onclick = function () {
            callback();
          };
        },
        queryPagerUserList(){
          this.$fetch(
            "/api/user/queryPagerUserList",{
              currentPager:1,
              pagerSize:14,
              unitId:null,
              flag:1,
              review:3,
            }
          )
            .then(response => {
              if (response) {
                // this.reviewCount =response.data.pager.totalRow
              }
            })
            .then(err => {
              // //console.log(err);
            });
        },
      },
      mounted(){
        this.globalClick(this.moreSetupMenuRemove);
        this.queryPagerUserList();
      }
    }
</script>

<style lang="scss" scoped>
</style>
