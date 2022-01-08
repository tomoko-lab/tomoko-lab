'use stript';

$(function(){
  // ハンバーガーメニュークリックイベント
  $('.hamburger-menu').click(function(){
    if($('.nav-sp').hasClass('open')){
      // ナビゲーション非表示
      $('.nav-sp').removeClass('open');
      // ハンバーガーメニューを元に戻す
      $(this).removeClass('open');
		$('body').removeClass('scroll');
		
    }else{
      // ナビゲーションを表示
      $('.nav-sp').addClass('open');
      // ハンバーガーメニューを✖印に変更
      $(this).addClass('open');
		$('body').addClass('scroll');
	 
    }
  });
});




// スクロールアップボタン
jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '150px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

//　スクロールしない

