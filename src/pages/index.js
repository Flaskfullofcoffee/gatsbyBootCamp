import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {

  return (
    <Layout>
      <Head title='Home'/>
      <h1>Hello There</h1>
      <h2>My name is Zachary, I'm a full-stack web-developer living in sunny Arizona</h2>
      <p>Need a developer <Link to='/contact/'>Contact Me.</Link></p>
    </Layout>
  )
}

export default IndexPage
