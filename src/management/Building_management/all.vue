<template>
  <section>
    <!-- 标题 -->
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-jianzhuguanli-mian-"></i>
        <h2>建筑管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Building_management/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>新增</span></router-link>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main_all_content">
      <!-- 筛选 -->
      <div class="main_content_top">
        <el-form class="float-left">
          <el-select v-model="buildUnit" placeholder="选择单位" class="select build">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
           <!-- 楼层管理 -->
           <!-- <el-select v-model="floorId" placeholder="选择楼层" class="select floor" style="display:none;">
            <el-option label="全部楼层" value=""></el-option>
            <el-option v-for="item in floorList" :label="item.name" :value="item.id"></el-option>
          </el-select> -->
        </el-form>
        <div class="main_nav_two float-right">
          <router-link to="/Building_management/all"><span><i class="icon iconfont icon-liebiao-xian-"></i>列表</span></router-link>
          <router-link to="/Building_management/maps"><span><i class="icon iconfont icon-liebiaoditu-xian-"></i>地图</span></router-link>
        </div>
      </div>
      <!-- 表格 -->
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
            label="高度 (m)">
          </el-table-column>
          <el-table-column
            prop="floors"
            label="总楼层">
          </el-table-column>
          <el-table-column
            prop="structure"
            label="建筑结构">
          </el-table-column>
          <el-table-column
            prop="buildYear"
            :formatter="data"
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
              <button v-if="roleId" @click="start_plan(scope.row)" data-toggle="modal" data-target="#mymodal"><i class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i></button>
              <button v-else><i class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i></button>
              <button @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button>
              <button @click="floor_build(scope.row)"><i class="icon iconfont icon-danweiguanli-mian-1" data-toggle="tooltip" title="楼层管理"></i></button>
              <button @click="show3(scope.row)"><i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="详情"></i></button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
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
                         :page-size="14"
                         layout="prev, pager, next"
                         :total="totalList">
          </el-pagination>
          <span>{{page}}页</span>
          <el-pagination
                         @current-change="handleCurrentChange"
                         :current-page="currentPage4"
                         :page-size="14"
                         layout="total"
                         :total="totalList">
          </el-pagination>
        </div>
      </div>
      <div id="list-maps">
          <ul class="list-unstyled floor-item list_unstyled" style="display:none;" >
            <li v-for="(item,index) in table_list" @click="floor_btn(item.id)" :class="{'active': item.id == active}">{{ item.floorName }}</li>
          </ul>
          <div class="floorMap maps" style="display:none;">
            <div id="floorImg" style="width: 100%;height: 100%;position:absolute;left:0;top:0;">
              <img v-if="svgUrl!=null" :src="'/img'+this.svgUrl" class="img-responsive">
              <p v-if="svgUrl==null" class="font-gray-ccc">该楼层暂无平面图</p>
            </div>
          </div>
          <div class="roomMap maps" style="display:none;">
            <ul class="list-unstyled floor-item">
              <li>{{ this.floorName }}</li>
            </ul>
            <div id="RoomImg" style="width: 100%;height: 100%;position:relative;left:0;top:0;">
              <img v-if="roomSvgUrl!=null" :src="'/img'+this.roomSvgUrl" class="img-responsive">
              <p v-if="roomSvgUrl==null" class="font-gray-ccc">该楼层暂无平面图</p>
            </div>
          </div>
      </div>      
    </div>
    <!-- 编辑Modal -->
    <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <!-- <div id="add-new" class="add-map add-modal"> -->
        <!-- <aside> -->
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">修改建筑</h4>
                <h5 class="modal-p font-blue">{{this.form.buildName}}</h5>
              </div>
              <div class="modal-body">
                <div class="main_content">
                  <!--
                  class类not-null为必填标识,如需请加在<el-form-item>
                  class类hint-error为错误提示
                -->
                  <el-form class="row" ref="form" status-icon :rules="rules" :label-position="labelPosition" :model="form">
                    <el-form-item label="建筑名称" prop="buildName" class="not-null">
                      <!-- <span class="font-red" style="position: absolute;top:-45px;right:20px;">建筑名称有误或重复</span> -->
                      <el-input v-model="form.buildName" class="col-sm-4"></el-input>
                    </el-form-item>
                    <el-form-item label="所属单位" prop="unitId" class="not-null">
                      <el-select v-model="form.unitId" placeholder="选择单位"  class="select col-sm-4">
                        <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="建筑性质" prop="property" class="not-null col-sm-4">
                      <el-select v-model="form.property" placeholder="建筑性质">
                        <el-option label="居住" value="居住"></el-option>
                        <el-option label="公共" value="公共"></el-option>
                        <el-option label="工业" value="工业"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="建成结构" prop="structure" class="not-null col-sm-4">
                      <el-select name="" v-model="form.structure"  placeholder="请选择结构">
                        <el-option label="混凝土结构" value="混凝土结构"></el-option>
                        <el-option label="砌体结构" value="砌体结构"></el-option>
                        <el-option label="钢结构" value="钢结构"></el-option>
                        <el-option label="木结构" value="木结构"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="建成年份" prop="timeYear" class="not-null col-sm-4">
                      <div class="block">
                        <el-date-picker
                          :editable="false"
                          v-model="form.timeYear"
                          type="year"
                          placeholder="选择年份"
                          format="yyyy 年"
                          value-format="yyyy">
                        </el-date-picker>
                      </div>
                    </el-form-item> 
                    <el-form-item label="建筑地址" prop="address" class="not-null">
                      <el-input v-model="form.address"  class="col-sm-8"></el-input>
                    </el-form-item>
                    <el-form-item label="经纬度" prop="point" class="not-null">
                      <el-input v-model="form.point"  class="col-sm-4"></el-input>
                    </el-form-item>
                    <el-form-item label="占地面积 (㎡)" prop="area" class="not-null col-sm-4">
                      <el-input v-model.number="form.area" ></el-input>
                    </el-form-item>
                    <el-form-item label="高度 (m)" prop="height" class="not-null col-sm-4">
                      <el-input v-model="form.height" ></el-input>
                    </el-form-item>
                    <el-form-item label="总楼层" prop="floor" class="not-null col-sm-4">
                      <el-input v-model="form.floor" ></el-input>
                    </el-form-item>                           
                    <el-form-item label="消防负责人" prop="name" class="not-null col-sm-4">
                      <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="消防负责人电话" prop="phone" class="not-null col-sm-4">
                      <el-input v-model="form.phone"></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
              <div class="modal-footer">
                <el-button type="primary" @click.native.prevent="startRow('form')" icon="el-icon-circle-check-outline" class="primary">编辑并提交</el-button>
                <el-button class="back" @click="back" data-dismiss="modal">取消</el-button>
              </div>
            </div>
          </div>
        <!-- </aside> -->
        <!-- 地图 -->
        <!-- <aside>      
          <div class="maps">
              <managementMap-vue></managementMap-vue>
          </div>
        </aside> -->
      <!-- </div> -->
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
import panzoom from 'panzoom';
  import{ mapState } from "vuex";
