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

################################################################################

# Planet Earth

planet_earth = Serie.create!(
  name: "Planet Earth",
  year: 2014,
  mpaa_rating: "PG-13",
  description: "Planet Earth is a landmark 2006 British television series produced by the BBC Natural History Unit. Five years in the making, it was the most expensive nature documentary series ever commissioned by the BBC and also the first to be filmed in high definition!",
  thumb_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839096/planet_earth_thumb_vloz33.jpg",
  screenshot_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839097/planet_earth_scene_jdoj8y.jpg",
  genre: Genre.find_by(name: "Documentaries")
)

Video.create!(
  title: "Episode One",
  number: 1,
  serie: planet_earth,
  url: "2yXS1MACnTA"
)

# Africa

africa = Serie.create!(
  name: "Africa",
  year: 2013,
  mpaa_rating: "PG-13",
  description: "The series opens in Africa's south west corner and features the wildlife and landscapes of the Kalahari and Namib deserts. Starlight cameras reveal previously unfilmed nocturnal behaviour of black rhinos as they socialise at a Kalahari waterhole, and super slow motion footage captures a fierce battle between two male giraffes. Other sequences show Namibia's famous and mysterious fairy circles, how a fork-tailed drongo's talent for mimicry allows it to steal a meal from a meerkat clan, how ostrichs help their chicks find water, and how red-billed queleas defend their nests from marauding armoured bush crickets.",
  thumb_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839091/africa_thumb_gwehny.jpg",
  screenshot_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839095/africa_scene_uro2eh.jpg",
  genre: Genre.find_by(name: "Documentaries")
)

Video.create!(
  title: "Episode One",
  number: 1,
  serie: africa,
  url: "Acs5Ic2RFuA"
)

# Jungles

jungles = Serie.create!(
  name: "Jungles",
  year: 2017,
  mpaa_rating: "PG-13",
  description: "The Wildlife Specials have always been broadcast on BBC One. Following the pilot Great White Shark: The True Story of Jaws, transmitted in 1995, a sequence of six further programmes were broadcast in 1997, as part of the Natural History Unit's 40th anniversary celebrations.",
  thumb_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839096/jungles_thumb_fwzmeu.jpg",
  screenshot_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839099/jungle_scene_drwazt.jpg",
  genre: Genre.find_by(name: "Documentaries")
)

Video.create!(
  title: "Episode One",
  number: 1,
  serie: jungles,
  url: "H9MV5CgPgIQ"
)

# Life

life = Serie.create!(
  name: "Life",
  year: 2000,
  mpaa_rating: "PG-13",
  description: "Life is a British nature documentary series created and produced by the BBC in association with The Open University. It was first broadcast as part of the BBC's Darwin Season on BBC One and BBC HD from October to December 2009. The series takes a global view of the specialised strategies and extreme behaviour that living things have developed in order to survive; what Charles Darwin termed \"the struggle for existence\". Four years in the making, the series was shot entirely in high definition.",
  thumb_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839095/life_thumb_qdsep5.jpg",
  screenshot_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839095/life_scene_lplqy8.jpg",
  genre: Genre.find_by(name: "Documentaries")
)

Video.create!(
  title: "Episode One",
  number: 1,
  serie: life,
  url: "7wKu13wmHog"
)

# Stranger Things

stranger_things = Serie.create!(
  name: "Stranger Things",
  year: 2016,
  mpaa_rating: "R",
  description: "Set in the fictional town of Hawkins, Indiana in the 1980s, the first season focuses on the investigation into the disappearance of a young boy by his brother and traumatized mother and the local police chief, amid supernatural events occurring around the town including the appearance of a psychokinetic girl who helps the missing boy's friends in their own search. The second season is set a year after the first, and deals with attempts of the characters to return to normal and consequences from that season.",
  thumb_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839096/stranger_things_thumb_x4jiht.jpg",
  screenshot_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839102/stranger_things_scene_ro74wz.jpg",
  genre: Genre.find_by(name: "TV Shows")
)

