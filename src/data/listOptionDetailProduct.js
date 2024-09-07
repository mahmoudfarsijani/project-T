// import { nanoid } from "nanoid";


export const listOptionsDetailProduct = () => {
    const optionsFilterSize = [
        {
          label: 'XS',
          value: 'XS'
        },
        {
          label: 'S',
          value: 'S'
        },
        {
          label: 'L',
          vaLue: 'l'
        },
        {
          label: 'M',
          value: 'M'
        },
        {
          label: 'XL',
          value: 'XL'
        }
      ]
      
      const optionsFilterColor = [
        {
          label: 'Black',
          value: 'Black'
        },
        {
          label: 'Red',
          value: 'Red'
        },
        {
          label: 'White',
          value: 'White'
        },
        {
          label: 'yellow',
          value: 'yellow'
        },
        {
          label: 'Gray',
          value: 'Gray'
        }
      ]

      const optionsFilterSizeShoes = [
        {
            label:'39',
            value:'39'
        },
        {
            label:'40',
            value:'40'
        },
        {
            label:'41',
            value:'41'
        },
        {
            label:'42',
            value:'42'
        },
        {
            label:'43',
            value:'43'
        }
      ]

      return {
        optionsFilterColor,
        optionsFilterSize,
        optionsFilterSizeShoes
      }
}