import React from "react";
import { Link } from 'react-router-dom';

const FixedLink = ({ component, children, ...props }) => <Link {...props}>{children}</Link>;

export { FixedLink as Link };

export {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';