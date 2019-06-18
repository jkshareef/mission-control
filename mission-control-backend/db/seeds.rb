# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Destination.delete_all
Crew.delete_all


# destinations = Destination.create([{name: "Moon", object_source:"/images_3D/Moon_1_3474.glb"}, 
#     {name: "Mars", object_source: "/images_3D/Mars_1_6792.glb" }, {name: "Venus", object_source: "/images_3D/Venus_1_12103.glb"}, 
#     {name: "Mercury",object_source:"/images_3D/Mercury_1_4878.glb"}, {name: "Jupiter", object_source:"/images_3D/Jupiter_1_142984.glb"}, 
#     {name: "Saturn",object_source:"/images_3D/Saturn_1_120536.glb"}, {name: "Uranus",object_source:"/images_3D/Uranus_1_51118.glb"}, 
#     {name: "Neptune",object_source:"/images_3D/Neptune_1_49528.glb"}, {name: "Pluto",object_source: "/images_3D/Pluto_1_2374.glb"}, 
#     {name: "Titan",object_source: "/images_3D/TitanSurface_1_5150.glb"}])


# crews = Crew.create([
#     {name: "Rhiannon Dade", skill: "Biology", gender: "female", expertise: 99, cost: 48000}, 
#     {name: "Zhenwhei Yang", skill: "Physicist", gender: "female", expertise: 82, cost: 40000},
#     {name: "Kristof Jenner", skill: "Mechanic", gender: "male", expertise: 79, cost: 32000},
#     {name: "Yuri Kochalev", skill: "Navigator", gender: "male", expertise: 92, cost: 58000},
#     {name: "Bruce Maximoff", skill: "Gunner", gender: "male", expertise: 86, cost: 30000},
#     {name: "Terry Achebe", skill: "Engineer", gender: "male", expertise: 87, cost: 65000},
#     {name: "Lucy Berry", skill: "Chemist", gender: "female", expertise: 90, cost: 46000},
#     {name: "Prakash Manvi", skill: "Mechanic", gender: "male", expertise: 79, cost: 32000},
#     {name: "Loretta Campbell", skill: "Leader", gender: "female", expertise: 83, cost: 50000},
#     {name: "Abraham Ducet", skill: "Driller", gender: "male", expertise: 79, cost: 32000},
#     {name: "Haley Norris", skill: "Medic", gender: "female", expertise: 88, cost: 60000},
#     {name: "Arlene McKinney", skill: "Mechanic", gender: "female", expertise: 62, cost: 20000},
#     {name: "Ken Blevins", skill: "Mechanic", gender: "male", expertise: 73, cost: 32000},

# ])

events = Event.create([
    {content: "A fuel leak has been detected by the main computer, 
    Identify and Fix the issue to stop the depletion of fuel", 
    target_resource: "fuel", resource_cost: 15, acceleration: true},
    {content: "Soil has failed to yield crops, 
        adjust and replant to replenish food supplies",
    target_resource: "food", resource_cost: 15, acceleration: false}
])