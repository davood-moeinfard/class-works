// while (true) {
//     let num=prompt("Enter a number:");
//     if (num.toLowerCase()=="exit") {
//         break;
//     } else {
//         num=parseInt(num);
//         let count=0;
//         while (num>1) {
//             num=num/10;
//             count++;
//         }
//     alert("digit of number : "+count);
//     }
// }
let count = 0;
let play = true;
let randNum = Math.round(Math.random() * 20);
function ResetGame() {
    play = true;
    document.getElementById("comment").innerText = "";
    document.getElementById("guessNum").value = null;
    count = 0;
    randNum = Math.round(Math.random() * 20);
}
function GuessNum() {
    if (play == true) {
        let numEnter = document.getElementById("guessNum").value;
        if (0 <= numEnter && numEnter <= 20 && numEnter != null) {
            count++;
            if (count <= 3) {
                if (randNum == numEnter) {
                    document.getElementById("comment").style.color = "green";
                    document.getElementById("comment").innerHTML =
                        "correct. your point:" + count;
                    play = false;
                } else {
                    document.getElementById("comment").style.color = "red";
                    document.getElementById("comment").innerHTML = "wrong : " + count;
                }
            } else {
                document.getElementById("comment").style.color = "red";
                document.getElementById("comment").innerHTML = "You Lose!!";
            }
        } else {
            document.getElementById("comment").style.color = "red";
            document.getElementById("comment").innerHTML = "Enter number between 0 to 20";
        }
    }
};

// let citiesCode={"Esfahan":"031","Tehran":"021","Tabriz":"041","Mashhad":"051"};
// let lies=document.querySelectorAll("li");
// lies.forEach(li => {
//     li.addEventListener("click",function () {
//     for (let name in citiesCode) {
//             if (this.innerText.toLowerCase()===name.toLowerCase()){
//                 document.querySelector("#cityCode").value=citiesCode[name];
//             }
//           } 
//     }) 
// });

let citiesCode={"Esfahan":"031","Tehran":"021","Tabriz":"041","Mashhad":"051"};
for (let city in citiesCode) {
    localStorage.setItem(city,citiesCode[city]);
}
let lies=document.querySelectorAll("li");
lies.forEach(li => {
    li.addEventListener("click",function () {
        document.querySelector("#cityCode").value=localStorage.getItem(this.innerText);
    }) 
});
