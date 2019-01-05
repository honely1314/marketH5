//图片路径
if(location.href.indexOf('https://erp.anpxd.com/') != -1 || location.href.indexOf('https://www.newrunway.com/') != -1){
    Object.defineProperty(window,"imgUrlPre",{
      value:'https://fdfs.anpxd.com/',
      writable:false
    })
    Object.defineProperty(window,"clientUrl",{
      value:'https://client.anpxd.com',
      writable:false
    })
    Object.defineProperty(window,"clientListUrl",{
        value:'https://client.anpxd.com/html/list/list.html?marketId=',
        writable:false
    })
}else{
    Object.defineProperty(window,"imgUrlPre",{
      value:'https://testfile.anpxd.com/',
      writable:false
    })
    Object.defineProperty(window,"clientUrl",{
      value:'https://testclient.anpxd.com',
      writable:false
    })
    Object.defineProperty(window,"clientListUrl",{
        value:'https://testclient.anpxd.com/html/list/list.html?marketId=',
        writable:false
    })
}
//请求路径
var locationBaseUrl = location.pathname;
locationBaseUrl = locationBaseUrl.split('/')[1];
var requestUrl = '/controller/www/data/' + locationBaseUrl.toString();