require('vendor/bootstrap.scss');
require('User/User.scss');
import Link from 'react-router'
class UserPage extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      fuckkkk: []
      // fuckkkk: ""
    }
  }

  componentWillMount() {
    $.ajax({
      url: "/user",
      type: "get",
      success: res => {
        this.setState({fuckkkk: res});
        // this.setState({fuckkkk: res[0].name});
      },
      error: error => {
        console.error( error );
      }
    });
  }

  render() {
    return (
      <div>
        <h1>User Page</h1>
        {this.state.fuckkkk.map( user => <div>{ user.name }</div> )}
        {/*<div>{this.state.fuckkkk}</div>*/}
        {/*<Link to={}*/}
      </div>
    );
  }
}

module.exports = UserPage;
