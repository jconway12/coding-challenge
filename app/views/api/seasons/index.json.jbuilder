@seasons.each do |season|
    itemsArr = []
    season.items.each do |item|
        itemsArr << item.id
    end   

    json.set! season.id do 
        json.extract! season, :id, :season
        json.items itemsArr
    end
end