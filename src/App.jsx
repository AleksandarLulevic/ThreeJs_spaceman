import {useEffect} from 'react'
import './App.css'
import {ScrollControls, Scroll, Environment, Sparkles, Backdrop, Float, Ring, Shadow} from '@react-three/drei'

import baffle from 'baffle'
import {Spaceman} from "./components/Spaceman.jsx";

function App() {

    useEffect(() => {
        const target = baffle('.title')
        target.set({
            characters: '░S░C░R░O░L░L░A░N░I░M░A░T░I░O░N░',
            speed: 100
        })
        target.start()
        target.reveal(1000, 1000)
    })

    return (
        <>
            <color attach="background" args={['#1f1f1f']}/>
            <ambientLight intensity={0.8}/>
            <pointLight
                color={[1, 0.25, 0.7]}
                intensity={20
                }
                angle={0.6}
                penumbra={0.5}
                position={[8, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <pointLight
                color={[0.14, 0.5, 1]}
                intensity={100}
                angle={1}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <Environment
                preset='sunset'
            />

            <ScrollControls pages={6} damping={0.1}>

                <Spaceman scale={1.5}/>
                <Sparkles size={1} color={"#fff"} scale={[10, 10, 10]} opacity={0.3}></Sparkles>
                <Backdrop
                    receiveShadow
                    floor={20.5} // Stretches the floor segment, 0.25 by default
                    segments={100} // Mesh-resolution, 20 by default
                    scale={[50, 30, 10]}
                    position={[4, -10, 0]}
                >
                    <meshStandardMaterial color="#070707"/>
                </Backdrop>

                <Shadow
                    color="black"
                    colorStop={0}
                    opacity={0.5}
                    fog={false} // Reacts to fog (default=false)
                />

                <Float
                    speed={4} // Animation speed, defaults to 1
                    rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
                    floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >
                    <Ring scale={3.5} position-z={-2.5} position-y={-1} args={[0, 0.95, 60]} receiveShadow>
                        <meshStandardMaterial color="#141925"/>
                    </Ring>
                </Float>

                <Scroll>

                </Scroll>
                <Scroll html style={{width: '100%'}}>
                    <h1 className='title' style={{
                        color: '#cdcbca',
                        position: 'absolute',
                        top: `65vh`,
                        left: '50%',
                        fontSize: '13em',
                        transform: `translate(-50%,-50%)`
                    }}>SCROLLANIMATION</h1>

                    <div className='row' style={{position: 'absolute', top: `132vh`}}>
                        <h2 className="numbers">1</h2>
                    </div>

                    <div className='row' style={{position: 'absolute', top: `230vh`}}>
                        <div className='col' style={{position: 'absolute', right: `40px`, width: "540px"}}>
                            <h2 className="numbers">2</h2>
                        </div>
                    </div>

                    <div style={{position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)`}}>
                        <h2 className="numbers">3</h2></div>

                    <div style={{position: 'absolute', top: `590vh`, left: '50%', transform: `translate(-50%,-50%)`}}>
                        <h2 className="numbers">4</h2></div>
                </Scroll>
            </ScrollControls>
        </>
    )
}

export default App

// ScrollControls can have horizontal argument for horizontal scrolling
