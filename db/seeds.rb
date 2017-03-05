mpaa_ratings = ["G", "PG", "PG-13", "R", "NC-17"]

genres = ["TV Shows", "Action", "Anime", "Children & Family", "Classics",
  "Comedies", "Cult Movies", "Documentaries", "Dramas", "Faith & Spirituality",
  "Gay & Lesbian", "Horror", "Independent", "International", "Music",
  "Musicals", "Romance", "Sci-Fi Fantasy", "Special Interest",
  "Sports Movie", "Stand-up & Talk Shows", "Thrillers"]

User.create(
  username: "Guest",
  password: "password"
)

genres.each do |genre|
  Genre.create!(
    name: genre
  )
end

adventure_movie = Serie.create!(
  name: "Adventure Movie Series",
  year: 2017,
  mpaa_rating: mpaa_ratings.first,
  description: "Amazing adventure movie!",
  cover_url: "Some URL",
  genre: Genre.first
)

Video.create!(
  title: "Episode one: Into the unknown",
  description: "First of trilogy!",
  number: 1,
  serie: adventure_movie,
  thumb_url: "Some URL",
  url: "example.com"
)

SerieList.create!(
  user: User.first,
  serie: adventure_movie
)

Review.create!(
  rating: 5,
  review_text: "I was blown away!",
  serie: Serie.first,
  user: User.first
)
