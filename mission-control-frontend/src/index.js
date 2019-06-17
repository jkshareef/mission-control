import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';
import * as THREE from 'three';

function component() {
    const element = document.createElement('div');


    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

    return element;
  }

  document.body.appendChild(component());

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

var THREE = window.THREE = require('three');
require('three/examples/js/loaders/GLTFLoader')

var loader = new THREE.GLTFLoader();

loader.load( 'path/to/model.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );