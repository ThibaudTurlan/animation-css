//ANIMATION 1

document.getElementById("input1").value = "animation-duration: 3s;"
document.getElementById("input1").addEventListener("keyup",function(){
    let classes = document.getElementById("anim1").className.split(" ");
    if(classes.indexOf("dynamic1") !== -1){
        document.getElementById("anim1").classList.remove("dynamic1");
        document.getElementsByTagName('head')[0].removeChild(document.getElementById("styleanim1"));
    }
    var style = document.createElement('style');
    style.type = 'text/css';
    style.id = "styleanim1";
    style.innerHTML = '.dynamic1 { '+ this.value+' }';
    document.getElementsByTagName('head')[0].appendChild(style);
    document.getElementById('anim1').className += ' dynamic1';
});
