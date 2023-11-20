'use client'

import { baloo, poppins, overpass } from './fonts';

import './globals.css'
 
export default function GlobalError({ error, reset }) {
  return (
    <html lang="en" className={`${baloo.variable} ${poppins.variable} ${overpass.variable}`}>
      <body>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{textAlign: 'center'}}>Something went wrong!</h1>
            <button style={{textAlign: 'center'}} onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  )
}