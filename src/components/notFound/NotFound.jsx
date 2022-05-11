import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Page Not Found. Go to <Link to="/">Home</Link> page
        </div>
    );
};

export default NotFound;