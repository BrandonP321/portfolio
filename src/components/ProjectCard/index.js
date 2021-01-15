import React, { useState, useEffect, useRef } from 'react'
import Measure from 'react-measure'
import './index.css'

export default function ProjectCard(props) {
    // create refs to elements in project card
    const briefDiv = useRef()
    const buttonsWrapper = useRef()
    const projectHeading = useRef()

    // ref to hold media query
    const query = useRef()
    const setQuery = data => {
        // first remove any existing media query event listeners from the query
        if (query.current) {
            query.current.removeListener(queryListener)
        }
        // now update the query ref to new max-width media query
        query.current = window.matchMedia(`(max-width: ${768 + data}px)`)

        // add new event listener to query
        query.current.addEventListener('change', queryListener)
    }

    // store scroll bar width in ref
    const scrollWidthRef = useRef()
    const setScrollWidth = data => {
        scrollWidthRef.current = data

        // update bottom css prop for project brief div
        briefDiv.current.style.bottom = `clamp(0px, calc((269px - (1037px - (100vw - ${data}px))) / 269 * 150), 150px)`
        
        // update media query ref to use new scroll bar width
        setQuery(data)
    }

    // on load, add resize event listener to window to check for scroll bar width change
    useEffect(() => {
        window.addEventListener('resize', () => {
            const scrollBarWidth = window.innerWidth - document.body.clientWidth
            // if the current scroll bar's width is different than what's in the useRef hook, update ref
            if (scrollBarWidth !== scrollWidthRef.current) {
                setScrollWidth(scrollBarWidth)
            }
        })

        // set scrollWidth ref on initial load (window event listener won't fire on load)
        setScrollWidth(window.innerWidth - document.body.clientWidth)

        // because JS media query won't affect element right on page load, set initial styles of elements based on body width
        if (document.body.clientWidth > 767) {
            briefDiv.current.style.boxShadow = '0px 4px 16px black'
        } else {
            projectHeading.current.style.textAlign = 'center'
            buttonsWrapper.current.style.justifyContent = 'flex-end'
        }
    }, [])

    const queryListener = (e) => {
        // based on media query matching or not, update styles for elements
        if (e.matches) {
            briefDiv.current.style.boxShadow = 'none'
            buttonsWrapper.current.style.justifyContent = 'flex-end'
            projectHeading.current.style.textAlign = 'center'
        } else {
            briefDiv.current.style.boxShadow = '0px 4px 16px black'
            buttonsWrapper.current.style.justifyContent = 'flex-start'
            projectHeading.current.style.textAlign = 'left'
        }
    }

    return (
        <div className={props.isLast ? 'project-container last-project' : 'project-container'}>
            <div className='project-img-container'>
                <img className='img-fluid project-img' src={props.projectInfo.image} alt={props.projectInfo.alt_text} onClick={() => window.location.href = props.projectInfo.site_url} />
            </div>
            <div className='project-brief-flex-wrapper'>
                <div
                    className={props.isLast ? 'project-brief-container last-project' : 'project-brief-container'}
                    style={{ bottom: '150px' }}
                    ref={briefDiv}
                >
                    <h3 ref={projectHeading} className='project-title white-text'>{props.projectInfo.name}</h3>
                    <p className='project-desc gray-text'>{props.projectInfo.description}</p>
                    <div className='project-btns' ref={buttonsWrapper}>
                        <a className='project-btn-link' href={`/project/${props.projectInfo.projectIndex}`}><div className='project-btn red-bg white-text'>More Info</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}