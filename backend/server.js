const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000;
const url = 'https://libretranslate.com/translate'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.post('/api/translate', async (req, res) => {
    const { fromLanguage, toLanguage, text } = req.body;

    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                q: text,
                source: fromLanguage,
                target: toLanguage,
                format: 'text'
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) throw new Error("Error en la solicitud")
        const data = await response.json()
        res.json({ translatedText: data.translatedText })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.get('/api/translate', (req, res) => {
    res.json("Api translate")
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})