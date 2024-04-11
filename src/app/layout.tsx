import React from "react";
import '@/assets/fonts/Jura/stylesheet.css';
import '@/assets/fonts/Montserrat/stylesheet.css';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './globals.css';
import {Metadata} from "next";

export const metadata: Metadata = {
    icons: {
        icon: '/favicon.svg',
    },
}

const RootLayout = ({children}: { children: React.ReactNode }) => (
    <html lang="ru">
    <body id={'body'}>
    {children}
    </body>
    </html>
)

export default RootLayout;
