/**
 * Created by Administrator on 2017/4/6 0006.
 */
$(document).ready(function(){
    $("#b1").click(function(){
        $("#div").remove(); //将所指id元素及包括的的元素全部删除
    })
    $("#b2").click(function(){
        $("#div").empty(); //将所指id元素中所包含的元素删除
    })
})