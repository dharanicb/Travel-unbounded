// import LandingPage from './components/LandingPage'
import './App.css'

const App = () => {
  const redirect = () => {
    window.open('https://www.travelunbounded.com/')
  }
  return (
    <div className="App background-container">
      <header className="header">
        <img
          src="https://drive.google.com/uc?id=1jIsCP8cn1KPr03wEHLq9Hk142j_VjG7r"
          onClick={() => redirect()}
          alt="logo"
          className="header_logo"
        />
        <div>
          <h1 className="title">Maasai Mara Tour Package</h1>
          <p className="subtitle">
            Experience the Wildlife Adventure of a Lifetime!
          </p>
        </div>
      </header>

      <section className="itinerary">
        <h2 className="section-title">Sample Itinerary</h2>
        <ul className="itinerary-list">
          <li>
            Day 1: Arrive in Maasai Mara, check-in to the luxurious lodge.
          </li>
          <li>Day 2: Full-day game drive in the reserve.</li>
          <li>Day 3: Explore the Maasai village and cultural tour.</li>
          <li>Day 4: Morning game drive, depart for your next destination.</li>
        </ul>
      </section>

      <section className="cta">
        <h2 className="section-title">Dont Miss This Amazing Opportunity!</h2>
        <p className="cta-text">
          Witness the beauty of Maasai Mara up close. Limited slots available.
          Book your tour package now!
        </p>
        <button type="button" className="cta-button" onClick={() => redirect()}>
          Book Now
        </button>
      </section>

      <footer className="footer">
        <p className="footer-text">
          © {new Date().getFullYear()} Maasai Mara Tours. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
