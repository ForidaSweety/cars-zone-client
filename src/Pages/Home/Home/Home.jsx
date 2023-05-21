import Banner from "../Banner/Banner";
import Reviews from "../CustomerReview/Reviews";
import Gallery from "../Gallery/Gallery";
import Tabss from "../Tabss/Tabss";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabss></Tabss>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;