export default function AddForm({setList}) {

    const handleListe = (e) => {
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
        <button id='addButton' onClick={handleListe}>Legg til vare</button>
      </form>
    </main>
    </>
    )
}