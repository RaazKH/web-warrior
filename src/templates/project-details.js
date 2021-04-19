import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project-details.module.css'

export default function ProjectDetails() {
    return (
        <Layout>
            <div className={styles.details}>
                <h1>title</h1>
                <h3>stack</h3>
                <div className={styles.featured}>
                    {/* <Img fluid={} /> */}
                </div>
                {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
            </div>
        </Layout>
    )
}
