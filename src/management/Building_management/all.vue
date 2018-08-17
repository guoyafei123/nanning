<template>
  <section>
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-jianzhuguanli-mian-"></i>
        <h2>建筑管理</h2>
      </div>
      <div class="main_nav float-right">
        <span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>新增</span>
      </div>
    </div>
    <div class="main_all_content ">
      <div class="main_content_top">
        <el-form class="float-left">
          <el-select v-model="buildUnit" placeholder="选择单位" class="select build">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
           <!-- 楼层管理 -->
           <el-select v-model="floorId" placeholder="选择楼层" class="select floor" style="display:none;">
            <el-option label="全部楼层" value=""></el-option>
            <el-option v-for="item in floorList" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Building_management/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
          <router-link to="/Building_management/maps"><span><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
        </div>
      </div>
      <div class="main_content_table">
        <el-table
          :data="tableData"
          border
          :highlight-current-row="true"
          :default-sort = "{prop: 'Serial_number', order: 'descending'}">
          <el-table-column
            prop="Serial_number"
            type="index"
            fixed="left"
            sortable
            label="序号">
          </el-table-column>
          <el-table-column
            prop="name"
            :show-overflow-tooltip="true"
            label="建筑名称">
          </el-table-column>
          <el-table-column
            prop="unitName"
            :show-overflow-tooltip="true"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="location"
            :show-overflow-tooltip="true"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="area"
            label="占地面积 (㎡)">
          </el-table-column>
          <el-table-column
            prop="heightOfBuilding"
            label="高度 (cm)">
          </el-table-column>
          <el-table-column
            prop="floors"
            label="楼层数">
          </el-table-column>
          <el-table-column
            prop="structure"
            label="建筑结构">
          </el-table-column>
          <el-table-column
            prop="buildYear"
            label="建成年份">
          </el-table-column>
          <el-table-column
            prop="property"
            label="建筑性质">
          </el-table-column>
          <el-table-column 
            prop="linkname"
            label="消防负责人">
          </el-table-column>
          <el-table-column 
            prop="phone"
            label="消防负责人电话">
          </el-table-column>
          <el-table-column
            fixed="right"
            width="140"
            label="操作">
            <template slot-scope="scope">
              <button @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal"><i class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i></button>
              <button @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button>
              <button @click="floor_build(scope.row)"><i class="icon iconfont icon-danweiguanli-mian-1" data-toggle="tooltip" title="楼层管理"></i></button>
              <button @click="show3(scope.row)"><i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i></button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="main_content_bottom">
        <div class="bottom_con">
          <div class="float-left btn-system">
            <a href="javascript:;">打印</a>
            <a href="javascript:;">导出</a>
            <a href="javascript:;" @click="qrcode()">导出二维码</a>
          </div>
          <el-pagination
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="prev, pager, next"
                         :total="totalList">
          </el-pagination>
          <span>{{page}}页</span>
          <el-pagination
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="10"
                         layout="total"
                         :total="totalList">
          </el-pagination>
        </div>
      </div>
      <div class="floorMap" style="display:none;">
        <img src="../../assets/images/floor.png">
      </div>
      <div class="roomMap" style="display:none;">
        <img src="../../assets/images/floor.png">
      </div>
    </div>
    <!-- 编辑Modal -->
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
                <el-input v-model="form.buildName"></el-input>
              </el-form-item>
              <el-form-item label="所属单位">
                <el-select v-model="form.unitId" placeholder="选择单位" class="select" style="width:auto;">
                  <el-option label="全部单位" value=""></el-option>
                  <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="建筑地址">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
              <el-form-item label="占地面积 (㎡)">
                <el-input v-model="form.area"></el-input>
              </el-form-item>
              <el-form-item label="高度 (cm)">
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
                    type="date"
                    placeholder="选择年份"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
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
            </el-form>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-circle-check-outline" class="primary" data-dismiss="modal">编辑并提交</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除Modal -->
    <div class="modal fade" id="mymodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel2">提示</h4>
            <h5 class="modal-p">该操作并不影响之前的统计数据</h5>
          </div>
          <div class="modal-body text-center container-padding40">
            <h3 class="font-red size-14">是否删除</h3>
            <p class="font-white size-16">{{ deviceName }}</p>
          </div>
          <div class="modal-footer">
            <el-button type="danger" @click.native.prevent="deleteRow()" icon="el-icon-delete" class="danger" data-dismiss="modal">删除</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
   
  </section>

</template>

<script>
  import { realconsole } from '../../assets/js/management.js'
  export default {
    data() {
      return {
        labelPosition: 'left',
        form: {
          unitId:'',
          unitName:'',
          buildName:'',
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
        $('#right').hide();
        $('.manage-center').hide();
        $('#list').show();
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
            this.form.buildName = item.name ;
            this.form.unitId = item.unitId ;
            this.form.unitName = item.unitName ;
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
            this.form.unitName = item.name;
          }
        })
        this.$fetch("/api/building/updateBuilding",{
          'id':this.deviceIndex,
          'name':this.form.buildName,
          'unitId':this.form.unitId,
          'unitName':this.form.unitName,
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
        $('.main_all_content .main_content_table').hide();
        $('.main_all_content .main_content_bottom').hide();
        $('.plan').hide();
        $('.total').hide();
        $('.floor_wrap').show();
        $('.room_wrap').hide();
        $('.floorMap').show();
        this.$store.commit('floorAdd',1);
        this.$store.commit('buildingId',row.id);
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('floorAdd',2)
        this.$store.commit('buildingId',row.id);
        $('.plan').show();
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
      qrcode(){
        window.open("/api/qrcode/buildingImgs?unitId="+this.buildUnit);
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
      this.$store.commit('route_path',this.$route.path);
    },
    watch:{
      $route: {
        handler: function(val, oldVal){
          console.log(val);
          if(this.$route.path == '/Building_management/all'){
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

