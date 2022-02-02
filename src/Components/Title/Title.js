import React from 'react';
import { InfoLabel } from 'fundamental-react/lib/InfoLabel';


const Title = ({ children, ...rest }) => {
    return (
        <InfoLabel className="Title" {...rest}>
            {children}
        </InfoLabel>
    )
}


export default Title;

