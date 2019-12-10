import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

 const NotFound = () => {
   return (
     <Layout>
       <h1>Page Not Found</h1>
       <p>404</p>
       <span><Link to='/'>Return Home</Link></span>
     </Layout>
   )
 }
 export default NotFound
