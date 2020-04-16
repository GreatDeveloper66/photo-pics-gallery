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

users = ["Adam Shaffer","Mike Pottebaum","Jimmy Hoffa","Lisa Leslie","Janet Napolitano","Lucy Liu"];
created_users = users.map { |use| User.create(username: use) }


sports = Category.create(name: "Sports")
games = Category.create(name: "Games")
leisure = Category.create(name: "Leisure")
events = Category.create(name: "Events")
soccer = Category.create(name: "Soccer")
basketball = Category.create(name: "Basketball")
football = Category.create(name: "Football")
tennis = Category.create(name: "Tennis")
history = Category.create(name: "History")
hockey =  Category.create(name: "Hockey")


# categories = [sports, games, leisure, events, soccer]

kids_soccer = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, leisure.id, soccer.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg")
lebron = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, basketball.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/LeBron_James_Layup_%28Cleveland_vs_Brooklyn_2018%29.jpg")
basketball_worldcup = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, basketball.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Basketball_World_Cup_2014.jpg")
outdoor_basketball = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, basketball.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Basketball_Goal.jpg")
cowboys = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, football.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/7/74/Arian_Foster_fumble.jpg")
steelers = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, football.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Jeff_Reed_kickoff_2006.jpg")
cardinals = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, football.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/d/df/Larry_Fitzgerald_catches_TD_at_2009_Pro_Bowl.jpg")
federer = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, tennis.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Roger_Federer_2012_Indian_Wells.jpg")
lawn_tennis = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, tennis.id, history.id, leisure.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/South_End_Lawn_Tennis_Club%2C_Halifax%2C_Nova_Scotia%2C_Canada%2C_ca._1900_-_cropped.jpg")
wimbledon = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, tennis.id, events.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Centre_Court.jpg")
rink_hockey = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, hockey.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Argentin_player_during_2007_rink_hockey_world_championship.jpg")
box_hockey = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id, hockey.id, history.id], img_url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Boxhockey1935.jpg")


created_users.each do |user|
  Picture.all.each do |pic|
    user.likes_picture(pic)
  end
end
