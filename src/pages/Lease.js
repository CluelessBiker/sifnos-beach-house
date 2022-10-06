import React from 'react';
import SinglePagePDF from "../components/SinglePagePDF";
import pdf from "../assets/documents/leasecontract.pdf";

function Lease() {
    return (
        <SinglePagePDF pdf={pdf} />
    )
}

export default Lease;