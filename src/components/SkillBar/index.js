import React, { useState, useEffect } from 'react'
import './index.css'

export default function SkillBar(props) {
    const [percent, setPercent] = useState(0)

    // when percent changes (and on load), increment percent for counting animation
    useEffect(() => {
        console.log(percent)
        // if percent has not reached the specified percent, increment
        if (percent != props.percent) {
            setTimeout(() => {
                const newPercent = percent + 1
                setPercent(newPercent)
            }, 1000 / props.percent)
        }
    }, [percent])

    const styles = {
        width: `${props.percent}%`
    }

    return (
        <div className='skill'>
            <p className='skill-text'>{props.skill}<span className='skill-percent'>{percent}%</span></p>
            <div className='skill-bar'>
                <div className='skill-bar-fill' style={styles}></div>
            </div>
        </div>
    )
}
