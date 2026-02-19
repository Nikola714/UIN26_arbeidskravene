import ShoppingItem from "./ShoppingItem";

export default function ShoppingList ({list}) {
    
    return(
        <ul>
           {list.map((item) => 
            <ShoppingItem key={item.id} title={item.name} quantity={item.quantity} id={item.id} item={item}/>)} 
        </ul>
        
       
    )
}