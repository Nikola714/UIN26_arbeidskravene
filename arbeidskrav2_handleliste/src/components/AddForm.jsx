export default function AddForm({setList}) {
  //funkjson for å vite hvilket felt som oppdateres og er kalt hver gang brukeren skriver noe i feltene 
    const itemsClick = (e) => {
        const inputbruker = e.target
        setList((prev) => ({...prev, [inputbruker] : e.target.value}))
        

    }

    return (
    <>
    <h1>Handleliste</h1>
    <main>
      <form>
        <label className='inputTitel' htmlFor='itemsName'>Vare</label>
        <input className='inputValue' id='itemsName' type='text' placeholder='Egg...'/>

        <label className='inputTitel' htmlFor='itemsQuantity'>Antall</label>
        <input className='inputValue'  id='itemsQuantity' type='number' placeholder='2' min={1}/>
        <button id='addButton' onClick={itemsClick}>Legg til vare</button>
        
      </form>

      <ul>
        <li>
          <input type="checkbox" id="product1"/>
          <label htmlFor="product1" >Melk</label>
          <label htmlFor="produkct1_quantity">2</label>
          <input id="produkct1_quantity" type="number" className="produkct_quantity"/>
        </li>
        <li>
          <input type="checkbox" id="product2" defaultChecked/>
          <label htmlFor="product2">Egg</label>
          <label htmlFor="produkct2_quantity">1</label>
          <input id="produkct2_quantity" type="number" className="produkct_quantity"/>
        </li>
      </ul>
    </main>


    </>
    )
}