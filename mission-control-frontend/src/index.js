// import _ from 'lodash';
// import './src/style.css';
// import * as THREE from 'three';
// require("imports-loader?THREE!./index.js");
// require('three/examples/js/loaders/GLTFLoader');

  //celestial bodies
    const URL = "http://localhost:3000/"
    let speeds = {}
    
    function compare(a,b) {
      if (a.distance < b.distance) {
        return -1
      }
      if (a.distance > b.distance) {
        return 1
      }
      return 0
    }

    function getSpeeds() {
      let rate = 0.001
      BODIES.sort(compare)
      console.log(BODIES)
      BODIES.forEach((body) => {
        speeds[body.name] = rate
        rate = rate / 1.25
      })
    }

    let mission_id = ""
    let missionStart = false
    let destination = ""
    let destinationIndex = 0
    let remainingDistance = ""
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
      getSpeeds()
      startGame();
    }
    //Posts new mission to server
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
    
    function fetchCrew() {
      fetch(URL + `missions/${mission_id}`)
      .then(resp => resp.json())
      .then(json => {
        let mission = json
        mission.crews.forEach((crew) => {
          MISSION_CREW.push(crew)
          console.log("Mission crew insertion:" + MISSION_CREW)
          // buildCrew(crew, li)
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
      let payload = { name: crew.name, skill: crew.skill, rating: crew.rating, cost: crew.cost, gender: crew.gender, mission_id: mission_id }
      let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
      fetch(URL + 'crews', config)
        .then(resp => resp.json())
        .then(json => {
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
      liDiv.classList = "mission-members"
      li.classList = "crew-li"
      deleteButton.textContent = "x"
      deleteButton.id = 'crew-delete'
      deleteButton.style = "max-width:20px;float:right; margin-right: 20px;"
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

        CREW.forEach((crew) => buildCrew(crew, li))
      
    }

    function newEvent(event) {
      
      // fetchCrew()
      setInterval(function () {
      let container = document.createElement('div')
      container.id = "container-popup"
      container.classList.remove("hidden")
      let div = document.createElement('div')
      div.style = "width: 500px"
      eventDescription = document.createElement('h4')
      eventDescription.textContent = event.content
      eventDescription.classList = 'event-desc'

      div.classList = "crew-popup"
      let ul = document.createElement('ul')


      ul.id = "crew-options"
      ul.classList = "crew-ul"

      let closeButton = document.createElement('button')
      closeButton.textContent = "X"
      closeButton.style = "float:left;"
      closeButton.classList = "btn-danger"
      closeButton.addEventListener('click', () => {
        closeButton.parentNode.parentNode.classList = "hidden"
        closeButton.parentNode.parentNode.innerHTML = ""
      })
      console.log(MISSION_CREW)
      MISSION_CREW.forEach(crew => {
        let liDiv = document.createElement('div')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')
        let li = document.createElement('li')
        h3.textContent = crew.name
        liDiv.classList = 'mission-members'


        //triggered by events
        p.textContent = "Skills: " + crew.skill
        selectCrewBtn = document.createElement('button')
        selectCrewBtn.textContent = "Assign Member"
        selectCrewBtn.classList = "add-crew btn btn-primary"

        selectCrewBtn.addEventListener('click', () => {
            console.log(eventSuccess(crew, event))
        })
        liDiv.appendChild(selectCrewBtn)



        liDiv.appendChild(h3)
        liDiv.appendChild(p)
        li.appendChild(liDiv)
        ul.appendChild(li)
        
      })
      
      div.appendChild(closeButton)
      div.appendChild(eventDescription)
      div.appendChild(ul)
      container.appendChild(div)
      document.body.appendChild(container)
    }, 30000)
    }


    function buildCrew(crew, li, event=null) {


      
      let h3 = document.createElement('h3')
      let p = document.createElement('p')
      let liDiv = document.createElement('div')
      
      liDiv.classList = "crew-members"
      h3.textContent = "Name: " + crew.name
      //configures crew options before start
        p.textContent = "Skills: " + crew.skill + " Cost: $" + crew.cost
        addCrewMemberBtn = document.createElement('button')
        addCrewMemberBtn.textContent = "Add Crew Member"
        addCrewMemberBtn.classList = "add-crew btn btn-primary"
        addCrewMemberBtn.addEventListener('click', () => {
          liDiv.remove()
          postCrew(crew)
        })
        liDiv.appendChild(addCrewMemberBtn)

      liDiv.appendChild(h3)
      liDiv.appendChild(p)
      li.appendChild(liDiv)
    }
      

    function startGame() {
      btn = document.getElementById('start-game')
      btn.addEventListener('click', () => {
        div = document.getElementById('middle-panel')
        div.style = "background-image: url(./src/images/spaceship.gif); no-repeat fixed;background-size: cover;;color:white;"
        fetchCrew()
        fetchEvents()
        resourceDepleting()

        crewBtn = document.getElementById('add-crew')
        crewBtn.remove();
        crewDeleteButtons = document.querySelectorAll('#crew-delete')
        crewDeleteButtons.forEach(btn => {
          btn.remove();
          
        })
        missionProgress();
        missionStart = true
       

      })
      
      
      
    }

    function selectCrew() {
      crewOptions()
    }

  function fetchEvents() {
    console.log("ran fetch")
    fetch(URL + "events")
    .then(resp => resp.json())
    .then(events => buildEvents(events))

}

  function buildEvents(events) {
      let rand = events[Math.floor(Math.random() * events.length)];
      console.log(rand)
      newEvent(rand);
  }


    function missionProgress() {
      let div = document.getElementById('middle-panel')
      let h2 = document.createElement('h2')

      h2.textContent = `${destination.distance} Miles`

      div.appendChild(h2)

      const rate = destination.distance * speeds[destination.name]
      let remainingDistance = destination.distance
      
     
      const distanceDown =  setInterval(function () {
        let fuelBar = document.getElementById('fuel-stat')
        let fuelStat = parseInt(fuelBar.style.width)

        let foodBar = document.getElementById('food-stat')
        let foodStat = parseInt(foodBar.style.width)

        let medBar = document.getElementById('med-stat')
        let medStat = parseInt(medBar.style.width)

        let o2Bar = document.getElementById('o2-stat')
        let o2Stat = parseInt(o2Bar.style.width)

        if (fuelStat > 0 && foodStat > 0 && medStat > 0 && o2Stat > 0 ) {
          if (remainingDistance >= rate) {
            remainingDistance = remainingDistance - rate
            h2.textContent = `${remainingDistance.toFixed(0)} Miles`
          } else if (parseInt(remainingDistance.toFixed(0), 10) === 0) {
            h2.textContent = `${parseInt(remainingDistance.toFixed(0), 10)} Miles`
            remainingDistance = 0
            gameState(remainingDistance)
            clearInterval(distanceDown)
          }
        }
      }, 100)
      
      
    
  }

    function handleCrewDelete(crew, li) {
      li.remove();
      fetch(URL + "crews/" + crew.id, {
        method: 'DELETE'
      })
    }
      

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

      }, 10000)

    }

    function eventSuccess(crew, event) {
      let success = false
          let bonus = 0
          if(crew.skill == event.skill) {
            bonus = 100
            if (bonus >= event.threshold) {
              success = true;
            } else {
              let threshold = event.threshold - bonus
              threshold -= crew.rating
              if (threshold <= 0) {
                success = true
              } else {
                let thresholdArray =  [...Array(threshold).keys()]
                for (let i=0; i < crew.rating; i++){
                  let rand = thresholdArray[Math.floor(Math.random() * thresholdArray.length)];
                  if (rand === thresholdArray[0]) {
                    success = true
                  }
                }
              }

            }
          } else {
            let threshold = event.threshold
            let thresholdArray = [...Array(threshold).keys()]
            for (let i=0; i < crew.rating / 2; i++){
              let rand = thresholdArray[Math.floor(Math.random() * thresholdArray.length)];
              if (rand === thresholdArray[0]) {
                success = true
              }

            }
          }
          return success
    }

    function gameState(remainingDistance) {
      if (remainingDistance === 0) {
        let container = document.createElement("div")
        container.classList = "container-message"

        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.classList = "mission-end-message"
        h3.textContent = "Your Crew Has Reached The Destination!"
        
        
        div.classList = "message-popup"
        
        let continueBtn = document.createElement('button')
        continueBtn.textContent = "Continue"
        continueBtn.classList = "btn btn-primary btn-message"

        continueBtn.addEventListener('click', () => {
          location.reload(true)
        })

        let exitBtn = document.createElement("button")
        exitBtn.textContent = "Exit"
        exitBtn.classList = "btn btn-danger btn-message"

        exitBtn.addEventListener('click', () => {
          location.reload(true)
        })

        div.appendChild(h3)
        div.appendChild(continueBtn)
        div.appendChild(exitBtn)
        container.appendChild(div)
        document.body.appendChild(container)
      }
    }


    

    
    


















    