import { useReducer } from "react";
import { Action } from "../types/actions";
import { State } from "../types/states";
import { FromLanguages, Languages } from "../types/languages";

const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'es',
    fromText: '',
    translatedText: '',
    loading: false,
}

function reducer(state: State, action: Action) {
    if (action.type === 'INTERCHANGE_LANGUAGES') {
        if (state.fromLanguage === 'auto') return state
        return {
            ...state,
            loading: true,
            result: '',
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }

    if (action.type === 'SELECT_FROM_LANGUAGES') {
        if (state.fromLanguage === action.payload) return state
        return {
            ...state,
            loading: true,
            result: '',
            fromLanguage: action.payload
        }
    }

    if (action.type === 'SELECT_TO_LANGUAGES') {
        if (state.toLanguage === action.payload) return state
        return {
            ...state,
            loading: true,
            toLanguage: action.payload,
            result: '',
        }
    }

    if (action.type === 'SET_FROM_TEXT') {
        return {
            ...state,
            loading: true,
            result: '',
            fromText: action.payload
        }
    }

    if (action.type === 'SET_TRANSLATED_TEXT') {
        return {
            ...state,
            loading: false,
            translatedText: action.payload
        }
    }

    return state;
}

export const useStore = () => {
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        translatedText,
        loading
    }, dispatch] = useReducer(reducer, initialState)


    const interchangeLanguages = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    }

    const selectFromLanguages = (payload: FromLanguages) => {
        dispatch({ type: 'SELECT_FROM_LANGUAGES', payload })
    }

    const selectToLanguages = (payload: Languages) => {
        dispatch({ type: 'SELECT_TO_LANGUAGES', payload })
    }

    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }

    const setTranslatedText = (payload: string) => {
        dispatch({ type: 'SET_TRANSLATED_TEXT', payload })
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        translatedText,
        loading,
        interchangeLanguages,
        selectFromLanguages,
        selectToLanguages,
        setFromText,
        setTranslatedText
    }
}