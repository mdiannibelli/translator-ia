interface Props {
    value: string
    isDisabled?: boolean
    onChange: (value: string) => void
    loading?: boolean
    type: "from" | "to"
}

const TextArea = ({ value, isDisabled, onChange, loading, type }: Props) => {
    const getPlaceholder = () => {
        if (loading === true) return "Loading..."
        if (type === "from") return "Enter your text to translate"
        return 'Traduction'
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }
    return (
        <textarea onChange={handleChange} disabled={isDisabled} value={value} className='h-40 w-full bg-black bg-opacity-30 mt-2 rounded text-white select-none outline-none p-2' name="" id="" placeholder={getPlaceholder()}></textarea>
    )
}

export default TextArea
