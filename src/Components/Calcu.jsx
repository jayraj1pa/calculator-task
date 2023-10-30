import React, { useState } from "react";
import "../Components/style.css";

function Calcu() {
    const[display,setDisplay] = useState("")
  const handleDisplay = (value) => {
        setDisplay(display + value)
};

  const handleClear = ()=>{
    setDisplay(" ")

  }

  const handleEdit = ()=>{
        const edit = display.slice(0,-1)
        setDisplay(edit)
  }

  const handleCalculation = ()=>{
    try {
        const result = eval(display)
        setDisplay(result)
    } catch (error) {
        setDisplay("invalid error")
    }
  }

  return (
    <div>
      <div className="cal">
        <div className="section">
          <div className="display">{display}</div>
          <div className="buttons ">
            <div className="row">
              <div className="col" onClick={() => handleClear()}>
                AC
              </div>
              <div className="col" onClick={() => handleEdit("DEL")}>
                DEL
              </div>
              <div className="col" onClick={() => handleDisplay("/")}>
                /
              </div>
            </div>
            <div className="row">
              <div className="col" onClick={() => handleDisplay("7")}>
                7
              </div>
              <div className="col" onClick={() => handleDisplay("8")}>
                8
              </div>
              <div className="col" onClick={() => handleDisplay("9")}>
                9
              </div>
              <div className="col" onClick={() => handleDisplay("*")}>
                *
              </div>
            </div>
            <div className="row">
              <div className="col" onClick={() => handleDisplay("4")}>
                4
              </div>
              <div className="col" onClick={() => handleDisplay("5")}>
                5
              </div>
              <div className="col" onClick={() => handleDisplay("6")}>
                6
              </div>
              <div className="col" onClick={() => handleDisplay("+")}>
                +
              </div>
            </div>
            <div className="row">
              <div className="col" onClick={() => handleDisplay("1")}>
                1
              </div>
              <div className="col" onClick={() => handleDisplay("2")}>
                2
              </div>
              <div className="col" onClick={() => handleDisplay("3")}>
                3
              </div>
              <div className="col" onClick={() => handleDisplay("-")}>
                -
              </div>
            </div>
            <div className="row">
              <div className="col" onClick={() => handleDisplay("0")}>
                0
              </div>
              <div className="col" onClick={() => handleDisplay(".")}>
                .
              </div>
              <div className="col" onClick={() => handleCalculation()}>
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calcu;
