import React, { Component } from 'react';
import DataFilms from '../Data/DataFilms.json';
import Background from '../background/avengers.jpg'

let backgroundStyle = {
    backgroundImg: {
        width: "100%",
        // height: "400px",
        backgroundImage: "url(" + Background + " )",
    },
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    }
};
export default class Body extends Component {
    filmRender = () => {
        return DataFilms.map((film, index) => {
            return (
                <div className="card col-2 mx-3 mt-5 justify-content-between" key={index}>
                    <img src={film.hinhAnh} className="card-img-top img-fluid" alt={film.maPhim} />
                    <div className="card-body pd-0 bg-dark text-white text-left">
                        <h5 className="card-title">{film.tenPhim}</h5>
                        <p className="card-text">{film.moTa}</p>
                    </div>
                </div>
            )
        });
    }
    render() {
        return (
            <div style={backgroundStyle.backgroundImg} >
                <div className='container-fluid' style={backgroundStyle.content} >
                    <div className='row' >
                        {this.filmRender()}
                    </div>

                </div>
            </div>
        )
    }
}
