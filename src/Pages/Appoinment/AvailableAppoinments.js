import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinments = ({ selected }) => {
    return (
        <div>
            Appoinment Banner {format(selected, 'PP')}
        </div>
    );
};

export default AvailableAppoinments;