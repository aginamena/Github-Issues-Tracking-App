import React from "react";

class Helloworld extends React.Component {
    render() {
        const continets = ["Africa", "South America", "North America", "Europe", "Asia", "Australia", "Antatica"]
        return (
            <div>
                {
                    continets.map(continet => <div>{continet}</div>)
                }
            </div>
        )
    }
}
export default Helloworld;