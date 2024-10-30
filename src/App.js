import './App.css';
import ApplicationForm from './Components/ApplactionForm';
import SectionFour from './Components/SectionFour';
import SectionOne from './Components/SectionOne';
import SectionThree from './Components/SectionThree';
import SectionTwo from './Components/SectionTwo';

function App() {
  return (
    <div className='flex flex-col items-center'>
      <header className='flex flex-col items-center justify-center h-screen  w-full '>
        <h2 className='text-5xl lg:text-7xl  text-slate-700 scale-125 transition-all  duration-1000 '>
          AI Art Gallery
        </h2>

      </header>

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <ApplicationForm />
    </div>
  );
}

export default App;
