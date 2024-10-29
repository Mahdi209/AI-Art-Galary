import './App.css';
import SectionOne from './Components/SectionOne';
import SectionThree from './Components/SectionThree';
import SectionTwo from './Components/SectionTwo';
import background from './assets/photo-collage.png';

function App() {
  return (
    <header className='flex flex-col items-center  '>
      <h2 className='text-5xl font-serif text-white '>
        AI Art Gallery
      </h2>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </header>
  );
}

export default App;
