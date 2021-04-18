import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function Projects() {
    return (
        <div className={styles.portfolio}>
            <Layout>
                <h2>Portfolio</h2> 
                <h3>Projects & websites I've Created</h3>
            </Layout>
        </div>
    )
}
