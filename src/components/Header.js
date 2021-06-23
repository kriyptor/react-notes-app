import React from "react";

const Header = ({ handleToogleDarkMode }) => {
    return ( 
        <div className="header">
            <h1>Your Notes</h1>
            <button className="save" onClick={() => handleToogleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Mode</button>
        </div>
     );
}
 
export default Header;