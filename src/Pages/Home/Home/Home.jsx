import Banner from "../Banner/Banner";
import Reviews from "../CustomerReview/Reviews";
import Gallery from "../Gallery/Gallery";
import NewArrival from "../NewArrival/NewArrival";
import Tabss from "../Tabss/Tabss";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabss></Tabss>
            <NewArrival></NewArrival>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;