<template>
  <div id="list-maps">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="icon iconfont icon-xunjianguihua-mian-"></i>
          <h2>巡检管理</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Inspection_plan/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>规划</span></router-link>
        </div>
      </div>
      <div class="main_all_content">
      <!-- 筛选 -->
        <div class="main_content_top">
          <el-form ref="form" :model="form"  class="float-left">
            <el-select v-model="form.region1" placeholder="选择单位" class="select">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-select v-model="form.region2" placeholder="巡检类型" class="select">
              <el-option v-for="item in inspectionTypeList" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-select v-model="form.region3" placeholder="路线状态" class="select">
              <el-option label="全部" value=""></el-option>
              <el-option label="已激活" value="1"></el-option>
              <el-option label="未激活" value="2"></el-option>
            </el-select>
          </el-form>
          <div class="main_nav_two float-right">
            <router-link to="/Inspection_plan/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
            <router-link to="/Inspection_plan/maps"><span><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
          </div>
        </div>
        <!-- 地图 -->
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
        form: {
          region1:null,
          region2:null,
          region3:null
        },
        optionList:[],
        inspectionTypeList:[{//巡检类型列表
          name:'全部',id:''
        },{
          name:'举报检查',id:1
        },{
          name:'活动检查',id:2
        },{
          name:'例行检查',id:3
        },{
          name:'复查',id:4
        },{
          name:'施工检查',id:5
        },{
          name:'解除临时查封',id:6
        },{
          name:'恢复工作检查',id:7
        }, {
          name: '其他检查', id: 8
        }]
      }
    },
    components:{
      'managementMap-vue': managementMapVue,
    },
    methods: {
      btn_add(){
        // //console.log($('#right'));
        $('#right').hide();
      
      },
      SetColor(ele,key,value){
        $(ele).css(key,value);
      },
      unitSearch(){
        this.$fetch(
          "/api/unit/queryUnit"
        )
          .then(response => {
            if (response) {
              //console.log(response);
              this.optionList = response.data.unitList;
              //console.log(this.optionList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
          .then(err => {
            //console.log(err);
          });
      }
    },
    watch:{
      form:{
        //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
        handler(curVal,oldVal){
          // //console.log(curVal);
          this.form = curVal;
          //console.log(this.form);
          this.$store.commit('form',this.form);
        },
        deep:true
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
    }
  };
</script>
