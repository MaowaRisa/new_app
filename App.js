const heading = React.createElement(
    "div", 
    {id: "parent"},
    React.createElement("div", {id: "child"}, 
        [
            React.createElement("h1", {id: "heading"}, "I'm a H1 tag"),
            React.createElement("h2", {}, "I'm a H2 tag")
        ]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)