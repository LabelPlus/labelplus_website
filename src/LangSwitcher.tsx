import React from 'react';
import { Language } from 'gatsby-plugin-i18next';

const Switcher = ({ changeLng, lng, availableLngs }: any) => (
  <ul style={{ listStyle: 'none' }}>
    {availableLngs.map((value: string) => (
      <li key={value} style={{ display: 'inline' }}>
        <button
          style={{
            background: 'rebeccapurple',
            color: 'white',
            textDecoration: value === lng ? 'underline' : 'none',
          }}
          onClick={() => changeLng(value)}
        >
          {value}
        </button>
      </li>
    ))}
  </ul>
);

export default (props: any) => (
  <Language>{(lngProps: any) => <Switcher {...props} {...lngProps} />}</Language>
);
