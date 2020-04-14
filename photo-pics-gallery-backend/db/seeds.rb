# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Category.destroy_all
Picture.destroy_all
Like.destroy_all

users = ["Adam","Mike","Jimmy","Lisa","Janette","Lucy"];
created_users = users.map { |use| User.create(username: use) }

sports = Category.create(name: "Sports")
games = Category.create(name: "Games")
leisure = Category.create(name: "Leisure")
events = Category.create(name: "Events")
soccer = Category.create(name: "Soccer")

categories = [sports, games, leisure, events, soccer]

soccer = Picture.create(creator: created_users[0], img_url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg")


categories.each do |category|
    10.times do
        PictureCategory.create(picture: soccer, category: category)
    end
end

created_users.each do |user|
  Picture.all.each do |pic|
    user.likes_picture(pic)
  end
end
