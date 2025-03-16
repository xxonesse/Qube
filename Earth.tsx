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
  [key: string]: any;
}

export default function Model(props: ModelProps) {
  // ✅ Corrected path using `import.meta.env.BASE_URL`
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}earth.gltf`) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials["Scene_-_Root"]} scale={1.128} />
    </group>
  );
}

// ✅ Preload model correctly for GitHub Pages
useGLTF.preload(`${import.meta.env.BASE_URL}earth.gltf`);
