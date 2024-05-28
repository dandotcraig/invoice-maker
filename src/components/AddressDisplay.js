import React from "react";

export default function AddressDisplay({clientSent}) {
    console.log(clientSent.value)
    return (
        <div className="mt-1 text-sm leading-6 text-gray-600">
            {clientSent}
        </div>
    )
};
