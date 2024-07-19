$(function(){
//메뉴
    $(".main > li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    }, function(){
        $(".sub , .sub_bg").stop().slideUp();
    })





    //이미지
    var n = 0;

    setInterval(function(){
        
        if(n == 2){
            n = 0;
        }else{
            n++;
        }

        $(".top_move").animate({ top : -"300px"}, 500, function(){
            $(".top_move").append( $(".top_move li").eq(0))
            $(".top_move").css({top : 0})
        })
    
    }, 3000)



    //팝업
$(".p_click").click(function(){
    $(".pop, .modal").show();
})

$(".close").click(function(){
    $(".pop, .modal").hide();
})


})//jquery