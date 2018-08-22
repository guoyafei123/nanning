<template>
  <div id="list-maps">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="icon iconfont icon-jianzhuguanli-mian-"></i>
          <h2>建筑管理</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Building_management/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>新增</span></router-link>
        </div>
      </div>
      <div class="main_all_content">
        <div class="main_content_top">
          <el-form class="float-left">
            <el-select v-model="buildUnit" placeholder="选择单位" class="select build">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <!-- 楼层管理 -->
            <el-select v-model="floorId" placeholder="选择楼层" class="select floor" style="width:150px;display:none;">
              <el-option label="全部楼层" value=""></el-option>
              <el-option v-for="item in floorList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form>
          <div class="main_nav_two float-right">
            <router-link to="/Building_management/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
          <router-link to="/Building_management/maps"><span><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
          </div>
        </div>
        <div class="maps">
          <managementMap-vue></managementMap-vue>
        
        </div>            
      </div>
    </aside>    
  </div>
</template>

<script>  
  import managementMapVue from '../managementMap';
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        buildUnit:null,//选择单位,
        floorId:'',
        optionList:[],//全部单位列表,
        floorList:[]//楼层列表
      }
    },
    components:{
      'managementMap-vue': managementMapVue,
    },
    methods: {
      btn_add(){
        $('#right').css('display','none');
      },
      unitSearch(){
        this.$fetch(
          "/api/unit/queryUnit"
        )
          .then(response => {
            if (response) {
              console.log(response);
              this.optionList = response.data.unitList;
              console.log(this.optionList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
          .then(err => {
            // console.log(err);
          });
      }
    },
    watch:{
      $route: {
        handler: function(val, oldVal){
          // console.log(val);
          if(this.$route.path == '/Building_management/maps'){
            $('.plan').hide();
            $('.total').show();
            $('.floor_wrap').hide();
            $('.room_wrap').hide();
            this.tableList();
            this.$store.commit('tableData',this.tableData);
          }
        },
        // 深度观察监听
        deep: true
      },
      buildUnit(curVal,oldVal){
        this.buildUnit = curVal;
        console.log(this.buildUnit);
        this.$store.commit('buildUnit',this.buildUnit);
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.$store.commit('route_path',this.$route.path);
    }
  };
</script>
<style lang="scss" scoped>
</style>
