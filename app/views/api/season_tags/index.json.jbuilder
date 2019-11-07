@season_tags.each do |tag|
    json.set! tag.id do 
        json.extract! tag, :season_id, :item_id
    end
end