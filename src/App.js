import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { generateHouse, createArray } from './data';
import SinglePerson from './SinglePerson';
import LimitedHouses from './LimitedHouses';
import Scroller from './Scroller';
import './App.css';



function App() {
  const [data, setData] = useState([{
                                  street: "loading",
                                  city: "loading",
                                  houseArea: "loading",
                                  buildingYears: "loading",
                                  img: "loading",
                                  }]);

  useEffect(()=> {
    createArray().then(resp => {
      console.log("response", resp)
      setData(resp);
    });
  }, [])

  
  const htmlLoading = <div className="loading">
                            <h1>LOADING...</h1>
                        </div>;

  //const html = () => data.map(el => <SinglePerson house={el}/>);  //all houses
  //const htmlPaginate = () => <LimitedHouses dane={data}/>;
  const htmlScroller = () => <Scroller dane={data}/>;
  
  

  return (
    <div className="App">
        {data.length > 1?htmlScroller():htmlLoading}

    </div>
  );
}

export default App;
