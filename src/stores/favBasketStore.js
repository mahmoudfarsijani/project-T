import { defineStore } from "pinia";


export const useFavBasketStore = defineStore('favBasket',{
    state: () => ({
        basket: JSON.parse(localStorage.getItem('favBasketStore')) || []
    }),
    actions: {
        persist() {
            localStorage.setItem('favBasketStore',JSON.stringify(this.basket))
        },
        addBasket(prodId){
            const index = this.basket.indexOf(prodId.id)
            if(index > -1){
                this.basket.splice(index,1)
                this.persist()
            } else {
                this.basket.push(prodId.id)
                this.persist()
            }
        },
        isAvailable(prod){
            return this.basket.indexOf(prod.id) > -1
        }
    },
    getters: {
        lengthBasketFav: (state) => {
            return state.basket.length
        }
    }
})