import managementMapVue from '../managementMap';
  import { realconsole } from '../../assets/js/management.js';
  import { isvalidPhone,isName,isvalidName,isLng } from '../../assets/js/validate';
  export default {
    data() {
      var validPhone=(rule, value,callback)=>{
          if (!value){
            callback(new Error('请输入手机号码'))
          }else  if (!isvalidPhone(value)){
            callback(new Error('请输入正确的11位手机号码'))
          }else {
            callback()
          }
      }
      var Name=(rule, value,callback)=>{
          if (!value){
            callback(new Error('请输入您的姓名'))
          }else  if (!isName(value)){
            callback(new Error('请输入正确的姓名'))
          }else {
            callback()
          }
      }
      var validName=(rule, value,callback)=>{
          if (!value){
            callback(new Error('请输入建筑名称'))
          }else  if (!isvalidName(value)){
            callback(new Error('请输入正确的建筑名称'))
          }else {
            callback()
          }
      }
      var Lng=(rule, value,callback)=>{
            if (!value){
              callback(new Error('请输入坐标'))
            }else  if (!isLng(value)){
              callback(new Error('请输入正确的坐标点'))
            }else {
              callback()
            }
        }
      return {
        labelPosition: 'top',
        active:'',
        roleId:true,
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
          phone:'',
          // point:''
          point:[]
        },
        buildUnit:null,//选择单位
        optionList:[],//全部单位列表
        floorList:[],//楼层列表
        tableData: [],//设备列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:'',
        svgUrl:'',
        table_list:[],
        floorName:'',
        roomSvgUrl:'',
        rules: {
          buildName:[
            { required: true, trigger: 'blur', validator: validName }
          ],
          unitId:[
            { required: true, message: '请选择单位', trigger: 'change' }
          ],
          structure:[
            { required: true, message: '请选择建筑结构', trigger: 'change' }
          ],
          property: [
            { required: true, message: '请选择建筑性质', trigger: 'change' }
          ],
          timeYear:[
            { required: true, message: '请选择时间', trigger: 'change' }
          ],
          area:[
            { required: true, trigger: 'blur', message: '请输入占地面积' }
          ],
          height:[
            { required: true, trigger: 'blur', message: '请输入高度' }
          ],
          floor:[
            { required: true, trigger: 'blur', message: '请输入总楼层' }
          ],
          address:[
            { required: true, trigger: 'blur', message: '请填写建筑地址' }
          ],
          name:[
            { required: true, trigger: 'blur', validator: Name }
          ],
          phone:[
            { required: true, trigger: 'blur', validator: validPhone }
          ],
          point:[
            { required: true, trigger: 'blur', validator: Lng }
          ]
        }
      }
    },
    components:{
      'managementMap-vue': managementMapVue,
    },
    methods: {
      data(row, column){
        return row.buildYear.substr(0,4);
      },
      floor_btn(id){
        console.log(id);
        this.active = id ;
        this.table_list.forEach((item)=>{
          if(item.id == id){
            // alert(item.svgUrl);
            this.svgUrl = item.svgUrl ;
          }
        })
      },
      back(){
        // $('#right').addClass('position-fixed-right');
      },
      btn_add(){
        $('#right').css('display','none');
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row){//修改建筑
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
            this.form.timeYear = item.buildYear;
            this.form.property = item.property ;
            this.form.name = item.linkname ;
            this.form.phone = item.phone ;
            this.form.point[0] = item.pointX ;
            this.form.point[1] = item.pointY ;
          }
        })
        // $('#right').removeClass('position-fixed-right');
      },
      startRow(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.optionList.forEach((item,index)=>{
              if(item.id == this.form.unitId){
                console.log(item.name);
                this.form.unitName = item.name;
              }
            })
            var point = this.form.point;
            if(typeof(point) == 'string'){
              var pointList = point.split(",");
            }else{
              var pointList = this.form.point;
            }
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
              'buildYear':this.form.timeYear+'-01-01',
              'property':this.form.property,
              'linkname':this.form.name,
              'phone':this.form.phone,
              'pointX':pointList[0],
              'pointY':pointList[1],
              headers: {'Content-Type': 'application/json'}
            }).then(response=>{
              if(response){
                if(response.status == 1){
                  // console.log('修改建筑成功...'+ JSON.stringify(response));
                  $('.primary').attr('data-dismiss','modal');
                   // 修改成功提示
                  this.$message({
                    dangerouslyUseHTMLString: true,
                    message: '<strong> 修改成功</strong>',
                    center: true,
                    showClose: true,
                    iconClass:'el-icon-circle-check',
                    customClass:'edit-ok-notification'
                  });
                 
                  this.tableBuildList();
                }else{
                  // console.log('修改建筑失败...'+ JSON.stringify(response));
                }
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        //  $('#right').addClass('position-fixed-right');
      },
      delete_plan(row){//删除
        this.deviceIndex = row.id;
        this.deviceName = row.name;
      },
      floor_build(row){
        $('.build').hide();
        $('.main_all_content .main_content_table').hide();
        $('.main_all_content .main_content_bottom').hide();
        $('.plan').hide();
        $('.total').hide();
        $('.floor_wrap').show();
        $('.floorMap').show();
        $('.list_unstyled').show();
        $('.room_wrap').hide();
        this.$store.commit('floorAdd',1);
        this.$store.commit('buildingId',[row.id,new Date().getTime()]);
        
        this.$store.commit('currentPage',this.currentPage4);
        this.deviceIndex = row.id;
        this.findPageBuildIngFloor();
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('floorAdd',2);
        this.$store.commit('currentPage',this.currentPage4);
        this.$store.commit('buildingId',[row.id,new Date().getTime()]);
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
        if(this.buildUnit == null){
          window.open("/api/qrcode/buildingImgs?unitId=");
        }else{
          window.open("/api/qrcode/buildingImgs?unitId="+this.buildUnit);
        }
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
            pageSize:14,
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
                  this.$store.commit('buildingId',[item.id,new Date().getTime()]);
                  // localStorage.setItem('buildingId',[item.id,new Date().getTime()]);
                }
              })
              if(this.totalList % 14 == 0){
                this.page = parseInt( this.totalList / 14 )
              }else{
                this.page = parseInt( this.totalList / 14 ) + 1
              }
            }
          })
          .then(err => {
            // console.log(err);
          });
      },
      findPageBuildIngFloor(){
        // alert(1234);
        // console.log(this.buildingId)
        this.$fetch("/api/building/findPageBuildIngFloor",{
          pageIndex:1,
          pageSize:1000,
          buildingId:this.deviceIndex
        }).then(response=>{
          console.log(response.data.pageBuildIng.result);
          if(response.data.pageBuildIng.result){
            this.table_list = [];
            this.table_list = response.data.pageBuildIng.result;
          }else{
            this.svgUrl = '' ;
          }
          // $('.list-unstyled li').last().click();
          this.floor_btn(this.table_list[this.table_list.length-1].id);
        })
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.tableBuildList();
      $('#right').show();
      // let floorId = localStorage.getItem('floorId');
      // this.table_list.forEach(item=>{
      //   if(floorId == item.id){
      //     this.roomSvgUrl = item.svgUrl ;
      //     this.floorName = item.floorName ;
      //   }
      // })
      var roleId = JSON.parse(sessionStorage.getItem("roleId")) ;
      if(roleId == 1 || roleId == 2){
        return ;
      }
      this.roleId = false;
      var area = document.getElementById('floorImg');
      panzoom((area),{
        maxZoom:1,
        minZoom:1
      });
      
      var areaRoom = document.getElementById('RoomImg');
      panzoom((areaRoom),{
        maxZoom:1,
        minZoom:1
      });
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
      },
      refresh(){
        this.findPageBuildIngFloor();
      },
      floorId(){
        // console.log(this.floorId)
        this.table_list.forEach(item=>{
          if(this.floorId[0] == item.id){
            this.roomSvgUrl = item.svgUrl ;
            this.floorName = item.floorName ;
          }
        })
      }
    },
     computed:mapState([
       'floorId',
       'refresh'
    ])
  };
</script>

