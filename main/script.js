function showOptions(){
    let list = document.getElementById("mobile-list");
    if(list.style.display=="none"){
        list.style.display="flex";
    }
    else{
        list.style.display="none";
    }
}
function showCard(card){
    console.log(card);
    const cards=['marshal','spy','general','colonel','major','captain','lieutenant','sergeant','flag','bomb','scout','miner'];
    for(let i=0;i<cards.length;i++){
        isVisible(String(cards[i]));
    }
    document.getElementById("descriptions").style.display="block";
    document.getElementById("main").style.display="none"
    document.getElementById(card).style.display="block";
}
function isVisible(card){
    if (document.getElementById(card).style.display=="block"){
        document.getElementById(card).style.display="none";
    }
}