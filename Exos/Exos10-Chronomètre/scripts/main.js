window.addEventListener('load',function(){
    
    const html_timer = document.querySelector("#timer");
    const html_btn_play = document.querySelector("#button-region>input[value=Play]");
    const html_btn_pause = document.querySelector("#button-region>input[value=Pause]");
    const html_btn_stop = document.querySelector("#button-region>input[value=Stop]");
    const html_btn_save = document.querySelector("#button-region>input[value=Save]");
    const html_ol_saves = document.querySelector("#saves");
    
    let time = 0;
    let interval;
    
    const formatTemps = function(secondes){
        let h = Math.floor(secondes/3600);
        let m = Math.floor((secondes%3600)/60);
        let s = Math.floor(secondes%60);
        return `${(h<10)?'0'+h:h}:${(m<10)?'0'+m:m}:${(s<10)?'0'+s:s}`;
    };
    
    const afficheTemps = function(){
        html_timer.innerText = formatTemps(time);
    }
    
    const startChrono = function(){
        interval = setInterval(
            function(){
                time++;
                afficheTemps();
            },
            1000
        );
        disableBtn(html_btn_play);
        enableBtn(html_btn_pause);
        enableBtn(html_btn_stop);
        enableBtn(html_btn_save);
    }
    
    const pauseChrono = function(){
        clearInterval(interval);
        interval = undefined;
        disableBtn(html_btn_pause);
        enableBtn(html_btn_play);
    }
    
    const stopChrono = function(){
        time = 0;
        afficheTemps();
        if(!interval){
            disableBtn(html_btn_stop);
            disableBtn(html_btn_save);
        }
    }

    const disableBtn = function(btn){
        btn.disabled=true;
    }

    const enableBtn = function(btn){
        btn.disabled=false;
    }

    const saveTime = function(){
        let li = document.createElement('li');
        li.innerText = formatTemps(time);
        let save = time;
        li.addEventListener('dblclick', function(){ loadTime(save);});
        html_ol_saves.append(li);
        stopChrono();
    }

    const loadTime = function(save){
        pauseChrono()
        time = save;
        afficheTemps();
    }

    const touchControl = function(event){
        if(event.key == 'Enter' && !interval) startChrono();
        else pauseChrono();
    }
    
    disableBtn(html_btn_pause);
    disableBtn(html_btn_stop);
    disableBtn(html_btn_save);
    afficheTemps()

    html_btn_play.addEventListener('click',startChrono);
    html_btn_pause.addEventListener('click',pauseChrono);
    html_btn_stop.addEventListener('click',stopChrono);
    html_btn_save.addEventListener('click',saveTime);
    html_timer.addEventListener('mouseenter',pauseChrono);
    html_timer.addEventListener('mouseleave',startChrono);
    document.addEventListener('keypress', touchControl);
});
