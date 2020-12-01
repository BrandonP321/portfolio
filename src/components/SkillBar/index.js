import React, { useState, useEffect } from 'react'
import './index.css'

export default function SkillBar(props) {
    const styles = {
        width: `${props.percent}%`
    }

    return (
        <div className='skill'>
            <p className='skill-text'>{props.skill}<span className='skill-percent'>{props.percent}%</span></p>
            <div className='skill-bar'>
                <div className='skill-bar-fill' style={styles}></div>
            </div>
        </div>
    )
}
