export interface Comments {
  id?: string,
  comment: string,
  estado_eliminado: boolean,
  estado_leido: boolean,
  fechaHoraActualizacion: string,
  fechaHoraRegistro: string,
  type_comment: string,
  user_Id?: string,
  visto: boolean
}
