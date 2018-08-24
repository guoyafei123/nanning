<template>
  <div class="toolright z-index-20">
    <div class="plan" style="display: none;">
      <a @click="back_first" class="btn-back" v-if="this.$route.path == '/Building_management/maps'"><i class="el-icon-arrow-left"></i>返回</a>
      <!-- 建筑名称 -->
      <section>        
        <div class="toolcount font-gray-999 size-12 margin-top20 clearfix">
                  <!-- 已选择 -->
                  <div class="personinfo">
                        <p>                       
                        <span class="size-20 font-blue">{{this.form.BuildName}}</span>
                        <!-- <span class="float-right">
                                <span class="bgbox-max bg-blue font-black size-10" data-toggle="tooltip" title="安全评分">评分6.9</span>
                            </span> -->
                        </p>
                        <p class="col-sm-7 text-left padding0">
                            <span>
                                <i class="fas fa-industry"></i> {{this.form.UnitName}}</span>
                        </p>
                        <P class="col-sm-5 text-right padding0">
                            <span class="text-right">
                            最后更新：<span class="font-gray-999">{{this.createTime}}</span>
                            </span>
                        </P>                        
                  </div>
        </div>
      </section>
      <!-- 建筑信息统计 -->
      <section>
          <div class="toolcount margin-top20 clearfix">
              <div class="col-sm-4 font-gray-999 padding0">
                  <ul class="toolcount-left margin-bottom0 padding-left0" id="toolcount">
                      <li>
                          <h1 class="toolcount-p1"><span class="font-blue"></span>114</h1>
                      </li>
                      <li class="margin-top20">
                          <p class="size-10 ">Room Total</p>
                      </li>
                      <li>
                          <p class="size-16 font-blue">总房间数量</p>
                      </li>
                  </ul>
              </div>
              <div class="col-sm-8 font-gray-999 padding-left0 padding-right0">
                  <ul class="toolcount-right padding-left15 margin-bottom0 margin-left15 size-12">
                      <li>
                          <p class="size-18 font-white">信息统计</p>
                      </li>
                      <li class="margin-bottom30">
                          <p class="size-10 set-scaleright">Buliding Statistics</p>
                      </li>
                      <!-- <li class="margin-top10">
                          <p>消防负责人 <span class="font-white">{{this.form.name}} {{this.form.phone}}</span></p>
                      </li> -->
                      <li class="row text-center padding-right16 margin-top10">
                          <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-white">{{this.form.area}}</p>
                              <p>面积 m²</p> 
                          </div>
                          <div class="col-sm-4 personnel-borderright">
                              <p class="size-16 show font-white">{{this.form.height}}</p>
                              <p>高度 m</p>
                          </div>
                          <div class="col-sm-4">                              
                              <p class="size-16 show font-blue">{{this.form.floor}}</p>
                              <p>楼层数量</p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </section>
      <!-- 建筑详情 -->
      <section>
        <div class="textandimg margin-top20">
              <h4 class="p-title">
                 <!-- {{ this.form.BuildName }} -->建筑详情
              </h4>
              <div class="row textandimg-main margin-top20 size-12">
                  <div class="col-sm-12">
                      <span>建筑名称 </span>
                      <strong v-html="this.form.BuildName"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>所属单位 </span>
                      <strong v-html="this.form.UnitName"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>建筑结构 </span>
                      <strong v-html="this.form.structure"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>建筑性质 </span>
                      <strong v-html="this.form.property"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>建筑地址 </span>
                      <strong v-html="this.form.address"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>经纬度 </span>
                      <strong v-html="this.form.point.pointX"></strong>
                      <strong v-html="this.form.point.pointY"></strong>
                  </div>
                  
                  <div class="col-sm-6">
                      <span>占地面积 </span>
                      <strong v-html="this.form.area+'㎡'"></strong>
                  </div>
                  <div class="col-sm-6">
                      <span>高 度 </span>
                      <strong v-html="this.form.height+'m'"></strong>
                  </div>

                  <div class="col-sm-6">
                      <span>总楼层 </span>
                      <strong v-html="this.form.floor"></strong>
                  </div>
                  <div class="col-sm-12">
                      <span>建筑年份 </span>
                      <strong v-html="this.form.timeYear"></strong>
                  </div>
                  <!-- <div class="col-sm-6">
                      <span>建筑平面图 </span>
                      <strong data-toggle="tooltip" title="建筑平面图" class="font-blue">查看</strong>
                  </div> -->
              </div>
        </div>
      </section>
      <!-- 安防信息 -->
      <section>
        <div class="textandimg margin-top30">
              <h4 class="p-title">消防信息</h4>
              <div class="row textandimg-main margin-top20 size-12">
                  <div class="col-sm-12">
                      <span>消防负责人 </span>
                      <strong v-html="this.form.name"> </strong>
                  </div>
                  <div class="col-sm-12">
                      <span>负责人电话 </span>
                      <strong v-html="this.form.phone"></strong>
                  </div>                 
                </div>
          </div>
      </section>  
    </div>
    <!-- 简单统计 --> 
    <div class="font-white total" style="display:none;">
      <!-- 总数统计 -->
        <section class="toolcount clearfix">
          <ul class="toolcount-left padding0">
            <li>
              <p class="size-10 font-gray-666">Building Total</p>
            </li>
            <li>
              <p class="size-18 font-blue">当前建筑总数</p>
            </li>
            <li>
              <h1 class="toolcount-p1">{{totalList}}</h1>
            </li>
          </ul>
        </section>
        <!-- 建筑小列表 -->
      <section class="bg-black">        
        <div class="toolbuildrate">
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
                prop="location"
                :show-overflow-tooltip="true"
                label="地址">
              </el-table-column>
              <el-table-column
                fixed="right"
                width="110"
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
          <div class="main_content_bottom bg-black">
            <div class="bottom_con">
              <div class="float-left btn-system">
                <a href="javascript:;">打印</a>
                <a href="javascript:;">导出</a>
                <a href="javascrip:;" @click="qrcode()">导出二维码</a>
              </div>
              <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-size="10"
                            small
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
        </div>
        <!-- 修改建筑Modal -->
        <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">修改建筑</h4>
              </div>
              <div class="modal-body" style="height:550px;overflow-y:auto;">
                <el-form ref="form" status-icon :label-position="labelPosition" :inline="true" :model="form">
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
        <!-- 删除Modal -->
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
      </section>
    </div>
    <!-- 楼层管理 -->
    <div class="floor_wrap margin-top20" style="display:none;">
      <a @click="floor_back" class="btn-back"><i class="el-icon-arrow-left"></i>返回</a>
      <!-- 建筑名称 -->
      <section>        
        <div class="toolcount font-gray-999 size-12 margin-top20 clearfix">
                  <!-- 已选择 -->
                  <div class="personinfo">
                        <p>                       
                        <span class="size-20 font-white"><i class="icon iconfont icon-danweiguanli-mian-1 size-20" data-toggle="tooltip" title="楼层管理"></i> 楼层管理</span>
                        <span class="size-14 font-blue float-right">
                                <i class="incon iconfont icon-jianzhuguanli-xian-"></i> {{this.form.BuildName}}
                            </span>
                        </p>
                        <p class="col-sm-12 text-left padding0">
                            <span>
                                <i class="fas fa-industry"></i> {{this.form.UnitName}}{{this.form.BuildName}}</span>
                        </p>
                        <!-- <P class="col-sm-5 text-right padding0">
                            <span class="text-right">
                            最后更新：<span class="font-gray-999">{{this.createTime}}</span>
                            </span>
                        </P>  -->                       
                  </div>
        </div>
      </section>
      <!-- 列表 -->          
      <div class="toolbuildrate">
        <div class="main_content_table position-relative">
          <div class="table-scroll">
            <table class="table table-responsive size-12 table-condensed toolroute-table margin-top10 position-relative">
              <thead>
                <tr>
                  <!-- <td class="col-sm-1 hide">序号</td> -->
                  <td class="col-sm-2">楼层</td>
                  <td class="col-sm-10 text-right">操作</td>
                </tr>
              </thead>
              <tbody>
                <tr class="add"  style="display:none;">
                    <!-- <td class="col-sm-1 hide">{{ this.index+1 }}</td> -->
                    <td class="col-sm-2">
                      <input v-model.number="number" class="add-file" />
                    </td>
                    <td class="col-sm-10">
                      <div class="row">
                        <div class="col-sm-6">
                          <input id="file" name="file"  type="file"/>
                        </div>
                        <div class="col-sm-6">
                          <a @click="cancel" class="btn-false">取消</a>                          
                          <a @click="sure" class="btn-sure">确定</a>                          
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr v-for="(item,index) in table_list">
                    <!-- <td class="hide">{{ index+1 }}</td> -->
                    <td class="weixiugai col-sm-2">{{ item.floorName }} 层</td>
                    <td class="xiugai" style="display:none;">
                      <input v-model.number="item.floorName"/>
                    </td>
                    <td class="col-sm-10 weixiugai_edit text-right">
                      <!-- <img src="../../assets/images/u237.png"/> -->
                      <i @click="room_build(item)" class="fas fa-home font-gray-999" data-toggle="tooltip" title="房间管理"></i>
                      <i @click="xiugai(index)" class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i>
                      <i @click="floor_delete(item,index)" class="el-icon-delete" data-toggle="tooltip" title="删除"></i>
                    </td>
                    <td class="xiugai_edit" style="display:none;">
                      <div class="row">
                        <div class="col-sm-6">
                          <!-- <div class="position-relative">
                            <div @click="showInputFileName()" class="pmian-up bg-gray-222">
                            <i class="fa fa-plus"></i> 选取文件 <span class="showFileName"></span><span class="fileerrorTip"></span>
                            </div> 
                            <input id="file" name="file" type="file">
                          </div>-->
                          <input id="file" name="file" type="file">
                        </div>
                        <div class="col-sm-6">                          
                          <a @click="xiugai_cancel(index)" class="btn-false">取消</a>
                          <a @click="xiugai_sure(index)" class="btn-edit">确定</a>
                        </div>
                      </div>
                    </td>
                  </tr>                            
              </tbody>
            </table>
          </div>
          <!-- 提交按钮 -->
          <div class="submit-unit">
            <a @click="add" class="btn-ok center-block">
              <i class="el-icon-circle-check-outline"></i> 新增楼层</a>
          </div>            
        </div>          
      </div>
    </div>

    <!-- 房间管理 -->
    <div class="room_wrap margin-top20" style="display:none;">
      <a @click="room_back" class="btn-back"><i class="el-icon-arrow-left"></i>返回</a>      
      <!-- 房间管理 -->
      <section>        
        <div class="toolcount font-gray-999 size-12 margin-top20 clearfix">
                  <div class="personinfo">
                        <p>                       
                        <span class="size-20 font-white"><i class="fas fa-home size-20" data-toggle="tooltip" title="房间管理"></i> 房间管理</span>
                        <span class="size-14 font-blue float-right">
                                <i class="incon iconfont icon-jianzhuguanli-xian-"></i> {{ this.form.BuildName }}{{ this.floorName }}层
                            </span>
                        </p>
                        <p class="col-sm-12 text-left padding0">
                            <span>
                                <i class="fas fa-industry"></i> {{ this.form.UnitName }}{{ this.form.BuildName }}{{ this.floorName }}层</span>
                        </p>
                        <!-- <P class="col-sm-5 text-right padding0">
                            <span class="text-right">
                            最后更新：<span class="font-gray-999">{{this.createTime}}</span>
                            </span>
                        </P>  -->                       
                  </div>
        </div>
      </section>
      <!-- 列表 -->          
      <div class="toolbuildrate">
        <div class="main_content_table">
          <div class="table-scroll">
            <table class="table table-responsive size-12 table-condensed toolroute-table margin-top10">
            <thead v-if="this.floorRoomList.length != 0" class="table_top">
              <tr>
                <td class="col-sm-4">单元</td>
                <td class="col-sm-8">房间</td>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in floorRoomList">
                  <td class="unitroom col-sm-4">
                    <!-- <span class="hint_error" @click="deleteUnit(item.unitBuilding,index,floorRoomList)" data-toggle="modal" data-target="#mymodalRoom"></span> -->
                    <input type="text" v-model="item.unitBuilding" maxlength="6"/>
                    <span data-toggle="modal" data-target="#mymodalRoom"><i class="icon iconfont icon-guanbi-mian- font-red" @click="deleteUnit(item.unitBuilding,index,floorRoomList)" data-toggle="tooltip" title="删除单元"></i></span>
                  </td>
                  <td class="room-name col-sm-8">
                    <ul class="table_ul margin-top10">
                      <li v-for="(key,indexs) in item.roomList">
                          <i class="el-icon-location" data-toggle="tooltip" title="房间详情"></i>
                          <input type="text" v-model="key.roomNumber" class="margin-left10 margin-right5" />
                          <i @click="deleteRoom(floorRoomList[index].roomList[index],floorRoomList[index].roomList,indexs)" class="icon iconfont icon-guanbi-mian- font-red font-red" data-toggle="tooltip" title="删除房间"></i>
                      </li>
                      <li>
                          <span @click="addRoom(item,index)"><i class="fa fa-plus size-12 font-blue" data-toggle="tooltip" title="添加房间"></i> 添加房间</span>
                      </li>
                    </ul>
                  </td>
                </tr>
            </tbody>
            <tfoot>
                    <tr>
                      <td class="unitroom col-sm-4">
                        <span @click="addUnit" class="add-unitroom"><i class="fa fa-plus size-12" data-toggle="tooltip" title="添加单元"></i> 添加单元</span>
                      </td>
                      <td class="room-name col-sm-8"></td>
                    </tr>
            </tfoot>
          </table>
        </div>
      <!-- 提交按钮 -->
      <div class="submit-unit">
        <a @click="submitFloorRoomList" class="btn-ok center-block">
          <i class="el-icon-circle-check-outline"></i> 提交并返回</a>
      </div>
    </div>
  </div>

    </div>
      <!-- 删除 modal -->
      <div class="modal fade" id="mymodalRoom" tabindex="-1" role="dialog" aria-labelledby="myModalLabelRoom">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabelRoom">提示</h4>
                <h5 class="modal-p">删除操作并不影响之前的统计数据</h5>
              </div>
              <div class="modal-body text-center container-padding40">
                <h3 class="font-red size-14">是否删除</h3>
                <p class="font-white size-16">{{ unitBuilding }}</p>
              </div>
              <div class="modal-footer">
                <el-button type="danger" @click.native.prevent="deleteUnitRoom()" icon="el-icon-search" class="danger" data-dismiss="modal">删除</el-button>
                <el-button class="back" data-dismiss="modal">取消</el-button>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
  import{ mapState } from "vuex"
  export default {
    data() {
      return {
        labelPosition: 'top',
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
          phone:'',
          point:{
            pointX:'',
            pointY:''
          }
        },
        optionList:[],//全部单位列表
        tableData: [],//设备列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:'',
        index:1,
        table_list:[],
        number:0,
        floor_index:0,
        floorName:'',
        floorRoomList:[],
        unitBuilding:'',
        indexUnit:'',
        RoomChild:''
      };
    },
    
    methods: {
    // 显示上传文件名
    // showInputFileName(){
    //   $(".pmian-up").on("change","input[type='file']",function(){
    //     var filePath=$(this).val();
    //     if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
    //         $(".fileerrorTip").html("").hide();
    //         var arr=filePath.split('\\');
    //         var fileName=arr[arr.length-1];
    //         $(".showFileName").html(fileName);
    //     }else{
    //         $(".showFileName").html("");
    //         $(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();
    //         return false 
    //     }
    // })
    // },
//楼层
      add(){
        $('.add').show();
        this.index = this.table_list.length;
      },
      sure(){
        this.index++;
        $('.add').hide();
        this.floor_index = this.index;
        console.log(this.floor_index);
        var file = "file";
        let array={ 'buildingId': this.buildingId, 'floor': this.floor_index, 'floorName': this.number}
              
              this.table_list.push(array);
              console.log(this.table_list);
        $.ajaxFileUpload({
            url: '/api/building/addBuildingFloor', //用于文件上传的服务器端请求地址
            /* secureuri : false, */ //一般设置为false
            fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
            data : {
              'buildingId':this.buildingId,
              'floor':this.floor_index,
              'floorName':this.number
            },
            type: 'POST',
            dataType: "plain",
            success: function (data, status) { //服务器成功响应处理函数 //服务器成功响应处理函数
            },
            error: function (e) { //服务器响应失败处理函数
              $.messager.alert('警告', "系统错误", "warning");
            },
            complete: function (e) {//只要完成即执行，最后执行
              console.log(e) 
            }
        });
        this.number = '' ;
        var file = document.getElementById('file');
        file.outerHTML = file.outerHTML;
        this.$store.commit('Refresh',this.Refresh);
      },
      cancel(){
        $('.add').hide();
        this.number = '' ;
        
      },
      xiugai(indexs){
        this.table_list.forEach((item,index)=>{
          if(indexs == index){
            $('.weixiugai:eq('+indexs+')').hide();
            $('.xiugai:eq('+indexs+')').show();
            $('.weixiugai_edit:eq('+indexs+')').hide();
            $('.xiugai_edit:eq('+indexs+')').show();
          }
        })
        // console.log(indexs);
      },
      xiugai_sure(indexs){
        // console.log(indexs);
        this.table_list.forEach((item,index)=>{
          // console.log(item.floorName)
          if(indexs == index){
            console.log(item.buildingId)
            $('.weixiugai:eq('+indexs+')').show();
            $('.xiugai:eq('+indexs+')').hide();
            $('.weixiugai_edit:eq('+indexs+')').show();
            $('.xiugai_edit:eq('+indexs+')').hide();
            var file = "file";
            $.ajaxFileUpload({
                url: '/api/building/updateBuildingFloor', //用于文件上传的服务器端请求地址
                /* secureuri : false, */ //一般设置为false
                fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
                data : {
                  'id' : item.id,
                  'buildingId':item.buildingId,
                  'floor':item.floor,
                  'floorName':item.floorName,
                  'svgUrl':item.svgUrl
                },
                type: 'POST',
                dataType: "plain",
                success: function (data, status) { //服务器成功响应处理函数 //服务器成功响应处理函数
                  // alert(2);
                },
                error: function (e) { //服务器响应失败处理函数
                  $.messager.alert('警告', "系统错误", "warning");
                },
                complete: function () {//只要完成即执行，最后执行
                }
            });
          }
        })
        this.$store.commit('Refresh',this.Refresh);
      },
      xiugai_cancel(indexs){
        this.table_list.forEach((item,index)=>{
          if(indexs == index){
            $('.weixiugai:eq('+indexs+')').show();
            $('.xiugai:eq('+indexs+')').hide();
            $('.weixiugai_edit:eq('+indexs+')').show();
            $('.xiugai_edit:eq('+indexs+')').hide();
          }
        })
      },
      floor_delete(item,indexs){
        this.$fetch("/api/building/deleteBuildingFloor",{
          floorId:item.id
        }).then(response=>{
          // console.log(response.data);
          this.table_list.splice(indexs,1);
          this.findPageBuildIngFloor();
        })
      },
      room_build(item){
        $('.build').hide();
        $('.floor').hide();
        $('.main_all_content .main_content_table').hide();
        $('.main_all_content .main_content_bottom').hide();
        $('.plan').hide();
        $('.total').hide();
        $('.floor_wrap').hide();
        $('.room_wrap').show();
        $('.map').hide();
        $('.floorMap').hide();
        $('.roomMap').show();
        this.floorName = item.floorName ;
        this.$store.commit('floorAdd',3);
        this.$store.commit('floorId',item.id);
        console.log(item.id);
        this.floorRoomListShow();
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
        $('.map').hide();
        $('.floorMap').show();
        this.$store.commit('floorAdd',1);
        this.$store.commit('buildingId',row.id);
      },
      findPageBuildIngFloor(){
        // console.log(this.buildingId)
        this.$fetch("/api/building/findPageBuildIngFloor",{
          pageIndex:1,
          pageSize:1000,
          buildingId:this.buildingId
        }).then(response=>{
          console.log(response.data.pageBuildIng.result);
          this.table_list = response.data.pageBuildIng.result;
        })
      },

// 房间

      addUnit(){
        this.floorRoomList.push({unitBuilding:'',roomList:[]})
      },
      addRoom(item,index){
        item.roomList.push({roomNumber:'',roomId:'',imgKey:null})
      },
      deleteUnit(key,index,item){
        this.unitBuilding = key ;
        this.indexUnit = index ;
        this.RoomChild = item ;
      },
      deleteUnitRoom(){
        // 删除提示
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong> 删除成功</strong>',
          center: true,
          showClose: true,
          iconClass:'el-icon-circle-check',
          customClass:'del-notification'
        });
        this.$fetch("/api/building/deleteByFloorUnit",{
          floorUnit:this.unitBuilding,
          floorId:this.floorId
        }).then(response=>{
          console.log(response);
          this.RoomChild.splice(this.indexUnit,1);
        })
      },
      deleteRoom(key,item,index){
        console.info(key);
        this.$fetch("/api/building/deleteBuildingFloorRoom",{
          roomId:key.roomId
        }).then(response=>{
          console.log(response);
          item.splice(index,1);
          console.log(item)
        })
      },
      submitFloorRoomList(){
        console.log(this.floorRoomList);
        var floorRoomList = JSON.stringify( this.floorRoomList );
        this.$fetch("/api/building/addBuildingFloorRoom",{
          floorRoomList:floorRoomList,
          floorId:this.floorId
        }).then(response=>{
          console.log(response);
          this.room_back()
        })
      },
      floorRoomListShow(){
        this.$fetch("/api/building/findPageBuildIngFloorRoom",{
          pageIndex:1,
          pageSize:1000,
          floorId:this.floorId
        }).then(response=>{
          console.log(JSON.stringify(response));
          var pageBuildIng = response.data.pageBuildIng.result;
          var floorUnitList = response.data.floorUnitList;
          // console.log(floorUnitList);
          this.floorRoomList.length = 0 ;
          floorUnitList.forEach((item,index)=>{
            var newarr = pageBuildIng.filter(function (obj) {
              return obj.floorUnit == item;
            });
            newarr.forEach((item,index)=>{
              var key = 'roomId';
              item[key] = item['id'];
              delete item['id'];
            })
            console.log(newarr);
            this.floorRoomList.push({unitBuilding:item,roomList:newarr})
          })
          
        })
      },

      back_first(){
        if(this.$route.path == '/Building_management/maps'){
          $('.total').show();
          $('.plan').hide();
        }
        // if(this.$route.path == '/Building_management/all'){
        //   $('.mapTable').hide();
        //   $('.total').show();
        // }
      },
      floor_back(){
        if(this.$route.path == '/Building_management/maps'){
          $('.build').show();
          $('.floor').hide();
          $('.plan').hide();
          $('.total').show();
          $('.floor_wrap').hide();
          $('.room_wrap').hide();
          
          $('.main_all_content .main_content_table').show();
          $('.main_all_content .main_content_bottom').show();
          $('.map').show();
          $('.floorMap').hide();
          $('.roomMap').hide();
        }else{
          $('.build').show();
          $('.floor').hide();
          $('.main_all_content .main_content_table').show();
          $('.main_all_content .main_content_bottom').show();
          $('.plan').show();
          $('.total').hide();
          $('.floor_wrap').hide();
          $('.room_wrap').hide();
          $('.floorMap').hide();
          $('.roomMap').hide();
        }
      },
      room_back(){
        
        if(this.$route.path == '/Building_management/maps'){
          $('.build').hide();
          $('.floor').hide();
          $('.plan').hide();
          $('.total').hide();
          $('.floor_wrap').show();
          $('.main_all_content .main_content_table').show();
          $('.main_all_content .main_content_bottom').show();
          $('.room_wrap').hide();  
          $('.map').hide();
          $('.floorMap').show();
          $('.roomMap').hide();
        }else{
          $('.build').hide();
          $('.floor').hide();
          $('.main_all_content .main_content_table').hide();
          $('.main_all_content .main_content_bottom').hide();
          $('.plan').hide();
          $('.total').hide();
          $('.floor_wrap').show();
          $('.room_wrap').hide();
          $('.floorMap').show();
          $('.roomMap').hide();
        }
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        // $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row){//修改建筑
        
        this.deviceIndex = row.id ;
        this.tableData.forEach((item,index)=>{
          if(item.id == this.deviceIndex){
            // console.log(item);
            this.form.point.pointX = item.pointX;
            this.form.point.pointY = item.pointY;
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
            // console.log(item.name);
            this.form.UnitName = item.name;
          }
        })
        this.$fetch("/api/building/updateBuilding",{
          'id':this.deviceIndex,
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
              this.tableList();
            }else{
              console.log('修改建筑失败...'+ JSON.stringify(response));
            }
          }
        })
      },
      delete_plan(row){//删除
        this.deviceIndex = row.id;
        this.deviceName = row.name;
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('floorAdd',2)
        this.$store.commit('buildingId',row.id);
        $('.plan').show();
        $('.total').hide();
        $('.floor_wrap').hide();
        $('.room_wrap').hide();
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
            this.tableList();
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
              // $(' .el-select-dropdown__item').mouseover(function(){
              //   $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
              // });
            }
          })
          .then(err => {
            // console.log(err);
          });
      },
      tableList(){
        this.$fetch(
          "/api/building/queryPageBuildingList",{
            currentPage:this.currentPage4,
            pageSize:11,
            unitId:this.buildUnit
          }
        )
          .then(response => {
            // console.log(response);
            if (response.data.pageBuildIng) {
              this.totalList = response.data.pageBuildIng.totalRow;
              this.tableData = response.data.pageBuildIng.result;
              console.log(this.tableData);
              this.$store.commit('tableData',this.tableData);
              if(this.$route.path == '/Building_management/all'){
                this.tableData.forEach((item,index)=>{
                  if(index == this.tableData.length-1){
                    console.log(item);
                    this.form.point.pointX = item.pointX;
                    this.form.point.pointY = item.pointY;
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
              }
              
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
    mounted() {
      this.tableList();
      this.unitSearch();
      if(this.$route.path == '/Building_management/maps'){
        $('.total').show();
        $('.plan').hide();
        $('.floor_wrap').hide();
        $('.room_wrap').hide();
        this.tableList();
      }
      if(this.$route.path == '/Building_management/all'){
        $('.plan').show();
        $('.total').hide();
        $('.floor_wrap').hide();
        $('.room_wrap').hide();
        this.findPageBuildIngFloor();
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
          }
          if(this.$route.path == '/Building_management/all'){
            $('.total').hide();
            $('.plan').show();
            $('.floor_wrap').hide();
            $('.room_wrap').hide();
          }
        },
        // 深度观察监听
        deep: true
      },
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        // console.log(this.currentPage4);
        this.tableList();
      },
      buildingId(){
        if(this.$route.path == '/Building_management/maps'){
          $('.total').hide();
          this.tableData.forEach((item,index)=>{
            if(item.id == this.buildingId){
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
          if(this.floorAdd == 1){
            $('.plan').hide();
            $('.total').hide();
            $('.floor_wrap').show();
            $('.map').hide();
            this.tableData.forEach((item,index)=>{
              if(item.id == this.buildingId){
                // console.log(item);
                this.form.BuildName = item.name ;
                this.form.unitId = item.unitId ;
                this.form.UnitName = item.unitName ;
              }
            })
            this.findPageBuildIngFloor();
          }
           
        }
        if(this.$route.path == '/Building_management/all'){
          if(this.floorAdd == 1){
            // console.log(this.buildingId)
            this.findPageBuildIngFloor();
            $('.plan').hide();
            $('.total').hide();
            $('.floor_wrap').show();
            this.tableData.forEach((item,index)=>{
              if(item.id == this.buildingId){
                // console.log(item);
                this.form.BuildName = item.name ;
                this.form.unitId = item.unitId ;
                this.form.UnitName = item.unitName ;
              }
            })
          }else if(this.floorAdd ==2){
            $('.plan').show();
            $('.total').hide();
            this.tableData.forEach((item,index)=>{
              if(item.id == this.buildingId){
                // console.log(item);
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
          }
        }
        // console.log(this.buildingId);
      },
      floorId(){
        this.findPageBuildIngFloor();
        if(this.$route.path == '/Building_management/all'){
          if(this.floorAdd == 3){
            $('.plan').hide();
            $('.total').hide();
            $('.floor_wrap').hide();
            $('.room-wrap').show();
          }
          // console.log(this.floorId);
          this.floorRoomListShow()
        }
      },
      buildUnit(){
        this.tableList();
      },
      currentPage(){
        this.currentPage4 = this.currentPage;
      }
    },
    computed:mapState([
      'buildUnit',
      'buildingId',
      'floorAdd',
      'floorId',
      'currentPage'
    ])
  }
</script>

<style lang="scss" scoped>
  
</style>
