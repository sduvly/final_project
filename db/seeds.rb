# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Purchase.destroy_all
BusinessProduct.destroy_all
Business.destroy_all
Product.destroy_all
User.destroy_all

user1 = User.create(username: 'sduvly', password_digest: '123456', email: 'xhdddhg@gmail.com')
user2 = User.create(username: 'acnfg', password_digest: '123456', email: 'pidhgcs@yahoo.com')
user3 = User.create(username: 'kjjkj', password_digest: '123456', email: 'sfddreh@aol.com')

b1 = Business.create(business_name: 'amazon', user_id: user1.id)
b2 = Business.create(business_name: 'nike', user_id: user2.id)
b3 = Business.create(business_name: 'brooks brothers', user_id: user3.id)

p1 = Product.create(description: 'Invicta Mens Pro Diver Stainless Steel Quartz Watch with Silicone Strap, Black, 25 (Model: 22340)', stock: 30, rating: '⭐️⭐️⭐️⭐️⭐️')
p2 = Product.create(description: 'Latest generation of our best-selling Fire TV device - 50% more powerful than the 2nd generation for fast streaming in Full HD. Includes Alexa Voice Remote with power and volume buttons.', stock: 15, rating: '⭐️⭐️⭐️⭐️⭐️')
p3 = Product.create(description: 'C9 Champion Women High Waist Legging', stock: 22, rating: '⭐️⭐️⭐️⭐️')
p4 = Product.create(description: 'JBL Pure Bass Sound, Bluetooth, 25H Battery, Dual Connect, Native Voice Assistant (Black)', stock: 3, rating: '⭐️⭐️⭐️')
p5 = Product.create(description: '2560 x 1440 SS IPS Display, 0.5ms (MPRT) Response Time, 92% DCI-P3, HDR Ready, FreeSync Premium, 1x Display Port 1.2, 2x HDMI 2.0, 2x USB 3.0', stock: 3, rating: '⭐️⭐️⭐️⭐️⭐️')



bp1 = BusinessProduct.create(name: 'Invicta', price: 149.00, business_id: b1.id, product_id: p1.id,  image: 'https://media.gq-magazine.co.uk/photos/5fca181eea319833403830dc/master/w_2121,h_1414,c_limit/04112020_Watches_14.jpg')
bp2 = BusinessProduct.create(name: 'Fire tv stick', price: 39.99, business_id: b1.id, product_id: p2.id, image: 'https://www.cnet.com/a/img/resize/a5e81768e456411d3e1f2e9d3a76bd74b837519b/hub/2020/10/05/47137bac-c6d5-4f39-aeb0-c142bb9bccd0/026-amazon-fire-stick-tv-and-fire-stick-lite-2020.jpg?auto=webp&width=768')
bp3 = BusinessProduct.create(name: 'Women High Waist Legging', price: 17.99, business_id: b2.id, product_id: p2.id, image: 'https://dimg.dillards.com/is/image/DillardsZoom/zoom/spanx-high-waisted-look-at-me-now-high-waisted-seamless-legging/05302542_zi_very_black.jpg')
bp4 = BusinessProduct.create(name: 'JBL Tune 225TWS True Wireless Earbud Headphones', price: 99.99, business_id: b3.id, product_id: p3.id, image: 'https://m.media-amazon.com/images/I/71L2otQRshL._AC_SY355_.jpg')
bp5 = BusinessProduct.create(name: 'GIGABYTE M27Q 27" 170Hz 1440P -KVM Gaming Monitor', price: 359.99, business_id: b3.id, product_id: p3.id, image: 'https://cdn.mos.cms.futurecdn.net/qFxV96Uex3oPhyk5yhbgbb-480-80.jpg')

purchase1 = Purchase.create(purchase: false, user_id: user1.id, business_product_id: bp1.id)
purchase2 = Purchase.create(purchase: false, user_id: user3.id, business_product_id: bp2.id)
purchase3 = Purchase.create(purchase: false, user_id: user2.id, business_product_id: bp3.id)
purchase4 = Purchase.create(purchase: false, user_id: user2.id, business_product_id: bp4.id)
purchase5 = Purchase.create(purchase: false, user_id: user1.id, business_product_id: bp5.id)

