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

//Adding Ticket 
function addTicket(InputType,ticketType){
    let input = document.getElementById(InputType);
    let ticketTypeOf = document.getElementById(ticketType);
    let newInput = parseInt(input.value)
    let currentInput = newInput  + 1;
    input.value = currentInput;
    //Ticket price
    if(ticketTypeOf.id == "first_class_price"){
        let TicketCost = currentInput * 150;
        ticketTypeOf.innerText = TicketCost;
        Calculate();
    }else{
        let TicketCost = currentInput * 100;
        ticketTypeOf.innerText = TicketCost;
        Calculate();
    }
    
    // console.log(TicketCost);
}

//Removing Ticket
function RemoveTicket(InputType,ticketType){
    let input = document.getElementById(InputType);
    let ticketTypeOf = document.getElementById(ticketType);
    let newInput = parseInt(input.value);
    if(newInput > 0){
        let currentInput = newInput  - 1;
        input.value = currentInput;
        //First class Ticket Cost
        if(ticketTypeOf.id == "first_class_price"){
            let TicketCost = currentInput * 150;
            ticketTypeOf.innerText = TicketCost;
            Calculate();
        }else{
            let TicketCost = currentInput * 100;
            ticketTypeOf.innerText = TicketCost;
            Calculate();
        }
    }
}

function Calculate(){
    let firstClassCost = document.getElementById("first_class_price");
    let economicClassPrice = document.getElementById("economic_class_price");
    
    //value of first and ecomomic clss
    let currentFirstClassCost = parseInt(firstClassCost.innerText);
    let currentEconomicClassCost = parseInt(economicClassPrice.innerText);
    //sub and totals
    let subTotal = document.getElementById("sub_total");
    let vat = document.getElementById("vat");
    let total = document.getElementById("total");
   
    //calculating 
    subTotal.innerText =  currentFirstClassCost + currentEconomicClassCost;
    let currentVat = Math.round((parseInt(vat.innerText) * 0.1));
    console.log(currentVat);
    let currentTotal = parseInt(subTotal.innerText) + currentVat;
    total.innerText = currentTotal;


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