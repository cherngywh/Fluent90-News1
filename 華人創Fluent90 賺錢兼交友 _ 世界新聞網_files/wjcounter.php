try{showimp({cnt:"1215"});
}catch(err){console.error(err.message)}
function WJCOM_setCookie(cname, cvalue, exminute) {
    var d = new Date();
    d.setTime(d.getTime() + (exminute*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.worldjournal.com;path=/";
}
function WJCOM_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
WJCOM_setCookie('wjuserguid','14_5697ee5d283b0',30);console.log('cookie created. Value : 14_5697ee5d283b0 ');var WJCOM_iframe = document.createElement('iframe');WJCOM_iframe.style.width = '1px';WJCOM_iframe.style.height = '1px';WJCOM_iframe.style.display = 'none';WJCOM_iframe.src = 'http://ctr2.worldjournal.com/wjcountercore.php?aid=' + 3661270;document.body.appendChild(WJCOM_iframe);
