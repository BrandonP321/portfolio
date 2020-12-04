import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import projects from '../../projects.json'

export default function ProjectOne() {
    // grab index of project from url
    const { id } = useParams()
    // set the project with the given index to the state
    const [project, setProject] = useState(projects[id])

    return (
        <div>
            <h1>Project: {project.name}</h1>
        </div>
    )
}
