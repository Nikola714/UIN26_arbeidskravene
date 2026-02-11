import './App.css'
import '../src/style/colors.scss'
import '../src/style/layout.scss'
import '../src/components/ShoppingItem'
import { useState } from "react"
import AddForm from '../src/components/AddForm'
import ShoppingItem from '../src/components/ShoppingItem'



function App (){

  const [list, setItems] = useState([])

  return (
    <>
      <AddForm setItems={setItems}/>
      <ShoppingItem/>
    </>
  )
}

export default App