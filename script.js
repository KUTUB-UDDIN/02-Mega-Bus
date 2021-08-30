
function  handleTicket(Ticket, isIncrease){

const ticketInput = document.getElementById(Ticket);
  const ticketCount = parseInt(ticketInput.value);
//   const  firstNewCount =  firstCount - 1;
  let  ticketNewCount =  ticketCount;
  if (isIncrease==true) {
      ticketNewCount =  ticketCount + 1;   
  }
  if (isIncrease==false && ticketNewCount>0) {
      ticketNewCount =  ticketCount - 1;   
  }
  
  ticketInput.value = ticketNewCount  ;
  // const TotalPrice =  firstNewCount * 150 ;
  let TotalPrice = 0;
  if (Ticket=='firstTicket-count') {
      TotalPrice =   ticketNewCount * 150 ;
  }
  if (Ticket=='secondTicket-count') {
      TotalPrice =   ticketNewCount * 100 ;
  }

   document.getElementById('total-price').innerText =TotalPrice;
  calculatedTotal();
}

//   TOTAL calculatedTotal
function calculatedTotal(){
      
    const firstInput = document.getElementById( 'firstTicket-count');
    const firstCount = parseInt(firstInput.value);

    const secondInput = document.getElementById('secondTicket-count');
     const secondCount = parseInt(secondInput.value);

   const totalTicketPrice =   firstCount * 150 + secondCount * 100;
   document.getElementById('total-price').innerText = totalTicketPrice;

   const VAT =  Math.round(totalTicketPrice * 0.1)  ;
   document.getElementById( 'vat-total').innerText = VAT;

   const grandTotal = totalTicketPrice + VAT ;
   document.getElementById( 'grand-total').innerText =  grandTotal ;

}

//   BOOK NOW                 
document.getElementById('bookBtn').addEventListener('click',function(){
  let firstInput = document.getElementById( 'firstTicket-count').value;

  let secondInput = document.getElementById('secondTicket-count').value;
   
    console.log(firstInput, secondInput);
    
 if (firstInput > 0 || secondInput > 0) {
     
        alert("CONGRATULATIONS SUCCESSFULLY PURCHASES");
 }
 else{
        alert(" NOT A  PURCHASES"); 
 }
});



