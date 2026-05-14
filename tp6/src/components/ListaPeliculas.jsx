
function ListadoPelis({ results })
{

{results.map(u => <li> {results.name} - {results.email} </li>)}

  return (
    <div>
      {results.map(pelicula => (
        <Peliculas
          title={pelicula.Title}
          year={pelicula.Year}
          poster={pelicula.Poster}
          type={pelicula.Type}
        />
      ))}
    </div>
  )

}

export default ListadoPelis