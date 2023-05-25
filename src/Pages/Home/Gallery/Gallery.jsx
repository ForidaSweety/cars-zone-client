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
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'

const Gallery = () => {
    useEffect(()=>{
        Aos.init();
    })
    return (
        <div className="mt-20">
            <h1 className="text-6xl font-semibold text-center text-orange-700 mb-10 ">Cars Collection</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 h-38 w-38 gap-2">
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge1} className="h-52" /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge2} className="h-52 w-full" /></div>
                    <div className="card-body">
                        <h2 className="card-title">Racing Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge3} className="h-52 w-full"/></div>
                    <div className="card-body">
                        <h2 className="card-title">Blue Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge4} className="h-52 w-full" /></div>
                    <div className="card-body">
                        <h2 className="card-title">Red Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge5} className="h-52 w-full"/></div>
                    <div className="card-body">
                        <h2 className="card-title">Yellow Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge6} className="h-52 w-full" /></div>
                    <div className="card-body">
                        <h2 className="card-title">Sports Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge7} className="h-52 w-full"/></div>
                    <div className="card-body">
                        <h2 className="card-title">Purple Remote Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge8} className="h-52 w-full" /></div>
                    <div className="card-body">
                        <h2 className="card-title"> Car</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge9} className="h-52 w-full"/></div>
                    <div className="card-body">
                        <h2 className="card-title">Black hunter</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge10} className="h-52 w-full"/></div>
                    <div className="card-body">
                        <h2 className="card-title">Blue Bike</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge11} className="h-52 w-full"/></div>
                    <div className="card-body">
                        <h2 className="card-title"> Excavator</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl" data-aos ="flip-down">
                    <div><img src={imge12} className="h-52 w-full"/></div>
                    <div className="card-body">
                        <h2 className="card-title">Drump Truck</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;