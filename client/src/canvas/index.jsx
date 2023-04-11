import {Canvas} from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import { useSnapshot } from 'valtio';
import state, {initialStateObj} from '../store';

const CanvasModal = () => {
  const snap = useSnapshot(state);

  return (
    <Canvas
    shadows
    camera={{position:[0,0,0], fov:25}}
    gl={{preserveDrawingBuffer:true}}
    className='w-full max-w-full h-full transition-all ease-in'
    onClick={()=> {
      console.log('canvas click');
      state.editorTabs = false
    }}
    
    >
        <ambientLight intensity={0.5} />
        <Environment preset='city'/>
        <CameraRig>
            <Backdrop/>
            <Center>
                <Shirt/>
            </Center>
        </CameraRig>
    </Canvas>
  )
}

export default CanvasModal