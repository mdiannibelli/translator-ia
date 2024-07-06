import { ALLOWED_LANGUAGES, AUTO_LANGUAGES } from "./constants";

export type Languages = keyof typeof ALLOWED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGES

export type FromLanguages = Languages | AutoLanguage