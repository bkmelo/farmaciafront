import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
//import Foote




function App() {
  
  return (
    <>

      <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categoria/:id" element={<Categoria />} />
        <Route path="/categoria" element={<ListarCategorias />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        
        </Routes>

      </div>
      {/* <Footer /> */}
      </BrowserRouter>
      </>
  )
}

export default App


 <
        
 