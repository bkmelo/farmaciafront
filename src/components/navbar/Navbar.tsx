import { Link, useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate();

  return (
    <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>

        <div className="container flex justify-between text-lg mx-8">
          <Link to='/home' className="text-2xl font-bold">Farmácia da Bruh</Link>

          <div className='flex gap-4'>
            <Link to='/categoria' className='hover:underline'>Listar Categorias</Link>
            <Link to='/categoria' className='hover:underline'>Cadastrar Categorias</Link>
            
          </div>
        </div>
      </div>
  )
}

export default Navbar


