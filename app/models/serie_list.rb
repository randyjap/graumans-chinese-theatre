# == Schema Information
#
# Table name: serie_lists
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  serie_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SerieList < ApplicationRecord
  validates :user, :serie, presence: true
  belongs_to :user
  belongs_to :serie
end
