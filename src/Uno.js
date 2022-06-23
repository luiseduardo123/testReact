import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Uno() {

  const [showList, setShowList] = useState([])
  const [showData, setShowData] = useState(null)
  
  useEffect(() => {
    fetch('https://www.el-tiempo.net/api/json/v2/provincias')
      .then(res => res.json())
      .then(list => {
        setShowList(list.provincias)
      })
  }, [])

  const checkTime = (e) => {
    let {value} = e.target;
    fetch('https://www.el-tiempo.net/api/json/v2/provincias/'+value)
    .then(res => res.json())
    .then(data => {
      setShowData(data)
    })
  }

  return (
    <div>
      <Link className="button1" to="/">Volver</Link>
      <div class="select">
        <select onChange={checkTime}>
          {showList.map((prov, i) => {                   
             // Return the element. Also pass key     
             return (<option value={prov.CODPROV}>{prov.NOMBRE_PROVINCIA}</option>) 
          })
          }
        </select>
      </div>
      {showData && (
        <React.Fragment>
          <h1>{showData.title}</h1>
          <p><b>Hoy</b>: {showData.today.p}</p>
          <p><b>Mañana</b>: {showData.tomorrow.p}</p>
       </React.Fragment>)}
      {!showData && (
        <React.Fragment>
          <h1>Seleccione una provincia</h1>
       </React.Fragment>)}
    </div>
  );
}

export default Uno;
