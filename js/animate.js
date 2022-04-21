function animate(obj, target, callback) {
    // console.log("D");
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) callback();
        }
        var dis = (target - obj.offsetLeft > 0) ? Math.ceil((target - obj.offsetLeft) / 10) : Math.floor((target - obj.offsetLeft) / 10);
        // console.log(dis);
        obj.style.left = obj.offsetLeft + dis + 'px';
    }, 15);
}
