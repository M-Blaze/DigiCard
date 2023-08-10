import React from 'react';
import saveSvgAsPng from 'save-svg-as-png';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeGenerator = ({ url }) => {
    const downloadQRCode = () => {
        const svgElement = document.getElementById('qr-svg');

        saveSvgAsPng.saveSvgAsPng(svgElement, 'qrcode.png', {
            backgroundColor: 'white', // Set a background color if necessary
            scale:10
        });
    };

    return (
        <div>
            <QRCodeSVG
                id="qr-svg"
                value={url}
                size={128}
            />
            <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
    );
};

export default QRCodeGenerator;