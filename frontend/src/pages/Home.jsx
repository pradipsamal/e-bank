import HomeFooter from "../components/Home/HomeFooter/HomeFooter";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader";
import HomeHero from "../components/Home/HomeHero/HomeHero";
import Services from "../components/Home/Service/Services";


function Home() {
    return (
        <div className="home-page">
            <HomeHeader />
            <HomeHero />
            <Services />
            <HomeFooter />
        </div>
    );
}

export default Home;