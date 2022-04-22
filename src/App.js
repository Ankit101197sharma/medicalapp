
import './App.css';
import TopSection from './Components/TopSection/TopSection';
import PrimaryCard from './Components/PrimararyCard/PrimaryCard';
import AppointmentCard from './Components/AppointmentCard/AppointmentCard';
import GridCard from './Components/GridCard/GridCard';
import OurTeam from './Components/OurTeam/OurTeam';
import ContactDetails from './Components/ContactDetails/ContactDetails';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <TopSection/>
      <PrimaryCard/>
      <AppointmentCard/>
      <GridCard/>
      <OurTeam/>
      <ContactDetails/>
      <Footer/>
    </div>
  );
}

export default App;
