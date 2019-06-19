// import _ from 'lodash';
// import './src/style.css';
// import * as THREE from 'three';
// require("imports-loader?THREE!./index.js");
// require('three/examples/js/loaders/GLTFLoader');

  //celestial bodies
    const URL = "http://localhost:3000/"

    let mission_id = ""
    let missionStart = false
    let destination = ""
    let destinationIndex = 0
    let bodiesGIF =[{name: "Earth", object_source: "./src/images/earth.gif"},
    {name: "Moon", distance: 238900, object_source: "./src/images/moon.gif"},
    {name: "Mars", distance: 33900000, object_source: "./src/images/mars.gif" },
    {name: "Venus", distance: 162000000, object_source: "./src/images/venus.gif"}, 
    {name: "Mercury",distance: 48000000, object_source:"./src/images/mercury.gif"},
    {name: "Jupiter", distance: 365000000, object_source:"./src/images/jupiter.gif"},
    {name: "Saturn", distance: 746000000, object_source:"./src/images/saturn.gif"},
    {name: "Uranus", distance: 1600000000, object_source:"./src/images/uranus.gif"},
    {name: "Neptune", distance: 2700000000, object_source:"./src/images/neptune.gif"},
    {name: "Pluto", distance: 4670000000, object_source: "./src/images/pluto.gif"},
    {name: "Titan", distance: 746759220, object_source: "./src/images/titan.gif"}]

    const BODIES = [{name: "Moon", distance: 238900, object_source:"/images_3D/Moon_1_3474.glb"},
    {name: "Mars", distance: 33900000, object_source: "/images_3D/Mars_1_6792.glb" },
    {name: "Venus", distance: 162000000, object_source: "/images_3D/Venus_1_12103.glb"}, 
    {name: "Mercury",distance: 48000000, object_source:"/images_3D/Mercury_1_4878.glb"},
    {name: "Jupiter", distance: 365000000, object_source:"/images_3D/Jupiter_1_142984.glb"},
    {name: "Saturn",distance: 746000000, object_source:"/images_3D/Saturn_1_120536.glb"},
    {name: "Uranus",distance: 1600000000, object_source:"/images_3D/Uranus_1_51118.glb"},
    {name: "Neptune",distance: 2700000000, object_source:"/images_3D/Neptune_1_49528.glb"},
    {name: "Pluto", distance: 4670000000, object_source: "/images_3D/Pluto_1_2374.glb"},
    {name: "Titan",distance: 746759220, object_source: "/images_3D/TitanSurface_1_5150.glb"}]

  //random characters

    const CREW = [{name: "Rhiannon Dade", skill: "Biology", gender: "female", rating: 99, cost: 48000},
    {name: "Zhenwhei Yang", skill: "Physicist", gender: "female", rating: 82, cost: 40000},
    {name: "Kristof Jenner", skill: "Mechanic", gender: "male", rating: 79, cost: 32000},
    {name: "Yuri Kochalev", skill: "Navigator", gender: "male", rating: 92, cost: 58000},
    {name: "Bruce Maximoff", skill: "Gunner", gender: "male", rating: 86, cost: 30000},
    {name: "Terry Achebe", skill: "Engineer", gender: "male", rating: 87, cost: 65000},
    {name: "Lucy Berry", skill: "Chemist", gender: "female", rating: 90, cost: 46000},
    {name: "Prakash Manvi", skill: "Mechanic", gender: "male", rating: 79, cost: 32000},
    {name: "Loretta Campbell", skill: "Leader", gender: "female", rating: 83, cost: 50000},
    {name: "Abraham Ducet", skill: "Driller", gender: "male", rating: 79, cost: 32000},
    {name: "Haley Norris", skill: "Medic", gender: "female", rating: 88, cost: 60000},
    {name: "Arlene McKinney", skill: "Mechanic", gender: "female", rating: 62, cost: 20000},
    {name: "Ken Blevins", skill: "Mechanic", gender: "male", rating: 73, cost: 32000}]

