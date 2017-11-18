var shoot = $('#shoot');
var clear = $('#clear');
var input = $('#input');
var wall = $('#wall');
var danmucontent = $('#danmucontent');
var danmutime = $('#danmutime');

function randomNum(min,max) {
    var rand = min + Math.floor(Math.random() * (max - min));
    return rand;
}

function color() {
    var color = randomNum(100000,999999);
    return color;
}

function positionY() {
    var positionY = randomNum(20,180);
    return positionY;
}

function speed() {
    var speed = randomNum(10000,20000);
    return speed;
}

function faDanmu(){
    //输入框一定要有输入才能执行函数
    if(input.val()){
        var val = input.val();
        //输出在屏幕上
        wall.prepend('<div id="zz">' + val + '</div>');
        //输出在右边的表格中
        if(val.length > 6){
            val = val.substring(0,6) + '...';
        }
        danmucontent.prepend('<div id="xx">' + val + '</div>');

        var zz = $('#zz');

        zz.first().css({
            'top': positionY(),
            'color': '#' + color(),
            'font-weight': 'bold',
        });

        zz.animate({right:"0px"},speed(), function () {
            zz. remove();
        });
        //用于显示每条弹幕发送的时间点
        var time = new Date();
        var month = time.getMonth() + 1;
        var day = time.getDay() + 12;
        var hour = time.getHours();
        var minute = time.getMinutes();
        var danmuTime = month + '-' + day + ' ' + hour + ':' + minute;
        danmutime.prepend('<div id="aa">' + danmuTime + '</div>');

        //每发送完一条弹幕，输入框就进入默认状态
        input.val('');
        //清除屏幕中所有的弹幕,但是在右边的表格中可以保留弹幕历史。
        clear.on('click',function(){
            zz.html('');
        })
    }
}


shoot.on('click',faDanmu);

input.keypress(function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        faDanmu();
    }
})