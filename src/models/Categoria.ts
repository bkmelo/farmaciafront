import type { Produtos } from "./Produtos";

export interface Categoria{

  id: number;
  descricao: string;
  postagem?: Produtos[] | null ;
}