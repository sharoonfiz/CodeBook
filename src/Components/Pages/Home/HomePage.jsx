
import Hero from './Components/Hero'
import FeaturedItems from './Components/FeaturedItems'
import Faq from './Components/Faq'
import Testimonial from './Components/Testimonial'
import UseTitle from '../../../Hooks/UseTitle'


const HomePage = () => {

    UseTitle("Acess latest eBooks")

    return (
        <main  >


            <Hero />
            <FeaturedItems />
            <Testimonial />
            <Faq />
        </main>
    )
}

export default HomePage;