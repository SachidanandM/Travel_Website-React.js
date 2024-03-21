import { Component } from "react";
//The Component class is a base class for creating custom React components
import "./NavbarStyle.css";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
//When clicked, it will navigate to the specified route without causing a full page refresh.

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    //another function of arrow function
    this.setState({ clicked: !this.state.clicked });
    //this.setstae = update the state
    //NOT operator. If clicked is false, it becomes true, and if it's true, it becomes `false.
  };

  render() {
    //browser loading
    return (
      //The return statement stops the execution of a function and returns a value.
      <nav className="navbaritems">
        <h1 className="navbar-logo">Travel</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            //using this.state & if else
            //anyone clicking bar icon or close icon will display
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menu.map((item, index) => {
            //item means object=url,icon,cName,title.
            //index means array value 0 to n

            return (
              //then will be return the array funcion
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
