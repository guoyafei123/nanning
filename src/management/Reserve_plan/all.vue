<template>
  <section>
    <!-- 标题 -->
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-yuanliebiao"></i>
        <h2>预案管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Reserve_plan/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>新增</span></router-link>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main_all_content">
      <!-- 筛选 -->
      <div class="main_content_top">
        <el-form ref="form" :model="form" class="float-left">
          <el-select v-model="unit" placeholder="全部单位" class="select">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select
              v-model="building"
            placeholder="选择建筑"  class="start">
              <el-option
                v-for="item in buildList"
                :label="item.name"
                :value="item.id">
              </el-option>
          </el-select>
        </el-form>
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
            fixed="left"
            type="index"
            sortable
            label="序号">
          </el-table-column>
          <el-table-column
            prop="unitName"
            :show-overflow-tooltip="true"
            label="单位名称">
          </el-table-column>
          <el-table-column
            prop="buildingName"
            :show-overflow-tooltip="true"
            label="建筑名称">
          </el-table-column>
          <el-table-column
            prop="name"
            label="预案名称">
          </el-table-column>
          <el-table-column
            prop="pattern"
            label="格式">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="上传时间">
          </el-table-column>
          <el-table-column
            prop="nickName"
            label="上传人">
          </el-table-column>          
          <el-table-column
            fixed="right"
            width="150px"
            label="操作">
            <template slot-scope="scope">
              <button @click="start_plan(scope.row,scope.$index)" data-toggle="modal" data-target="#mymodal"><i class="el-icon-edit-outline" data-toggle="tooltip" title="修改"></i></button>
              <button @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button>
              <button><i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="打印"></i></button>
              <button><i class="fas fa-chevron-circle-right" data-toggle="tooltip" title="下载"></i></button>
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
    </div>
    <!-- 编辑Modal -->
    <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">修改预案</h4>
            <h5 class="modal-p font-blue">{{this.form.name}}</h5>
          </div>
          <div class="modal-body">
            <!--
              class类not-null为必填标识,如需请加在<el-form-item>
              class类hint-error为错误提示
             -->
             <div class="main_content">
                <el-form class="row" ref="form" :label-position="labelPosition" :model="form">
                  <el-form-item label="预案文件" class="not-null col-sm-12">
                    <div class="head-photo">
                      <input id="file" name="file" type="file" @change="file()" />
                      <div class="bg-gray-222 text-center">
                        <i class="el-icon-plus"></i>
                      </div>
                    </div>
                    <img v-show="isShow" :src="this.form.url" class="head-pic"/>
                    <span class="hint-error" v-show="fileVerification">{{ fileVerification }}</span>
                  </el-form-item> 
                </el-form>
              </div>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-circle-check-outline" class="primary">提交</el-button>
            <el-button class="back" data-dismiss="modal">取消</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 删除 -->
    <div class="modal fade" id="mymodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel2">提示</h4>
            <h5 class="modal-p">删除操作并不影响之前的统计数据</h5>
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
        labelPosition: 'top',
        form: {
          url:'',
          unitId:'',
          buildingId:''
        },
        unit:'',
        building:'',
        buildList:[],
        optionList:[],
        tableData: [],//单位列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:'',
        isShow:true,
        fileVerification:''//验证图片
      }
    },
    methods: {
      file(){
        var x = document.getElementById("file");
        if (!x || !x.value) return;
        var patn = /\.jpg$|\.jpeg$|\.png$|\.pdf$|\.csv$|\.xls$|\.xlsx$|\.doc$|.txt/i;
        if (!patn.test(x.value)) {
          this.fileVerification="文件类型不正确!!";
          x.value = "";
          this.isShow = false ;
          return;
        }
        this.isShow = true ;
        this.fileVerification="";
        $("#up_img"+this.form.id+"").attr("src",'');
        console.log(this.form.id)
        $("#up_img"+this.form.id+"").attr("src", this.getObjectURL(document.getElementById('file')));
      },
      getObjectURL(node) {
          var imgURL = "";
          try {
              var file = null;
              if (node.files && node.files[0]) {
                  file = node.files[0];
              } else if (node.files && node.files.item(0)) {
                  file = node.files.item(0);
              }
              //Firefox 因安全性问题已无法直接通过input[file].value 获取完整的文件路径
              try {
                  //Firefox7.0
                  imgURL = file.getAsDataURL();
                  //alert("//Firefox7.0"+imgRUL);
              } catch (e) {
                  //Firefox8.0以上
                  imgURL = window.URL.createObjectURL(file);
                  //alert("//Firefox8.0以上"+imgRUL);
              }
          } catch (e) {      //这里不知道怎么处理了，如果是遨游的话会报这个异常
              //支持html5的浏览器,比如高版本的firefox、chrome、ie10
              if (node.files && node.files[0]) {
                  var reader = new FileReader();
                  reader.onload = function (e) {
                      imgURL = e.target.result;
                  };
                  reader.readAsDataURL(node.files[0]);
              }
          }
          return imgURL;
      },
      btn_add(){
        $('#right').hide();
      },
      handleCurrentChange(val) {
        this.currentPage4 = val;
        $('.el-pager li.active').css({'color':'#fff','background-color':'#333333'}).siblings().css({'color':'#666','background-color':'transparent'})
      },
      start_plan(row,indexs){//修改单位
        this.deviceIndex = row.id ;
        this.tableData.forEach((item,index)=>{
          if(this.deviceIndex == item.id){
            this.form.url = item.url ;
            console.log(this.form.url)
          }
        })
      },
      startRow(){
        var file = "file";
        var that = this;
        $.ajaxFileUpload({
            url: '/api/plan/updatePlan', //用于文件上传的服务器端请求地址
            fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
            data : {
              'planId':this.deviceIndex
            },
            type: 'POST',
            dataType: "plain",
            success: function (data) { //服务器成功响应处理函数 //服务器成功响应处理函数
            
            console.log(data)
            },
            error: function (e) { //服务器响应失败处理函数
              $.messager.alert('警告', "系统错误", "warning");
            },
            complete: function (e) {//只要完成即执行，最后执行
              console.log(e) 
              that.tableList();
              $('.primary').attr('data-dismiss','modal');
              $("#file").replaceWith('<input id="file" name="file" type="file" style="width:80px;height:80px;opacity: 0;filter: alpha(opacity=0);position: absolute;right:0;top:0;"/>');  
                $("#file").on("change", function(){  
                  console.log($("#up_img"+that.form.id+""))
                  $("#up_img"+ that.form.id +"").attr("src", that.getObjectURL(document.getElementById('file')));     
                  console.log(that.form.id) 
              });
            }
        });
      },
      delete_plan(row){
        $('#mymodal2').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceIndex = row.id;
        this.deviceName = row.nickName;
      },
      deleteRow(){
        this.$fetch("/api/plan/deletePlan",{
          planId:this.deviceIndex
        }).then(response=>{
          console.log(response);
          this.tableList();
        })
      },
      show3(row){//跳转
        console.log(row);
        this.$store.commit('unitPlan',row);
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
      tableList(){
        this.$fetch(
          "/api/plan/planList",{
            currentPage:this.currentPage4,
            pageSize:10,
            unitId:this.unit,
            buildingId:this.building,
            types:[1,2,3]
          }
        )
          .then(response => {
            console.log(response);
            if (response.data.pager) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              this.tableData.forEach((item,index)=>{
                if(index == this.tableData.length-1){
                  this.$store.commit('unitPlan',item);
                  console.log(item)
                }
                if(item.id == this.deviceIndex){
                  this.$store.commit('unitPlan',item);
                  // console.log(item)
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
      },
      buildSearch(unitId){
        this.$fetch("/api/building/selectNode",{
          unitId:unitId
        }).then(response=>{
          console.log('buildSearch:'+JSON.stringify(response));
          if (response) {
            this.buildList = response.data.list;
            console.log(this.buildList);
          }
        })
      }
    },
    mounted(){
      realconsole();
      this.tableList();
      this.unitSearch();
      $('#right').show();
    },
    watch:{
      unit(curVal,oldVal){
        this.unit = curVal;
        this.tableList();
        this.buildSearch(this.unit);
      },
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        console.log(this.currentPage4);
        this.tableList();
      }
    }
  };
</script>
<style lang="scss" scoped>  
</style>
