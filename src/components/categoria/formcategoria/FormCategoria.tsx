import { useNavigate, useParams } from "react-router-dom";
import type { Categoria } from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

function FormCategoria() {


    const navigate = useNavigate();

const [tema, setCategoria] = useState<Categoria>({} as Categoria)

const [isLoading, setIsLoading] = useState<boolean>(false)


const { id } = useParams<{ id: string }>();


useEffect(() => {
    if (id !== undefined) {
        buscarPorId(id)
    }
}, [id])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
        ...categoria,
        [e.target.name]: e.target.value
    })
}

function retornar() {
    navigate("/categoria")
}

async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
        try {
            await atualizar(`/temas`, tema, setTema, {
                headers: { 'Authorization': token }
            })
            ToastAlerta('O Tema foi atualizado com sucesso!', "sucesso")
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao atualizar o tema.',"erro")
            }
        }
    } else {
        try {
            await cadastrar(`/temas`, tema, setCategoria, {
                headers: { 'Authorization': token }
            })
            ToastAlerta('A Categoria foi cadastrado com sucesso!', "sucesso")
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao cadastrar categoria.', "erro")
            }
        }
    }

    setIsLoading(false)
    retornar()
}
    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" 
                onSubmit={gerarNovaCategoria}>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange= {(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

                    {isLoading ?
                    <ClipLoader 
                        color="#ffffff"
                        size={24}
                        />:
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'} </span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;

function ToastAlerta(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
