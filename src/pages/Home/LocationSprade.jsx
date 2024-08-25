
import { Link } from "react-router-dom";

const title = <h2 className="title">Good Food <span className="yellow-color">Good Health</span> </h2>;
const desc = "Shop Healthier with Us!";


const clientsList = [
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
]
const LocationSprade = () => {
  return (
    <div className="clients-section style-2 padding-tb">
    <div className="container">
        <div className="section-header text-center">
            {title}
            <p>{desc}</p>
        </div>
        <div className="section-wrapper">
            <div className="clients">
                {clientsList.map((val, i) => (
                    <div className="client-list" key={i}>
                        <Link to="/signup" className="client-content"><span>{val.text}</span></Link>
                        <div className="client-thumb">
                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
  )
}

export default LocationSprade