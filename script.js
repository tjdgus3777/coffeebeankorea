$(document).ready(function(){
    $('#menu>li:nth-child(1)').mouseover(function(){
      $('#menu>li:nth-child(1) .sub1').stop().slideDown(100)
    })
    $('#menu>li:nth-child(1)').mouseout(function(){
      $('#menu>li:nth-child(1) .sub1').stop().slideUp(100)
    })

    $('#menu>li:nth-child(2)').mouseover(function(){
      $('#menu>li:nth-child(2) #sub2_box').stop().slideDown(100)
    })
    $('#menu>li:nth-child(2)').mouseout(function(){
      $('#menu>li:nth-child(2) #sub2_box').stop().slideUp(100)
    })

    $('#menu>li:nth-child(4)').mouseover(function(){
      $('#menu>li:nth-child(4) .sub4').stop().slideDown(100)
    })
    $('#menu>li:nth-child(4)').mouseout(function(){
      $('#menu>li:nth-child(4) .sub4').stop().slideUp(100)
    })

    $('#menu>li:nth-child(6)').mouseover(function(){
      $('#menu>li:nth-child(6) .sub6').stop().slideDown(100)
    })
    $('#menu>li:nth-child(6)').mouseout(function(){
      $('#menu>li:nth-child(6) .sub6').stop().slideUp(100)
    })
  
   $('#header1_box>ul>li:last-child').click(function(){
    $("#header0").slideToggle(300)
   })
   $('#md_pick>ul>li:nth-child(1)').mouseover(function(){
    $('#md_bt1').css({"display":"block"})
   })
   $('#md_pick>ul>li').mouseout(function(){
    $('#md_bt1').css({"display":"none"})
   })
   $('#md_pick>ul>li:nth-child(2)').mouseover(function(){
    $('#md_bt2').css({"display":"block"})
   })
   $('#md_pick>ul>li:nth-child(2)').mouseout(function(){
    $('#md_bt2').css({"display":"none"})
   })
   $('#md_pick>ul>li:nth-child(3)').mouseover(function(){
    $('#md_bt3').css({"display":"block"})
   })
   $('#md_pick>ul>li:nth-child(3)').mouseout(function(){
    $('#md_bt3').css({"display":"none"})
   })
   $('#md_pick>ul>li:nth-child(4)').mouseover(function(){
    $('#md_bt4').css({"display":"block"})
   })
   $('#md_pick>ul>li:nth-child(4)').mouseout(function(){
    $('#md_bt4').css({"display":"none"})
   })
   $('#md_pick_bt>li:nth-child(2) img:nth-child(1)').click(function(){
    $('#md_box0').animate({'left':'0'})
   })

   $('#md_pick_bt>li:nth-child(2) img:nth-child(2)').click(function(){
    $('#md_box0').animate({'left':'-1144px'})

   })
   $('#md_pick_bt>li:nth-child(2) img:nth-child(2)').click(function(){
    $('#md_pick_bt>li:nth-child(2) img:nth-child(2)').css({"background-color":"#f38230","border-radius":"30px","opacity":"0.7"})
   })

  })