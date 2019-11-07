# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.destroy_all
Season.destroy_all
SeasonTag.destroy_all

item1 = Item.create!(title: 'sweater', style: 'wool', color: 'red')
item2 = Item.create!(title: 'pants', style: 'denim', color: 'blue')
item3 = Item.create!(title: 'jacket', style: 'down', color: 'green')
item4 = Item.create!(title: 'dress', style: 'cotton', color: 'purple')
item5 = Item.create!(title: 'hat', style: 'baseball', color: 'blue')

fall = Season.create!(season: 'Fall')
winter = Season.create!(season: 'Winter')
spring = Season.create!(season: 'Spring')
summer = Season.create!(season: 'Summer')

tag1 = SeasonTag.create!(item_id: item1.id, season_id: fall.id)
tag2 = SeasonTag.create!(item_id: item3.id, season_id: fall.id)
tag3 = SeasonTag.create!(item_id: item3.id, season_id: winter.id)
tag4 = SeasonTag.create!(item_id: item2.id, season_id: fall.id)
tag5 = SeasonTag.create!(item_id: item4.id, season_id: summer.id)
tag6 = SeasonTag.create!(item_id: item5.id, season_id: spring.id)




