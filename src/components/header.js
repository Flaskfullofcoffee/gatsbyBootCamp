import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
    <Link className={headerStyles.title} to ='/'>
      <h1>{data.site.siteMetadata.title}</h1>
    </Link>
      <ul className='nav'>
        <li>
          <Link className={headerStyles.link} activeClassName={headerStyles.active} to='/'>Home</Link>
        </li>
        <li>
          <Link className={headerStyles.link} activeClassName={headerStyles.active} to='/blog/'>Blog</Link>
        </li>
        <li>
          <Link className={headerStyles.link} activeClassName={headerStyles.active} to='/contact/'>Contact</Link>
        </li>
        <li>
          <Link className={headerStyles.link} activeClassName={headerStyles.active} to='/about/'>About</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
