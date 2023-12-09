import * as THREE from 'three';
import '../vrapp.css'
import video from '../video/mountain.mp4'
import { useEffect } from 'react';
import play from '../image/play.svg'
function VrApp({videosrc ,vrwidth,vrheight}) {
   
    useEffect(() => {
        const scene = new THREE.Scene();
      if(!vrwidth){
        var width = window.innerWidth ;
      }else{
         width={vrwidth};
      }
      if(!vrheight){
        var height = window.innerHeight / 1.6;
      }else{
        height={vrheight}
      }
        // const render = document.querySelector('.render');
        // const width = render.clientWidth ;
        // const height = render.clientHeight ;
        const camera = new THREE.PerspectiveCamera(75, width/height, 1, 100);

        // create a renderer
        const render=document.querySelector('#render')
        const canvas = document.querySelector('#three');
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(width, height);

    
        render.appendChild(renderer.domElement);

        // create a sphere geometry
        const geometry = new THREE.SphereGeometry(15, 32, 16);
        const videoElement = document.createElement('video');
       if(videosrc){
       
        videoElement.src=videosrc;
   
       }else{
           videoElement.src = video;
           
       } 
        //  videoElement.src = 'https://s.bepro11.com/vr-video-sample.mp4';
        videoElement.loop = true;
        videoElement.muted = false;
        videoElement.playsInline = true;
        videoElement.crossOrigin = "anonymous";
        videoElement.load();
        const texture = new THREE.VideoTexture(videoElement);


        // create a material from the texture
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // need to use back side - surface of the sphere is facing outside but we put the camera inside of the sphere
        material.side = THREE.BackSide;

        // create a mesh and add to the scene
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        renderer.setAnimationLoop(() => renderer.render(scene, camera));
        // //video control
       
         //video control
         var playButton = document.querySelector('.button');

         // Step 9: Add event listeners to controls
         playButton.addEventListener('click', function () {
             if (videoElement.paused) {
                 videoElement.play();
             } else {
                 videoElement.pause();
             }
         });

       
        // zoom in / out
        const clamp = (v, min, max) => Math.max(min, Math.min(v, max));
        renderer.domElement.addEventListener('wheel', e => {
            camera.fov = clamp(camera.fov + e.deltaY / 10, 10, 120);
            // need to call this function after changing most of properties in PerspectiveCamera
            camera.updateProjectionMatrix();
        });

        // rotate camera
        let mouseDown = false;
        renderer.domElement.addEventListener('mousedown', e => {
            if (e.button === 0) mouseDown = true;
        });

        window.addEventListener('mouseup', e => {
            if (e.button === 0) mouseDown = false;
        });

        window.addEventListener('mousemove', e => {
            if (!mouseDown) return;

            const { movementX, movementY } = e;

            // rotateX: rotate vertically since x-axis is horizontal
            const rotateX = movementY / 100;
            const rotateY = movementX / 100;

            camera.rotateX(rotateX);
            camera.rotateY(rotateY);
        });
    }, [])

    return (
        <div className="render relative w-full object-fit h-[420px]" id="render">
      <canvas id="three"></canvas>
      <button className=" block">
        <i className="button fa-solid fa-circle-play fa-fade fa-2xl" style={{ color: '#d3d9d8' }}></i>
      </button>
    </div>
    )
}
export default VrApp;