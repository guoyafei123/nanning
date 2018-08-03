<template>
  <div>
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-th-large font-gray-666 float-left"></i>
          <h2 class="float-left font-white size-16">巡检管理</h2>
        </div>
        <div class="main_nav float-right">
          <router-link to="/Inspection_plan/list"><button @click="btn_add" class="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>规划</button></router-link>
        </div>
      </div>
      <div class="main_all_content">
        <div class="main_content_top">
          <el-form ref="form" :model="form" label-width="80px"  class="float-left">
            <el-select v-model="form.region1" placeholder="选择单位" class="select">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-select v-model="form.region2" placeholder="巡检类型" class="select" style="width:150px;">
              <el-option v-for="item in inspectionTypeList" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-select v-model="form.region3" placeholder="路线状态" class="select">
              <el-option label="全部" value=""></el-option>
              <el-option label="已激活" value="1"></el-option>
              <el-option label="未激活" value="2"></el-option>
            </el-select>
          </el-form>
          <div class="main_nav_two float-right">
            <router-link to="/Inspection_plan/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>列表</button></router-link>
            <router-link to="/Inspection_plan/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
          </div>
        </div>
      </div>
    </aside>
  </div>

</template>

<script>
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
    methods: {
      btn_add(){
        // console.log($('#right'));
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
              console.log(response);
              this.optionList = response.data.unitList;
              console.log(this.optionList);
              $(' .el-select-dropdown__item').mouseover(function(){
                $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              });
            }
          })
          .then(err => {
            console.log(err);
          });
      }
    },
    watch:{
      form:{
        //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
        handler(curVal,oldVal){
          // console.log(curVal);
          this.form = curVal;
          console.log(this.form);
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
<style lang="scss" scoped>
  .clearFix:after{
    clear:both;
    content:'';
    display:block;
  }
  h2{
    margin: 0;
    padding: 0;
  }
  main{
    height: 100%;
  }
  @media (min-width: 768px) and (max-width:1600px){
    main {
      padding-left:295px;
      padding-right:400px;
    }
  }
  @media (min-width: 1600px){
    main {
      margin-left:17.58%;
      margin-right: 24%;
    }
  }
  /* aside{
    width:50%;
    min-width: 450px;
  } */
  .main_header{
    width:100%;
    height:68px;
    background: #111111;
  }
  .main_title{
    display: flex;
    align-items: center;
  }
  .main_title i{
    margin-left:20px;
    margin-right:10px;
  }
  .main_title h2{
    line-height: 68px;
  }
  .main_header button,.main_nav_two button{
    width:64px !important;
    height:28px;
    float: left;
    outline:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid transparent;
    background: #111111;
    font-size: 12px;
    color: #999;
    margin-top: 21px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .main_header a:nth-child(2) button{
    border-left:none;
  }
  .main_header button i{
    margin-right: 3px;
  }
  .main_header button.btn_add{
    width:64px;
    height:28px;
    border:none;
    background: #bad616;
    margin-left: 6px;
    margin-right: 20px;
    color:#000000;
  }
  .main_header button.btn_add i{
    color: #000;
    background-color: transparent;
  }
  .main_nav_two{
    margin-top:6px;
    margin-right:20px;
  }
  .main_nav_two button{
    margin-top:0;
  }
  .main_nav_two i{
    margin-right: 3px;
  }
  .main_content_top{
    height:40px;
    background: #222222;
  }
  .main_content_table{
    width:100%;
    background: #111111;
  }
  .main_content_bottom{
    width:100%;
    height:60px;
    padding-top:10px;
    background: #111111;
    .bottom_con{
      margin:0 20px;
      padding-top:10px;
      border-top:1px solid #222222;
    }
  }
  .router-link-active button{
    color: #b8b8b8;
    background-color: #000000;
  }
  .router-link-active i{
    color: #b8b8b8;
    background-color: #333333;
  }
  .select{
    background-color: #111111;
  }
  //模态框
  .modal-content{
    background-color: #111111 !important;
  }
  .modal-title{
    font-size:24px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 15px;
    text-indent: 15px;
  }
  .modal-p{
    color: #666666;
    text-align: center;
    font-size: 12px;
  }
  .modal-header{
    border-bottom:1px solid #222222;
  }
  .modal-footer{
    border-top:1px solid #222222;
  }

</style>
