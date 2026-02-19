export default function AddForm({addItem}) {
  
    //Funksjon for å legge til ny elementer
    const itemsClick = (e) => {
      e.preventDefault()  //stopper nettleserens standard handling, slik at nettside skal ikke oppdatere seg på nytt når ny element skal legges til liste

      //henter verdi fra ny elementer, altså elementer som brukeren skrevet in i input felte
      const name = e.target.name.value;
      const quantity = e.target.quantity.value;

      addItem(name, quantity)

      e.target.reset() //tommer inputfelte

      if(!name && !quantity){
        alert("Feil")
      }
      if (!name){
        alert("Name")
      }
      if(!quantity){
        alert("0")
      }

    }

    return (
      //Skjema
      <>
      <h1>Handleliste</h1>
      <main>
        <form onSubmit={itemsClick} className="form">
          <label className='inputTitel' htmlFor='itemsName'>Vare</label>
            <input className='inputValue' name="name" id='itemsName' type='text' placeholder='Egg...'/>

          <label className='inputTitel' htmlFor='itemsQuantity'>Antall</label>
          <input className='inputValue' name="quantity" id='itemsQuantity' type='number' placeholder='2' min={1}/>
          <button id='addButton'>Legg til vare</button>
        </form>
      </main>
    </>
    )

}