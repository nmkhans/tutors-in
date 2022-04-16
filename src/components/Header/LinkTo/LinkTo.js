import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const LinkTo = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? "#21a7d0" : "#222222" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default LinkTo;