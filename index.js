let istatus = document.querySelector('#btn_wise');


let btn = document.querySelector('#add_btn');
var check = 0;

btn.addEventListener('click', function(){
    if(check == 0){
        istatus.innerHTML = "Friend";
        istatus.style.color = "green";
        
        btn.innerHTML = "Remove Friend";
        check = 1;

    }else{
        if(check == 1){
            istatus.innerHTML = "Stranger";
            istatus.style.color = "Red";
            btn.innerHTML = "Add Friend"
            check = 0;

        }

    }
   

})
