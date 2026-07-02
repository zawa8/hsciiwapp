Creating a dynamic font picker in Next.js using custom resources and next/font/local involves two steps:
statically defining your fonts and building an interactive component to select them.

1. Define your Local Fonts
Create a configuration file to statically load your custom local fonts using Next.js optimization.
typescript
// app/fonts.ts
	import localFont from 'next/font/local';

	// Define all your local fonts
	export const fontA = localFont({ src: './fonts/fontA-Regular.woff2', variable: '--font-a', });

	export const fontB = localFont({
	  src: './fonts/fontB-Regular.woff2',
	  variable: '--font-b',
	});

	// Map for the picker
	export const availableFonts = [
	  { name: 'Custom Font A', variable: fontA.variable },
	  { name: 'Custom Font B', variable: fontB.variable },
	];

2. Create the Font Picker Component Build an interactive client-side component using a <select> dropdown.
//tsx// app/components/FontPicker.tsx
'use client';

import { useState } from 'react';
import { availableFonts } from '../fonts';

export default function FontPicker() {
  const [selectedFontVar, setSelectedFontVar] = useState(availableFonts[0].variable);

  return (
    <div className={`${selectedFontVar} p-6`}>
      <label className="block mb-2 font-medium">Select a Font:</label>
      <select
        onChange={(e) => setSelectedFontVar(e.target.value)}
        className="p-2 border rounded shadow"
      >
        {availableFonts.map((font) => (
          <option key={font.variable} value={font.variable}>
            {font.name}
          </option>
        ))}
      </select>

      {/* Apply the dynamically selected CSS variable to the text */}
      <p className="mt-4 text-xl" style={{ fontFamily: `var(${selectedFontVar})` }}>
        The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  );
}
Use code with caution.
3. Setup Your Root Layout
Apply the Next.js className or CSS variable configuration at your Root Level.tsx
// app/layout.tsx

import { fontA } from './fonts';
import FontPicker from './components/FontPicker';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontA.variable}>
      <body className="antialiased">
        <FontPicker />
        <main>{children}</main>
      </body>
    </html>
  );
}