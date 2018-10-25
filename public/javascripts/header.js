//复用头部和尾部
define(["jquery"], function($){
    function Header(){
        this.load();
    }
    Header.prototype = {
        constructor: Header,
        load: function(){
            //头部复用
            $.get("/html/include/header.html", $.proxy(this.headerHandler, this));
            console.log("123");
        },
        headerHandler: function(data){
            //get获取到的数据渲染
            $("header").html(data);
        }
    }
    new Header();
});
