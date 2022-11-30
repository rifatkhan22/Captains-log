const React = require ("react")
const DefaultLayout = require("../layout/Default")

class Show extends React.Component {
    render() {
        const {title,entry,shipIsBroken} = this.props.log
        return (
            <DefaultLayout title = {`${title} Show Page`}>
                <div>
                    <p> The {title} has an entry of {entry}. </p>
                    {shipIsBroken? "This ship is broken!": "This ship is not broken!"}
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show