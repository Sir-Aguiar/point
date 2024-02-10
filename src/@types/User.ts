import { IPoint } from "./Point";

/**
 * @description Esta interface representa a entidade `User` no banco de dados.
 *
 * Este é o modelo que representa cada documento da coleção `Users`
 *
 * Em NoSQL (não relacional), coleções = tabelas, documentos = linhas
 *
 */
export interface IUser {
  userId: string;
  email: string;
  name: string;
  password: string;
  pointRegisters: IPoint[];
  createdAt: Date;
}

/**
 * @description Dados necessários para se criar um novo usuário
 *
 * Segue a ilustração de **UMA DAS MANEIRAS** de se usar esta interface:
 *
 * ```
 * function criarUsuario({ email, name, password }:CreateUserInput) {
 * // Realizar verificações
 * // Inserir no banco de dados
 * }
 * ```
 */
export interface CreateUserInput {
  email: string;
  name: string;
  password: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface IAuthToken {
  userId: string;
  email: string;
  name: string;
}
