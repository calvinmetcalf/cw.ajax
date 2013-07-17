cw.ajax = function(after,notjson){
    var obj={ajax:function (url, _cb) {
    	var that = this;
		var request = new XMLHttpRequest();
		request.open("GET", url);
			request.onreadystatechange = function() {
				var _resp;
				if (request.readyState === 4 && request.status === 200) {
					_resp = that.after(!that.notjson?JSON.parse(request.responseText):request.responseText,_cb);
					if(typeof _resp!=="undefined"){
						_cb(_resp);
						}
					}
			};
			request.onerror=function(e){
				throw(e);
			};
		request.send();
	}};
	obj.after = after||function(a, cb){cb(a);};
	obj.notjson = notjson||false;
    var worker = cw(obj);
    var ajax = function(url){
        return worker.ajax(cw.makeUrl(url));
    };
    ajax.close = worker.close;
    return ajax;
};