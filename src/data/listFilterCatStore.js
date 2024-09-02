import { nanoid } from 'nanoid'

export const listFilterCatStore = () => {
  const options = [
    {
      label: 'beauty',
      value: 'beauty',
      id: nanoid(3)
    },
    {
      label: 'fragrances',
      value: 'fragrances',
      id: nanoid(3)
    },
    {
      label: 'furniture',
      value: 'furniture',
      id: nanoid(3)
    },
    {
      label: 'groceries',
      value: 'groceries',
      id: nanoid(3)
    },
    {
      label: 'home decoration',
      value: 'home-decoration',
      id: nanoid(3)
    },
    {
      label: 'kitchen accessories',
      value: 'kitchen-accessories',
      id: nanoid(3)
    },
    {
      label: 'laptops',
      value: 'laptops',
      id: nanoid(3)
    },
    {
      label: 'mens shirts',
      value: 'mens-shirts',
      id: nanoid(3)
    },
    {
      label: 'mens shoes',
      value: 'mens-shoes',
      id: nanoid(3)
    },
    {
      label: 'mens watches',
      value: 'mens-watches',
      id: nanoid(3)
    },
    {
      label: 'mobile accessories',
      value: 'mobile-accessories',
      id: nanoid(3)
    },
    {
      label: 'motorcycle',
      value: 'motorcycle',
      id: nanoid(3)
    },
    {
      label: 'skin care',
      value: 'skin-care',
      id: nanoid(3)
    },
    {
      label: 'smartphones',
      value: 'smartphones',
      id: nanoid(3)
    },
    {
      label: 'sports accessories',
      value: 'sports-accessories',
      id: nanoid(3)
    },
    {
      label: 'sunglasses',
      value: 'sunglasses',
      id: nanoid(3)
    },
    {
      label: 'tablets',
      value: 'tablets',
      id: nanoid(3)
    },
    {
      label: 'tops',
      value: 'tops',
      id: nanoid(3)
    },
    {
      label: 'vehicle',
      value: 'vehicle',
      id: nanoid(3)
    },
    {
      label: 'womens bags',
      value: 'womens-bags',
      id: nanoid(3)
    },
    {
      label: 'womens dresses',
      value: 'womens-dresses',
      id: nanoid(3)
    },
    {
      label: 'womens jewellery',
      value: 'womens-jewellery',
      id: nanoid(3)
    },
    {
      label: 'womens shoes',
      value: 'womens-shoes',
      id: nanoid(3)
    },
    {
      label: 'womens watches',
      value: 'womens-watches',
      id: nanoid(3)
    }
  ]

  return {
    options
  }
}
