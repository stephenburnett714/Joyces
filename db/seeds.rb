# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




Product.create(name:"Ackee & Codfish Plantain Bites", food:true, category:"appetizer", price: 7.99, image:"image", description:"food")
Product.create(name:"Corn Bread Basket", food:true, category:"appetizer", price: 7.99, image:"image", description:"food")
Product.create(name:"Mac and Cheese", food:true, category:"appetizer", price: 7.99, image:"image", description:"food")
Product.create(name:"Jerk Chicken Wings", food:true, category:"appetizer", price: 8.99, image:"image", description:"food")
Product.create(name:"Pepper Shrimp", food:true, category:"appetizer", price: 9.99, image:"image", description:"food")

Product.create(name:"Curry Goat", food:true, category:"entree", price: 14.99, image:"image", description:"food")
Product.create(name:"Roti and Curry", food:true, category:"entree", price: 15.99, image:"image", description:"food")
Product.create(name:"Curry Goat", food:true, category:"entree", price: 15.99, image:"image", description:"food")
Product.create(name:"Jerk Burger", food:true, category:"entree", price: 15.99, image:"image", description:"food")
Product.create(name:"Oxtail", food:true, category:"entree", price: 17.99, image:"image", description:"food")
Product.create(name:"Jerk Salmon", food:true, category:"entree", price: 18.99, image:"image", description:"food")
Product.create(name:"Stew Snapper", food:true, category:"entree", price: 18.99, image:"image", description:"food")

Product.create(name:"Pine Tarts", food:true, category:"dessert", price: 8.99, image:"image", description:"food")
Product.create(name:"Black Cake", food:true, category:"dessert", price: 8.99, image:"image", description:"food")
Product.create(name:"Bread Pudding", food:true, category:"dessert", price: 8.99, image:"image", description:"food")

Product.create(name:"Water", food:true, category:"drink", price: 1.99, image:"image", description:"food")
Product.create(name:"Lemonade", food:false, category:"drink", price: 2.99, image:"image", description:"food")
Product.create(name:"Soda", food:false, category:"drink", price: 1.99, image:"image", description:"food")
Product.create(name:"Sorrel", food:false, category:"drink", price: 3.99, image:"image", description:"food")
Product.create(name:"Pineapple Ginger", food:false, category:"drink", price: 3.99, image:"image", description:"food")


User.create(first_name:"Stephen", last_name:"Burnett", email:"sburnett111@gmail.com", username:"StephenB", password:"password123", address:"12 3rd St", admin:false, image:"image")
