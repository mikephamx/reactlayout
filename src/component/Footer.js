import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        Quote
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>A well-known quote, contained in a blockquote element.</p>
                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>

        )
    }
}
