const movies = [
  {
    name: 'A Terror on Night Street',
    genre: 'horror'
  },
  {
    name: 'Happy Penguin',
    genre: 'comedy'
  },
  {
    name: 'The Longest Mile',
    genre: 'drama'
  },
  {
    name: 'Hero Action Full Force',
    genre: 'action'
  }
]

const familyFriendly = ['comedy', 'drama']

function addFriendlyness(movie) {
  return {
    name: movie.name, 
    genre: movie.genre,
    familyFriendly: familyFriendly.includes(movie.genre)
  }
}

function filterFamilyFriendly(movie) {
  return movie.familyFriendly
}

function mapToNames(movie) {
  return movie.name
}

const familyFriendlyMovies = movies.map(addFriendlyness)
                                   .filter(filterFamilyFriendly)
                                   .map(mapToNames)

console.log(familyFriendlyMovies)
