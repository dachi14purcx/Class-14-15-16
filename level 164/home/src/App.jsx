import Navbar from "./component/Navbar"
import Header from "./component/header/Header"
import Skills from "./component/skills/skills"

function App() {
  return (
    <>
      <div className="absolute top-[-2vw] z-[-1] text-center text-[22vw] w-[100%] tracking-wide font-bold text-transparent hello font-sans">Hello</div>

      <Navbar />
      <Header />
      <Skills />
    </>
  )
}

export default App
