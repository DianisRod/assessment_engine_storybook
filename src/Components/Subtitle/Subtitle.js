import React from 'react';
import { InfoLabel } from 'fundamental-react/lib/InfoLabel';



const Subtitle = ({ children, ...rest }) => {

    return (
        <InfoLabel className="Subtitle" {...rest}>
            {children}
        </InfoLabel>
    )
}

export default Subtitle;

