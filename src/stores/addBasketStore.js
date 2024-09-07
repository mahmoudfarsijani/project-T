import { defineStore } from 'pinia'

export const useAddBasketStore = defineStore('addbasketStore', {
  state: () => ({
    basket: JSON.parse(localStorage.getItem('ProductBasket')) || []
  }),
  getters: {
    basketLength(state) {
      return state.basket.length
    }
  },
  actions: {
    persist() {
      localStorage.setItem('ProductBasket', JSON.stringify(this.basket))
    },
    addBasket(prodcutId) {
      const index = this.basket.findIndex((item) => item.id === prodcutId.id)

      if (index !== -1) {
        this.basket[index].quantity += 1
        this.persist()
      } else {
        this.basket.push(prodcutId)
        prodcutId.quantity = 1
        this.persist()
      }
    },
    increment(prodcutId) {
      const index = this.basket.findIndex((item) => item.id === prodcutId.id)
      if (index !== -1) {
        this.basket[index].quantity += 1
        this.persist()
      } else if(index === -1) {
        this.basket.push(prodcutId)
        prodcutId.quantity = 1
        this.persist()
      }
    },
    decrement(prodcutId) {
      const index = this.basket.findIndex((item) => item.id === prodcutId.id)

      if (index !== -1) {
        this.basket[index].quantity -= 1
        this.persist()

        if (this.basket[index].quantity === 0) {
         this.basket = this.basket.filter((item) => item.id !== prodcutId.id)
          this.persist()
        }
      }
    },
    removeProduct(prodcutId){
        const index = this.basket.findIndex(item => item.id === prodcutId.id)
        if(index > -1) {
            this.basket.splice(index,1)
            this.persist()
        }

    }
  }
})
