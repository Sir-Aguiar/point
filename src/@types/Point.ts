export interface ISheetIntegration {
  tutorEmail: string;
  associatedStudentsEmail: string[];
  googleSheetsLink: string;
}

/**
 * @description Esta interface representa a entidade `Point` no banco de dados.
 *
 * Este é o modelo que representa cada documento da coleção `Points`
 */
export interface IPoint {
  pointId: string;
  userEmail: string;
  observation: string | null;
  joinedAt: {seconds: number};
  leftAt: Object | null;
}

/**
 * @description Dados necessários para se criar um novo documento na coleção `Points`
 *
 * Segue a ilustração de **UMA DAS MANEIRAS** de se usar esta interface:
 *
 * ```
 * function baterPonto({ userEmail, observation, joinedAt }: CreatePointInput) {
 * // Realizar verificações
 * // Inserir no banco de dados
 * }
 * ```
 */
export interface CreatePointInput {
  userEmail: string;
  observation: string | null;
  joinedAt: Date;
}

export interface FinishPointInput {
  observation: string | null;
  leftAt: Date;
}
