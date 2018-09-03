<template>
  <section>
    <!-- 标题 -->
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-renyuanliebiao-mian-"></i>
        <h2>人员列表</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/List_of_people/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>新增</span></router-link>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main_all_content">
      <!-- 筛选 -->
      <div class="main_content_top">
        <el-form class="float-left">
          <el-select v-model="unitId" placeholder="选择单位">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select v-model="roleId" placeholder="选择角色">
            <el-option label="全部角色" value=""></el-option>
            <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
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
            type="index"
            fixed="left"
            sortable  
            label="序号">
          </el-table-column>
          <el-table-column
            prop="nickName"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="username"
            label="账号">
          </el-table-column>
          <el-table-column
            prop="unitName"
            label="所属单位">
          </el-table-column>
          <!-- <el-table-column
            prop="position"
            label="职位">
          </el-table-column> -->
          <el-table-column
            prop="cellPhone"
            label="电话">
          </el-table-column>
          <el-table-column
            prop="roleName"
            label="角色">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <button @click="start_plan(scope.row,scope.$index)" data-toggle="modal" data-target="#mymodal"><i class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i></button>
              <!-- <button @click="delete_people(scope.row)" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button> -->
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
            <a href="javascrip:;">导出二维码</a>
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
    </div>
    <!-- 编辑Modal -->
    <div class="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">修改人员信息</h4>
            <h5 class="modal-p font-blue">{{this.form.nickName}}</h5>
          </div>
          <div class="modal-body">
            <div class="main_content">
            <!--
              class类not-null为必填标识,如需请加在<el-form-item>
              class类hint-error为错误提示
             -->             
              <el-form class="row" status-icon :rules="rules" ref="form" :label-position="labelPosition" :model="form">
                <el-form-item label="姓名" prop="nickName" class="not-null">
                  <el-input v-model="form.nickName" class="col-sm-4"></el-input>
                </el-form-item>
                <el-form-item label="账号/手机号" prop="cellPhone" class="not-null col-sm-4">
                  <el-input v-model="form.cellPhone" class=""></el-input>
                </el-form-item>
                <div class="col-sm-12">
                  <div class="row">
                      <el-form-item label="所属单位" prop="unitId" class="not-null col-sm-4">
                        <el-select v-model="form.unitId" placeholder="选择单位" class="select">
                          <!-- <el-option label="全部单位" value=""></el-option> -->
                          <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="角色" prop="roleId" class="not-null col-sm-4">
                        <el-select v-model="form.roleId" placeholder="选择角色" class="select">
                          <el-option v-for="item in roleList" :label="item.rname" :value="item.id"></el-option>
                        </el-select>
                      </el-form-item>
                  </div>
                </div>
                <!-- <el-form-item label="职位" class="col-sm-4">
                    <el-input v-model="form.position"></el-input>
                </el-form-item> -->
                <el-form-item label="头像" class="not-null col-sm-12">
                  <div class="head-photo">
                    <input id="file" name="file" type="file" @change="file"/>
                    <div>
                      <i class="el-icon-plus"></i>
                    </div>
                  </div>
                  <img :src="'/img'+this.form.headImgUrl" :id="'up_img'+this.form.id"  class="head-pic"/>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow('form')" icon="el-icon-search" class="primary" >提交</el-button>
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
  import { realconsole } from '../../assets/js/management.js';
  import { isvalidPhone,isName } from '../../assets/js/validate';
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
      return {
        labelPosition: 'top',
        unitId:'',
        roleId:'',
        form: {
          id:'',
          nickName:'',
          username:'',
          position:'',
          unitId:'',
          cellPhone:'',
          roleId:'',
          headImgUrl:''
        },
        optionList:[],//单位列表
        roleList:[],//角色列表
        tableData: [],//人员信息列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        deviceName:'',
        rules: {
          cellPhone: [
            { required: true, trigger: 'blur', validator: validPhone }//这里需要用到全局变量
          ],
          nickName:[
            { required: true, trigger: 'blur',  message: '请填写姓名' }
          ],
          unitId:[
            { required: true, message: '请选择单位', trigger: 'change' }
          ],
          roleId:[
            { required: true, message: '请选择角色', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      file(){
        // //console.log($("#file")[0].files[0].name)
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
      start_plan(row){//修改人员信息
        this.deviceIndex = row.id ;
        this.tableData.forEach((item,index)=>{
          if(item.id == this.deviceIndex){
            this.form.nickName = item.nickName ;
            this.form.username = item.username ;
            this.form.position = item.position ;
            this.form.unitId = item.unitId ;
            this.form.cellPhone = item.cellPhone ;
            this.form.roleId = item.roleId ;
            this.form.id = item.id ;
            this.form.headImgUrl = item.headImgUrl ;
          }
        })
      },
      startRow(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var file = "file";
            var that = this;
            $.ajaxFileUpload({
                url: '/api/user/addOrUpdateUser', //用于文件上传的服务器端请求地址
                /* secureuri : false, */ //一般设置为false
                fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
                data : {
                  'id':this.deviceIndex,
                  'nickName':this.form.nickName,
                  'username':this.form.cellPhone,
                  'position':this.form.position,
                  'unitId':this.form.unitId,
                  'cellPhone':this.form.cellPhone,
                  'roleId':this.form.roleId
                },
                type: 'POST',
                dataType: "plain",
                success: function (data, status) { //服务器成功响应处理函数 //服务器成功响应处理函数
                
            
                },
                error: function (e) { //服务器响应失败处理函数
                  $.messager.alert('警告', "系统错误", "warning");
                },
                complete: function (e) {//只要完成即执行，最后执行
                  // //console.log(e) 
                  if($.parseJSON(e.responseXML.documentElement.innerText).status == 0){
                    that.$message.error({
                      dangerouslyUseHTMLString: true,
                      message: `<strong>${ $.parseJSON(e.responseXML.documentElement.innerText).message }</strong>`,
                      center: true,
                      showClose: true,
                      iconClass:'el-icon-circle-check',
                      customClass:'del-notification'
                    })
                    return ;
                  }
                  // 修改成功提示
                  that.$message({
                    dangerouslyUseHTMLString: true,
                    message: '<strong>'+ this.form.nickName +'人员信息修改成功</strong>',
                    center: true,
                    showClose: true,
                    iconClass:'el-icon-circle-check',
                    customClass:'edit-ok-notification'
                  });
                  $('.primary').attr('data-dismiss','modal');
                  that.tableList();                  
                  $("#file").replaceWith('<input id="file" name="file" type="file" style="width:80px;height:80px;opacity: 0;filter: alpha(opacity=0);position: absolute;right:0;top:0;"/>');  
                    $("#file").on("change", function(){  
                      //console.log($("#up_img"+that.form.id+""))
                      $("#up_img"+that.form.id+"").attr("src", that.getObjectURL(document.getElementById('file')));      
                  });  
                }
            });

          } else {
            //console.log('error submit!!');
            return false;
          }
        });
        
      },
      delete_people(row){
        this.deviceIndex = row.id;
        this.deviceName = row.nickName;
      },
      deleteRow(){
        this.$fetch("/api/user/deleteUser",{
          userId:this.deviceIndex
        }).then(response=>{
          //console.log(response);
          this.tableList();
        })
      },
      show3(row){//跳转
        //console.log(row.id);
        this.deviceIndex = row.id;
        this.$store.commit('currentPage',this.currentPage4);
        this.$store.commit('unitNumber',row.id);
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
          // //console.log(err);
        });
      },
      roleSearch(){
        this.$fetch(
          "/api/user/queryRoleListByUser"
        )
        .then(response => {
          if (response) {
            //console.log(response);
            this.roleList = response.data.roleList;
            //console.log(this.roleList);
            $(' .el-select-dropdown__item').mouseover(function(){
              $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
            });
          }
        })
        .then(err => {
          // //console.log(err);
        });
      },
      tableList(){
        this.$fetch(
          "/api/user/queryPagerUserList",{
            currentPager:this.currentPage4,
            pagerSize:14,
            unitId:this.unitId,
            roleId:this.roleId
          }
        )
          .then(response => {
            //console.log(response);
            if (response.data.pager) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              this.tableData.forEach((item,index)=>{
                if(index == this.tableData.length-1){
                  this.$store.commit('unitNumber',item.id);
                  //console.log(item.id)
                }
                if(item.id == this.deviceIndex){
                  this.$store.commit('peopleTableData',item);
                  // //console.log(item)
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
            // //console.log(err);
          });
      }
    },
    mounted(){
      realconsole();
      this.unitSearch();
      this.roleSearch();
      this.tableList();
      $('#right').show();
    },
    watch:{
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        //console.log(this.currentPage4);
        this.tableList();
      },
      unitId(val,oldVal){
        this.unitId = val ;
        //console.log(this.unitId);
        this.tableList();
      },
      roleId(val,oldVal){
        this.roleId = val ;
        //console.log( this.roleId );
        this.tableList();
      }
    }
  };
</script>
<style lang="scss" scoped>
</style>
