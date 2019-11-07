class Item < ApplicationRecord 
    validates :title, :style, :color, presence: true

    has_many :season_tags 
    
    has_many :seasons,
    through: :season_tags,
    source: :season
end