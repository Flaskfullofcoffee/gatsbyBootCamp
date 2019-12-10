import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {

  return (
    <Layout>
    <Head title='About' />
      <h1>About Me</h1>
      <p>Im a 32yr old web developer, born & raised in Phoenix, AZ</p>
      <Link to='/contact/'>Contact Me.</Link>
    </Layout>
  )
}

export default AboutPage
