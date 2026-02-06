import './App.css'
import '../src/style/style.scss'

function shoppingList (){


  return (
    <main>
      <h1>Handleliste</h1>
      <label htmlFor='itemsName'>Vare</label>
      <input id='itemsName' type='text' placeholder='Egg...'/>

      <label htmlFor='itemsQuantity'>Antall</label>
      <input id='itemsQuantity' type='number' placeholder='2'/>
    </main>
  )
}

export default shoppingList
