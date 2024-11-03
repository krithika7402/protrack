import Calendar from '../components/Calendar/Calendar';
import Notes from '../components/Notes/Notes';
import WeeklyOverview from '../components/WeeklyOverview/WeeklyOverview'
import './Home.css'

// Home.jsx
const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <span>Welcome Back!</span>
        <h1>Dalton&apos;s Home</h1>
      </div>
      <div className="dashboard-content">
        <div className="left-column">
          <WeeklyOverview />
          <Notes/>
        </div>
        <div className="right-column">
          <Calendar/>
        </div>
      </div>
    </div>
  )
}

export default Home;