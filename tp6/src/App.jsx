import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import SearchBar from './components/searchBar'



function App() {

const [results, setResults] = useState([])
const [selectedId, setSelectedId] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)



const buscarPeliculas = async (query) => {

    setLoading(true)
  try {
    const results = await axios.get(`http://www.omdbapi.com/?apikey=2fa6fcc7&s=${query}`);
    setResults(results.data.Search)
    } catch (error) {

      setError("Ocurrió un error al buscar.")
  }
  setLoading(false)

}

return (
  <div>
    <h1>Buscador de Películas</h1>
    <SearchBar onSearch={buscarPeliculas} />
  </div>
)
}
export default App