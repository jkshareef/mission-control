// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.svg';
// import * as THREE from 'three';

  //random characters

  const bob = {name: "Bob", skills: "Engineering"}


  document.addEventListener('DOMContentLoaded', () =>  {
    let startButton = document.getElementById('start-game')

    startButton.addEventListener('click', () => {
      startButton.parentNode.parentNode.classList = "hidden"
    })

    let crewButton = document.getElementById('add-crew')
    crewButton.addEventListener('click', () => {
      let container = document.createElement('div')
      container.id = "container-popup"

      let closeButton = document.createElement('button')
      closeButton.textContent = "X"
      closeButton.style= "float:right;"
      
      closeButton.addEventListener('click', () => {
        closeButton.parentNode.parentNode.classList = 'hidden'
      })
     

      let div = document.createElement('div')
      div.classList = "crew-popup"

      let ul = document.createElement('ul')
      ul.id = "crew-options"

      let li = document.createElement('li')

      li.classList = "crew-list"

      let h3 = document.createElement('h3')
      h3.textContent = "Name: " + bob.name

      let p = document.createElement('p') 
      p.textContent = "Skills: " + bob.skills

      addCrewMemberBtn = document.createElement('button') 
      addCrewMemberBtn.textContent = "Add Crew Member"

      addCrewMemberBtn.addEventListener('click', () => {
        
      })

      li.appendChild(h3)
      li.appendChild(p)

      ul.appendChild(li)
      div.appendChild(closeButton)
      div.appendChild(ul)
      container.appendChild(div)
      document.body.appendChild(container)




    })

    
  })

// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// function animate() {
//     requestAnimationFrame( animate );
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// 	renderer.render( scene, camera );
// }
// animate();



// var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// var scene = new THREE.Scene();

// var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// var geometry = new THREE.Geometry();
// geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
// geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
// geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// var line = new THREE.Line( geometry, material );
// scene.add( line );
// renderer.render( scene, camera );

// var THREE = window.THREE = require('three');
// require('three/examples/js/loaders/GLTFLoader')

// var loader = new THREE.GLTFLoader();

// loader.load( 'path/to/model.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );