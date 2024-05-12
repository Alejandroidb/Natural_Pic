import Navigation from "./components/Navigation"
import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Favoritas from "./views/Favoritas"

function App() {
  

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Favoritas" element={<Favoritas/>} />
      </Routes>
    </>
  )
}

export default App
