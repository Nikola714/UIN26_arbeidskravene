import './App.css'
import '../src/style/colors.scss'
import '../src/style/layout.scss'
import '../src/components/AddForm'
import '../src/components/ShoppingItem'
import '../src/components/ShoppingList'




function shoppingList (){


  return (
    <main>
      <h1>Handleliste</h1>
      <form>
        <label className='inputTitel' htmlFor='itemsName'>Vare</label>
        <input className='inputValue' id='itemsName' type='text' placeholder='Egg...'/>

        <label className='inputTitel' htmlFor='itemsQuantity'>Antall</label>
        <input className='inputValue'  id='itemsQuantity' type='number' placeholder='2' min={1}/>
        <button id='addButton' >Legg til vare</button>
      </form>
    </main>
  )
}

export default shoppingList
