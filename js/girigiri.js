var pictures=[
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3i4kc8nzsg208c08c400',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3i4kc8nzsg208c08c400',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3i4kbwhkpg20dw07ab29',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3i4jywgpsg208704x4p4',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3i4jry4y1g204603j13s',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3i4jmrh8gg202q02cglu',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3i4jlx3mfg208c04rnkl',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3i4ivflpdg204603wk18',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3ihs5gbl8g203z03nta8',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3im4yx0n6g206e07348j',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3jn6mk7m9g202s02sq40',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3od8rgbjbg206r04wk6a',
    'http://ww4.sinaimg.cn/large/a15b4afegw1f3iag4xbu3g206o07qtja',
];

var changeBackground=function(){html.style.cssText='background-image:url('+pictures[Math.floor(pictures.length*Math.random())]+')';};

changeBackground();

setInterval(changeBackground,15000);

setfullscreen.onclick=function(){
	if (document.fullscreenElement || document.webkitFullscreenElement ||
		document.mozFullScreenElement || document.msFullScreenElement) {
		document.exitFullscreen?document.exitFullscreen():
		document.mozCancelFullScreen?document.mozCancelFullScreen():
		document.webkitExitFullscreen?document.webkitExitFullscreen():
		document.msExitFullscreen?document.msExitFullscreen():'';
	}else{
		html.requestFullscreen?html.requestFullscreen():
		html.mozRequestFullScreen?html.mozRequestFullScreen():
		html.webkitRequestFullscreen?html.webkitRequestFullscreen():
		html.msRequestFullscreen?html.msRequestFullscreen():'';
	}
};

var songs=['http://source.mouto.org/%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%B3.m4a',
           'http://usagi.luxun.pro/kirikiri.m4a'];

FM.src=songs[Math.floor(songs.length*Math.random())];
FM.play();

FM.onerror=function(){
	//this.src='http://usagi.luxun.pro/kirikiri.m4a'
	this.src='http://ww.danmu.fm:233/%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%E3%83%9C%E3%83%BC%E3%83%80%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%B3.m4a';
	FM.play();
}
var lyricsText=lyricsNode.innerHTML;
Lrc=function(obj){
	var lrc_arr=[], interval, lastTime=0,
	Lrc = { num:0, load:function(id){
			var txt_arr=lyricsText.split('\n');
			clearTimeout(interval);
			obj.innerHTML='';
			Lrc.num=0;
			lrc_arr=[];
			for(var i in txt_arr){
				var _time=txt_arr[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g),
				_txt=txt_arr[i].replace(/\[[0-9:.]{5,8}\]/g,'');
				for(var _i in _time){
					var _t_text=String(_time[_i]);
					lrc_arr.push([Number(_t_text.match(/\[([0-9]{2})/)[1])*60+Number(_t_text.match(/\:([0-9]{2})/)[1])+(Number(_t_text.match(/([0-9]{2})\]/)[1])*0.01666),_txt]);
				}
			}

			lrc_arr.sort(function(a,b){return a[0]<b[0]?-1:1});
			interval=setTimeout(function(){Lrc.step()},200);
		},
		step:function(){
			if(!FM||!FM.currentTime){
				clearTimeout(interval);
				interval=setTimeout(Lrc.step,200);
			}
			var Song_time=FM.currentTime;
			if((FM.currentTime-lastTime)<-1){
				Lrc.num=0;
			}
			lastTime=FM.currentTime;
			for(var _i=Lrc.num,_l=lrc_arr.length;_i<_l;_i++){
				if(lrc_arr[_i][0]<Song_time){
					obj.innerHTML=lrc_arr[_i][1].replace(/\s+/,'<br>');
					Lrc.num++;
				}else{
					break;
				}
			}

			clearTimeout(interval);
			interval=setTimeout(Lrc.step,200);
		}
	};
	return Lrc
}(lrc);
if(!navigator.userAgent.match(/ip(hone|ad|od)/i))
Lrc.load();

speedup.onclick = function() {
	switch(this.innerHTML){
		case '鬼畜加速':
			FM.playbackRate=1.2;
			this.innerHTML='疯狂加速';
			break;
		case '疯狂加速':
			FM.playbackRate=1.4;
			this.innerHTML='深度加速';
			break;
		case '深度加速':
			FM.playbackRate=1.6;
			this.innerHTML='无药可救';
			break;
		case '无药可救':
			FM.playbackRate=2;
			this.innerHTML='💊💊💊';
			break;
		case '💊💊💊':
			FM.playbackRate=3;
			this.innerHTML='💊💊💊💊';
			break;
		case '💊💊💊💊':
			FM.playbackRate=1;
			this.innerHTML='鬼畜加速';
			break;
	}
};