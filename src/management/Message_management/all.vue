<template>
  <section>
    <!-- 标题 -->
    <div class="main_header clearFix">
      <div class="main_title float-left clearFix">
        <i class="icon iconfont icon-xiaoxi-mian--"></i>
        <h2>消息管理</h2>
      </div>
      <div class="main_nav float-right">
        <router-link to="/Message_management/list"><span class="btn_add" @click="btn_add"><i class="icon iconfont icon-fabu"></i>发布</span></router-link>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main_all_content">
      <!-- 筛选 -->
      <div class="main_content_top">
        <el-form ref="form" :model="form" class="float-left">
          <el-select v-model="unit" placeholder="选择单位" class="select">
            <el-option label="全部单位" value=""></el-option>
            <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
          </el-select>
          <el-select
              v-model="building"
            placeholder="消息类型"  class="start">
              <el-option label="公告" value="0"></el-option>
              <el-option label="活动" value="0"></el-option>
              <el-option
                v-for="item in buildList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select
              v-model="building"
            placeholder="消息状态"  class="start">
              <el-option label="进行中" value="0"></el-option>
              <el-option label="已过期" value="0"></el-option>
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
            prop="name"
            :show-overflow-tooltip="true"
            label="主题">
          </el-table-column>          
          <el-table-column
            prop="property"
            label="过期时间">
          </el-table-column>
          <el-table-column
            prop="firemenName"
            label="类型">
          </el-table-column>
          <el-table-column
            prop="telephone"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="telephone"
            label="状态">
          </el-table-column>  
          <el-table-column
            prop="staffNum"
            label="发布人">
          </el-table-column>
          <el-table-column
            prop="property"
            label="发布时间">
          </el-table-column>        
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <button @click="start_plan(scope.row,scope.$index)" data-toggle="modal" data-target="#mymodal"><i class="el-icon-edit-outline" data-toggle="tooltip" title="编辑"></i></button>
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
            <a href="javascrip:;">导出二维码</a>
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
            <h4 class="modal-title" id="myModalLabel">修改</h4>
            <h5 class="modal-p font-blue">{{this.form.name}}</h5>
          </div>
          <div class="modal-body">
            <!--
              class类not-null为必填标识,如需请加在<el-form-item>
              class类hint-error为错误提示
             -->
             <div class="main_content">
                <el-form class="row" ref="form" :label-position="labelPosition" :model="form">
                  <el-form-item label="单位名称" class="not-null">
                    <el-input v-model="form.name" class="col-sm-4"></el-input>
                  </el-form-item>
                  <el-form-item label="单位性质" class="not-null">
                    <el-select name="" v-model="form.property" placeholder="请选择结构" class="col-sm-4">
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
                  <el-form-item label="法人代表" class="not-null col-sm-4">
                    <el-input v-model="form.corporation"></el-input>
                  </el-form-item>
                  <el-form-item label="部门电话" class="not-null col-sm-4">
                    <el-input v-model="form.telephone"></el-input>
                  </el-form-item>
                  <el-form-item label="单位人数" class="col-sm-4">
                    <el-input v-model="form.staffNum"></el-input>
                  </el-form-item>
                  <el-form-item label="单位地址" class="not-null">
                    <el-input v-model="form.location" class="col-sm-4"></el-input>
                  </el-form-item>                           
                  <el-form-item label="消防负责人" class="not-null col-sm-4">
                    <el-input v-model="form.firemenName"></el-input>
                  </el-form-item>
                  <el-form-item label="消防负责人电话" class="not-null col-sm-4">
                    <el-input v-model="form.firemenTel"></el-input>
                  </el-form-item>
                  <el-form-item label="单位图片" class="not-null col-sm-12">
                    <div class="head-photo">
                      <input id="file" name="file" type="file" @change="file()" />
                      <div class="bg-gray-222 text-center">
                        <i class="el-icon-plus"></i>
                      </div>
                    </div>
                    <img v-show="isShow" :src="'http://img.nanninglq.51play.com/xf/api/unit_img/'+ this.form.id +'.jpg'" :id="'up_img'+ this.form.id" class="head-pic"/>
                    <span class="hint-error" v-show="fileVerification">{{ fileVerification }}</span>
                  </el-form-item> 
                </el-form>
              </div>
          </div>
          <div class="modal-footer">
            <el-button type="primary" @click.native.prevent="startRow()" icon="el-icon-circle-check-outline" class="primary" data-dismiss="modal">提交</el-button>
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
          id:'',
          name:'',
          property:'',
          staffNum:'',
          location:'',
          telephone:'',
          firemenName:'',
          firemenTel:'',          
          corporation:'',
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
        deviceName:'',
        deviceIndexs:'',
        isShow:true,
        fileVerification:''//验证图片
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
        $('#mymodal').css({
          "display":"flex","justify-content":"center" ,"align-items": "center"
        })
        this.deviceIndex = row.id ;
        
        this.tableData.forEach((item,index)=>{
          if(item.id == this.deviceIndex){
            console.log(item.id);
            this.form.id = item.id ;
            this.form.name = item.name ;
            this.form.property = item.property ;
            this.form.staffNum = item.staffNum ;
            this.form.location = item.location ;
            this.form.telephone = item.telephone ;
            this.form.firemenName = item.firemenName ;
            this.form.firemenTel = item.firemenTel ;
            this.form.corporation = item.corporation ;
            this.form.point.pointX = item.pointX ;
            this.form.point.pointY = item.pointY ;
          }
        })
        // $("#up_img"+ this.form.id +"").attr("src","http://img.nanninglq.51play.com/xf/api/unit_img/"+ this.form.id +".jpg");
        console.log(this.form.id)
      },
      startRow(){
        var file = "file";
        var that = this;
        $.ajaxFileUpload({
            url: '/api/unit/updateUnit', //用于文件上传的服务器端请求地址
            /* secureuri : false, */ //一般设置为false
            fileElementId: file,  //文件上传控件的id属性  <input type="file" id="file" name="file" /> 注意，这里一定要有name值
            data : {
              'id':this.deviceIndex,
              'name':this.form.name,
              'property':this.form.property,
              'staffNum':this.form.staffNum,
              'location':this.form.location,
              'telephone':this.form.telephone,
              'firemenName':this.form.firemenName,
              'firemenTel':this.form.firemenTel,
              'corporation':this.form.corporation,
              'pointX':this.form.point.pointX,
              'pointY':this.form.point.pointY
            },
            type: 'POST',
            dataType: "plain",
            success: function (data, status) { //服务器成功响应处理函数 //服务器成功响应处理函数
            
        
            },
            error: function (e) { //服务器响应失败处理函数
              $.messager.alert('警告', "系统错误", "warning");
            },
            complete: function (e) {//只要完成即执行，最后执行
              // console.log(e) 
              that.tableList();
              $("#file").replaceWith('<input id="file" name="file" type="file" style="width:80px;height:80px;opacity: 0;filter: alpha(opacity=0);position: absolute;right:0;top:0;"/>');  
                $("#file").on("change", function(){  
                  console.log($("#up_img"+that.form.id+""))
                  $("#up_img"+ that.form.id +"").attr("src", that.getObjectURL(document.getElementById('file')));     
                  console.log(that.form.id) 
              });
            }
        });
      },
      show3(row){//跳转
        console.log(row.id);
        this.$store.commit('unitNum',row.id);
      },
      tableList(){
        this.$fetch(
          "/api/unit/queryPagerUnitList",{
            currentPager:this.currentPage4,
            pagerSize:10
          }
        )
          .then(response => {
            console.log(response);
            if (response.data.pager) {
              this.totalList = response.data.pager.totalRow;
              this.tableData = response.data.pager.result;
              this.tableData.forEach((item,index)=>{
                if(index == this.tableData.length-1){
                  this.$store.commit('unitNum',item.id);
                  console.log(item.id)
                }
                if(item.id == this.deviceIndex){
                  this.$store.commit('peopleTableData',item);
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
      }
    },
    mounted(){
      realconsole();
      this.tableList();
      $('#right').show();
    },
    watch:{
      currentPage4(val, oldVal){
        this.currentPage4 = val;
        console.log(this.currentPage4);
        this.tableList();
      },
      deviceIndexs(val,oldVal){
        this.deviceIndexs = val;
      }
    }
  };
</script>
<style lang="scss" scoped>  
</style>
