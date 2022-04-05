export interface Movie {
  _id?: string
  name: string
  genre: string
  duration: number
  rating: number
  views: number
  coverImage: string
  trailerImage: string
}

export interface Trailer {
  _id: string
  trailerImage: string
}

export interface MovieResponse {
  success: boolean
  data: Movie
}

export interface TrailersMovieResponse {
  success: boolean
  data: Trailer[]
}

export interface ListMoviesResponse {
  success: boolean
  data: Movie[]
}
