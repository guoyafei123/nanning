<template>
  <div>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="fa fa-th-large font-gray-666 float-left"></i>
        <h2 class="float-left font-white size-16">建筑管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Building_management/list"><button class="btn_add" @click="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>新增</button></router-link>
      </div>
    </div>
    <div class="main_all_content">
      <div class="main_content_top">
        <el-form label-width="80px" class="float-left">
          <el-select v-model="buildUnit" placeholder="选择单位" class="select build" style="width:150px;">
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
          <router-link to="/Building_management/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>列表</button></router-link>
          <router-link to="/Building_management/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link>
        </div>
      </div>
      <div class="main_content_table">
        <el-table
          :data="tableData"
          border
          :default-sort = "{prop: 'Serial_number', order: 'descending'}"
          style="width: 100%;height:570px;">
          <el-table-column
            prop="Serial_number"
            type="index"
            sortable  
            width="80"
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            width="130"
            label="建筑名称">
          </el-table-column>
          <el-table-column
            prop="unitName"
            width="130"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="location"
            width="130"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="area"
            width="130"
            label="占地面积（m^2）">
          </el-table-column>
          <el-table-column
            prop="heightOfBuilding"
            width="100"
            label="高度（m）">
          </el-table-column>
          <el-table-column
            prop="floors"
            width="100"
            label="楼层数">
          </el-table-column>
          <el-table-column
            prop="structure"
            width="100"
            label="建筑结构">
          </el-table-column>
          <el-table-column
            prop="buildYear"
             width="140"
            label="建成年份">
          </el-table-column>
          <el-table-column
            prop="property"
             width="120"
            label="建筑性质">
          </el-table-column>
          <el-table-column 
            prop="linkname"
            width="120"
            label="消防负责人">
          </el-table-column>
          <el-table-column 
            prop="phone"
            width="120"
            label="消防负责人电话">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="180">
            <template slot-scope="scope">
              <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal" style="width:40px;height:22px;border:2px solid #bad616;color: #bad616;background-color: #111111;line-height: 19px;margin:0;padding:0;font-size: 12px;text-align: center;margin-right:10px;">编辑</button>
              <i @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"  class="fa fa-th-large font-gray-666" style="margin-right: 10px;"></i>
              <button @click="floor_build(scope.row)" style="width:50px;height:22px;border:1px solid transparent;border-radius:5px;color: #ffffff;background-color: #0798db;line-height: 19px;margin:0;padding:0;font-size: 11px;text-align: center;margin-right:10px;">楼层管理</button>
              <i @click="show3(scope.row)" class="fa fa-th-large font-gray-666"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="main_content_bottom">
        <div class="bottom_con">
          <div class="float-left">
            <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">打印</a>
            <a href="javascript:;" class="font-gray-666" style="margin-left:5px;">导出</a>
            <a href="javascrip:;" class="font-gray-666" style="margin-left:5px;">导出二维码</a>
          </div>
          <el-pagination style="float: right;background: transparent"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="prev, pager, next"
                         :total="totalList">
          </el-pagination>
          <span style="float: right;margin-top:5px;color: #666;margin-left:5px;margin-right:10px;">{{page}}页</span>
          <el-pagination style="float: right;"
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="total"
                         :total="totalList">
          </el-pagination>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal modal_form fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">修改建筑</h4>
          </div>
          <div class="modal-body">
            <el-form ref="form" :label-position="labelPosition" :inline="true" :model="form">
              <el-form-item label="建筑名称">
                <!-- <span class="font-red" style="position: absolute;top:-45px;right:20px;">建筑名称有误或重复</span> -->
                <el-input v-model="form.BuildName"></el-input>
              </el-form-item>
              <el-form-item label="所属单位">
                <el-select v-model="form.unitId" placeholder="选择单位" class="select" style="width:150px;">
                  <el-option label="全部单位" value=""></el-option>
                  <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="建筑地址">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
              <el-form-item label="占地面积（m^2）">
                <el-input v-model="form.area"></el-input>
              </el-form-item>
              <el-form-item label="高度">
                <el-input v-model="form.height"></el-input>
              </el-form-item>
              <el-form-item label="总楼层">
                <el-input v-model="form.floor"></el-input>
              </el-form-item>
              <el-form-item label="建成结构">
                <el-select name="" v-model="form.structure" placeholder="请选择结构">
                  <el-option label="砖混" value="砖混"></el-option>
                  <el-option label="钢结构" value="钢结构"></el-option>
                  <el-option label="玻璃" value="玻璃"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="建成年份">
                <div class="block">
                  <el-date-picker
                    v-model="form.timeYear"
                    type="year"
                    placeholder="选择年">
                  </el-date-picker>
                </div>
              </el-form-item>
              <el-form-item label="建筑性质">
                <el-select v-model="form.property" placeholder="建筑性质">
                  <el-option label="居住" value="居住"></el-option>
                  <el-option label="公共" value="公共"></el-option>
                  <el-option label="工业" value="工业"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="消防负责人">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="消防负责人电话">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <div style="clear: both;"></div>
            </el-form>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-search" class="primary" data-dismiss="modal">提交</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="mymodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel2">提示</h4>
            <h5 class="modal-p">删除操作并不影响之前的统计数据</h5>
          </div>
          <div class="modal-body" style="height:217px;">
            <h2 style="text-align:center;font-size: 16px;color:#f13131;margin-top:30px;font-weight:bold;">是否删除</h2>
            <p style="text-align: center;font-size: 16px; color: #fff;margin-top:20px;">{{ deviceName }}</p>
          </div>
          <div class="modal-footer">
            <el-button type="danger" @click.native.prevent="deleteRow()" icon="el-icon-search" class="danger" data-dismiss="modal">删除</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
   
  </div>

