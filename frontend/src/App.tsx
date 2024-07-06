import { useEffect } from "react"
import { InterchangeIcon } from "./components/icons/Icons"
import LanguageSelector from "./components/LanguageSelector"
import TextArea from "./components/TextArea"
import { useStore } from "./hooks/useStore"
import { AUTO_LANGUAGES } from "./types/constants"
import { useDebounce } from "./hooks/useDebounce"
import { translateBackend } from "./service/backendTranslate"

function App() {
  const { fromLanguage, toLanguage, selectToLanguages, selectFromLanguages, interchangeLanguages, fromText, translatedText, setFromText, setTranslatedText, loading } = useStore()

  const debouncedFromText = useDebounce(fromText, 300)

  useEffect(() => {
    if (debouncedFromText === '') return
    translateBackend({ fromLanguage, toLanguage, text: debouncedFromText }).then(res => {
      if (res == null) return
      setTranslatedText(res)
    }).catch((e) => setTranslatedText(e))
  }, [fromLanguage, debouncedFromText, toLanguage, setTranslatedText])
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-semibold text-white tracking-widest">AI Translator App</h1>
      </div>
      <div className="grid grid-cols-3 justify-items-center my-24">
        <div className="w-full">
          <LanguageSelector type="from" value={fromLanguage} onChange={selectFromLanguages} />
          <TextArea onChange={setFromText} value={fromText} type="from" />
        </div>
        <div className="w-full max-w-[100px]">
          <button
            disabled={fromLanguage === AUTO_LANGUAGES}
            onClick={interchangeLanguages}
            className={`${fromLanguage === 'auto' ? 'bg-slate-600 bg-opacity-10' : 'bg-slate-500 bg-opacity-30'} rounded p-2 h-12 w-full flex justify-center items-center`}>
            <InterchangeIcon />
          </button>
        </div>
        <div className="w-full">
          <LanguageSelector type="to" value={toLanguage} onChange={selectToLanguages} />
          <TextArea onChange={setTranslatedText} isDisabled={true} value={translatedText} loading={loading} type="to" />
        </div>
      </div>
    </main>
  )
}

export default App
