
function realconsole(){


  //管理端
  $('.el-table__body-wrapper').css('height','100%');
  $('.el-scrollbar').css({
    'background':'#000'
  });
  // $('.el-select-dropdown').css({'border-color':'#333','border-radius':'0px'});
  // $('.el-select-dropdown__item').css('color','#999');
  // $(' .el-select-dropdown__item').mouseover(function(){
  //   $(this).css({'color':'#fff','background':'#222'}).siblings().css({'color':'#999','background':'#000'})
  // });
  // $('.el-table__row').mouseover(function(){
  //   $(this).css({'color':'#fff','background':'#000'})
  // }).mouseout(function(){
  //   $(this).css({'color':'#999','background':'#111'})
  // });
  // $('.modal-body .el-input__inner').css({'background-color':'#111','border-color':'#282828','border-radius':'0'});
  // $('.main_content_top .el-select .el-input__inner').blur(function(){
  //   $(this).css({
  //     'background-color':'#000'
  //   })
  // })


  //展示端
  $(".openmenulist").off('click').click(function(){
    $(".unit-info").slideToggle(
    function(){
    $(".unit-btn-close").toggle();
    $(".unit-btn-open").toggle();
    $(".early-warning").toggleClass("scrollheight");
    });
  })
}
export {
  realconsole
}
