import './App.css';
import ApplicationForm from './Components/ApplactionForm';
import SectionFour from './Components/SectionFour';
import SectionOne from './Components/SectionOne';
import SectionThree from './Components/SectionThree';
import SectionTwo from './Components/SectionTwo';
import CustomCursor from './Components/CustomCursor';

function App() {
  return (
    <div className="App cursor-none">
      <CustomCursor />
      <div className='flex flex-col items-center'>
        <header className='flex flex-col items-center justify-center h-screen w-full cursor-none
          relative overflow-hidden'>
          {/* Background glow effect */}
          <div className="absolute w-[500px] h-[500px] bg-purple-500/20 
            rounded-full blur-[120px] animate-pulse"></div>

          {/* Title container */}
          <div className="relative">
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold
              bg-gradient-to-r from-purple-300 via-pink-200 to-purple-300
              text-transparent bg-clip-text
              scale-110 hover:scale-125 transition-all duration-1000 
              animate-[fadeInRotate_2s_ease-in-out] transform translate-y-[-20px]
              drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]'>
              AI Art Gallery
            </h2>

            {/* Decorative lines */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2
              w-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
              w-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-purple-400/20 rounded-full
                  animate-float-${i % 5}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
        </header>

        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <ApplicationForm />
      </div>
    </div>
  );
}

export default App;
