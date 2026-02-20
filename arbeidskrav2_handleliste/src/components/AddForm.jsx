export default function AddForm({addItem}) {
  
    //Funksjon for å legge til ny elementer
    const itemsClick = (e) => {
      e.preventDefault()  //stopper nettleserens standard handling, slik at nettside skal ikke oppdatere seg på nytt når ny element skal legges til liste

      //henter verdi fra ny elementer, altså elementer som brukeren skrevet in i input felte
      const name = e.target.name.value;
      const quantity = e.target.quantity.value;
      //If test for å sjekke om alle feltene ble fylt på, if test sier; hvis noe ble ikke legget til så skriv alert og ikke legg noe til liste, for å unngå tomt felte i liste
      if(!name && !quantity){
        return alert("Du legget ikke noe til liste, skriv navn for vare og antall :)")
      }
      if(!name){
        return alert("Du mangler navn for vare")
      }
      if(!quantity){
        return alert("Du mangler antall for produkt")
      }
      addItem(name, quantity)

      e.target.reset() //tommer inputfelte

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