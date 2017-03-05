# == Schema Information
#
# Table name: videos
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  number      :integer          not null
#  serie_id    :integer          not null
#  thumb_url   :string           not null
#  url         :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
  validates :title, :description, :number, :serie, :thumb_url, :url, presence: true

  belongs_to :serie
end
