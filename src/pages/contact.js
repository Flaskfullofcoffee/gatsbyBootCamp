import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const ContactPage = () => {

  return (
    <Layout>
      <h1>Contact Info</h1>
      <h2>Twitter: <a href='https://www.twitter.com/home' target='_blank' rel="noopener noreferrer">@ZacDobbs</a></h2>
      <h2>Email: <span>zdobbs24@gmail.com</span></h2>
      <h2>Phone: <span>602.793.9903</span></h2>
    </Layout>
  )
}

export default ContactPage