var FUNDING = 1000000;
var MISSION_CREW = [];

  document.addEventListener('DOMContentLoaded', () => {
    main();
    
  })

    function main() {
      configStart();
      configCrew();
      configStats();
      configDestination();
      startGame();
    }
  
    function postMission() {
      let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }
      fetch(URL + "missions", config)
        .then(resp => resp.json())
        .then(json => {
          mission_id = json.id
        })
    }

    function fetchCrew(li) {
      fetch(URL + `missions/${mission_id}`)
      .then(resp => resp.json())
      .then(json => {
        let mission = json
        mission.crews.forEach((crew) => {
          buildCrew(crew, li)
        })
      })
    }
    

    function configCrew() {
      let crewButton = document.getElementById('add-crew')

      crewButton.addEventListener('click', () => {
        crewOptions();
      })
    }

    function configStats() {
      let disp = document.getElementById('mission-objective')
      let h1 = document.createElement('h1')
      h1.id = 'funding'
      h1.textContent = "Total Funds: $" + FUNDING
      disp.appendChild(h1)

      let medBar = document.getElementById('med-stat')
      let foodBar = document.getElementById('food-stat')
      let o2Bar = document.getElementById('o2-stat')
      let fuelBar = document.getElementById('fuel-stat')

      medBar.style = "width: 0%"
      foodBar.style = "width: 0%"
      o2Bar.style = "width: 0%"
      fuelBar.style = "width: 0%"

      o2Btn = document.getElementById('o2-btn')
      foodBtn = document.getElementById('food-btn')
      fuelBtn = document.getElementById('fuel-btn')
      medBtn = document.getElementById('med-btn')

      o2Btn.addEventListener('click', () => {
        str = o2Bar.style.width
        currentStat = str.substring(0, str.length - 1);
        currentStat = parseInt(currentStat)
        if (currentStat < 100) {
          currentStat = currentStat + 10;
          o2Bar.style.width = currentStat + "%";
          FUNDING = FUNDING - 10000
          h1.textContent = "Total Funds: $" + FUNDING;
        } else {
          
        }
        
      })

      fuelBtn.addEventListener('click', () => {
        str = fuelBar.style.width
        currentStat = str.substring(0, str.length - 1);
        currentStat = parseInt(currentStat);
        if (currentStat < 100) {
          currentStat = currentStat + 10;
          fuelBar.style.width = currentStat + "%";
          FUNDING = FUNDING - 10000
          h1.textContent = "Total Funds: $" + FUNDING;
        } else {

        }
      })

      foodBtn.addEventListener('click', () => {
        str = foodBar.style.width
        currentStat = str.substring(0, str.length - 1);
        currentStat = parseInt(currentStat)
        if (currentStat < 100) {
          currentStat = currentStat + 10;
          foodBar.style.width = currentStat + "%";
          FUNDING = FUNDING - 10000
          h1.textContent = "Total Funds: $" + FUNDING;
        } else {

        }
      })

      medBtn.addEventListener('click', () => {
        str = medBar.style.width
        currentStat = str.substring(0, str.length - 1);
        currentStat = parseInt(currentStat)
        if (currentStat < 100) {
          currentStat = currentStat + 10;
          medBar.style.width = currentStat + "%";
          FUNDING = FUNDING - 10000
          h1.textContent = "Total Funds: $" + FUNDING;
        } else {

        }
      })

    }


    function configStart() {
      let startButton = document.getElementById('page-start')
      startButton.addEventListener('click', () => {
        startButton.parentNode.parentNode.classList = "hidden"
        postMission()
      })
    }

    function configDestination() {
      let nextBtn = document.getElementById('right-arrow-button')
      let h1 = document.getElementById('destination-header')
      nextBtn.addEventListener('click', () => {
          let div = document.getElementById('destination-panel')
          if (destinationIndex < bodiesGIF.length && destination > -bodiesGIF.length) {
            destinationIndex++
            let bodyObj = bodiesGIF[destinationIndex]

            div.style = `background-image: url(${bodyObj.object_source});background-position: center; background-repeat: no-repeat; background-size: 100% 100%;`
            destination = bodyObj
            h1.textContent = `Destination: ${bodyObj.name}`
          } else {
            destinationIndex++
            let remainder = destinationIndex % (bodiesGIF.length - 1)
            let bodyObj = bodiesGIF[remainder]

            div.style =  `background-image: url(${bodyObj.object_source});background-position: center; background-repeat: no-repeat; background-size: 100% 100%;`
            destination = bodyObj
            h1.textContent = `Destination: ${bodyObj.name}`
          }
      })

    }



    function postCrew(crew) {
      FUNDING = FUNDING - crew.cost
      h1 = document.getElementById('funding')
      h1.textContent = FUNDING;
      console.log("posting")
      let payload = { name: crew.name, skill: crew.skill, rating: crew.rating, cost: crew.cost, gender: crew.gender, mission_id: mission_id }
      let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
      fetch(URL + 'crews', config)
        .then(resp => resp.json())
        .then(json => {
          console.log(json)
          addCrew(json)
        })
    }

    function addCrew(crew) {
      let ul = document.getElementById('crew-ul')
      let li = document.createElement('li')
      let liDiv = document.createElement('div')
      let h4 = document.createElement('h4')
      let p = document.createElement('p')
      let deleteButton = document.createElement('button')
      li.classList = "crew-li"
      deleteButton.textContent = "x"
      deleteButton.id = 'crew-delete'
      deleteButton.style = "max-width:20px;float:right;"
      deleteButton.addEventListener('click', () => {
        handleCrewDelete(crew, li)
      })
      p.textContent = crew.skill
      h4.textContent = crew.name
      liDiv.appendChild(h4)
      liDiv.appendChild(deleteButton)
      liDiv.appendChild(p)
      li.appendChild(liDiv)
      ul.appendChild(li)
      

    }

    function crewOptions() {

      let container = document.createElement('div')
      container.id = "container-popup"
      container.classList.remove("hidden")

      let closeButton = document.createElement('button')
      closeButton.textContent = "X"
      closeButton.style = "float:left;"
      closeButton.classList = "btn-danger"
      closeButton.addEventListener('click', () => {
        closeButton.parentNode.parentNode.classList = "hidden"
        closeButton.parentNode.parentNode.innerHTML = ""
      })


      let div = document.createElement('div')
      let ul = document.createElement('ul')
      let li = document.createElement('li')
      
      div.classList = "crew-popup"
      ul.id = "crew-options"
      ul.classList = "crew-ul"
      li.classList = "crew-list"

      ul.appendChild(li)
      div.appendChild(closeButton)
      div.appendChild(ul)
      container.appendChild(div)
      document.body.appendChild(container)

      

      //Based on Global Variable Which Tracks Mission Start Status
      // will build crew member list to add crew members at the 
      // beginning of the mission 

      if(!missionStart) {
        CREW.forEach((crew) => buildCrew(crew, li))
        
       //Based on Global Variable Which Tracks Mission Start Status
      // will show Assigned Crew Members Available to Assign to Tasks
      // During the Mission
      } else {
        fetchCrew(li)
      }
    }

    // build Crew Helper Function
    function buildCrew(crew, li, event=null) {


      
      let h3 = document.createElement('h3')
      let p = document.createElement('p')
      let liDiv = document.createElement('div')
      
      liDiv.classList = "crew-members"
      h3.textContent = "Name: " + crew.name
      if (!missionStart) {
        p.textContent = "Skills: " + crew.skill + " Cost: $" + crew.cost
        addCrewMemberBtn = document.createElement('button')
        addCrewMemberBtn.textContent = "Add Crew Member"
        addCrewMemberBtn.classList = "add-crew btn btn-primary"

        addCrewMemberBtn.addEventListener('click', () => {
          postCrew(crew)
        })
        liDiv.appendChild(addCrewMemberBtn)
      } else {
        p.textContent = "Skills: " + crew.skill
        selectCrewBtn = document.createElement('button')
        selectCrewBtn.textContent = "Assign Member"
        selectCrewBtn.classList = "add-crew btn btn-primary"

        selectCrewBtn.addEventListener('click', () => {
          let success = false
          let bonus = 0
          if(crew.skill = event.skill) {
            bonus = 100
            if (bonus >= event.threshold) {
              success = true;
              break
            } else {
              let threshold = event.threshold - bonus
              threshhold -= crew.rating
              if (threshold <= 0) {
                success = true
              } else {
                
              }

            }
            
              
            
            
          }

        })
        liDiv.appendChild(selectCrewBtn)
      }

      liDiv.appendChild(h3)
      liDiv.appendChild(p)
      li.appendChild(liDiv)
    }
      

    function startGame() {
      btn = document.getElementById('start-game')
      btn.addEventListener('click', () => {
          
        resourceDepleting()

        crewBtn = document.getElementById('add-crew')
        crewBtn.remove();
        crewDeleteButtons = document.querySelectorAll('#crew-delete')
        crewDeleteButtons.forEach(btn => {
          console.log(btn)
          btn.remove();

          
          
        })
        startEvents();
        missionProgress();
        missionStart = true

      })
      
      
      
    }

    function selectCrew() {
      crewOptions()

    }


    function startEvents() {
      
    }

    function missionProgress() {
      let div = document.getElementById('middle-panel')
      let h2 = document.createElement('h2')
      h2.textContent = `${destination.distance} Miles`

      div.appendChild(h2)

      const rate = destination.distance * 0.1
      let remainingDistance = destination.distance
      
      const distanceDown =  setInterval(function () {
          if (remainingDistance >= rate) {
            remainingDistance = remainingDistance - rate
            h2.textContent = `${remainingDistance.toFixed(0)} Miles`
          } else if (remainingDistance.toFixed(0) === 0) {
            console.log("We made it in")
            h2.textContent = `${remainingDistance} Miles`
            clearInterval(distanceDown)
            console.log("Am I stopping?")
          }
        }, 1000)
      
      
    }

    function handleCrewDelete(crew, li) {
      li.remove();
      fetch(URL + "crews/" + crew.id, {
        method: 'DELETE'
      })
    }
      
    // function resourceDeplete() {
    //       for(let i = 0; i < 100; i++){
    //         resourceDepleting();
            
    //       }
          
    // }

    function resourceDepleting(){
      let medBar = document.getElementById('med-stat')
      let foodBar = document.getElementById('food-stat')
      let o2Bar = document.getElementById('o2-stat')
      let fuelBar = document.getElementById('fuel-stat')

      setInterval(function () {
      medStat = medBar.style.width
      currentMedStat = medStat.substring(0, medStat.length - 1);
      currentMedStat = currentMedStat - 5;
      medBar.style.width = currentMedStat + "%";


      foodStat = foodBar.style.width
      currentFoodStat = foodStat.substring(0, foodStat.length - 1);
      currentFoodStat = currentFoodStat - 5;
      foodBar.style.width = currentFoodStat + "%";

      o2Stat = o2Bar.style.width
      currentO2Stat = o2Stat.substring(0, o2Stat.length - 1);
      currentO2Stat = currentO2Stat - 5;
      o2Bar.style.width = currentO2Stat + "%";

      fuelStat = fuelBar.style.width
      currentFuelStat = fuelStat.substring(0, fuelStat.length - 1);
      currentFuelStat = currentFuelStat - 5;
      fuelBar.style.width = currentFuelStat + "%";

      }, 2000)

    }

    
    // var scene = new THREE.Scene();
    // var camera = new THREE.PerspectiveCamera( 75, destDiv.innerWidth / destDiv.innerHeight, 0.1, 1000 );
    // var loader = new THREE.GLTFLoader();
    // loader.load( '../images_3D/Saturn_1_120536', function ( gltf ) {

    //   scene.add( gltf.scene );

    // }, undefined, function ( error ) {

    //   console.error( error );

    // } );

    // var renderer = new THREE.WebGLRenderer();
    // renderer.setSize( destDiv.innerWidth, destDiv.innerHeight );
    // document.body.appendChild( renderer.domElement );
   

    
    


















    