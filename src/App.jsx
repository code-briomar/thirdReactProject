import './App.css'
import Navbar from "./assets/Navbar"
import Tile from "./assets/Tile"
import Data from "./assets/Data"

function App() {
  let dataMapped = Data.map(eachLocation=>{
    return <Tile key={eachLocation.id} {...eachLocation}/>
  })
  return (
    <div className="App">
      <Navbar />
      {dataMapped}
    </div>
  )
}

export default App
