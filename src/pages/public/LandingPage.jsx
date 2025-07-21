import Header from "../../components/Header.jsx";
import HeroSection from "../../components/LandingPage/HeroSection.jsx";
import FeatureSection from "../../components/LandingPage/FeatureSection.jsx";
import WorkSection from "../../components/LandingPage/WorkSection.jsx";
import Pricing from "../../components/LandingPage/Pricing.jsx";
import Testimonial from "../../components/LandingPage/Testimonial.jsx";
import {Link} from "react-router-dom";
import Footer from "../../components/Footer.jsx";

const LandingPage = () => {
    return (
        <main className="bg-gray-100">
            <Header />
            <HeroSection />
            <FeatureSection />
            <WorkSection />
            <Pricing />
            <Testimonial />

            <section className="flex flex-col items-center py-28 justify-center gap-4 text-center bg-indigo-600">
                <h2 className="text-white text-4xl font-bold">Ready to streamline your team's workflow?</h2>
                <p className="text-white text-xl">Start your 14-day free trial today. No credit card required.</p>
                <div className="flex gap-5">
                    <Link className="rounded-md bg-white text-indigo-500 w-full text-nowrap py-3 px-4 flex items-center justify-center font-medium text-lg" to="#">
                        Get started for free
                    </Link>
                    <Link className="rounded-md bg-indigo-700 text-white w-full text-nowrap py-3 px-4 flex items-center justify-center font-medium text-lg" to="#">
                        Schedule a demo
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default LandingPage
