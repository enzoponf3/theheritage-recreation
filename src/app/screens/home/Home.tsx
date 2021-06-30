import * as React from "react"

import styles from "./Home.module.scss"

const Home: React.FC = () => {
  return (
    <>
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
      <div className={styles.headBlock}>
        <h2>Where <em>life</em><br />Abounds</h2>
        <p>Coming to Andover, KS, The Heritage will be a convenient and walkable 100-acre master-planned community with charming residential neighborhoods and engaging commercial development. It will provide a vibrant anchor and central gathering place for Andover and surrounding communities.</p>
      </div>
      <div className={styles.patternBlock}>
        <h3>Introducing <br />Heritage Square</h3>
        <p>A mixed-use project with luxury apartments, street level commercial spaces, abundant parking, and public plaza.</p>
        <div className={styles.blockImage}></div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryItem}>
          <div className={`${styles.image} ${styles.image1}`}></div>
          <div className={styles.imageTitle}>Bird's Eye View</div>
        </div>
        <div className={styles.galleryItem}>
          <div className={`${styles.image} ${styles.image2}`}></div>
          <div className={styles.imageTitle}>Heritage Square</div>
        </div>
        <div className={styles.galleryItem}>
          <div className={`${styles.image} ${styles.image3}`}></div>
          <div className={styles.imageTitle}>Heritage Square Streetscape</div>
        </div>
        <div className={styles.galleryItem}>
          <div className={`${styles.image} ${styles.image4}`}></div>
          <div className={styles.imageTitle}>Heritage Plaza</div>
        </div>
        <div className={styles.galleryItem}>
          <div className={`${styles.image} ${styles.image5}`}></div>
          <div className={styles.imageTitle}>Master Plan</div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.column}>
          <h4>Features</h4>
          <ul className={styles.featuresBlock}>
            <li>High-profile business enviroment</li>
            <li>Shopping and services</li>
            <li>Family-friendly dining</li>
            <li>Spacious town square</li>
            <li>Single-family homes</li>
            <li>Parks and green spaces</li>
            <li>Luxury Apartments</li>
            <li>Walking / biking trails</li>
            <li>Pedestrian-friendly</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Close To</h4>
          <ul className={styles.closeToBlock}>
            <li>Andover Central Middle and High School; Sunflower Elementary School</li>
            <li>Andover YMCA and Farha Sports Complex</li>
            <li>Andover Road / US-54</li>
            <li>Andover Central Park</li>
            <li>Dillions Marketplace</li>
            <li>Capitol Federal Ampitheater®</li>
            <li>Hotels</li>
            <li>Andover Library</li>
          </ul>          
        </div>
      </div>
      <article>
        <div className={`${styles.articleImage1} ${styles.articleImage}`}></div>
        <div className={styles.articleIntro}>
          <div className={styles.pattern1}></div>
          <h5>Comercial</h5>
          <section>
            <h4><em>Grow your business</em> at<br />The Heritage</h4>
            <p>A suburban town center active with dining, shopping, and business, The Heritage is the ideal location for your business. <em>Now selling building sites and pre-leasing Heritage Square commercial space</em></p>
          </section>
        </div>
        <section>
          <h6>Room to grow<br />your business.</h6>
          <p>With excellent accessibility and parking, businesses at The Heritage wil enjoy exposure unlike anywhere else. Nearby neighborhoods, Class A apartments, and family-oriented attractions will help your business grow in this community within a community.</p>
        </section>
        <section>
          <h6>Customers at your door.</h6>
          <p>Strategically designed as a mixed-use development that brings businesses and people closer together, opportunity will be at your doorstep at The Heritage. Andover's affluent population will have their eyes on you.</p>
        </section>
        <section>
          <h6>Perfect for new<br />small businesses.</h6>
          <p>Ranked as an America's Best 50 Cities To Live, Andover is lauded for its outstanding public schools, home value, and quality of life. You couldn't ask for a better place to cultivate your business.</p>
          <span>¹ 24/7 Wall St.   ²<a href="https://www.bizjournals.com/wichita/news/2017/07/07/see-where-the-money-lives-in-the-wichita-area.html">Wichita Business journal</a></span>
        </section>
      </article>
      <div className={`${styles.patternBlock} ${styles.inquiries}`}>
        <h4>Inquiries</h4>
        <h3>Get in touch today.</h3>
        <p>Now selling building sites and pre-leasing Heritage Square commercial space.</p>
        <div>
          <a href="">Sales Brochure</a>
          <a href="">Inquieries</a>
        </div>
        <div className={styles.blockImage}></div>
      </div>
      <div className={styles.contact}>
        <div className={styles.streetCommercial}>
          <span className={styles.mailText}>marlin@streetcommercial.com</span>
          <span className={styles.mailText}>stephanie@streetcommercial.com</span>
          <span className={styles.mailText}>kurt@streetcommercial.com</span>
          <span className={styles.text}>Street Commercial</span>
        </div>
        
        <span className={styles.mailText}>jjones@jonescomdev.com</span>
        <span className={styles.text}>Jerry Jones, Jones Commercial Development Co.</span>
      </div>
      <article>
        <div className={`${styles.articleImage2} ${styles.articleImage}`}></div>
        <div className={styles.articleIntro}>
          <div className={styles.pattern1}></div>
          <h5>Residential</h5>
          <section>
            <h4><em>Live and connect</em> at The Heritage.</h4>
            <p>No matter your stage of life, The Heritage is waiting to become your brand-new home. We have two distinct communities <em>now selling</em></p>
          </section>
        </div>
        <div className={styles.communities}>
          <div className={styles.columns}>
            <h4>Commons</h4>
            <em>Urban Farmhouse<br />Collection</em>
            <ul>

              <li>Family-oriented</li>
              <li>Low maintenance</li>
              <li>Pool / clubhouse</li>
              <li>Play spaces</li>
              <em className={styles.sellingStatus}>Selling Phase 1</em>
            </ul>
            <a href="">Learn more</a>
          </div>
          <div className={styles.columns}>
            <h4><span>The</span>Courtyards</h4>
            <em>an Epcon Community</em>
            <ul>
              <li>Luxury Living</li>
              <li>Low maintenance</li>
              <li>Pool / clubhouse</li>
              <li>Walking trails</li>
              <em className={styles.sellingStatus}>Selling Phase 1</em>
            </ul>
            <a href="">Learn more</a>
          </div>
        </div>
      </article>
    </>
  )
}

export default Home
