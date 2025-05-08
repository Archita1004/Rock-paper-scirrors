
const userpoint=document.querySelector("#userscore");
const comppoint=document.querySelector("#compscore");
const choices=document.querySelectorAll(".choice");
const mymsg=document.querySelector("#msg");
//computer choice
const compchoice=()=>{
    const options=["rock","paper","scissors"];
   const randomans= Math.floor(Math.random()*3);
   return options[randomans];

}


//USER choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("You clicked",userchoice);
        checkwinner(userchoice);
    })
});


//check winner
const checkwinner=(userchoice)=>{
    const comp=compchoice();
    console.log("comp clicked",comp);
    if(userchoice==comp){
        draw();
        mymsg.innerText="its a draw!!";
        mymsg.style.backgroundColor="grey";
    }
    
    else if(userchoice==="rock" && comp==="scissors"){
        userwinner();
        mymsg.innerText="yepp!!You are the winner";
        mymsg.style.backgroundColor="green";
        userscore();
    }else if(userchoice==="paper" && comp==="rock"){
        userwinner();
        mymsg.innerText="yepp!!You are the winner";
        mymsg.style.backgroundColor="green";
       userscore();

    }else if(userchoice==="scissors" && comp==="paper"){
        userwinner();
        mymsg.innerText="yepp!!You are the winner";
        mymsg.style.backgroundColor="green";
       userscore();

    }
    else{
        compwinner();
        mymsg.innerText="Oops!! Computer is the winner";
        mymsg.style.backgroundColor="red";
     compscore();
    }
    }
//functions for checking
    const draw=()=>{
        console.log("its a draw");
    }
    const userwinner=()=>{
        console.log("User is winner");
    }
    const compwinner=()=>{
        console.log("computer is winner");
    }




    var userpo=1;
    const userscore=()=>{
        const sol= userpo++;
        console.log(userpoint.innerText=sol);
    }
    var comppo=1;
    const compscore=()=>{
        const sol= comppo++;
        console.log(comppoint.innerText=sol);
    }