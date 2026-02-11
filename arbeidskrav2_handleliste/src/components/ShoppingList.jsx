import ShoppingItem from "./ShoppingItem";

export default function ShoppingList ({pruducts, setItems}) {
    
    return(
        <section>
            {pruducts.map((item) => <ShoppingItem key={item.id} title={item.title} quantity={item.quantity} id={item.id} setItems={setItems}/>)}
        </section>
    )
}