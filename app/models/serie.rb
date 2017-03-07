# == Schema Information
#
# Table name: series
#
#  id             :integer          not null, primary key
#  name           :string           not null
#  year           :integer          not null
#  mpaa_rating    :string           not null
#  description    :text             not null
#  thumb_url      :string           not null
#  screenshot_url :string           not null
#  genre_id       :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Serie < ApplicationRecord
  validates :name, :year, :mpaa_rating, :description, :thumb_url, :screenshot_url, :genre, presence: true

  has_many :videos
  has_many :serie_lists
  has_many :reviews
  belongs_to :genre

  def avg_rating
    self.reviews.average(:rating).round(0).to_i
  end
end
