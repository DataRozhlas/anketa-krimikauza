import "./byeie"; // loučíme se s IE
import { h, render } from "preact";
import "./chart";
import { makeChart } from "./chart";
/** @jsx h */

let host = "https://data.irozhlas.cz/anketa-krimikauza";
if (window.location.hostname === "localhost") {
  host = "http://localhost/anketa-krimikauza";
}

function printResps(obj) {
  return `<b>${obj.k1}</b><p>${obj.d1}</p><b>${obj.k2}</b><p>${obj.d2}</p><b>${obj.k3}</b><p>${obj.d3}</p>`
}

function onLoad(e) {
  const data = JSON.parse(e.target.response);
  render((
    <div id="anketa">
      {data.map(el => (
        <div className="respondent">
          <img className="portret" src={host + "/foto/" + el.f} alt={el.p} />
          <div className="bio">
            <div className="jmeno">{`${el.j} ${el.p}`}</div>
            <div className="vek">{el.fc}</div>
          </div>
          <div className="odpoved" dangerouslySetInnerHTML={{ __html: printResps(el) }}></div>
        </div>
      ))}
    </div>
  ), document.getElementById("anketa-wrapper"));
}

const r = new XMLHttpRequest();
r.addEventListener("load", onLoad);
r.open("GET", host + "/data/data.json");
r.send();

makeChart();
