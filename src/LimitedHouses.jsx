import './LimitedHouses.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import SinglePerson from './SinglePerson';
import './App.css';

function LimitedHouses(props) {

    const { dane } = props;
    const itemsPerPage = 10;
  
  const [itemOffset, setItemOffset] = useState(0);
  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = dane.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dane.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dane.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const html = () => currentItems.map(el => <SinglePerson house={el}/>);

  return (
    <>
      {html()}

      <div className="containerPagination"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 40,
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
      }}
    >
      <ReactPaginate
        activeClassName={'item active '}
        breakClassName={'item break-me '}
        breakLabel="..."
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageClassName={'item pagination-page '}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousClassName={"item previous"}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </div>
    </>
  );
};

export default LimitedHouses;
