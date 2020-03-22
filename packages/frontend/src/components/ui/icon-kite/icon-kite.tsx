import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'mapa-icon-kite',
  shadow: true
})
export class IconKite implements ComponentInterface {

  render() {
    return (
      <mapa-icon>
        <svg version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 77 83"
        >
          <path d="M77 34.2L71.4 0L36.7 0.8L35.4 41.7C34 43.4 26.6 52.5 26.9 63.1C27.1 69.3 23.9 75.7 19 78.7C14.1 81.7 8.50001 81.3 2.20001 77.9C1.70001 77.6 1.10001 77.8 0.800012 78.3C0.500012 78.8 0.700011 79.4 1.20001 79.7C4.40001 81.6 8.10001 82.6 11.9 82.7C14.8 82.7 17.6 81.9 20.1 80.4C25.6 77 29.1 70 28.9 63C28.6 53.3 35.6 44.5 36.9 43L77 34.2ZM38.7 3.9L55.4 17.7L37.5 39.2L38.7 3.9ZM74.4 30.9L58.2 17.5L69.9 3.4L74.4 30.9ZM73.6 32.9L39.1 40.5L56.9 19L73.6 32.9ZM56.6 16.2L40.4 2.7L68.3 2.1L56.6 16.2Z"
                fill="currentColor"
          />
        </svg>
      </mapa-icon>
    );
  }

}