</template>

<script>
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        labelPosition: 'left',



        form: {
          unitId:'',
          UnitName:'',
          BuildName:'',
          height:'',
          floor:'',
          structure:'',
          property:'',          
          timeYear:'',
          name:'',
          phone:''
        },
        buildUnit:'',//选择单位
        floorId:'',
        optionList:[],//全部单位列表
        floorList:[],//楼层列表
        tableData: [],//设备列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:''
      }
    },
    methods: {
      btn_add(){
        $('#right').css('display','none');
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row){//修改建筑
        $('#mymodal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceIndex = row.id ;
        this.tableData.forEach((item,index)=>{
          if(item.id == this.deviceIndex){
            console.log(item);
            this.form.BuildName = item.name ;
            this.form.unitId = item.unitId ;
            this.form.UnitName = item.unitName ;
            this.form.address = item.location ;
            this.form.area = item.area ;
            this.form.height = item.heightOfBuilding ;
            this.form.floor = item.floors ;
            this.form.structure = item.structure ;
            this.form.timeYear = item.buildYear ;
            this.form.property = item.property ;
            this.form.name = item.linkname ;
            this.form.phone = item.phone ;
          }
        })
      },
      startRow(){
        this.optionList.forEach((item,index)=>{
          if(item.id == this.form.unitId){
            console.log(item.name);
            this.form.UnitName = item.name;
          }
        })
        this.$fetch("/api/building/addBuilding",{
          'name':this.form.BuildName,
          'unitId':this.form.unitId,
          'unitName':this.form.UnitName,
          'location':this.form.address,
          'area':this.form.area,
          'heightOfBuilding':this.form.height,
          'floors':this.form.floor,
          'structure':this.form.structure,
          'buildYear':this.form.timeYear,
          'property':this.form.property,
          'linkname':this.form.name,
          'phone':this.form.phone,
          headers: {'Content-Type': 'application/json'}
        },
      
        ).then(response=>{
          if(response){
            if(response.status == 1){
              console.log('修改建筑成功...'+ JSON.stringify(response));
              this.tableBuildList();
            }else{
              console.log('修改建筑失败...'+ JSON.stringify(response));
            }
          }
        })
      },
      delete_plan(row){//删除
        $('#mymodal2').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceIndex = row.id;
        this.deviceName = row.name;
      },
      floor_build(row){
        $('.build').hide();
        $('.floor').show();
        $('.main_content_table').hide();
        $('.main_content_bottom').hide();
        $('.plan').hide();
        $('.total').hide();
        $('.floor_wrap').show();
        $('room_wrap').hide();
        this.$store.commit('floorAdd',1);
        this.$store.commit('buildingId',row.id);
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('floorAdd',2)
        this.$store.commit('buildingId',row.id);
        $('.plan').show();
        $('.mapTable').hide();
        $('.total').hide();
      },
      deleteRow(){
        console.log(this.deviceIndex);
        this.$fetch("/api/building/deleteBuilding",{
          buildingId:this.deviceIndex
        }).then(response=>{
          if(response){
            if(response.status == 1){
              console.log('删除建筑成功...'+ JSON.stringify(response));
            }else{
              console.log('删除建筑失败...'+ JSON.stringify(response));
            }
            this.tableData.splice(this.deviceIndex,1);
            this.tableBuildList();
          }
        }).then(err => {
          console.log(err);
        });
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
      },
      tableBuildList(){
        this.$fetch(
          "/api/building/queryPageBuildingList",{
            currentPage:this.currentPage4,
            pageSize:10,
            unitId:this.buildUnit
          }
        )
          .then(response => {
            console.log(response);
            if (response.data.pageBuildIng) {
              // console.log(response.data.inspectionPlanList);
              this.totalList = response.data.pageBuildIng.totalRow;
              this.tableData = response.data.pageBuildIng.result;
              this.tableData.forEach((item,index)=>{
                // console.log(111)
                if(index == this.tableData.length-1){
                  this.$store.commit('buildingId',item.id);
                }
              })
              if(this.totalList % 10 == 0){
                this.page = parseInt( this.totalList / 10 )
              }else{
                this.page = parseInt( this.totalList / 10 ) + 1
              }
            }
          })
          .then(err => {
            // console.log(err);
          });
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.tableBuildList();
      $('#right').show();
      
    },
    watch:{
      $route: {
        handler: function(val, oldVal){
          console.log(val);
          if(this.$route.path == '/Building_management/all'){
            $('.mapTable').hide();
            $('.plan').show();
            $('.floor_wrap').hide();
          }
        },
        // 深度观察监听
        deep: true
      },
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        console.log(this.currentPage4);
        this.tableBuildList();
      },
      buildUnit(val,oldVal){
        this.buildUnit = val;
        this.tableBuildList();
      }
    }
  };
