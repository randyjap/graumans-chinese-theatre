@videos.each do |video|
  json.set! video.id do
    json.extract! video,
      :id,
      :title,
      :number,
      :serie_id,
      :url
  end
end
