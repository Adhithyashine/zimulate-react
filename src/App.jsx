import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Team from './Components/Team/Team';
function App() {
  return (
    <div className="bg-[#4b0082] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Team/>
      <Services/>
      <Contact/>
      <Footer/>     
    </div>
  );
}

export default App;
