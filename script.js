// document.getElementById("firstclassAdd").addEventListener("click",function(){
//     //Input Increasing
//     let input = document.getElementById("input");
//     let newInput = parseInt(input.value)
//     let currentInput = newInput  + 1;
//     input.value = currentInput;
//     //First class Ticket Cost
//     let firstClassTicketCost = currentInput * 150;
//     console.log(firstClassTicketCost);
// })

function addTicket(InputType){
    let input = document.getElementById(InputType);
    let newInput = parseInt(input.value)
    let currentInput = newInput  + 1;
    input.value = currentInput;
    //First class Ticket Cost
    let TicketCost = currentInput * 150;
    console.log(TicketCost);
}
function RemoveTicket(InputType){
    let input = document.getElementById(InputType);
    let newInput = parseInt(input.value);
    if(newInput > 0){
        let currentInput = newInput  - 1;
        input.value = currentInput;
        //First class Ticket Cost
        let TicketCost = currentInput * 150;
        console.log(TicketCost);
    }
   
}

// document.getElementById("firstClassRemove").addEventListener("click",function(){
//     //Input Increasing
//     let input = document.getElementById("input");
//     let newInput = parseInt(input.value);
//     if(newInput > 0){
//         let currentInput = newInput  - 1;
//         input.value = currentInput;
//         //First class Ticket Cost
//         let firstClassTicketCost = currentInput * 150;
//         console.log(firstClassTicketCost);
//     }
// })