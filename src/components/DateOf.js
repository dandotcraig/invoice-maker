import React from 'react';


export default function DateOf() {
    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;

    return(
        <p className="mt-1 text-sm leading-6 text-gray-600">
            Date: {currentDate}
        </p>
    )
};

