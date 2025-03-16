import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial, BufferGeometry } from 'three'

interface GLTFResult {
  nodes: {
    Object_4: {
      geometry: BufferGeometry;
    };
  };
  materials: {
    ['Scene_-_Root']: MeshStandardMaterial;
  };
}

interface ModelProps {
  [key: string]: any; // Allow passing other props dynamically
}

export default function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF('//Qube/earth.gltf') as unknown as GLTFResult;
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={1.128} />
    </group>
  );
}

useGLTF.preload('/Qube/earth.gltf');
