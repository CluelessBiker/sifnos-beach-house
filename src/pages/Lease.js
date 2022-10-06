import React from 'react';
import SinglePagePDF from "../components/SinglePagePDF";
import samplePDF from "../assets/documents/leasecontract.pdf";

function Lease() {
    return (
        <SinglePagePDF pdf={samplePDF} />
    )
}

export default Lease;