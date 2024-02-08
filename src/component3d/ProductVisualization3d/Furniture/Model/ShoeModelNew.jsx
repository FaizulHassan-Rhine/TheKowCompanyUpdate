import { Canvas } from "@react-three/fiber";
import  {  useState } from "react";
import { useGLTF,  OrbitControls } from "@react-three/drei";


const ShoeModelNew = () => {
  const { nodes, materials } = useGLTF("/shoeNew2.glb");
  // Cursor showing current color
  const [hovered, set] = useState(null);
  const [cursorIs, setCursorIs] = useState(false);


  const [getModelObject, setModelObject] = useState(null);


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
              console.log("checking "),
              e.intersections.length === 0 && set(null)
            )}
        
            onClick={(event) => (console.log(event), setModelObject(event))}
          ></mesh>
        );
      }
      return null;
    });
  };



  return (
    <div className="h-[300px] md:h-[500px] ">
      {console.log("testing : " + cursorIs)}
      <Canvas
       className="cursor-pointer"
        camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <group scale={[2, 2, 2]}>{renderNodes(nodes)}</group>
      </Canvas>

   
    </div>
  );
};

export default ShoeModelNew;
