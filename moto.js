window.onload = function(){
     document.getElementsByClassName("moto_power_btn")[0].onclick = moto.checkStatus;
	 document.getElementsByClassName("moto_standby_start_btn")[0].onclick = moto.showUnloadPanel;
	 document.getElementsByClassName("moto_awake_unlock")[0].onclick = moto.unlockScreen;
}

moto = {

    status : 'off',
	
	checkStatus:function(){
	    switch(moto.status){
			case 'off':
			    moto.turnOn();
		        break;

		    case 'on':
			    moto.turnOff();
			    break;
		}
		moto.status = (moto.status == 'off') ? 'on' : 'off';
	},	

    modifyClass: function(_element, _classes, option) {
        var i, 
			item, 
			len = _classes.length,
            classList = _element.classList;
			
		if(option === "add"){
            for (i = 0; i < len; i++) {
                item = _classes[i]; classList.add(item);
            }
		}else if(option === "remove"){
		    for (i = 0; i < len; i++) {
                item = _classes[i]; classList.remove(item);
            }
		}
        return classList;
    },

    turnOn: function(){
	    var moto_standby = document.getElementsByClassName("moto_standby")[0];
		var moto_standby_fadeOut = ["moto_standby_fadeOut"];
		moto.modifyClass(moto_standby, moto_standby_fadeOut, "remove");
		moto_standby.style.display = "block";
	    
	    var moto_awake_cover = document.getElementsByClassName("moto_awake_cover")[0];
		var moto_awake_cover_fadeOut = ["moto_awake_cover_fadeOut"];
		moto.modifyClass(moto_awake_cover, moto_awake_cover_fadeOut, "add");
		
		var moto_bottom_option_cover = document.getElementsByClassName("moto_bottom_option_cover")[0];
		var moto_bottom_option_cover_fadeOut = ["moto_bottom_option_cover_fadeOut"];
		moto.modifyClass(moto_bottom_option_cover, moto_bottom_option_cover_fadeOut, "add");
		
		var moto_awake_background = document.getElementsByClassName("moto_awake_background")[0];
		moto_awake_background.style.zIndex = 9;
		
		setTimeout(function(){
		    moto_awake_cover.style.display = "none";
		    moto_bottom_option_cover.style.display = "none";
		},600);
	},
	
	turnOff: function(){
	    var moto_awake_cover = document.getElementsByClassName("moto_awake_cover")[0];
		var moto_awake_cover_fadeOut = ["moto_awake_cover_fadeOut"];
		moto.modifyClass(moto_awake_cover, moto_awake_cover_fadeOut, "remove");
	    moto_awake_cover.style.display = "block";
		
		var moto_bottom_option_cover = document.getElementsByClassName("moto_bottom_option_cover")[0];
		var moto_bottom_option_cover_fadeOut = ["moto_bottom_option_cover_fadeOut"];
		moto.modifyClass(moto_bottom_option_cover, moto_bottom_option_cover_fadeOut, "remove");
		moto_bottom_option_cover.style.display = "block";
	},
	
	showUnloadPanel: function() {
	    var moto_standby_click_cover = document.getElementsByClassName("moto_standby_click_cover")[0];
		moto_standby_click_cover.style.display = "block";
		var moto_standby_click_cover_fadeOut = ["moto_standby_click_cover_fadeOut"];
		moto.modifyClass(moto_standby_click_cover, moto_standby_click_cover_fadeOut, "add");
		
		var moto_standby_start_btn_cover = document.getElementsByClassName("moto_standby_start_btn_cover")[0];
		moto_standby_start_btn_cover.style.display = "block";
		var moto_standby_start_btn_cover_fadeOut = ["moto_standby_start_btn_cover_fadeOut"];
		moto.modifyClass(moto_standby_start_btn_cover, moto_standby_start_btn_cover_fadeOut, "add");
		
		var moto_standby_option = document.getElementsByClassName("moto_standby_option")[0];
		moto_standby_option.style.display = "block";
		var moto_standby_option_fadeOut = ["moto_standby_option_fadeOut"];
		moto.modifyClass(moto_standby_option, moto_standby_option_fadeOut, "add");
		
		setTimeout(function(){
		    moto_standby_click_cover.style.display = "none";
		    moto_standby_start_btn_cover.style.display = "none";
			moto_standby_option.style.display = "none";
		},3000);
	},
	
	unlockScreen: function(){
	    document.getElementsByClassName("moto_standby_option")[0].style.border = "2px solid #3db9e7";
		
		var moto_standby = document.getElementsByClassName("moto_standby")[0];
		var moto_standby_fadeOut = ["moto_standby_fadeOut"];
		moto.modifyClass(moto_standby, moto_standby_fadeOut, "add");
		
		var moto_awake_background = document.getElementsByClassName("moto_awake_background")[0];
		moto_awake_background.style.zIndex = 0;
		
		setTimeout(function(){
		    moto_standby.style.display = "none";
		},900);
	}

};
