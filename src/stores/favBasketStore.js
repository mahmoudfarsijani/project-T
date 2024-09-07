import { defineStore } from "pinia";


export const useFavBasketStore = defineStore('favBasket',{
    state: () => ({
        basket: JSON.parse(localStorage.getItem('favBasketStore')) || []
    }),
    actions: {
        persist() {
            localStorage.setItem('favBasketStore',JSON.stringify(this.basket))
        },
        addFav(prodId){
            const index = this.basket.indexOf(prodId)
            if(index > -1){
                this.basket.splice(index,1)
                this.persist()
            } else {
                this.basket.push(prodId)
                this.persist()
            }
        },
        isAvailable(prod){
            return this.basket.indexOf(prod) > -1
        }
    },
    getters: {
        lengthBasketFav: (state) => {
            return state.basket.length
        }
    }
})