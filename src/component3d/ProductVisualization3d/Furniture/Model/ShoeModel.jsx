import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { useGLTF, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";

const ShoeModel = () => {
  const { nodes, materials } = useGLTF("/demo2.glb");
  // Cursor showing current color
  const [hovered, set] = useState(null);
  const [cursorIs, setCursorIs] = useState(false);
  const [colors, setColors] = useState({});
  const [pickColor, setPickColor] = useState("#aabbcc");
  const [getModelObject, setModelObject] = useState(null);
  const [colorPickerBool, setColorPickerBool] = useState(false);

  const renderNodes = (nodes) => {
    return Object.values(nodes).map((node, index) => {
      if (node.type === "Mesh") {
        const { geometry, material } = node;
        const color = material.color || material.emissive;

        return (
          <mesh
            key={index}
            geometry={geometry}
            material={materials[material.name]}
            onPointerOver={(e) => (
              e.stopPropagation(),
              set(e.object.material.name),
              setCursorIs(true),
              console.log(color)
            )}
            onPointerOut={(e) => (
              setCursorIs(false),
              console.log("checking"),
              e.intersections.length === 0 && set(null)
            )}
            // onClick={(event) => (console.log(event), event.object.material.color.set(0xce2020))}
            // onClick={(event) => (console.log(event), renderColors(event))}
            onClick={(event) => (console.log(event), setModelObject(event))}
          ></mesh>
        );
      }
      return null;
    });
  };

  function getRandomHexColor() {
    // Generate a random 24-bit hexadecimal color code
    var color = Math.floor(Math.random() * 16777215).toString(16);

    return color;
  }
  const renderColors = (e) => {
    // console.log(e)
    setPickColor(e);
    if (getModelObject != null) {
      setColors((prevState) => ({
        ...prevState, // Spread the previous state to avoid mutating it
        [getModelObject.object.material.name]: `${e}`, // Add the new property
      }));
      getModelObject.object.material.emissive.setHex(`0xce${e.substring(1)}`);
    } else {
      return;
    }
  };

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${colors[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="${colors[hovered]}" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    if (cursorIs) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
      return () =>
        (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          auto
        )}'), auto`);
    } else {
      document.body.style.cursor = `default`;
    }
  }, [colors, hovered, cursorIs]);

  return (
    <div className="h-[600px] relative">
      {console.log("testing : " + cursorIs)}
      <Canvas
        className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 "
        camera={{ fov: 45, position: [-10, 20, -90]}}
      >
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <group scale={[2, 2, 2]}>{renderNodes(nodes)}</group>
      </Canvas>

      <div className="absolute bottom-4 right-4 w-full">
        <div className="container mx-auto flex justify-between">
          <div className="flex justify-center items-center gap-3">
            <div className="w-8 md:w-16">
              <img src="/img/3d/slider/view.png" />
            </div>
            <div>
              <p className="font-semibold text-base md:text-2xl text-black">
                YOUR PROJECT TITLE
                <span className="text-green-500 font-light"> | </span>
              </p>
            </div>
            <div>
              <p className="text-[9px] md:text-base text-black">01 JAN, 2023</p>
            </div>
          </div>
          <div className="flex items-center gap-3 relative">
            <p className="font-semibold text-base md:text-2xl text-black">
              SELECT A COLOR
            </p>
            <button
              onClick={() => setColorPickerBool(!colorPickerBool)}
              className="w-8 h-8 rounded-full border-white border-[2px]"
              style={{ backgroundColor: `${pickColor}` }}
            ></button>
            {colorPickerBool && (
              <div className="absolute right-0 bottom-[100%]">
                <HexColorPicker color={pickColor} onChange={renderColors} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeModel;
