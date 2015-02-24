$(document).ready(function(){
	// Enterページ的なやつ
	if($('#enter').length > 0){ // 要素が存在していたら処理を行う
		// 訪問済みかCookieで判定
		var flag = false;
		var cookies = document.cookie;
		if(cookies.length>0){
			cookies = cookies.split(';');
			for(var i in cookies){
				if(cookies[i].indexOf('entered') > -1){
					flag = true;
				}
			}
		}
		
		// Enterページ的なやつを表示
		if(!flag){
			$('#enter').addClass('show');
		}
		
		// Enterボタンクリックで訪問済みフラグ樹立
		$('#button-enter').click(function(){
			// Cookieでフラグをたてる
			var path = location.pathname.split('/');
			if(path[path.length-1] != ''){
				path[path.length-1] = '';
				path = path.join('/');
			}
			var extime = new Date().getTime();
			extime = new Date(extime + (60*60*24*180*1000)); // 有効期限=180日
			extime = extime.toUTCString();
			document.cookie = 'entered=true; path='+path+'; expires='+extime+'; ';
			
			// スクロール位置を初期化
			if($(window).scrollTop()>0){
				$(window).delay(1000).scrollTop(0,0);
			}
			
			// Enterページ的なやつをはずす
			$('#enter').removeClass('show');
		});
	}
	
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