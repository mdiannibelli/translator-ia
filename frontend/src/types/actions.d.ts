import { FromLanguages, Languages } from "./languages";

export type Action =
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SELECT_FROM_LANGUAGES', payload: FromLanguages }
    | { type: 'SELECT_TO_LANGUAGES', payload: Languages }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_TRANSLATED_TEXT', payload: string }