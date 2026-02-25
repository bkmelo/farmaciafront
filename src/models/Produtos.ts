import type { Categoria } from "./Categoria";

export interface Produtos{
   
  id:number;
  titulo: string;
  texto: string;
  data: string;
  categoria: Categoria | null;
}