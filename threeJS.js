import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const light = new THREE.PointLight(0xffffff, 50, 1000);
light.position.set(0, 0, 5);
scene.add(light);

const amb = new THREE.AmbientLight(0xffffff, 50);
scene.add(amb);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.body.appendChild( renderer.domElement );

const section = document.getElementById("container3D");
section.appendChild(renderer.domElement);

const loader = new GLTFLoader();


let model;

// Load a glTF resource
loader.load('models/eva_final.glb', function ( gltf ) {

        model = gltf.scene;
        model.rotation.x = Math.PI / 2;
        scene.add( model );


    },
    // called while loading is progressing
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);

camera.position.z = 30;
camera.position.x = 20


function animate() {
    requestAnimationFrame( animate );

    model.rotation.x += -0.1;
    model.rotation.y += 0.1;
    model.rotation.z +=     0.1;

    renderer.render( scene, camera );
}
animate();