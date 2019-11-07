@items.each do |item|
    seasonsArr = []
    item.seasons.each do |season|
        seasonsArr << season.id
    end    
    
    json.set! item.id do 
        json.extract! item, :id, :style, :color, :title
        json.seasons seasonsArr
    end
end