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

require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
