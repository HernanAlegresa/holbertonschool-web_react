(()=>{var e=document.querySelector("body"),t=document.createElement("table"),n=document.createElement("tbody");[{firstName:"Hernan",lastName:"Alegresa",age:23,location:"New York"},{firstName:"Jane",lastName:"West",age:20,location:"London"}].forEach((function(e){var t=document.createElement("tr"),a=document.createElement("td"),o=document.createElement("td");a.textContent=e.firstName,o.textContent=e.location,t.appendChild(a),t.appendChild(o),n.appendChild(t)})),t.appendChild(n),e.appendChild(t)})();