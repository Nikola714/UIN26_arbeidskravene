export default function ShoppingItem () {

   return (
    <>
    <input type="checkbox" id="product1"/>
    <label htmlFor="product1" >Melk</label>
    <label htmlFor="produkct1_quantity">2</label>
    <input id="produkct1_quantity" type="number" className="produkct_quantity"/>

    <input type="checkbox" id="product2" defaultChecked/>
    <label htmlFor="product2">Egg</label>
    <label htmlFor="produkct2_quantity">1</label>
    <input id="produkct2_quantity" type="number" className="produkct_quantity"/>

    </>
   )
}
