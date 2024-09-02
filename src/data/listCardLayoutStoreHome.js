import { nanoid } from 'nanoid'

export const listDataLayout = () => {
  const dataMain = [
    {
      title: 'kids fashion',
      subtitle:
        'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
      id: nanoid(3),
      img: '/img/three-store.jpg'
    }
  ]

  const dataCard = [
    {
      title: 'Save 20%',
      subtitle: 'Special Offer',
      id: nanoid(3),
      img: '/img/two-store.jpg'
    },
    {
      title: 'Save 20%',
      subtitle: 'Special Offer',
      id: nanoid(3),
      img: '/img/one-store-home.jpg'
    }
  ]

  return {
    dataMain,
    dataCard
  }
}
