window.addEventListener('load', function(){
    const html_ul_visiteurs = document.querySelector("#visiteurs");
    const html_input_nomVisiteur = document.querySelector("#nomVisiteur");
    const html_btnSave = document.querySelector("#btnSave");

    let visitors = [];

    const getVisitorName = function(){
        return html_input_nomVisiteur.value.trim();
    }

    const setNewLi = function(){
        let li = document.createElement('li');
        html_ul_visiteurs.append(li);
        return li;
    }

    const clearVisitorName = function(){
        html_input_nomVisiteur.value = "";
    }

    const saveVisitor = function(){
        if(!getVisitorName()) throw new Error('Pas de nom de visiteur...');
        let li_visitor = setNewLi();
        li_visitor.innerText = getVisitorName();
        visitors.push(getVisitorName());
        clearVisitorName();
    }

    document.addEventListener('keypress',function(event){
        console.log(`Key : ${event.key}`)
        if(event.key == "Enter") saveVisitor();
    });

    const radio_gender = document.querySelectorAll("input[type=radio]");
    for (const gender of radio_gender) {
        gender.addEventListener('change', function(e){console.log(e);});    
    }

    document.querySelector('#maritalStatus').addEventListener('change', function(event){ alert(`Votre status est ${event.target.value}`)})
    html_btnSave.addEventListener('click', saveVisitor);
    html_btnSave.addEventListener('dblclick', function(){ alert(`Vous avez ${visitors.length} visiteurs.`);})
    //html_input_nomVisiteur.addEventListener('change', function(){ alert(`Vous avez changé de valeur!`);})


    // const createPopup = function(){
    //     console.log('toto');
    //     let main_div = document.createElement('div');
    //     document.body.append(main_div);
    //     main_div.style.width = "100%";
    //     main_div.style.height = screen.height+"px";
    //     main_div.style.position = "absolute";
    //     main_div.style.top = "0px";
    //     main_div.style.left = "0px";
    //     main_div.style.backgroundColor= "rgba(0,0,0,0.5)";
    // }

    // document.addEventListener('click', createPopup);
    // document.addEventListener('mousedown', function(event){
    //     event.preventDefault(); //Annule le comportement par défaut
    //     console.log(event);
    // });
    
})