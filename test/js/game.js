$(function () {
    const myname="you";

    var myhp=100;

    const enemylist=["face","fire","water"];

    const enemy=enemylist[Math.floor(Math.random() * enemylist.length)];

    document.getElementById("enemy").style.backgroundImage = 'url(../test/enemy/'+enemy+'.png)';

    const enemyname=enemy+" man";

    document.getElementById("result").textContent = "A "+enemyname+" appeard！";

    document.getElementById("enemyname").textContent=enemyname;

    var enemyhp=100;

    const attacklist=['5','10','15','20'];

    const protectlist=['1','2','3','5'];

    document.getElementById("attackbutton").onclick = function () {
        var random = Math.floor(Math.random() * attacklist.length);
        document.getElementById("result").textContent = enemyname+' received '+attacklist[random]+' damage！';
        enemyhp=enemyhp-attacklist[random];
        if(enemyhp<30){document.getElementById("enemyhp").style.backgroundColor='pink'};
        if(enemyhp<0){
            enemyhp=0;
            document.getElementById("result").textContent = myname +' defeated '+ enemyname+' perfectly!';
            document.getElementById("enemy").style.backgroundImage = 'url(../test/enemy/'+enemy+'win.png)';
        }
        document.getElementById("enemyhp").style.width=enemyhp+"%";
    }

    document.getElementById("protectbutton").onclick = function () {
        var random = Math.floor(Math.random() * attacklist.length);
        var defence = Math.floor(Math.random() * attacklist.length);
        if(attacklist[random]<=protectlist[defence]){
            document.getElementById("result").textContent = myname+' protected against attacks！';
        }else{
            var damage=Math.abs(protectlist[defence]-attacklist[random]);
            document.getElementById("result").textContent = myname+' received '+damage+' damage！';
            myhp=myhp-damage;
            if(myhp<30){document.getElementById("myhp").style.backgroundColor='pink'};
            if(myhp<=0){
                myhp=0;
                document.getElementById("result").textContent = myname+' lost...';
                document.getElementById("enemy").style.backgroundImage = 'url(../test/enemy/'+enemy+'lose.png)';
            };
            document.getElementById("myhp").style.width=myhp+"%";
        }
    }

    document.getElementById("escapebuttom").onclick = function () {
        document.getElementById("result").textContent = myname+' は逃げた！';
        document.getElementById("enemy").style.backgroundImage = 'url(../test/enemy/'+enemy+'lose.png)';
    }

    
});