Video.create!(
  title: "Episode One",
  number: 1,
  serie: stranger_things,
  url: "XWxyRG_tckY"
)

# Narcos

narcos = Serie.create!(
  name: "Narcos",
  year: 2015,
  mpaa_rating: "R",
  description: "The first season of Narcos, an American crime thriller drama web television series produced and created by Chris Brancato, Carlo Bernard, and Doug Miro, follows the story of notorious drug kingpin Pablo Escobar, who became a billionaire through the production and distribution of cocaine, while also focusing on Escobar's interactions with drug lords, DEA agents, and various opposition entities.",
  thumb_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839096/narcos_thumb_pyaypc.jpg",
  screenshot_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839097/narcos_scene_aw9egu.jpg",
  genre: Genre.find_by(name: "TV Shows")
)

Video.create!(
  title: "Episode One",
  number: 1,
  serie: narcos,
  url: "U7elNhHwgBU"
)

# House of Cards

house_of_cards = Serie.create!(
  name: "House of Cards",
  year: 2013,
  mpaa_rating: "R",
  description: "Set in present-day Washington, D.C., House of Cards is the story of Frank Underwood (Kevin Spacey), a Democrat from South Carolina's 5th congressional district and House Majority Whip. After being passed over for appointment as Secretary of State, he initiates an elaborate plan to get himself into a position of greater power, aided by his wife, Claire Underwood (Robin Wright). The series deals primarily with themes of ruthless pragmatism, manipulation and power.",
  thumb_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839092/house_of_cards_thumb_kimswu.jpg",
  screenshot_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839094/house_of_cards_scene_uvywnp.jpg",
  genre: Genre.find_by(name: "TV Shows")
)

Video.create!(
  title: "Episode One",
  number: 1,
  serie: house_of_cards,
  url: "ULwUzF1q5w4"
)

# Game of Thrones

game_of_thrones = Serie.create!(
  name: "Game of Thrones",
  year: 2007,
  mpaa_rating: "R",
  description: "Set on the fictional continents of Westeros and Essos, it has several plot lines and a large ensemble cast. The first story arc follows a dynastic conflict among competing claimants for succession to the Iron Throne of the Seven Kingdoms, with other noble families fighting for independence from the throne. The second covers attempts to reclaim the throne by the exiled last scion of the realm's deposed ruling dynasty; the third chronicles the threat of the impending winter and the legendary creatures and fierce peoples of the North.",
  thumb_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839092/game_of_thrones_thumb_etbybo.jpg",
  screenshot_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488839094/game_of_thrones_scene_soz63u.jpg",
  genre: Genre.find_by(name: "TV Shows")
)

Video.create!(
  title: "Episode One",
  number: 1,
  serie: game_of_thrones,
  url: "iGp_N3Ir7Do"
)

# Breaking Bad

breaking_bad = Serie.create!(
  name: "Breaking Bad",
  year: 2010,
  mpaa_rating: "R",
  description: "Breaking Bad is widely regarded as one of the greatest television series of all time. By the time the series finale aired, the series was among the most-watched cable shows on American television. The show received numerous awards, including sixteen Primetime Emmy Awards, eight Satellite Awards, two Golden Globe Awards, two Peabody Awards, two Critics' Choice Awards, and four Television Critics Association Awards.",
  thumb_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488755216/slider_example_genc7a.jpg",
  screenshot_url: "http://res.cloudinary.com/dkympkwdz/image/upload/v1488765718/serie_artwork_example_dfhuep.jpg",
  genre: Genre.find_by(name: "TV Shows")
)

Video.create!(
  title: "Episode One",
  number: 1,
  serie: breaking_bad,
  url: "F1HNuAE9WdU"
)

################################################################################

SerieList.create!(
  user: User.first,
  serie: planet_earth
)

Review.create!(
  rating: 5,
  review_text: "I was blown away!",
  serie: Serie.first,
  user: User.first
)
