import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../../vrapp.css";
import "./preview.css";
function Preview({ vidsource, id, rid, data }) {
  useEffect(() => {
    const scene = new THREE.Scene();
    // const width = { vwidth }
    // const height = { vheight }
    // const width = window.innerWidth / 4;
    // const height = window.innerHeight / 4;
    const width = 300;
    const height = 300;
    // const render = document.querySelector('.render');
    // const width = render.clientWidth ;
    // const height = render.clientHeight ;
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);
console.log(rid,id);
    // create a renderer
    const render = document.querySelector(`#${rid}`);
    const canvas = document.querySelector(`#${id}`);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(width, height);

    render.appendChild(renderer.domElement);

    // create a sphere geometry
    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const videoElement = document.createElement("video");

    videoElement.src = vidsource;

    //  videoElement.src = 'https://s.bepro11.com/vr-video-sample.mp4';
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.playsInline = true;
    videoElement.crossOrigin = "anonymous";
    videoElement.load();
    const texture = new THREE.VideoTexture(videoElement);

    // create a material from the texture
    const material = new THREE.MeshBasicMaterial({ map: texture });

    material.side = THREE.BackSide;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer.setAnimationLoop(() => renderer.render(scene, camera));

    const clamp = (v, min, max) => Math.max(min, Math.min(v, max));
    renderer.domElement.addEventListener("wheel", (e) => {
      camera.fov = clamp(camera.fov + e.deltaY / 10, 10, 120);

      camera.updateProjectionMatrix();
    });

    let mouseDown = false;
    renderer.domElement.addEventListener("mousedown", (e) => {
      if (e.button === 0) mouseDown = true;
    });

    window.addEventListener("mouseup", (e) => {
      if (e.button === 0) mouseDown = false;
    });

    window.addEventListener("mousemove", (e) => {
      if (!mouseDown) return;

      const { movementX, movementY } = e;

      // rotateX: rotate vertically since x-axis is horizontal
      const rotateX = movementY / 100;
      const rotateY = movementX / 100;

      camera.rotateX(rotateX);
      camera.rotateY(rotateY);
    });
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/fullview", { state: data });
  };

  return (
    <div
      className="rendercol mx-auto md:grid grid-cols-3  w-1/2"
      id="rendercol "
    >
      <div className="flex mb-6 mr-24" id={rid}>
        <canvas className="pvid  rounded-md" id={id}></canvas>
      </div>

      <div>
        <button onClick={() => handleClick()}>
          <i
            className=" button fa-solid fa-circle-play fa-fade fa-2xl "
            style={{ color: "#d3d9d8" }}
          ></i>
        </button>
      </div>
    </div>
  );
}
export default Preview;
