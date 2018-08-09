<template>
  <div style="height:100%;">
    <aside>
      <div class="main_header clearFix">
        <div class="main_title float-left clearFix">
          <i class="fa fa-th-large font-gray-666 float-left"></i>
          <h2 class="float-left font-white size-16">建筑管理</h2>
        </div>
        <div class="main_nav float-right">
          <!-- <router-link to="/Building_management/maps"><button><i class="fa fa-th-large font-gray-666 float-left"></i>地图</button></router-link> -->
          <!-- <router-link to="/Building_management/all"><button><i class="fa fa-th-large font-gray-666 float-left"></i>完整</button></router-link> -->
          <router-link to="/Building_management/list"><button class="btn_add"><i class="fa fa-th-large font-gray-666 float-left"></i>新增</button></router-link>
        </div>
      </div>
      <div class="main_content">
        <el-form ref="form" :label-position="labelPosition" :model="form">
          <el-form-item label="建筑名称">
            <!-- <span class="font-red" style="position: absolute;top:-45px;right:20px;">建筑名称有误或重复</span> -->
            <el-input v-model="form.BuildName"></el-input>
          </el-form-item>
          <el-form-item label="所属单位">
            <el-select v-model="form.unitId" placeholder="选择单位" class="select" style="width:200px;">
              <el-option label="全部单位" value=""></el-option>
              <el-option v-for="item in optionList" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="建筑地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="经纬度">
            <el-input v-model="form.point.pointX"></el-input>
            <el-input v-model="form.point.pointY"></el-input>
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
          <div style="width:485px;margin:0 auto 25px;border-top:1px solid #222222;"></div>
          <el-form-item style="margin-bottom: 20px;">
            <el-button type="primary"  icon="el-icon-search" class="primary" @click="btn">保存并提交</el-button>
            <el-button class="back" @click="back">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </aside>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          value5:'2018',
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
          unit:null,//选择单位
          optionList:[],//全部单位列表
        }
      },
      methods:{
        btn(){
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
            'pointX':this.form.point.pointX,
            'pointY':this.form.point.pointY,
            headers: {'Content-Type': 'application/json'}
          },
        
          ).then(response=>{
            if(response){
              console.log('新增建筑成功...'+ JSON.stringify(response));
            }
          })
          this.$router.push({path:'/Building_management/all'});
        },
        back(){
          this.$router.push({path:'/Building_management/all'});
          $('#right').show();
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
        }
      },
      mounted(){
        $('.el-scrollbar').css({
            'background':'#000'
        });
        $('.el-select-dropdown').css('border-color','#333');
        $('.el-select-dropdown__item').css('color','#999');
        $(' .el-select-dropdown__item').mouseover(function(){
          $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
        });

        this.unitSearch();
      }
    }
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

  @media (min-width: 768px) and (max-width:1600px){
    aside{
      width:525px;
      max-height:740px;
      background:#111111;
      overflow: hidden;
    }
    .main_content{
      width:500px;
      height:672px;
      margin:0 auto;
      overflow-y: scroll;
      border-top:1px solid #222222;

    }
  }
  @media (min-width: 1600px){
    aside{
      width:525px;
      max-height:740px;
      background:#111111;
      overflow: hidden;
    }
    .main_content{
      width:500px;
      height:672px;
      margin:0 auto;
      overflow-y: scroll;
      border-top:1px solid #222222;

    }
  }
  .main_header{
    width:100%;
    height:68px;
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
  .main_header button{
    width:64px;
    height:28px;
    float: left;
    outline:none;
    display: flex;
    align-items: center;
    justify-content: center;
    border:2px solid #333333;
    background: #111111;
    font-size: 12px;
    color: #999;
    margin-top: 21px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .main_header a:nth-child(1) button{
    border-right:none;
  }
  .main_header a:nth-child(3) button{
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
  }

</style>
