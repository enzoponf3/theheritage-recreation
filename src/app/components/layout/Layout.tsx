import * as React from "react"

import styles from "./Layout.module.scss"

import logo from "~/assets/logo.svg"
import pattern from "~/assets/pattern_header.svg"
import patternFooter from "~/assets/footer_long.svg"

const Layout: React.FC = ({children}) => {
  return (
    <>
      <header>
        <div className={styles.title}>
          <h1><img src={logo} alt="The Heritage logo" /></h1>
          <img src={pattern} />
        </div>
        <nav className={styles.navigation}>
          <a className={styles.commercial} href="">
            <span className={styles.image}></span>
            <span className={styles.text}>Commercial</span>
          </a>
          <a className={styles.residential} href="">
            <span className={styles.image}></span>
            <span className={styles.text}>Residential</span>
          </a>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <img src={patternFooter} alt="" />
        <div className={styles.info}>
          <div className={styles.generalInfo}>
            <span>General info</span>
            <p>info@theheritageandover.com</p>
          </div>
          <div className={styles.companies}>
            <p>Lies Properties, LLC</p>
            <p>Jones Commercial Development Co.</p>
            <p>MKEC Engineering</p>
          </div>
        </div>
        <div className={styles.legal}>  
		© 2021 The Heritage · Website copied by Enzo Ponferrada
        </div>
      </footer>
    </>
  )
}

export default Layout
