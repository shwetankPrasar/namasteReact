const heading = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"Nested react statement")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);