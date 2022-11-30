const React = require("react")
const DefaultLayout = require("../layout/Default")


class Index extends React.Component {
    render() {
        const {logs} = this.props
        return (
            <DefaultLayout title = "Logs Index Page">
                <nav>
                    <a href="/logs/new">Create Log</a>
                </nav>
                <ul>
                    {
                        logs.map((log,i) => {
                            return (
                                <li>
                                    The {" "}
                                    <a style = {{color:blue}} href= {`/logs/${logs._id}`}>{log.name}</a>
                                    {" "}
                                    is {log.entry} <br />
                                    {
                                        log.shipIsBroken
                                        ? "This ship is broken"
                                        : "This ship is not broken"
                                    }
                                    <br />
                                    <a href = {`/logs/${log._id}/edit`}>Edit this Ship</a>
                                    <form action = {`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type = "submit" value = "DELETE SHIP" />
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index