$(document).ready(function(){
	// ナビゲーションリンクをクリックしてスクロールする
	$('#nav a[href^="#"]').click(function(event){
		var id = $(this).attr("href");
		var offset = 60;
		var target = $(id).offset().top - offset;
		$('html, body').animate({scrollTop:target}, 300);
		event.preventDefault();
		//メニュー開閉用チェックボックスをfalseにする
		$('#nav-opener-check').prop({'checked': false});
		return false;
	});
	// 最上部リンク
	var btnToTop = $('#scroll-to-top');
	btnToTop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			btnToTop.fadeIn();
		}else{
			btnToTop.fadeOut();
		}
	});
	btnToTop.click(function () {
		$('body, html').animate({scrollTop:0}, 500, 'swing');
		return false;
	});

	// サムネイルクリックでキャプション表示
	$('.caption-toggle').click(function(event){
		$(this).parent('.sample-caption').toggleClass('on');
	});

	//ソーシャルなんとか
	var url = location.href;
	var title = encodeURIComponent(document.title);
	//ツイートボタン
	$('#tweet').click(function(){
		window.open('http://twitter.com/share?text='+title+'&url='+url, 'tweetwindow', 'width=550, height=420');
	});
	//ツイート数
	//JSONの読み込み
	$.ajax({
		type: 'GET',
		url: 'http://urls.api.twitter.com/1/urls/count.json',
		data: {
			url : encodeURI(url),
			noncache: new Date()
		},
		dataType: 'jsonp',
		success: function(data) {
			$('#count-tweet').find('a').text(data.count).attr({'href': 'https://twitter.com/search?q='+url+'&src=typd'});
		}
	});
	//いいねボタン
	$('#like').click(function(){
		window.open('http://www.facebook.com/sharer.php?u='+url+'&amp;t='+title, 'sharewindow', 'width=550, height=420');
	});
	//シェア数
	var count;
	$.ajax({
		url:'http://graph.facebook.com/?id=' + url,
		dataType:"jsonp",
		success:function(obj){
			if(typeof(obj.shares) == 'undefined'){
			  count = 0;
			}else{
			  count = obj.shares;
			}
			$('#count-like').text(count);
		}
	});
	//LINEで送るボタン
	$('#line').click(function(){
		window.location.href = 'line://msg/text/'+title+' '+url;
	});
});