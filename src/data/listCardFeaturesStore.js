
import { nanoid } from "nanoid"
export const listFeature = () => {
    const dataFeature = [
        {
            icon: 'tick',
            title: 'Quality Product',
            id: nanoid(3)
        },
        {
            icon: 'del-truck',
            title: 'free shiping',
            id: nanoid(3)
        },
        {
            icon: 'return',
            title: '14-day return',
            id: nanoid(3)
        },
        {
            icon: 'phone',
            title: '24/7 support',
            id: nanoid(3)
        }
    ]

    return {dataFeature}
}