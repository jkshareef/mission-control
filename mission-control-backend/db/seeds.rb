Destination.delete_all
Crew.delete_all
Mission.delete_all



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
    {content: "An anamoly in the Feul Conversion System  has been detected by the main computer!
    Identify and Fix the issue to stop the depletion of fuel. \n (Effect: -15% Fuel)", 
    target_resource: "fuel", resource_cost: 15, acceleration: true, skill: "Chemist", threshold: 100},
    {content: "Soil has failed to yield crops, 
        adjust and replant to replenish food supplies \n (Effect: -30% Food)",
    target_resource: "food", resource_cost: 30, acceleration: false, skill: "Biologist", threshold: 120},
    {content: "Space Debris has Created Several Large Breaches in the Ship! Many Sections of the Ship have Been Closed Off! 
    A Mechanic would be needed to Fix the Problem. \n (Effect: -20% to all Resources) ",
    target_resource: "all", resource_cost: 20, acceleration: true, skill: "Mechanic", threshold: 200},
    {content: "Your Ship's Navigation System has failed, find the correct coordinates to rechart your course.
        \n (Effect: Mission Progress Stops Until Correct Course is Found) ", 
        resource_cost: 0, acceleration: false, skill: "Navigator", threshold: 200, repeat: true},
    {content: "Long Distance Sensors Have Detected an Incoming Asteroid. Use of Ship Guns to Break
        up the Object Could Prevent a Collision \n (Effect: -30% to all Resources)", target_resource: "all", resource_cost: 30, acceleration: false, skill: "Gunner", threshold: 250},
    {content: "The Central Engine Relay has Gone out of Phase and is no Longer Providing Energy! \n 
        (Effect: -20% Fuel", target_resource: "fuel", resource_cost: 20, 
        acceleration: true, skill: "Engineer", threshold: 220},
    {content: "There is an Outbreak of a Rare Virus \n (Effect: -30% to Medicine)", target_resource: "med", resource_cost: 30, acceleration: true, skill: "Medic", threshold: 200},
    # {content:  target_resource: resource_cost: acceleration: skill: threshold:},
    # {content: target_resource: resource_cost: acceleration: skill: threshold:},
    # {content: target_resource: resource_cost: acceleration: skill: threshold:},
    # {content: target_resource: resource_cost: acceleration: skill: threshold:},
    # {content: target_resource: resource_cost: acceleration: skill: threshold:},
    # {content: target_resource: resource_cost: acceleration: skill: threshold:},
    # {content: target_resource: resource_cost: acceleration: skill: threshold:},
    # {content: target_resource: resource_cost: acceleration: skill: threshold:},




        
])