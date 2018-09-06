<template>
  <section>
    <!-- 标题 -->
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-danweiguanli-mian-1"></i>
        <h2>单位管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Unit_management/list"><span class="btn_add" @click="btn_add"><i class="fa fa-plus"></i>新增</span></router-link>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main_all_content">
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
            prop="name"
            :show-overflow-tooltip="true"
            label="单位名称">
          </el-table-column>
          <!-- <el-table-column
            prop="staffNum"
            label="单位人数">
          </el-table-column> -->
          <el-table-column
            prop="property"
            label="单位性质">
          </el-table-column>
          <el-table-column
            prop="location"
            :show-overflow-tooltip="true"
            label="单位地址">
          </el-table-column>
          <!-- <el-table-column
            prop="telephone"
            label="部门电话">
          </el-table-column> -->
          <el-table-column
            prop="firemenName"
            label="消防负责人">
          </el-table-column>
          <el-table-column
            prop="firemenTel"
            label="消防负责人电话">
          </el-table-column>
          <!-- <el-table-column
            prop="corporation"
            label="法人代表">
          </el-table-column> -->
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <button v-if="roleId" @click="start_plan(scope.row,scope.$index)" data-toggle="modal" data-target="#mymodal"><i class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i></button>
              <button v-else><i class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i></button>
              <button @click="delete_plan(scope.row)" data-toggle="modal" data-target="#mymodal2"><i class="el-icon-delete" data-toggle="tooltip" title="删除"></i></button>
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
            <h4 class="modal-title" id="myModalLabel">修改单位</h4>
            <h5 class="modal-p font-blue">{{this.form.name}}</h5>
          </div>
          <div class="modal-body">
            <!--
              class类not-null为必填标识,如需请加在<el-form-item>
              class类hint-error为错误提示
             -->
             <div class="main_content">
                <el-form class="row" status-icon ref="form" :rules="rules" :label-position="labelPosition" :model="form">
                  <el-form-item label="单位名称"  prop="name" class="not-null">
                    <el-input v-model="form.name"  class="col-sm-4"></el-input>
                  </el-form-item>
                  <el-form-item label="单位性质" prop="property" class="not-null">
                    <el-select name="" v-model="form.property"  placeholder="请选择结构" class="col-sm-4">
                      <el-option label="事业单位" value="事业单位"></el-option>
                      <el-option label="国家行政机关" value="国家行政机关"></el-option>
                      <el-option label="政府" value="政府"></el-option>
                      <el-option label="国有企业" value="国有企业"></el-option>
                      <el-option label="国有控股企业" value="国有控股企业"></el-option>
                      <el-option label="外资企业" value="外资企业"></el-option>
                      <el-option label="合资企业" value="合资企业"></el-option>
                      <el-option label="私营企业" value="私营企业"></el-option>
                    </el-select>
                  </el-form-item>
                  <!-- <el-form-item label="法人代表" class="not-null col-sm-4">
                    <el-input v-model="form.corporation"></el-input>
                  </el-form-item>
                  <el-form-item label="部门电话" class="not-null col-sm-4">
                    <el-input v-model="form.telephone"></el-input>
                  </el-form-item>
                  <el-form-item label="单位人数" class="col-sm-4">
                    <el-input v-model="form.staffNum"></el-input>
                  </el-form-item> -->
                  <el-form-item label="单位地址"  prop="location" class="not-null">
                    <el-input v-model="form.location"  class="col-sm-8"></el-input>
                  </el-form-item>  
                  <el-form-item label="经纬度" class="not-null">
                    <el-input v-model="form.point.pointX == 0 ? '-' : form.point.pointX"  class="col-sm-4"></el-input>
                    <el-input v-model="form.point.pointY == 0 ? '-' : form.point.pointY"  class="col-sm-4"></el-input>
                  </el-form-item>                          
                  <el-form-item label="消防负责人" prop="firemenName" class="not-null col-sm-4">
                    <el-input v-model="form.firemenName"></el-input>
                  </el-form-item>
                  <el-form-item label="消防负责人电话" prop="firemenTel" class="not-null col-sm-4">
                    <el-input maxlength="11" v-model="form.firemenTel"></el-input>
                  </el-form-item>
                  <el-form-item label="单位图片" class="not-null col-sm-12">
                    <div class="head-photo">
                      <input id="file" name="file" type="file" @change="file()" />
                      <div class="bg-gray-222 text-center">
                        <i class="el-icon-plus"></i>
                      </div>
                    </div>
                    <img v-show="isShow" :src="'/img/xf/api/unit_img/'+ this.form.id +'.jpg?'+new Date().getTime()" :id="'up_img'+ this.form.id" class="head-pic"/>
                    <span class="hint-error" v-show="fileVerification">{{ fileVerification }}</span>
                  </el-form-item> 
                </el-form>
              </div>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow('form')" icon="el-icon-circle-check-outline" class="primary">提交</el-button>
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
              <div class="modal-body text-center container-padding40">
                <h3 class="font-red size-14">是否删除</h3>
                <p class="font-white size-16">{{ buildingName }}</p>
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
  import { isvalidPhone,isName,isvalidName } from '../../assets/js/validate';
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
            callback(new Error('请输入单位名称'))
          }else  if (!isvalidName(value)){
            callback(new Error('请输入正确的单位名称'))
          }else {
            callback()
          }
      }
      return {
        labelPosition: 'top',
        roleId:true,
        form: {
          id:'',
          name:'',
          property:'',
          // staffNum:'',
          location:'',
          // telephone:'',
          firemenName:'',
          firemenTel:'',          
          // corporation:'',
          point:{
            pointX:'',
            pointY:''
          }
        },
        tableData: [],//单位列表
        page:null,//总页数
        currentPage4: 1,//当前页
        totalList:null,//总条数
        deviceIndex:'',
        buildingName:'',
        isShow:true,
        fileVerification:'',//验证图片
        rules: {
          name:[
            { required: true, trigger: 'blur', validator: validName }
          ],
          property:[
            { required: true, message: '请选择单位性质', trigger: 'change' }
          ],
          firemenName:[
            { required: true, trigger: 'blur', validator: Name }
          ],
          location: [
            { required: true, message: '请填写单位地址', trigger: 'blur' }//这里需要用到全局变量
          ],
          firemenTel:[
            { required: true, trigger: 'blur', validator: validPhone }
          ]
        },
        isDelete:false
      }
    },
    methods: {
      
      file(){
        var x = document.getElementById("file");
        if (!x || !x.value) return;
        var patn = /\.jpg$|\.jpeg$|\.png$/i;
        if (!patn.test(x.value)) {
          this.fileVerification="您选择的似乎不是图像文件!!";
          x.value = "";
          this.isShow = false ;
          
          return;
        }
        this.isShow = true ;
        this.fileVerification="";
        $("#up_img"+this.form.id+"").attr("src",'');
        //console.log(this.form.id)
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
              //支持html5的浏览器,比如高版本的firefox、chrome、ie14
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
      start_plan(row,indexs){        
        //修改单位
        this.deviceIndex = row.id ;
        
        this.tableData.forEach((item,index)=>{
          if(item.id == this.deviceIndex){
            //console.log(item.id);
            this.form.id = item.id ;
            this.form.name = item.name ;
            this.form.property = item.property ;
            // this.form.staffNum = item.staffNum ;
            this.form.location = item.location ;
            // this.form.telephone = item.telephone ;
            this.form.firemenName = item.firemenName ;
            this.form.firemenTel = item.firemenTel ;
            // this.form.corporation = item.corporation ;
            this.form.point.pointX = item.pointX ;
            this.form.point.pointY = item.pointY ;
          }
        })
        // $("#up_img"+ this.form.id +"").attr("src","http://img.nanninglq.51play.com/xf/api/unit_img/"+ this.form.id +".jpg");
        //console.log(this.form.id)
      },
      startRow(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let file = "file";
            var that = this;
            $.ajaxFileUpload({
                url: '/api/unit/updateUnit', //用于文件上传的服务器端请求地址
                /* secureuri : false, */ //一般设置为false
                fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
                data : {
                  'id':this.deviceIndex,
                  'name':this.form.name,
                  'property':this.form.property,
                  // 'staffNum':this.form.staffNum,
                  'location':this.form.location,
                  // 'telephone':this.form.telephone,
                  'firemenName':this.form.firemenName,
                  'firemenTel':this.form.firemenTel,
                  // 'corporation':this.form.corporation,
                  'pointX':this.form.point.pointX,
                  'pointY':this.form.point.pointY
                },
                type: 'POST',
                dataType: "plain",
                success: function (data, status) { //服务器成功响应处理函数 //服务器成功响应处理函数
                  console.log(data)
                },
                error: function (e) { //服务器响应失败处理函数
                  // console.log(e)
                },
                complete: function (e) {//只要完成即执行，最后执行
                  // console.log($.parseJSON(e.responseXML.documentElement.innerText)) ;
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
                  $('.primary').attr('data-dismiss','modal');
                  // 修改成功提示
                  that.$message({
                    dangerouslyUseHTMLString: true,
                    message: '<strong>'+ that.form.name +'单位信息修改成功</strong>',
                    center: true,
                    showClose: true,
                    iconClass:'el-icon-circle-check',
                    customClass:'edit-ok-notification'
                  });
                  that.tableList();
                  $("#file").replaceWith('<input id="file" name="file" type="file" style="width:80px;height:80px;opacity: 0;filter: alpha(opacity=0);position: absolute;right:0;top:0;"/>');  
                    $("#file").on("change", function(){  
                      //console.log($("#up_img"+that.form.id+""))
                      $("#up_img"+ that.form.id +"").attr("src", that.getObjectURL(document.getElementById('file')));     
                      //console.log(that.form.id) 
                  });
                }
            });
            
          } else {
            //console.log('error submit!!');
            return false;
          }
        });
      },
      delete_plan(row){//删除
        this.buildingName = row.name;
        this.deviceIndex = row.id;
      },
      show3(row){//跳转
        //console.log(row.id);
        this.$store.commit('currentPage',this.currentPage4);
        this.$store.commit('unitNum',row.id);
      },
      deleteRow(){
          //console.log(this.deviceIndex);
        this.$fetch("/api/unit/deleteUnit",{
          'unitId':this.deviceIndex
        }).then(response=>{
          if(response){
            //console.log('删除成功...'+ JSON.stringify(response));
            this.tableData.splice(this.deviceIndex,1);
            this.tableList();
          }
        }).then(err => {
          //console.log(err);
        });
      },
      tableList(){
        this.$fetch(
          "/api/unit/queryPagerUnitList",{
            currentPager:this.currentPage4,
            pagerSize:14
          }
        )
          .then(response => {
            //console.log(response);
            if (response.data.pager) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              this.tableData.forEach((item,index)=>{
                if(index == this.tableData.length-1){
                  this.$store.commit('unitNum',item.id);
                  //console.log(item.id)
                }
                if(item.id == this.deviceIndex){
                  this.$store.commit('unitList',item);
                  //console.log(item)
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
      this.tableList();
      $('#right').show();
      var roleId = JSON.parse(sessionStorage.getItem("roleId")) ;
      if(roleId == 1 || roleId == 2){
        return ;
      }
      this.roleId = false;
    },
    watch:{
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
