/**
 * Created by Administrator on 2017/2/16.
 */
$(function(){
    //页面加载获取用户名和留言板信息
    //左侧边栏控制器
    $("aside.left_box>ul").on("click","li.list_li>a",function(e){
        e.preventDefault();
        var id=$(this).attr("href");
        $(id).addClass("active").siblings(".active").removeClass("active");
    }).on("click","li.fold_li",function(){
        $(this).toggleClass("active").siblings(".active").removeClass("active");
    })
});