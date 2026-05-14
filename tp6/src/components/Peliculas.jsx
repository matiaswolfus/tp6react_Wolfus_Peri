
function Peliculas({ title, year, poster, type }) {
  return (
    <div>
      <p>{title}, {year},{type}</p>
    <img src={poster} alt={title}/>
    
    </div>
  )
}

export default Peliculas