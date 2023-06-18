import './LimitedHouses.css';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import SinglePerson from './SinglePerson';
import './Scroller.css';

function Scroller(props) {

    const { dane } = props;
    const itemsPerPage = 10;
    const [hasMore, setHasMore] = useState(true);
    const [records, setrecords] = useState(itemsPerPage);

    const showItems = (dane) => {
        var items = [];
        for (var i = 0; i < records; i++) {

          items.push(
            <SinglePerson house={dane[i]}/>
          );
        }
        console.log(items.length)
        return items;
      };

      const loadMore = () => {
        if (records >= dane.length) {
            setHasMore(false);
        } else {
            setTimeout(() => {
                setrecords(records + itemsPerPage);
              }, 2000);
        }
      };



  return (
    <>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={<h4 className="loader">Loading...</h4>}
            useWindow={false}
        >
            {showItems(dane)}
        </InfiniteScroll>
    </>
  );
};

export default Scroller;
