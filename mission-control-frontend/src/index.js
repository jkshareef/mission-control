// import _ from 'lodash';
// import './src/style.css';
// import * as THREE from 'three';
// require("imports-loader?THREE!./index.js");
// require('three/examples/js/loaders/GLTFLoader');



  //celestial bodies
    const URL = "http://localhost:3000/"
    let mission_id = ""
    const BODIES = [{name: "Moon", object_source:"/images_3D/Moon_1_3474.glb"},
    {name: "Mars", object_source: "/images_3D/Mars_1_6792.glb" },
    {name: "Venus", object_source: "/images_3D/Venus_1_12103.glb"}, 
    {name: "Mercury",object_source:"/images_3D/Mercury_1_4878.glb"},
    {name: "Jupiter", object_source:"/images_3D/Jupiter_1_142984.glb"},
    {name: "Saturn",object_source:"/images_3D/Saturn_1_120536.glb"},
    {name: "Uranus",object_source:"/images_3D/Uranus_1_51118.glb"},
    {name: "Neptune",object_source:"/images_3D/Neptune_1_49528.glb"},
    {name: "Pluto",object_source: "/images_3D/Pluto_1_2374.glb"},
    {name: "Titan",object_source: "/images_3D/TitanSurface_1_5150.glb"}]

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


  document.addEventListener('DOMContentLoaded', () =>  {

    function postMission() {
      let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'}
      }
      fetch(URL + "missions", config)
      .then(resp => resp.json())
      .then(json => {
        mission_id = json.id
      })
    }

    function postCrew(name, skill, rating, cost, gender, mission_id) {
      let payload = {name: name, skill: skill, rating: rating, cost: cost, gender: gender, mission_id: mission_id}
      let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      }
      fetch(URL+'crews', config)
      .then(resp => resp.json())
      .then(json => {

      })
    }
    let startButton = document.getElementById('start-game')

    startButton.addEventListener('click', () => {
      startButton.parentNode.parentNode.classList = "hidden"
      postMission()
    })

    let crewButton = document.getElementById('add-crew')
    crewButton.addEventListener('click', () => {
      let container = document.createElement('div')
      container.id = "container-popup"

      let closeButton = document.createElement('button')
      closeButton.textContent = "X"
      closeButton.style= "float:right;"
      closeButton.classList = " btn-danger"
      
      closeButton.addEventListener('click', () => {
        closeButton.parentNode.parentNode.classList = 'hidden'
      })
     

      let div = document.createElement('div')
      div.classList = "crew-popup"

      let ul = document.createElement('ul')
      ul.id = "crew-options"
      ul.classList = "crew-ul"

      let li = document.createElement('li')

      li.classList = "crew-list"


      CREW.forEach((crew) => {

        let h3 = document.createElement('h3')
        h3.textContent = "Name: " + crew.name

        let p = document.createElement('p') 
        p.textContent = "Skills: " + crew.skill

        addCrewMemberBtn = document.createElement('button') 
        addCrewMemberBtn.textContent = "Add Crew Member"
        addCrewMemberBtn.classList = "add-crew btn btn-primary"
        addCrewMemberBtn.style = "margin-right: 10px"

        let liDiv = document.createElement('div')
        liDiv.classList = "crew-members"

        let br = document.createElement('br')

        addCrewMemberBtn.addEventListener('click', () => {
          
          postCrew(crew.name, crew.skill, crew.rating, crew.cost, crew.gender, mission_id)
        })
  

        liDiv.appendChild(h3)
        liDiv.appendChild(addCrewMemberBtn)
        liDiv.appendChild(p)

        li.appendChild(liDiv)
      })

      ul.appendChild(li)

      div.appendChild(closeButton)
      div.appendChild(ul)
      container.appendChild(div)
      document.body.appendChild(container)




    })

    // let destDiv = document.querySelector(".column-left-destination")
    
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
   

    
    
  })

















    