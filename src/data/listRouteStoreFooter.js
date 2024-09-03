import { nanoid } from "nanoid";


export const listDataFooter = () => {
    const dataFooter = [
        {
            name:'home',
            route:'home',
            id:nanoid(3)
        },
        {
            name: 'our shop',
            route: 'home',
            id:nanoid(3)
        },
        {
            name: 'shop detail',
            route: 'home',
            id:nanoid(3)
        },
        {
            name: 'shopping cart',
            route: 'home',
            id:nanoid(3)
        },
        {
            name: 'checkout',
            route: 'home',
            id:nanoid(3)
        },
        {
            name: 'contact us',
            route: 'home',
            id:nanoid(3)
        },
    ]

    const dataButton = [
        {
            icon:'twitter',
            id: nanoid(3)
        }, 
        {
            icon: 'instagram',
            id: nanoid(3)
        },
        {
            icon:'linkdein',
            id: nanoid(3)
        },
        {
            icon: 'gmail',
            id: nanoid(3)
        }
    ]

    return {
        dataFooter,
        dataButton
    }
}