@seasons.each do |season|
    json.set! season.id do 
        json.extract! season, :id, :season
    end
end