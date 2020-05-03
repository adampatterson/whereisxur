import React from 'react'
import './XurCountdown.css'

export default class XurCountdown extends React.Component
{
    state = {
        counter: 0
    }

    componentDidMount()
    {
        setInterval(() => {
            this.setState({counter: this.state.counter})
        }, 1000)
    }

    formatNumber(value, length)
    {
        value = '' + value
        while (value.length < length) {
            value = '0' + value
        }
        return value
    }

    render()
    {
        const date = new Date(this.props.date)
        const now = Date.now()
        let diff = date.getTime() + this.props.offset * 60 * 60 * 1000 - now

        if (diff > 3 * 24 * 60 * 60 * 1000) {
            diff -= 3 * 24 * 60 * 60 * 1000
        }

        if (diff < 0) {
            diff = 0
        }

        const day = Math.floor(diff / 1000 / 60 / 60 / 24)
        const hour = Math.floor(diff / 1000 / 60 / 60) - day * 24
        const min = Math.floor(diff / 1000 / 60) - day * 24 * 60 - hour * 60
        const sec =
            Math.floor(diff / 1000) - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60

        // console.log(date, diff, day, hour, min, sec);
        return (
            <div className="Xur-Countdown mt-5">
        <span className="Day Block">
          <span className="Number">{this.formatNumber(day, 1)}</span>
          <span className="Label">Day(s)</span>
        </span>
                <span className="Separator">:</span>
                <span className="Hour Block">
          <span className="Number">{this.formatNumber(hour, 2)}</span>
          <span className="Label">Hour(s)</span>
        </span>
                <span className="Separator">:</span>
                <span className="Minute Block">
          <span className="Number">{this.formatNumber(min, 2)}</span>
          <span className="Label">Minute(s)</span>
        </span>
                <span className="Separator">:</span>
                <span className="Second Block">
          <span className="Number">{this.formatNumber(sec, 2)}</span>
          <span className="Label">Second(s)</span>
        </span>
            </div>
        )
    }
}
