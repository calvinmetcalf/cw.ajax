cw.ajax
=======

ajax plugin for [communist](https://github.com/calvinmetcalf/communist)

usage 

```javascript
var worker = cw.ajax(after,notjson);
worker('url').then(successFunction,errorFunction);
worker.close();
```

After is a function to be done before sending it back takes the response and the callback as arguments, defaults to

```javascript
function(a,cb){
    cb(a);
}
```

notjson is a boolian, if you set it to true then the response won't be parsed as json.