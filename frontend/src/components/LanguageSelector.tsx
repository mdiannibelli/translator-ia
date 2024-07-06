import { ALLOWED_LANGUAGES, AUTO_LANGUAGES } from '../types/constants'
import { FromLanguages, Languages } from '../types/languages'

type Props =
    | { type: 'from', value: FromLanguages, onChange: (language: FromLanguages) => void }
    | { type: 'to', value: Languages, onChange: (language: Languages) => void }

const LanguageSelector = ({ type, value, onChange }: Props) => {

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as Languages)
    }

    return (
        <select value={value} onChange={handleSelect} name="languages" id="languages" className='select-none outline-none p-2 rounded-lg bg-black w-full pr-24  bg-opacity-10 text-white appearance-none'>
            {type === 'from' && <option className=' bg-opacity-10 appearance-none bg-black' value={AUTO_LANGUAGES}>Auto detect</option>}
            {
                Object.entries(ALLOWED_LANGUAGES).map(([key, value]) => (
                    <option className=' bg-opacity-10 appearance-none bg-black' key={key} value={key}>
                        {value}
                    </option>
                ))
            }
        </select>
    )
}

export default LanguageSelector
