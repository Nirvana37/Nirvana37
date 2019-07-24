$(function () {
    $('.item1').click(function (e) { 
        e.preventDefault();

        $('.item').removeClass('active');
        $(this).addClass('active');

        $('body').animate({
            scrollTop: $('.khoi1').offset().top},1000);

    });
    $('.item2').click(function (e) { 
        e.preventDefault();

        $('.item').removeClass('active');
        $(this).addClass('active');

        $('body').animate({
            scrollTop: $('.khoi2').offset().top},1000);

    });
    $('.item3').click(function (e) { 
        e.preventDefault();

        $('.item').removeClass('active');
        $(this).addClass('active');

        $('body').animate({
            scrollTop: $('.khoi3').offset().top},1000);

    });
    $('.item4').click(function (e) { 
        e.preventDefault();

        $('.item').removeClass('active');
        $(this).addClass('active');

        $('body').animate({
            scrollTop: $('.khoi4').offset().top},1000);

    });
    $('.item5').click(function (e) { 
        e.preventDefault();

        $('.item').removeClass('active');
        $(this).addClass('active');

        $('body').animate({
            scrollTop: $('.khoi5').offset().top},1000);

    });
    $('.item6').click(function (e) { 
        e.preventDefault();

        $('.item').removeClass('active');
        $(this).addClass('active');

        $('body').animate({
            scrollTop: $('.khoi6').offset().top},1000);

    });

    // tính vị trí khối 2, console.log để in ra vị trí số 2
    console.log($('.khoi2').offset().top);

    // vị trí khối
    $('.khoi2').offset().top


    // tương tác cuộn

    $(window).scroll(function () { 
    console.log(window.pageYOffset);

        // if (window.pageYOffset > 500 && window.pageYOffset < 1000 ) { console.log('đang ở vị trí lớn hơn 500 và nhỏ hơn 1000')
            
        // }
        // condition: điều kiện, kiểm tra đk trong ngoặc tròn, nếu đúng thực hiện lệnh trong ngoặc nhọn.
        // &&: kiểm tra 2 điều kiện cùng 1 lúc.
        
        
    

        // window.pageYOffset

        // $('.khoi2').offset().top
        // tinh vi tri khoi 2

        // if (condition) {}

        var vtw = window.pageYOffset;
        var vt2 = $('.khoi2').offset().top;
        var vt3 = $('.khoi3').offset().top;
        var vt4 = $('.khoi4').offset().top;
        var vt5 = $('.khoi5').offset().top;
        var vt6 = $('.khoi6').offset().top;
        // gán vị trí để ngắn gọn hơn
        
       if ((window.pageYOffset) < ($('.khoi2').offset().top)) {
        $('.item').removeClass('active');
        $('.item1').addClass('active');
        }

       if ((vtw >= vt2)  {
        $('.item').removeClass('active');
        $('.item2').addClass('active');
        }
      
       if ((vtw >= vt3)  {
        $('.item').removeClass('active');
        $('.item3').addClass('active');
        }
      
       if ((vtw >= vt4) {
        $('.item').removeClass('active');
        $('.item4').addClass('active');
        }
      
       if ((vtw >= vt5)  {
        $('.item').removeClass('active');
        $('.item5').addClass('active');
        }
      
       if (vtw >= vt6) {
        $('.item').removeClass('active');
        $('.item6').addClass('active');
        }
      

    });

    // ifelse tab
    
    // if (condition) {
        
    // } else {
        
    // }
    if (vtw >= vt6) {
        $('.item').removeClass('active');
        $('.item6').addClass('active');
        
    } else if (vtw >= vt5) {
        $('.item').removeClass('active');
        $('.item5').addClass('active');
   
    } else if (vtw >= vt4) {
        $('.item').removeClass('active');
        $('.item4').addClass('active');
    } else if (vtw >= vt3) {
        $('.item').removeClass('active');
        $('.item3').addClass('active');
    } else if (vtw >= vt2) {
        $('.item').removeClass('active');
        $('.item2').addClass('active');
    } else {
        $('.item').removeClass('active');
        $('.item1').addClass('active');
    }





    

    
});

