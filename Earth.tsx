import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, BufferGeometry } from "three";

interface GLTFResult {
  nodes: {
    Object_4: {
      geometry: BufferGeometry;
    };
  };
  materials: {
    ["Scene_-_Root"]: MeshStandardMaterial;
  };
}

interface ModelProps {
  [key: string]: any; // Allow passing other props dynamically
}

export default function Model(props: ModelProps) {
  // ✅ Ensure the correct path for GitHub Pages
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}earth.gltf`) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials["Scene_-_Root"]} scale={1.128} />
    </group>
  );
}

// ✅ Preload the model using the correct base URL
useGLTF.preload(`${import.meta.env.BASE_URL}earth.gltf`);
