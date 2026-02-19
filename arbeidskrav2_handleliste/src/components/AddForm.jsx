export default function AddForm({addItem}) {
  
    const itemsClick = (e) => {
      e.preventDefault()

      const name = e.target.name.value;
      const quantity = e.target.quantity.value;

      addItem(name, quantity)

      e.target.reset()

    }

    return (
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