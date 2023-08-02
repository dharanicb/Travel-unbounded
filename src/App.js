// import LandingPage from './components/LandingPage'
import './App.css'

const App = () => (
  <div className="App">
    <header className="header">
      <h1 className="title">Maasai Mara Tour Package</h1>
      <p className="subtitle">
        Experience the Wildlife Adventure of a Lifetime!
      </p>
    </header>

    <section className="itinerary">
      <h2 className="section-title">Sample Itinerary</h2>
      <ul className="itinerary-list">
        <li>Day 1: Arrive in Maasai Mara, check-in to the luxurious lodge.</li>
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
      <button
        type="button"
        className="cta-button"
        onClick={() => window.alert('Please contact us to book your tour!')}
      >
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

export default App
