
<script>
export default {
  props: {
      ins_planInspectionCount: {
        type:Object,
        required:true
      }
  },
  data() {
    return {
      // 饼状图参数-请求
      queryPlanUserList_parameter: {
        id:null,
        unitId: 4,
        type:null,
        inspectionName:null,
        status:null,
        currentPage: '1',
        pageSize:10,
      },
      tableData: Object,
      options: [
        {
          value: "选项1",
          label: "路线名称1"
        },
        {
          value: "选项2",
          label: "路线名称2"
        },
        {
          value: "选项3",
          label: "路线名称3"
        },
        {
          value: "选项4",
          label: "路线名称4"
        },
        {
          value: "选项5",
          label: "路线名称5"
        }
      ],
      optionsvalue: "全部路线"
    };
  },
  methods: {
    moren() {
      $(".inspection-iteminfo")
        .addClass("display-block")
        .removeClass("display-none");
      $(".inspection-lineinfo")
        .addClass("display-none")
        .removeClass("display-block");
    },
    handleCurrentChange(val) {
        console.log(`当前页:`+val);
        this.queryPlanUserList_parameter.currentPage=val; 
        this.getTable();
    },
    getTable(){
      // 请求路线列表
      this.$fetch(
        "/api/inspection/queryPlanUserList",
        this.queryPlanUserList_parameterhb
      )
        .then(response => {
          if (response) {
            this.tableData=response.data.pager;
          }
        })
        .then(err => {
          console.log(err);
        });
    },
    toitmeinfo(data){
      console.log(data);
    },
  },
  mounted() {
    this.getTable();
  }
};
</script>

<style scoped>
</style>
