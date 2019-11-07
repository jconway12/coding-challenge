class Season < ApplicationRecord
    validates :season, presence: true
    validates :season, inclusion: { in: ['Summer', 'Fall', 'Winter', 'Spring'] }

    has_many :season_tags

    has_many :items,
    through: :season_tags,
    source: :item
end