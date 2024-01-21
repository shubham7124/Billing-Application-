import axios from 'axios'
import React, { useRef, useState } from 'react'
import Tablelist from './Tablelist';

function Display() {
  const [headerData, setHeaderData] = useState([]);
  const [tableDetails, setTableDetails] = useState([])
  const [loading, setloading] = useState(false)
  React.useEffect(() => {
    axios.get('http://5.189.180.8:8010/header').then((response) => {
      setHeaderData(response.data);
    });
    axios.get('http://5.189.180.8:8010/detail')
      .then((response) => {
        setTableDetails(response.data)
      })
  }, []);

  setTimeout(() => {
    setloading(true)
  }, 1000);

  return (
    <div className="container">
      {
        headerData.map((data) => {
          if (loading) {
            return (
              <>
                <Tablelist data={data} products={tableDetails} />
              </>

            );
          }
        })
      }


    </div>
  )
}

export default Display
