class Season < ApplicationRecord
    validates :season, presence: true

    has_many :season_tags

    has_many :items,
    through: :season_tags,
    source: :item
end