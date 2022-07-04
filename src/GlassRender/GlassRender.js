import React, { Component } from 'react';
import dataGlasses from '../Data/dataGlasses.json';
import './GlassRenderCSS.css';

export default class GlassRender extends Component {
    state = {
        glassesCurrent: {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassesList = () => {
        return dataGlasses.map((glassItem, index) => {
            return <img onClick={() => { this.changeGlasses(glassItem) }} className="ml-2 p-2 border border-width-1" src={glassItem.url} key={index} style={{ width: "100px", cursor: 'pointer' }} alt={glassItem.name} />
        })
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesCurrent: newGlasses
        })
    }

    render() {
        const keyFrame = `
        @keyframes glassesChangeAnimation${Date.now()} {
            from{
                width: 0;
                transfrom: rotate(45deg);
            }
            to {
                width: 150px;
                transform: rotate(0deg);
            }
        }`;

        const styleGlass = {
            width: "150px",
            top: "75px",
            right: "85px",
            opacity: '0.7',
            transform: 'rotate(0deg)',
            animation: `glassesChangeAnimation${Date.now()} 1s`
        }
        const glassInfoStyle = {
            right: '35px',
            bottom: '0px',
            backgroundColor: "rgba(355,127,0,0.5",
            width: '250px',
            textAlign: 'left',
            paddingLeft: '20px',
            paddingTop: '10px'

        }
        return (
            <div style={{ backgroundImage: "url(./glassesImage/background.jpg)", minHeight: '2000px', backgroundSize: '1800px' }}>
                <style> 
                    {keyFrame}
                </style>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.5', minHeight: '2000px' }}>
                    <h3 className='text-center text-light'>GLASS APP ONLINE</h3>
                    <div className='container'>

                        <div className='row mt-5 justify-content-center'>
                            <div className='col-6 position-relative'>
                                <img src='./glassesImage/model.jpg' alt="Model" style={{ width: '250px' }} className="position-absolute" />
                                <img style={styleGlass} src={this.state.glassesCurrent.url} alt="default glasses" className="position-absolute glassesStyle" />
                                <div className='position-absolute' style={glassInfoStyle}>
                                    <span>{this.state.glassesCurrent.name}</span> <br />
                                    <span>{this.state.glassesCurrent.desc}</span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <img src='./glassesImage/model.jpg' alt="Model" style={{ width: '250px' }} />
                            </div>
                        </div>

                        {/* Div that contain the chosen glasses */}
                        <div className='bg-light container mt-5 d-flex justify-content-center' >
                            {this.renderGlassesList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
