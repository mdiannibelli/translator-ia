import { FromLanguages, Languages } from "../types/languages";

export async function translateBackend({ fromLanguage, toLanguage, text }: { fromLanguage: FromLanguages, toLanguage: Languages, text: string }) {
    if (fromLanguage === toLanguage) return
    try {
        const res = await fetch('http://localhost:3000/api/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fromLanguage,
                toLanguage,
                text
            })
        })

        if (!res.ok) { throw new Error("Bad response") }

        const data = await res.json()
        return data.translatedText
    } catch (error) {
        console.log(error)
    }
}