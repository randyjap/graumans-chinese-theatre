@genres.each do |genre|
  json.set! genre.name do
    genre.series.each do |serie|
      json.set! serie.id do
        url = serie.videos.first.url
        json.set! :url, url
        json.extract! serie,
                      :id,
                      :name,
                      :year,
                      :mpaa_rating,
                      :description,
                      :thumb_url,
                      :screenshot_url
      end
    end
  end
end
