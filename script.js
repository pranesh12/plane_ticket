//Adding Ticket 
function addTicket(InputType, ticketType) {
    let input = document.getElementById(InputType);
    let ticketTypeOf = document.getElementById(ticketType);
    let newInput = parseInt(input.value)
    let currentInput = newInput + 1;
    input.value = currentInput;
    //Ticket price
    if (ticketTypeOf.id == "first_class_price") {
        let TicketCost = currentInput * 150;
        ticketTypeOf.innerText = TicketCost;
        Calculate();
    } else {
        let TicketCost = currentInput * 100;
        ticketTypeOf.innerText = TicketCost;
        Calculate();
    }

}

//Removing Ticket
function RemoveTicket(InputType, ticketType) {
    let input = document.getElementById(InputType);
    let ticketTypeOf = document.getElementById(ticketType);
    let newInput = parseInt(input.value);
    if (newInput > 0) {
        let currentInput = newInput - 1;
        input.value = currentInput;
        //First class Ticket Cost
        if (ticketTypeOf.id == "first_class_price") {
            let TicketCost = currentInput * 150;
            ticketTypeOf.innerText = TicketCost;
            Calculate();
        } else {
            let TicketCost = currentInput * 100;
            ticketTypeOf.innerText = TicketCost;
            Calculate();
        }
    }
}

function Calculate() {
    let firstClassCost = document.getElementById("first_class_price");
    let economicClassPrice = document.getElementById("economic_class_price");

    //value of first and ecomomic clss
    let currentFirstClassCost = parseInt(firstClassCost.innerText);
    let currentEconomicClassCost = parseInt(economicClassPrice.innerText);
    //sub and totals
    let subTotal = document.getElementById("sub_total");
    let total = document.getElementById("total");
    let vat = document.getElementById("vat");
    //calculating 
    subTotal.innerText = currentFirstClassCost + currentEconomicClassCost;
    let currentVat = Math.round((parseInt(subTotal.innerText) * 0.1));
    vat.innerText = currentVat;
    let currentTotal = parseInt(subTotal.innerText) + currentVat;
    total.innerText = currentTotal;
}


document.getElementById("bookNow").addEventListener("click", function () {
    //This code will work if you press Book Now button
    let body = document.querySelector("body");
    body.style.background = "#ddd";
    let mainDisplay = document.getElementById("main");
    mainDisplay.style.display = "none";
    let showInfo = document.getElementById("shoInfo");
    showInfo.style.display = "block";

    //Total Infos
    let first_class_price = document.getElementById("first_class_price").innerText;
    let economic_class_price = document.getElementById("economic_class_price").innerText;
    let sub_total = document.getElementById("sub_total").innerText;
    let vat = document.getElementById("vat").innerText;
    let total = document.getElementById("total").innerText;


    //Display price
    let firstClassPrice = document.getElementById("firstClassPrice").innerText = first_class_price;
    let economicClassPrice = document.getElementById("economicClassPrice").innerText = economic_class_price;
    let display_subTotal = document.getElementById("display_subTotal").innerText = sub_total;
    let displayVat = document.getElementById("displayVat").innerText = vat;
    let displayTotal = document.getElementById("displayTotal").innerText = total;

    //printing
    let printBtn = document.getElementById('printBtn');
    printBtn.addEventListener("click", function () {
        print(printBtn);
    })

})