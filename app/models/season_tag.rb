class SeasonTag < ApplicationRecord 
    belongs_to :season 
    
    belongs_to :item
end