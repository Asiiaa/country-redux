import { createStore } from "redux"

let initialState = {
    country: [],
    pageLength: 10
}

const store = createStore((state = initialState, action) => {
    switch(action.type){
        case 'SET_COUNTRY': {
            let country = action.country.map((country) => country)
            return {...state, country}
        }
        case 'SET_DEPENDENT': {
            let country = action.country.filter((a) => a.independent).map((country) => country)
            return {...state, country}
        }
        case 'SET_INDEPENDENT': {
            let country = action.country.filter((a) => !a.independent).map((country) => country)
            return {...state, country}
        }
        case 'SET_SORT_POPULATION': {
            let country = action.country.sort((a,b) => b.population - a.population).map((country) => country)
            return {...state, country}
        }
        case 'SET_SORT_AREA': {
            let country = action.country.sort((a,b) => b.area - a.area).map((country) => country)
            return {...state, country}
        }
        case 'SET_VALUE_REGION': {
            let country = action.country.collections.filter((country) => country.region === action.country.valueRegion).map((country) => country)
            return {...state, country}
        }
        case 'SET_VALUE_SUB_REGION': {
            let country = action.country.collections.filter((country) => country.subregion === action.country.valueSubRegion).map((country) => country)
            return {...state, country}
        }
        case 'SET_SEARCH_VALUE': {
            let country = action.country.collections.filter((country) => country.name.common.toLowerCase().includes(action.country.searchValue.toLowerCase())).sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country) => country)
            return {...state, country}
        }
        default: return state
    }
})

export const setCount = (country) => ({type: 'SET_COUNTRY', country})
export const setDependent = (country) => ({type: 'SET_DEPENDENT', country})
export const setInDependent = (country) => ({type: 'SET_INDEPENDENT', country})
export const setSortPopulation = (country) => ({type: 'SET_SORT_POPULATION', country})
export const setSortArea = (country) => ({type: 'SET_SORT_AREA', country})
export const setValueRegion = (country) => ({type: 'SET_VALUE_REGION', country})
export const setValueSubRegion = (country) => ({type: 'SET_VALUE_SUB_REGION', country})
export const setSearchValue = (country) => ({type: 'SET_SEARCH_VALUE', country})

window.store = store
export default store