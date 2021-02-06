import React, { useState, useEffect, useRef } from 'react'
import Measure from 'react-measure'
import './index.css'

const briefDivStyles = {
    marginBottom: 'clamp(0px, calc((1050px - 100vw) / 266 * 40), 40px)',
    marginTop: 'clamp(0px, calc((1050px - 100vw) / 266 * 5), 5px)',
    bottom: '150px'
}

export default function ProjectCard(props) {
    // create refs to elements in project card
    const briefDiv = useRef()
    const buttonsWrapper = useRef()
    const projectHeading = useRef()
    const moreInfoBtn = useRef()
    const viewSiteBtn = useRef()
    const gitLinkBtn = useRef()

    // state tells if user is focused on 'more info' btn
    const [isFocusedOnBtns, setIsFocusedOnBtns] = useState(false)

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


        // add mouse click listener for when user clicks off of the 'more info' btn
        document.addEventListener('click', e => {
            // if target is not either the 'view site' or 'github repo' btn, update state
            if (e.target !== viewSiteBtn.current &&
                e.target !== gitLinkBtn.current &&
                e.target !== moreInfoBtn.current) {
                console.log('unfocus')
                setIsFocusedOnBtns(false)
            }
        })
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

    const handleTopBtnClick = () => {
        // when user clicks more info btn, set state to true
        setIsFocusedOnBtns(true)
        console.log('focused')
    }

    return (
        <div className={props.isLast ? 'project-container last-project' : 'project-container'}>
            <div className='project-img-container'>
                <img className='img-fluid project-img' src={props.projectInfo.image} 
                    alt={props.projectInfo.alt_text} 
                    onClick={() => window.open(props.projectInfo.site_url)} 
                    loading='lazy'
                />
            </div>
            <div className='project-brief-flex-wrapper'>
                <div
                    className={props.isLast ? 'project-brief-container last-project' : 'project-brief-container'}
                    style={briefDivStyles}
                    ref={briefDiv}
                >
                    <h3 ref={projectHeading} className='project-title white-text'>{props.projectInfo.name}</h3>
                    <p className='project-desc gray-text'>{props.projectInfo.description}</p>
                    <div className='project-btns' ref={buttonsWrapper}>
                        <button
                            className={`project-btn red-bg white-text top${isFocusedOnBtns ? ' hide' : ''}`}
                            onClick={handleTopBtnClick}
                            ref={moreInfoBtn}>More Info
                        </button>
                        <a
                            className={`project-btn red-bg white-text view-site${isFocusedOnBtns ? ' show' : ''}`}
                            ref={viewSiteBtn}
                            href={props.projectInfo.site_url}
                            target='_blank' rel='noopener'>View Site</a>
                        <a
                            className={`project-btn red-bg white-text git-link${isFocusedOnBtns ? ' show' : ''}`}
                            ref={gitLinkBtn}
                            href={props.projectInfo.github_repo_url}
                            target='_blank' rel='noopener'>GitHub Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}