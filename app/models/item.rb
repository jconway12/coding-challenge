class Item < ApplicationRecord 
    validates :title, :style, :color, presence: true

    #associations
end