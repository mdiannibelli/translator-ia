import { FromLanguages, Languages } from "../types/languages";



export async function translate({ fromLanguage, toLanguage, text }: { fromLanguage: FromLanguages, toLanguage: Languages, text: string }) {
    if (fromLanguage === toLanguage) return

    const url = 'https://es.libretranslate.com/translate'
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: fromLanguage,
            target: toLanguage,
            format: "text",
            api_key: ""
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) throw new Error("Error at response")

    const data = await response.json()
    return data.translatedText;
}