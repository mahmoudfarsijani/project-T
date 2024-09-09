import { defineStore } from 'pinia'
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

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
        useToast().success('add to quantity')
      } else {
        this.basket.push(prodcutId)
        prodcutId.quantity = 1
        this.persist()
        useToast().success('add to basket')
      }
    },
    increment(prodcutId) {
      const index = this.basket.findIndex((item) => item.id === prodcutId.id)
      if (index !== -1) {
        this.basket[index].quantity += 1
        this.persist()
        useToast().success('add to quantity')
      } else if(index === -1) {
        this.basket.push(prodcutId)
        prodcutId.quantity = 1
        this.persist()
        useToast().success('add to basket')
      }
    },
    decrement(prodcutId) {
      const index = this.basket.findIndex((item) => item.id === prodcutId.id)

      if (index !== -1) {
        this.basket[index].quantity -= 1
        this.persist()
        useToast().success('minus to quantity')

        if (this.basket[index].quantity === 0) {
         this.basket = this.basket.filter((item) => item.id !== prodcutId.id)
          this.persist()
          useToast().warning('remove from basket')
        }
      }
    },
    removeProduct(prodcutId){
        const index = this.basket.findIndex(item => item.id === prodcutId.id)
        if(index > -1) {
            this.basket.splice(index,1)
            this.persist()
            useToast().warning('remove from basket')
        }
    }
  }
})
