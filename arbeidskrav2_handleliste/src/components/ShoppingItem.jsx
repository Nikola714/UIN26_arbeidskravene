export default function ShoppingItem ({ quantity, item}) {
 
function tooglePurchased(id) {
 console.log(id)
 console.log(item)
 item.purchased = !item.purchased //hvis chexbox er true, bytt til false
}

  return (
    <>
      <li>
         <input 
            type="checkbox" 
            defaultChecked={item.purchased} //for å gjøre checkbox interaktiv
            onChange={() => tooglePurchased(item.id)}
         />
         <span className={item.purchased ? "done" : ""}>{item.name}</span>

         <input 
            type="number"
            value={item.quantity}
         />
      </li>
    </>
   )
}
