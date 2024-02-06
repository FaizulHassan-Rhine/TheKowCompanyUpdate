import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'

const SofaModel = () => {
    const { nodes, materials } = useGLTF('/sofa.glb')
    const [hovered, set] = useState(null);
    const [colors, setColors] = useState({});
    const [pickColor, setPickColor] = useState("#aabbcc");
    const [getModelObject, setModelObject] = useState(null);
    const [colorPickerBool, setColorPickerBool] = useState(false);

    const renderNodes = (nodes) => {
        return Object.values(nodes).map((node, index) => {
          if (node.type === 'Mesh') {
            const { geometry, material } = node;
            return (
              <mesh
                key={index}
                geometry={geometry}
                material={materials[material.name]}
              />
            );
          }
          return null;
        });
      };
    return (
        <>
            <div className='h-[600px] relative'>

            {console.log(nodes)}
            <Canvas className='bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 '>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls />
                <group scale={[2, 2, 2]}>
                {renderNodes(nodes)}
                 </group>
            </Canvas>

            
      <div className='absolute bottom-4 right-4 w-full'>
        <div className='container mx-auto flex justify-between'>
          <div className="flex justify-center items-center gap-3">
            <div className="w-8 md:w-16">
              <img src='/img/3d/slider/view.png' />
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
          <div className='flex items-center gap-3 relative'>
            <p className="font-semibold text-base md:text-2xl text-black">
              SELECT A COLOR
            </p>
            <button onClick={() => setColorPickerBool(!colorPickerBool)}
              className='w-8 h-8 rounded-full border-white border-[2px]'
              style={{ backgroundColor: `${pickColor}` }}
            ></button>
            {
              colorPickerBool && <div className='absolute right-0 bottom-[100%]'><HexColorPicker color={pickColor} onChange={renderColors} /></div>
            }
          </div>
        </div>

      </div>

            </div>
        </>
    );
};

export default SofaModel;