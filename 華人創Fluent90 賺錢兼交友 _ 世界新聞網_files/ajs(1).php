(function(){
var isIE = window.navigator.userAgent.indexOf("MSIE ") > 0;
var ifr = "<"+"iframe id=\"cto_iframe_c3a4b1dacc\" frameBorder=\"0\" allowtransparency=\"true\" hspace=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" vspace=\"0\" width=\"300px\" height=\"250px\"\n";
if(isIE && document.domain !== window.location.hostname) {
ifr += " src=\"javascript:'<script>window.onload=function(){document.write(\\\'<script>document.domain = &quot;"+document.domain + "&quot;;<\\\\/script>\\\');document.close();};</script>'\"";
}
ifr += "><"+"/iframe>\n";
document.write(ifr);
var ifc = "\n";
ifc += "<"+"!DOCTYPE html>\n";
ifc += "<"+"html>\n";
ifc += "  <"+"head>\n";
ifc += "    <"+"meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n";
ifc += "    <"+"meta name=\"format-detection\" content=\"telephone=no\">\n";
ifc += "  <"+"/head>\n";
ifc += "  <"+"body><"+"script type=\"text/javascript\" src=\"http://a019.casalemedia.com/pcreative?au=4&c=310602&pcid=5FDE20113900&pr=55&r=5FDE2011&s=25014&t=5697ECE4&u=VmFWWTBzQW9JcTBBQUNodlhUY0FBQUVB&m=0bca660b4865f537e71eaadfd8d933c8&wp=C9&cp=1.1524&aid=DA4A348009A8A0F4&tid=0&dm=5F&n=www.worldjournal.com&sid=1db0&epr=c3a4b1dacc\"><"+"/script>\n";
ifc += "<"+"div id=\'beacon_c3a4b1dacc\' style=\'position: absolute; left: 0px; top: 0px; visibility: hidden;\'>\n";
ifc += "<"+"img width=\"0\" height=\"0\" src=\"http://cat.ny.us.criteo.com/delivery/lg.php?cppv=1&cpp=2sIzZ3xRTXJ0aTNlYi9ZTUVBU3kxQmEyNVRNckUvRWxraWFndlUzR081elVKSHIvNitWTTBDR3Qwc1FTczFTMm5XbWV4bnFJSlZCYUZRK24xUFg5Y09MNm5BQ1MvMEdPUUE0aTlocnJDTzM0K3J5QndwVXg3S200dFdOaXMyVFhGNTZrVzErNkJUdnB0eDR6Y0kveHN3SUVaTk1qNWkreEQwTjRmYStZRmsxNElac0N6VmpUWkFnOHJQYzJsQW8xWGxQR3I1RFlvL1FQYVk5SXkxR29YQXhjbFRrMEJyOXllazl1THIyb2UzUHMvMU1NSVN4b2ZFSGNYMzAvaFNscnVDTE02fA%3D%3D\"/>\n";
ifc += "<"+"/div>\n";
ifc += "<"+"/body>\n";
ifc += "<"+"/html>\n";

var fillIframe = function(ifrd) {
    var getDocument = function(iframe) {
        var result_document = iframe.contentWindow || iframe.contentDocument;
        if (result_document && result_document.document)
            result_document = result_document.document;
        return result_document;
    };
    var c = getDocument(ifrd);
    if (c) {
        c.open();
        c.write(ifc);
        c.close();
    }
};


var maxRetryAttempts = 100;
var loaded = false;
var pollIframe = function() {
    var ifrd = document.getElementById('cto_iframe_c3a4b1dacc');
    if (ifrd && isIE) {
         ifrd.onload = function() {
            if(!loaded) {
                loaded = true;
                fillIframe(ifrd);
            }
        };
    } else if (ifrd) {
        loaded = true;
        fillIframe(ifrd);
    } else if (maxRetryAttempts-- > 0) {
        setTimeout(pollIframe, 10);
    }
};pollIframe();})();
