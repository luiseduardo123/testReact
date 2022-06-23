import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Dos() {

  const [showList, setShowList] = useState([])
  const [showData, setShowData] = useState(null)
  
  useEffect(() => {
    fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=provincias-espanolas&q=&sort=provincia&facet=ccaa&facet=provincia')
      .then(res => res.json())
      .then(list => {console.log(list.records)
        setShowList(list.records)
      })
  }, [])

  return (
    <div>
      <Link className="button1" to="/">Volver</Link>
      <h1>Listado de provincias</h1>
      <ul className="check-list">
        {showList.map((prov) => {  
          console.log(prov.fields.geo_point_2d[0])
          let url = "https://www.google.es/maps/@"+prov.fields.geo_point_2d[0]+","+prov.fields.geo_point_2d[1]+"z?hl=es"
          console.log(url)
           // Return the element. Also pass key     
           return (<li>{prov.fields.ccaa} - <a target="_blank" href={url}>Como llegar</a></li>) 
        })
        }
      </ul>
    </div>
  );
}

export default Dos;
