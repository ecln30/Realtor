













import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '1f6ca72a59msha91b8dac1d9dc8dp1c9b02jsn2fedbbf50fc5',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
}


























































