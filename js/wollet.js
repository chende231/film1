window.onload=function(){ 
    //  function getPos(oEvent){
    //  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    //  var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
    //  return{x:scrollLeft+oEvent.clientX,y:scrollTop+oEvent.clientY};
    // }
        var linkbt = document.getElementById("linkbt"); 
        var light = document.getElementById('light'); 
        var fade = document.getElementById('fade'); 
        var closebt = document.getElementById("closebt"); 
        linkbt.onclick = function(){ 
            light.style.display = 'block'; 
            fade.style.display = 'block'; 
        } 
        closebt.onclick = function(){ 
            light.style.display = 'none'; 
            fade.style.display = 'none'; 
        } 
        light.onmousedown = function(ev){
                var ev = ev || event;
                var disX = ev.clientX - light.offsetLeft;
                var disY = ev.clientY - light.offsetTop;
                console.log(this);
                //给document添加事件是为了防止鼠标脱离出这个div
                document.onmousemove = function(ev){
                    var ev = ev || event;
                    var l = ev.clientX - disX;//div左侧距浏览器左边的距离
                    var t = ev.clientY -disY;
                    if(l<0){
                        l=0;
                    }
                    else if(l>document.documentElement.clientWidth - light.offsetWidth){
                        l=document.documentElement.clientWidth - light.offsetWidth;
                    }
                    if(t<0){
                        t=0;
                    }
                    else if(t>document.documentElement.clientHeight - light.offsetHeight){
                        t= document.documentElement.clientHeight - light.offsetHeight;
                    }
                    light.style.left = l + 'px';
                    light.style.top = t + 'px';
                }//onmousemove不管鼠标按没按下去都会执行，所以这个函数要嵌套进onmousedown这个函数里边

                document.onmouseup = function(){
                    document.onmousemove = document.onmouseup = null;
                    //清除onmousemove事件，去掉onmouseup是清除垃圾
                }
                
            }
    } 