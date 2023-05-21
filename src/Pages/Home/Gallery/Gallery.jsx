import imge1 from "../../../assets/image/1.jpg"
import imge2 from "../../../assets/image/2.jpg"
import imge3 from "../../../assets/image/3.jpg"
import imge4 from "../../../assets/image/4.jpg"
import imge5 from "../../../assets/image/5.jpg"
import imge6 from "../../../assets/image/6.jpg"
import imge7 from "../../../assets/image/7.jpg"
import imge8 from "../../../assets/image/8.jpg"
import imge9 from "../../../assets/image/bike1.jpg"
import imge10 from "../../../assets/image/bike2.jpg"
import imge11 from "../../../assets/image/truck1.jpg"
import imge12 from "../../../assets/image/truck2.jpg"

const Gallery = () => {
    return (
        <div className="mt-20">
            <h1 className="text-6xl font-semibold text-center text-orange-700 mb-10 ">Cars Collection</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 h-38 w-38 gap-2">
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge1} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge2} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge3} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge4} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge5} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge6} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge7} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge8} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge9} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge10} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge11} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div><img src={imge12} /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;