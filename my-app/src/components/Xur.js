import React from 'react'
import XurCountdown from './XurCountdown.js'

export default class Xur extends React.Component
{
    render()
    {
        const data = this.props.data

        if (!data) {
            return ''
        }
        console.log(data, 'Xur.js line 11')
        return (
            <div className="Xur-Component container">
                <div className="Left-Top row">
                    <div className="col-md-12">
                        <h1>Where is Xur?</h1>
                        <h2> Xur is on IO at Giant Scar for</h2>
                        <XurCountdown date={data.nextRefreshDate} offset={8}/>
                    </div>
                </div>
            </div>
        )
    }
}
