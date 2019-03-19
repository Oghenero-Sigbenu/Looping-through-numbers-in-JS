$( document ).ready(function() {
 
$(".button").css({"border-radius": "50px",
"padding": "10px",
"width": "200px",
"height": "45px" });

let btn = $(".button");
btn.click( function (){
     let list = $("ul");
  list.css({"display":"block", "font--size":"35px"})
for(num = 1; num <= 100; num++){ 
     if( num % 15 == 0){
      list.append("Zanku Legwork"+"," );   
    //    console.log("Zanku Legwork")
    }
else if(num % 3 == 0){
    list.append("Zanku"+",");
    // console.log("Zanku");
}
else if(num % 5 == 0){
    list.append("Legwork "+ ",");
    // console.log("LegWork");
}

else{
// arr.push(num)
list.append(num + ","+"  ");
// console.log(num);

}
};
});
});