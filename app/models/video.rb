# == Schema Information
#
# Table name: videos
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  number     :integer          not null
#  serie_id   :integer          not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Video < ApplicationRecord
  validates :title, :number, :serie, :url, presence: true

  belongs_to :serie
end
