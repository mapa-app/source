import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'mapa-icon-family',
  shadow: true
})
export class IconFamily implements ComponentInterface {

  @Prop()
  status: 'together' | 'divorced' | 'patched' | 'single' = 'together';

  render() {
    switch (this.status) {
      case 'together':
        return (
          <mapa-icon>
            <svg version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 58 58"
                 preserveAspectRatio="xMidYMid meet"
            >
              <path d="M17 47H13V56H10V47H2V46V29C2 22.9249 7.8203 18 15 18C22.1797 18 28 22.9249 28 29V46V47H20V56H17V47ZM15 16C11.134 16 8 12.866 8 9C8 5.13401 11.134 2 15 2C18.866 2 22 5.13401 22 9C22 12.866 18.866 16 15 16Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
              />
              <path d="M43 47H39V56H36V47H28V46V29C28 22.9249 33.8203 18 41 18C48.1797 18 54 22.9249 54 29V46V47H46V56H43V47ZM41 16C37.134 16 34 12.866 34 9C34 5.13401 37.134 2 41 2C44.866 2 48 5.13401 48 9C48 12.866 44.866 16 41 16Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
              />
            </svg>
          </mapa-icon>
        );

      case 'divorced':
        return (
          <mapa-icon>
            <svg version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 78 58"
            >
              <path d="M17 47H13V56H10V47H2V46V29C2 22.9249 7.8203 18 15 18C22.1797 18 28 22.9249 28 29V46V47H20V56H17V47ZM15 16C11.134 16 8 12.866 8 9C8 5.13401 11.134 2 15 2C18.866 2 22 5.13401 22 9C22 12.866 18.866 16 15 16Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
              />
              <path d="M65 47H61V56H58V47H50V46V29C50 22.9249 55.8203 18 63 18C70.1797 18 76 22.9249 76 29V46V47H68V56H65V47ZM63 16C59.134 16 56 12.866 56 9C56 5.13401 59.134 2 63 2C66.866 2 70 5.13401 70 9C70 12.866 66.866 16 63 16Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
              />
            </svg>
          </mapa-icon>
        );

      case 'patched':
        return (
          <mapa-icon>
            <svg version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 74 56"
            >
              <path d="M50.6585 43.8432H47.2439V52.2118H44.6829V43.8432H37.8536V42.9133V27.1059C37.8536 21.457 42.8222 16.8776 48.9512 16.8776C55.0802 16.8776 60.0488 21.457 60.0488 27.1059V42.9133V43.8432H53.2195V52.2118H50.6585V43.8432ZM48.9512 15.0179C45.651 15.0179 42.9756 12.1037 42.9756 8.50894C42.9756 4.91415 45.651 2 48.9512 2C52.2514 2 54.9268 4.91415 54.9268 8.50894C54.9268 12.1037 52.2514 15.0179 48.9512 15.0179Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
              />
              <path d="M27.6098 43.8432H24.1952V52.2118H21.6342V43.8432H14.8049V42.9133V27.1059C14.8049 21.457 19.7735 16.8776 25.9025 16.8776C32.0315 16.8776 37.0001 21.457 37.0001 27.1059V42.9133V43.8432H30.1708V52.2118H27.6098V43.8432ZM25.9025 15.0179C22.6023 15.0179 19.9269 12.1037 19.9269 8.50894C19.9269 4.91415 22.6023 2 25.9025 2C29.2027 2 31.8781 4.91415 31.8781 8.50894C31.8781 12.1037 29.2027 15.0179 25.9025 15.0179Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
              />
              <path d="M7.90994 50.1374H6.33396V53.9999H5.15197V50.1374H2V49.7083V42.4125C2 39.8053 4.29318 37.6918 7.12195 37.6918C9.95073 37.6918 12.2439 39.8053 12.2439 42.4125V49.7083V50.1374H9.09193V53.9999H7.90994V50.1374ZM7.12195 36.8334C5.59876 36.8334 4.36398 35.4885 4.36398 33.8293C4.36398 32.1702 5.59876 30.8252 7.12195 30.8252C8.64514 30.8252 9.87992 32.1702 9.87992 33.8293C9.87992 35.4885 8.64514 36.8334 7.12195 36.8334Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
              />
              <path d="M67.666 50.1374H66.0901V53.9999H64.9081V50.1374H61.7561V49.7083V42.4125C61.7561 39.8053 64.0493 37.6918 66.8781 37.6918C69.7068 37.6918 72 39.8053 72 42.4125V49.7083V50.1374H68.848V53.9999H67.666V50.1374ZM66.8781 36.8334C65.3549 36.8334 64.1201 35.4885 64.1201 33.8293C64.1201 32.1702 65.3549 30.8252 66.8781 30.8252C68.4012 30.8252 69.636 32.1702 69.636 33.8293C69.636 35.4885 68.4012 36.8334 66.8781 36.8334Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
              />
            </svg>
          </mapa-icon>
        );

      case 'single':
        return (
          <mapa-icon>
            <svg version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 30 58"
            >
              <path d="M17 47H13V56H10V47H2V46V29C2 22.9249 7.8203 18 15 18C22.1797 18 28 22.9249 28 29V46V47H20V56H17V47ZM15 16C11.134 16 8 12.866 8 9C8 5.13401 11.134 2 15 2C18.866 2 22 5.13401 22 9C22 12.866 18.866 16 15 16Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
              />
            </svg>
          </mapa-icon>
        );
    }
  };

}
