import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import ListaCategoria from "./components/categoria/listarcategorias/ListaCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"




function App() {
  
  return (
    <>

      <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categoria/:id" element={<FormCategoria />} />
        <Route path="/categoria" element={<ListaCategoria />} />
        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
        <Route path="/editarcategoria/:id" element={<FormCategoria />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

        
        </Routes>

      </div>
      <Footer />
      </BrowserRouter>
      </>
  )
}

export default App



        
 