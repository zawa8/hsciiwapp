'use client';

import { useEffect, useState } from 'react';

const LOCAL_FONTS = [
  { id: 'font-eng52', name: 'eng52 font', variable: 'var(--font-eng52)' },
  { id: 'font-hin52', name: 'hin52', variable: 'var(--font-hin52)' },
  { id: 'font-hin38', name: 'hin38', variable: 'var(--font-hin38)' },
  { id: 'font-bangla38', name: 'bangla38', variable: 'var(--font-bangla38)' },
  { id: 'font-telugu38', name: 'jelugu38', variable: 'var(--font-telugu38)' },
];

export default function LocalFontPicker() {
  const [selectedFont, setSelectedFont] = useState('system');

  // Load saved font preference on mount
  useEffect(() => {
    const savedFont = localStorage.getItem('user-local-font');
    if (savedFont) {
      setSelectedFont(savedFont);
      applyGlobalFont(savedFont);
    }
  }, []);

  const handleFontChange = (fontId: string) => {
    setSelectedFont(fontId);
    localStorage.setItem('user-local-font', fontId);
    applyGlobalFont(fontId);
  };

  const applyGlobalFont = (fontId: string) => {
    const fontObj = LOCAL_FONTS.find((f) => f.id === fontId);
    if (fontObj) {
      // Updates the root body styles immediately
      document.body.style.fontFamily = fontObj.variable;
    }
  };

  return (
    <div className="border rounded-xl shadow-md bg-white max-w-sm">
      <select
        value={selectedFont}
        onChange={(e) => handleFontChange(e.target.value)}
        className="w-full p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-indigo-500"
      >
        {LOCAL_FONTS.map((font) => (
          <option key={font.id} value={font.id}>
            {font.name}
          </option>
        ))}
      </select>
    </div>
  );
}
