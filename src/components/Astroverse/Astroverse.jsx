import React, { useState, useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js';
import './Astroverse.css';
import Login from '../interfaces/Login';

function Astroverse() {
    const canvasRef = useRef(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const app = new PIXI.Application({
            view: canvasRef.current,
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x000000,
            resolution: window.devicePixelRatio || 1,
        });

    app.loader
        .add('background', 'images/space-background.jpg')
        .load((loader, resources) => {
            const background = new PIXI.Sprite(resources.background.texture);
            background.width = app.screen.width;
            background.height = app.screen.height;
            app.stage.addChild(background);  
        });

        return () => {
            app.destroy(true);
        };

    }, []);

    return (
        <div className='astroverse-container'>
            <canvas ref={canvasRef} />
            {!isAuthenticated && <Login setIsAuthenticated={setIsAuthenticated} />}
        </div>
    );
}


export default Astroverse;
