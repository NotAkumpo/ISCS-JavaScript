import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';

export class ThreeDAssets {
    constructor(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 30, 1, 0.1, 1000 );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( 500, 500 );
        this.renderer.setAnimationLoop(this.animate.bind(this));
        document.body.appendChild( this.renderer.domElement );

        this.rectangleGeometry = new THREE.BoxGeometry( 0.5, 0.5, 1 );
        this.rectangleMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );
        this.rectangle = new THREE.Mesh( this.rectangleGeometry, this.rectangleMaterial );
        this.rectangle.position.set(-0.5, 0.7, 0)
        this.scene.add( this.rectangle );

        this.dodecahedronGeometry = new THREE.DodecahedronGeometry(0.5, 0);
        this.dodecahedronMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        this.dodecahedron = new THREE.Mesh(this.dodecahedronGeometry, this.dodecahedronMaterial);
        this.dodecahedron.position.set(0.75, 0.15, 0);
        this.scene.add(this.dodecahedron);

        this.capsuleGeometry = new THREE.CapsuleGeometry( 0.45, 0.6, 1, 28 ); 
        this.capsuleMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true } ); 
        this.capsule = new THREE.Mesh( this.capsuleGeometry, this.capsuleMaterial ); 
        this.capsule.position.set(-0.4, -0.6, 0)
        this.scene.add( this.capsule );


        this.camera.position.z = 5;
    }

    animate(){

        this.rectangle.rotation.x += 0.01;
        this.rectangle.rotation.y -= 0.03;

        this.dodecahedron.rotation.y -= 0.01;

        this.capsule.rotation.x += 0.02;
        this.capsule.rotation.y += 0.02;


        this.renderer.render( this.scene, this.camera );

    }
}