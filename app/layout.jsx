import React, { Children } from "react";
import Link from "next/link";


export default function RootLayout({children}) {
    return (
      <html lang="es">
        <head>
        </head>
        <body>
          {children}
        </body>
      </html>
    );
  }