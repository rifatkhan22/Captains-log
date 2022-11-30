const React = require("react")
const DefaultLayout = require("../layout/Default")


class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title = "Edit Ship Page">
                <form action={`/logs/${this.props.log._id}?_method=PUT`} method ="POST">
                    Title : <input type = "text" name = "name" defaultValue={this.props.log.title}/> <br />
                    Entry : <input type = "textarea" name ="entry" defaultValue={this.props.log.entry}/> <br />
                    Is Ship Broken:
                    {this.props.log.isShipBroken? <input type = "checkbox" name="isShipBroken" defaultChecked/>:
                    <input type= "checkbox" name ="isShipBroken"/>} <br />

                    <input type = "submit" value = { `Edit ${this.props.log.title}`} />
                </form>


            </DefaultLayout>
        )
    }
}

module.exports = Edit