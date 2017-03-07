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

require 'test_helper'

class SerieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
