import { FromLanguages, Languages } from "./languages"

export interface State {
    fromLanguage: FromLanguages
    toLanguage: Languages
    fromText: string
    translatedText: string
    loading: boolean
}