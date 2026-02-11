export default function ShoppingItem ({setItems, title, quantity}) {
   const itemsClick = () => {
      setItems((prev) => prev.filter(item.id !== id))
      console.log(id)
   }

   return (
    <>
      <ul>
         <li>{title}</li>
         <li>{quantity}</li>
         <button onClick={itemsClick}>X</button>
      </ul>
    </>
   )
}
