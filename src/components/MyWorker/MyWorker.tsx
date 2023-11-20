import React from 'react';
import {Worker, Viewer} from "@react-pdf-viewer/core";
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export const MyWorker = (props: { params: { docs: string } }) => {
    // const defaultPlugins = defaultLayoutPlugin();
    // const doc = require(`@/assets/docs/${props.params.docs}`)

    return (
        <div>
            docs
        </div>
        // <Worker workerUrl={'https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js'}>
        //     <Viewer fileUrl={doc} plugins={[defaultPlugins]} de/>
        // </Worker>
    );
};