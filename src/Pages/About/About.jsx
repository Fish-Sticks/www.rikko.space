import AboutContent from "./AboutContent"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

export default function About() {
    document.title = "MixList - About"
    return(
    <div className="grid grid-rows-[auto,1fr] bg-gradient-to-tl min-h-screen from-orange-300 to-orange-500">
        <NavBar/>
        <div>
            <AboutContent/>
        </div>
        <Footer/>
    </div>
)
}