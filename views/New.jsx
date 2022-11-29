const React = require("react")
const DefaultLayout = require("./layout/Default")



class New extends React.Component {
    render() {
        return (
            <DefaultLayout title = "New Page">
                <nav>
                    {/* <a href = "/logs">Home Page</a> */}
                </nav>
                <form action = "/logs" method = "POST">
                    Title: <input type="text" name="title"/> <br />
                    Entry: <input type= "textarea" name="entry"/> <br />
                    Is Ship Broken: <input type="checkbox" name="shipIsBroken"/> <br />
                    <input type="submit" value = "Create Ship" />
                </form>
            </DefaultLayout>
            
        )
    }
}

module.exports = New