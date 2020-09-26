import React from 'react';
import Particles from 'react-particles-js';
import { faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import SocialButton from './components/SocialButton';

function App() {
    return (
        <div className="app">
            <div style={{ position: 'fixed', zIndex: -999, width: '100%', height: '100%' }}>
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 250,
                                density: {
                                    enable: true,
                                    value_area: 5500,
                                },
                            },
                            color: {
                                value: '#fff',
                            },
                            shape: {
                                type: 'triangle',
                            },
                            opacity: {
                                value: 0.2,
                                random: true,
                            },
                            size: {
                                value: 6,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                },
                            },
                            line_linked: {
                                enable: false,
                                distance: 500,
                                color: '#ffffff',
                                opacity: 0.4,
                                width: 2,
                            },
                            move: {
                                enable: true,
                                speed: 3,
                                direction: 'bottom',
                                random: false,
                                straight: false,
                                out_mode: 'out',
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200,
                                },
                            },
                        },
                        retina_detect: true,
                    }}
                />
            </div>
            <div className="column-container">
                <div className="pic">
                    <img
                        className="pfp"
                        alt="GitHub Profile Picture"
                        src="https://avatars2.githubusercontent.com/u/38964599?s=400&u=f5a025125c876849fb5508646d1aa469937a02fd&v=4"
                    />
                </div>

                <h1 className="name">normie</h1>
                <a className="description">Java, NodeJS and C++ Developer</a>

                <div className="socials">
                    <SocialButton icon={faTwitter} href="https://twitter.com/AscendenteA" />
                    <SocialButton icon={faGithub} href="https://github.com/coqui123" />
                    <SocialButton icon={faDiscord} href="https://discordhub.com/profile/167782318927249409" />
                    <SocialButton icon={faEnvelope} href="mailto:bigpapilobster@gmail.com" />
                </div>
            </div>
        </div>
    );
}

export default App;
