import './App.css';
import ApplicationForm from './Components/ApplactionForm';
import SectionFour from './Components/SectionFour';
import SectionOne from './Components/SectionOne';
import SectionThree from './Components/SectionThree';
import SectionTwo from './Components/SectionTwo';
import CustomCursor from './Components/CustomCursor';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App cursor-none">
      <CustomCursor />
      <Navigation />
      <div className='flex flex-col items-center'>
        <header id="home" className='flex flex-col items-center justify-center h-screen w-full cursor-none
          relative overflow-hidden'>
          {/* Enhanced background effects */}
          <div className="absolute w-[600px] h-[600px] bg-purple-500/20 
            rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-pink-500/15 
            rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute w-[200px] h-[200px] bg-blue-500/10 
            rounded-full blur-[80px] animate-pulse" style={{animationDelay: '2s'}}></div>

          {/* Title container with enhanced design */}
          <div className="relative z-10">
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold
              bg-gradient-to-r from-purple-200 via-pink-300 to-purple-200
              text-transparent bg-clip-text
              scale-110 hover:scale-125 transition-all duration-1000 
              animate-[fadeInRotate_2s_ease-in-out] transform translate-y-[-20px]
              drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]
              cursor-none'>
              AI Art Gallery
            </h2>

            {/* Enhanced decorative elements */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2
              w-1/2 h-[3px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent
              animate-pulse"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
              w-1/3 h-[2px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent
              animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2
              w-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent
              animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Subtitle */}
          <div className="relative z-10 mt-8">
            <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-light
              animate-[fadeInUp_2s_ease-in-out_1s] opacity-0 
              animation-fill-mode: forwards;
              text-center px-4">
              معرض الفن الرقمي بتقنية الذكاء الاصطناعي
            </p>
          </div>

          {/* Enhanced floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full
                  ${i % 3 === 0 ? 'w-1 h-1 bg-purple-400/30' : 
                    i % 3 === 1 ? 'w-2 h-2 bg-pink-400/20' : 
                    'w-1.5 h-1.5 bg-blue-400/25'}
                  ${i % 2 === 0 ? 'animate-float' : 'animate-floatSlow'}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
            animate-bounce cursor-none">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full
              flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2
                animate-pulse"></div>
            </div>
          </div>
        </header>

        <div id="topics">
          <SectionOne />
        </div>
        <div id="details">
          <SectionTwo />
        </div>
        <div id="tools">
          <SectionThree />
        </div>
        <div id="enhancement">
          <SectionFour />
        </div>
        <div id="form">
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
}

export default App;
