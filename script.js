var heading=document.querySelector("h5");
var btn=document.querySelector("#btn");

var flag=0;;
btn.addEventListener("click", function(){
    if(flag==0){
    heading.innerHTML="Sended Request";
    heading.style.color="hotpink";
    btn.innerHTML="Unfollow";
    flag=1;

    }
    else{
        heading.innerHTML="Unsend Request";
        heading.style.color="hotpink";
        btn.innerHTML="Follow";
        flag=0;

    }
})