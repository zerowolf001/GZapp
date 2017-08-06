# GZapp
vue.js练手项目

### 引入swript报错：
  Cannot assign to read only property 'exports' of object '#<Object>
  ES6不支持导入ES5代码 https://github.com/webpack/webpack/issues/4039
  
#### 2017年07月31日
更新数据请求接口，实现：<br/>
☑️ 登陆页面<br/>
☑️ 设置页面<br/>
☑️ 首页焦点，首页列表(静态数据)<br/>

#### 2017年08月01日
Tornado API (Nginx) HTTP 405: Method Not Allowed<br/>
Type = fetch <br/>
https://stackoverflow.com/questions/19006783/tornado-post-405-method-not-allowed <br/>
https://stackoverflow.com/questions/44900282/warningtornado-access405-error-stopping-post-from-both-localhost-and-file

#### 2017年08月03日
Cors Access-Control-Allow-Headers wildcard being ignored?<br/>
Support for wildcards in the Access-Control-Allow-Headers header was added to the living standard only in May 2016<br/>
https://www.w3.org/TR/2014/REC-cors-20140116/#access-control-allow-headers-response-header<br/>
https://stackoverflow.com/questions/13146892/cors-access-control-allow-headers-wildcard-being-ignored <br/>
W3C2016标准CORS Access-Control-Allow-Headers 不支持通配符"*"，必须指定域。<br/>