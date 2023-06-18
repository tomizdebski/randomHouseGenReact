import './SinglePerson.css';

const SinglePerson = (props) => {
    const {img,street, city, houseArea, buildingYears} = props.house;

    const htmlCard = <div className="home">
                        <img className="home__img"
                            src={img}
                            alt="home"
                        />
                        <p>Ulica: {street}</p>
                        <p>Miasto: {city}</p>
                        <p>Powierzchnia: {houseArea} </p>
                        <p>Rok budowy: {buildingYears}</p>
                    </div>;
    

    return (
        <>
        {htmlCard}
        </>
    )
    
        
    
}

export default SinglePerson;