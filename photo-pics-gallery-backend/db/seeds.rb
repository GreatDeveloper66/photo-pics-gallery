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
work = Category.create(name: "Work")
building = Category.create(name: "Building")
architecture = Category.create(name: "Architecture")
nature = Category.create(name: "Nature")
food = Category.create(name: "Food")


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
workers_desk = Picture.create(creator: created_users.sample, category_ids: [work.id], img_url: "https://www.dropbox.com/s/1u1kmq4q1r6ropu/1%2AzB8InrY8_Eh1WSyTJYAh9g.jpeg?raw=1")
concert_lights = Picture.create(creator: created_users.sample, category_ids: [leisure.id,events.id], img_url: "https://www.dropbox.com/s/6w61kkmstlylwdj/alexander-popov-hTv8aaPziOQ-unsplash.jpg?raw=1")
archer = Picture.create(creator: created_users.sample, category_ids: [leisure.id,sports.id], img_url: "https://www.dropbox.com/s/9zvey89zlk69ghw/annie-spratt-jY9mXvA15W0-unsplash.jpg?raw=1")
concert_people = Picture.create(creator: created_users.sample, category_ids: [leisure.id,events.id], img_url: "https://www.dropbox.com/s/1rsdh9e1xva85ke/anthony-delanoix-hzgs56Ze49s-unsplash.jpg?raw=1")
concert_performer = Picture.create(creator: created_users.sample, category_ids: [leisure.id,events.id], img_url: "https://www.dropbox.com/s/hdetvvyz3qczm92/austin-neill-hgO1wFPXl3I-unsplash.jpg?raw=1")
boys_playing = Picture.create(creator: created_users.sample, category_ids: [leisure.id,history.id], img_url: "https://www.dropbox.com/s/r2kv7j6wvrus6yj/Boys_with_hoops_on_Chesnut_Street.jpg?raw=1")
runner = Picture.create(creator: created_users.sample, category_ids: [leisure.id,sports.id], img_url: "https://www.dropbox.com/s/r11qtky2tmdo02g/braden-collum-9HI8UJMSdZA-unsplash.jpg?raw=1")
working_desk = Picture.create(creator: created_users.sample, category_ids: [work.id], img_url: "https://www.dropbox.com/s/km6ft0c16znrwz3/campaign-creators-e6n7uoEnYbA-unsplash.jpg?raw=1")
sphinx = Picture.create(creator: created_users.sample, category_ids: [history.id], img_url: "https://www.dropbox.com/s/z9v1oyytlm6dx88/daniel-h-tong-xBeid9r1paU-unsplash.jpg?raw=1")
rome = Picture.create(creator: created_users.sample, category_ids: [history.id], img_url: "https://www.dropbox.com/s/98rfx1nu2lh5a7n/dario-veronesi-lUO-BjCiZEA-unsplash.jpg?raw=1")
lunch = Picture.create(creator: created_users.sample, category_ids: [leisure.id], img_url: "https://www.dropbox.com/s/gvbskfxgpzrt0dw/henrique-felix-mmuMa7VXL1Y-unsplash.jpg?raw=1")
boxing = Picture.create(creator: created_users.sample, category_ids: [sports.id, leisure.id], img_url: "https://www.dropbox.com/s/e4fwpyexovz03y6/hermes-rivera-qbf59TU077Q-unsplash.jpg?raw=1")
sailing = Picture.create(creator: created_users.sample, category_ids: [sports.id, leisure.id], img_url: "https://www.dropbox.com/s/h09n1xcqbej8g61/jeff-isaak-p7nrRdMDebM-unsplash.jpg?raw=1")
concert_lights = Picture.create(creator: created_users.sample, category_ids: [sports.id, leisure.id], img_url: "https://www.dropbox.com/s/6ebr2dipvicpa6f/yvette-de-wit-NYrVisodQ2M-unsplash.jpg?raw=1")
biking = Picture.create(creator: created_users.sample, category_ids: [leisure.id], img_url: "https://www.dropbox.com/s/480nq7exbv4m3uj/travis-yewell-z0bW16-Cg8g-unsplash.jpg?raw=1")
diamond = Picture.create(creator: created_users.sample, category_ids: [sports.id, games.id,leisure.id], img_url: "https://www.dropbox.com/s/av9917f9lchg2qn/tim-gouw-VvQSzMJ_h0U-unsplash.jpg?raw=1")
stickball = Picture.create(creator: created_users.sample, category_ids: [sports.id, history.id,leisure.id], img_url: "https://www.dropbox.com/s/hfed8vzulhl05qv/stickball.jpg?raw=1")
work_desk = Picture.create(creator: created_users.sample, category_ids: [work.id], img_url: "https://www.dropbox.com/s/8h6hr3szy2vs1qk/aleks-dorohovich-nJdwUHmaY8A-unsplash.jpg?raw=1")
works_desk = Picture.create(creator: created_users.sample, category_ids: [work.id], img_url: "https://www.dropbox.com/s/2f6nt13ivs5vkk8/michael-soledad-9vQIHXDIpl0-unsplash.jpg?raw=1")
computer_desk = Picture.create(creator: created_users.sample, category_ids: [work.id], img_url: "https://www.dropbox.com/s/97ysmlmpz3xew33/thought-catalog-505eectW54k-unsplash.jpg?raw=1")
architecture_1 = Picture.create(creator: created_users.sample, category_ids: [building.id,architecture.id], img_url: "https://www.dropbox.com/s/vzq9gxtu9o5b5zw/bantersnaps-vUwJ8uu_C1M-unsplash.jpg?raw=1")
architecture_2 = Picture.create(creator: created_users.sample, category_ids: [building.id,architecture.id], img_url: "https://www.dropbox.com/s/s58n73fla46jh2s/danist-k2O4xHVUYjc-unsplash.jpg?raw=1")
architecture_3 = Picture.create(creator: created_users.sample, category_ids: [building.id,architecture.id], img_url: "https://www.dropbox.com/s/vtoivwzut5lhwnp/pierre-chatel-innocenti-CYzftzemWxY-unsplash.jpg?raw=1")
architecture_4 = Picture.create(creator: created_users.sample, category_ids: [building.id,architecture.id], img_url: "https://www.dropbox.com/s/wzx3sm8pa1w5jms/scott-webb-bFSdnd_Hj74-unsplash.jpg?raw=1")
architecture_5 = Picture.create(creator: created_users.sample, category_ids: [building.id,architecture.id], img_url: "https://www.dropbox.com/s/hzv2n21upte9bwn/scott-webb-sBzVE77Bglc-unsplash.jpg?raw=1")
food_1 = Picture.create(creator: created_users.sample, category_ids: [food.id,leisure.id], img_url: "https://www.dropbox.com/s/6uuh66cbmxxb9vk/esther-wilhelmsson-l2UalXYB-yM-unsplash.jpg?raw=1")
food_2 = Picture.create(creator: created_users.sample, category_ids: [food.id,leisure.id], img_url: "https://www.dropbox.com/s/vpzi5r7y5rdzrsv/sara-cervera-C-FLXTT1Wts-unsplash.jpg?raw=1")
food_3 = Picture.create(creator: created_users.sample, category_ids: [food.id,leisure.id], img_url: "https://www.dropbox.com/s/uy2dsjq0yr42mor/sara-cervera-QgAM6H5IK28-unsplash.jpg?raw=1")
food_4 = Picture.create(creator: created_users.sample, category_ids: [food.id,leisure.id], img_url: "https://www.dropbox.com/s/ymivahyq2zr579i/sarah-gualtieri-qszW3z14hj0-unsplash.jpg?raw=1")
food_5 = Picture.create(creator: created_users.sample, category_ids: [food.id,leisure.id], img_url: "https://www.dropbox.com/s/txsspaag2mpc8as/the-fry-family-food-co-hg-JXHPmdGY-unsplash.jpg?raw=1")
nature_1 = Picture.create(creator: created_users.sample, category_ids: [nature.id,leisure.id], img_url: "https://www.dropbox.com/s/h9kzvwuboqgrpc8/henry-be-IicyiaPYGGI-unsplash.jpg?raw=1")
nature_2 = Picture.create(creator: created_users.sample, category_ids: [nature.id,leisure.id], img_url: "https://www.dropbox.com/s/gsatz3fpetuiqzo/jeremy-bishop-EwKXn5CapA4-unsplash.jpg?raw=1")
nature_3 = Picture.create(creator: created_users.sample, category_ids: [nature.id,leisure.id], img_url: "https://www.dropbox.com/s/m7bifjd1glmvv7w/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg?raw=1")
nature_4 = Picture.create(creator: created_users.sample, category_ids: [nature.id,leisure.id], img_url: "https://www.dropbox.com/s/doryenv7d0c3dqg/qingbao-meng-01_igFr7hd4-unsplash.jpg?raw=1")
nature_5 = Picture.create(creator: created_users.sample, category_ids: [nature.id,leisure.id], img_url: "https://www.dropbox.com/s/v10ixvmd5cv51kv/shifaaz-shamoon-oR0uERTVyD0-unsplash.jpg?raw=1")



created_users.each do |user|
  Picture.all.each do |pic|
    user.likes_picture(pic)
  end
end
