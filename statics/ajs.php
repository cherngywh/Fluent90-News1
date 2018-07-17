(function(){
var isIE = window.navigator.userAgent.indexOf("MSIE ") > 0;
var ifr = "<"+"iframe id=\"cto_iframe_6560b0a955\" frameBorder=\"0\" allowtransparency=\"true\" hspace=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" vspace=\"0\" width=\"728px\" height=\"90px\"\n";
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
ifc += "  <"+"body><"+"script type=\"text/javascript\" src=\"http://a123.casalemedia.com/pcreative?au=2&c=310539&pcid=4B9820033900&pr=55&r=4B982003&s=25014&t=5697ECE3&u=VmFWWTBzQW9JcTBBQUNodlhUY0FBQUVB&m=072fd1c7f66ac299a096ce05a2600746&wp=E2&cp=1.8356&aid=DA4A34603DA3EC13&tid=0&dm=5F&n=www.worldjournal.com&sid=1db0&epr=6560b0a955\"><"+"/script>\n";
ifc += "<"+"div id=\'beacon_6560b0a955\' style=\'position: absolute; left: 0px; top: 0px; visibility: hidden;\'>\n";
ifc += "<"+"img width=\"0\" height=\"0\" src=\"http://cat.ny.us.criteo.com/delivery/lg.php?cppv=1&cpp=RszO23xRVGR0V3lpTHdoeDNsczRrd0Z3R0FMdXN0OUdNUXlpbG11aEY0NFdCdjROVEdTNFNuclVuWmNjN1IxQ3g5VWk0VlZVR1c3b3Q1emJVYlJobHpERjBLdit6WnU0Smk5NS9Wc2NCb0RWZXpzL0N1QlFURjFHZzhzK2V6VThNb3VJVnpGL3p6bWVmMHJKWDBoYVBBcktNRlZPdFNEL3V1ZmVuVjFoUFYrVnFNdTgydVNMS3lCRGNrdFoxNFBWRnBJMTBXNzA2TUdwc0NQMHpoeDZ2RkMzOXFMWllXM0l1YldZeW9JdVEzM0ZtWEV6TTg1M1VUMy8yVXA3WnlPQWFHb1ZlfA%3D%3D\"/>\n";
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
    var ifrd = document.getElementById('cto_iframe_6560b0a955');
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
