import { nanoid } from "nanoid";

export const listDataSecFour = () => {
    const dataSecFour = [
        {
            off:'Save 20%',
            title: 'Special Offer',
            img: '/img/bg-1.jpg',
            id: nanoid(3)
        },
        {
            off:'Save 20%',
            title: 'Special Offer',
            img: '/img/bg-2.jpg',
            id: nanoid(3)
        }
    ]

    return {
        dataSecFour
    }
}