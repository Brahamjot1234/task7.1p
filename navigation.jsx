import { Link } from "react-router-dom";
// Define a functional component called IntroductoryRow
const Bar = () => {
  // Return JSX ents that make up the IntroductoryRow component
  return (

    <div className="rowBackground">
      {/* Empty div with the ID 'top' */}
      <div id="top"></div>

      <div className="deakin">
          <Link to='/'>
            DEV@Deakin
          </Link>
      </div>

      {/* Element with the class 'searchBox', containing an input field */}
      <div className="searchBox">
        <input type="text"/>
      </div>

      <div className="buttons">
        <Link to='post'>
          <button className="postButton" value="Post">
            Post
          </button>
        </Link>

        <Link to='login'>
          <button className="loginButton" value="Login">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

// Export the IntroductoryRow component as the default export
export default Bar;