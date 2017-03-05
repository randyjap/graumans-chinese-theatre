# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  rating      :integer          not null
#  review_text :text             not null
#  serie_id    :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :rating, :review_text, :serie, :user, presence: true
  validates :user, uniqueness: { scope: :serie }
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }

  belongs_to :serie
  belongs_to :user
end
