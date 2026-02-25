import { useState } from "react";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import type { Categoria } from "../../../models/Categoria";
import { useNavigate } from "react-router-dom";


function ListaCategoria() {

  const navigate = useNavigate();

  const[isLoading, setIsLoading] = useState<boolean>(false)

  const [categoria, setCategoria] = useState<Categoria[]>([])


  async function buscarCategoria() {
      try{

        setIsLoading(true)

          await buscar('/categoria', setCategoria)
      } catch (error: any) {
        console.log(error)
       
      }finally {
          setIsLoading(false)
      }

  }

    return (
        <>

         {isLoading && (
    <SyncLoader
        color="#312e81"
    	size={32}
	/>
)}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">


                  {(!isLoading && categoria.length === 0) && (
	<span className="text-3xl text-center my-8">
		Nenhuma Categoria foi encontrada!
	</span>
)}
                    <div className="grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-3 gap-8">
                        
{
    categoria.map((categoria) => (
    	<CardCategoria key={categoria.id} categoria={categoria}/>
    ))
}



                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaTemas;