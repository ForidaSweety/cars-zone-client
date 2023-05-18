
const Banner = () => {
    return (
         <div className="hero min-h-screen" style={{ backgroundImage: `url("https://ibb.co/L1LJtDH")`}}> 
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-6"><span className="text-7xl text-orange-700 font-extrabold">CarsZone</span></h1>
                    <p className="mb-6 text-base">Imagination of young minds by crafting exceptional toy cars that inspire endless adventures. With our attention to detail, quality craftsmanship, and a wide range of exciting models, we are the driving force behind imaginative play and unforgettable memories.</p>
                    <button className="btn btn-primary">explore us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;