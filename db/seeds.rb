# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.destroy_all

item1 = Item.create!(title: 'sweater', style: 'wool', color: 'red')
item2 = Item.create!(title: 'pants', style: 'denim', color: 'blue')
item3 = Item.create!(title: 'jacket', style: 'down', color: 'green')
item4 = Item.create!(title: 'dress', style: 'cotton', color: 'purple')
item5 = Item.create!(title: 'hat', style: 'baseball', color: 'blue')
