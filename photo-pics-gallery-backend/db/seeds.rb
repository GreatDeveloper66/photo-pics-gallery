# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bro = User.create(username: "Bro")

sports = Category.create(name: "Sports")

soccer = Picture.create(creator: bro, img_url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg")

PictureCategory.create(picture: soccer, category: sports)