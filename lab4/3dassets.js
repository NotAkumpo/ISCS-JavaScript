import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';

export class ThreeDAssets {
    constructor(){
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 30, 1, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( 500, 500 );
        renderer.setAnimationLoop( animate );
        document.body.appendChild( renderer.domElement );

        const rectangleGeometry = new THREE.BoxGeometry( 0.5, 0.5, 1 );
        const rectangleMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );
        const rectangle = new THREE.Mesh( rectangleGeometry, rectangleMaterial );
        rectangle.position.set(-0.5, 0.7, 0)
        scene.add( rectangle );

        const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.5, 0);
        const dodecahedronMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
        dodecahedron.position.set(0.75, 0.15, 0);
        scene.add(dodecahedron);

        const capsuleGeometry = new THREE.CapsuleGeometry( 0.45, 0.6, 1, 28 ); 
        const capsuleMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true } ); 
        const capsule = new THREE.Mesh( capsuleGeometry, capsuleMaterial ); 
        capsule.position.set(-0.4, -0.6, 0)
        scene.add( capsule );


        camera.position.z = 5;
    }

    static animate(){

        rectangle.rotation.x += 0.01;
        rectangle.rotation.y -= 0.03;

        dodecahedron.rotation.y -= 0.01;

        capsule.rotation.x += 0.02;
        capsule.rotation.y += 0.02;


        renderer.render( scene, camera );

    }
}