</script>
<style lang="scss" scoped>
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
    width:64px;
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
  .main_header button.btn_add i{
    color: #000;
  }
  .main_header button.btn_add{
    width:64px;
    height:28px;
    border:none;
    background: #bad616;
    margin-left: 6px;
    margin-right: 20px;
    color: #000;
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
  .main_con_nav{
    button{
      background-color: #222222;
    }
    margin-left:30%;
    a:nth-last-child(1) button{
      border-left:none;
    }
    .link-active button{
      color: #191d03;
      background-color: #bad616;
    }
    .link-active i{
      color: #191d03;
      background-color: #bad616;
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
 
  .main_nav_show{
    width:64px;
    position: absolute;
    top:159px;
    z-index: 33;
    border:2px solid #bad616;
    ul{
      width:100%;
      li{
        float: none;
        width:100%;
        a{
          button{
            margin:0;
            border-top:2px;
            border-bottom:2px;
            margin-left:-42px;
            border-color:#bad616;
          }
        }
      }
    }
  }
  .btn_active button{
    background-color: #bad616;
    color: #0c0e01;
  }
  .btn_active i{
    color: #0c0e01;
    background-color: transparent;
  }

  .span_show{
    width:40px;
    height:32px;
    border:2px solid #bad616;
    box-sizing: border-box;
    display: inline-block;
    line-height: 31px !important;
    text-align:center;
    color: #bad616;
    background-color: #111111;
  }
  .span_hide{
    width:40px;
    height:32px;
    border:2px solid #333333;
    box-sizing: border-box;
    display: inline-block;
    line-height: 31px !important;
    text-align:center;
    color: #5e5e5e;
    background-color: #111111;
  }
  .danger{
    width:132px;
    background-color: #f13131;
    color: #000;
    font-size: 14px;
    height:32px;
    line-height: 32px;
    padding:0;
  }
  .el-tag--red{
    color: red !important;
    padding:0 !important;
    border:none;
  }
  .el-tag--green{
    color: #fff !important;
    padding:0 !important;
    border:none;
    i{
      margin-left:7px;
    }
  }


  .start{
    margin-top:4px;
    margin-left:10px;
  }
</style>
