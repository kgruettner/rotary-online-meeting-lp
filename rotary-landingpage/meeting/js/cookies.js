window.cookieconsent.initialise({
    palette:{
     popup: {background: "#fff"},
     button: {background: "#aa0000"},
    },
	"content": {
       "message": "Diese Webseite verwendet Cookies um sich Ihre Auswahl zur Zustimmung der Datenschutzbestimmungen und der Aufzeichnung zu merken.",
       "allow": "Einverstanden",
       "deny": "Cookies ablehnen",
       "link": "Mehr Infos über Cookies"
    },
	domain : "rotary-eclub1850.de",
	path : "/meeting",
    onStatusChange: function(status) {
      if(this.hasConsented()) {
        set_cookie("Check1",document.getElementById("Check1").checked?1:0,356);
        set_cookie("Check2",document.getElementById("Check2").checked?1:0,356);		 
      }
    },
    revokable:true,
	onRevokeChoice: function() {
      delete_cookie("Check1");
      delete_cookie("Check2");
	},
	"type": "opt-in",
	"position" : "bottom-left"
   });

function get_cookie( cookieName ) {
   strValue = false;
   if( strCookie = document.cookie ) {
      if( arrCookie = strCookie.match( new RegExp( cookieName + '=([^;]*)', 'g'))) {
         strValue=RegExp.$1;
      }
   }
   return(strValue);
}
      
function set_cookie(cookieName,cookieValue,intDays) {
   if(!is_cookie_enabled()) {
     return false;
   }
   objNow = new Date();
   strExp = new Date( objNow.getTime() + ( intDays * 86400000) );
   document.cookie = cookieName + '=' + 
                     cookieValue + ';expires=' + 
                     strExp.toGMTString() + ';';
   return true;
}

function delete_cookie(cookieName) {
  if(document.cookie) {
    document.cookie = cookieName + '=' +
                      get_cookie(cookieName) +
                      ';expires=Thu, 01-Jan-1970 00:00:01 GMT;'; 
    return true;
  }
  return false;
}
      
function is_cookie_enabled() {
  if(typeof navigator.cookieEnabled!='undefined') {
    return navigator.cookieEnabled;
  }
  set_cookie('testcookie','testwert',1);
  if(!document.cookie) {
    return false;
  }
  delete_cookie('testcookie');
  return true;        
}

window.onload = function() {
  if(get_cookie('cookieconsent_status')=='allow') {
	var cb1 = document.getElementById("Check1");
    var cb2 = document.getElementById("Check2");
	if(get_cookie("Check1")==1) {cb1.checked = true;}
	if(get_cookie("Check1")==0) {cb1.checked = false;}
	if(get_cookie("Check2")==1) {cb2.checked = true;}
	if(get_cookie("Check2")==0) {cb2.checked = false;}
  }
}

document.getElementById("Check1").onclick = function() {
  if(get_cookie('cookieconsent_status')=='allow') {
    set_cookie("Check1",this.checked?1:0,356);
  }
};

document.getElementById("Check2").onclick = function() {
  if(get_cookie('cookieconsent_status')=='allow') {
    set_cookie("Check2",this.checked?1:0,356);
  } 
};
