export default function ShoppingItem ({item}) {
 
function tooglePurchased(id) {
 console.log(id)
 console.log(item)
 item.purchased = !item.purchased //hvis chexbox er true, bytt til false
}

  return (
    <>
      <li className="liste">
         <input 
            type="checkbox" 
            defaultChecked={item.purchased} //for å gjøre checkbox interaktiv
            onChange={() => tooglePurchased(item.id)}
         />
         <span>{item.name}</span>

         <input className="listqQuantity"
            type="number"
            defaultValue={item.quantity} //antall produkter kan endres når som helst, men start verdi er den som ble bestemt tidligere
         />
      </li>
    </>
   )
}
