export default function ShoppingItem ({ quantity, item}) {
 
function tooglePurchased() {

}

  return (
    <>
      <li>
         <input 
            type="checkbox" 
            checked={item.purchased}
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
