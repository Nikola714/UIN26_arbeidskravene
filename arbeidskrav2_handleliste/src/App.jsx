import './App.css'
import '../src/style/colors.scss'
import '../src/style/layout.scss'
import '../src/components/ShoppingItem'
import { useState } from "react"
import AddForm from '../src/components/AddForm'
import ShoppingList from './components/ShoppingList'



function App (){

  const [list, setItems] = useState([
    {
      id: 1,
      name: 'melk',
      quantity: 1,
      purchased: false
    },
    {
      id: 2,
      name: 'egg',
      quantity: 3,
      purchased: true
    }
  ])

  function addItem(name, quantity){
    const newItem = {
      id: Math.floor(Math.random() * 100000000),
      name: name,
      quantity: quantity,
      purchased: false
    }

    setItems([newItem, ...list])
  }
  
  return (
    <>
    <section>
      <AddForm addItem={addItem}/>
    </section>
    <section>
      <ShoppingList list={list}/>
    </section>
      
    </>
  )


}

export default App