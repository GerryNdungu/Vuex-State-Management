<template>
  <div class="dropdown-menu p-2 cart" aria-labelledby="triggerId">
        <div v-for="item in cart" :key="item.product.id">
            <div class="px-2 d-flex justify-content-between" >
                <div>    
                    <strong>{{item.product.title}}</strong>
                    <br />{{item.quantity}} x $ {{item.product.price }}
                </div>
                <div>
                     <a href="#" @click.prevent="removeCartItem(item.product)" class="badge badge-secondary">remove</a>
                </div>
            </div>
         </div>
        <hr>   
          <div class="d-flex justify-content-between">
              <span>Total: ${{cartTotalPrice}}</span>
              <a href="#" @click.prevent="clearCartItems">Clear Cart</a>
          </div>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex"

export default {
    computed:{
        // cart(){
        //     return this.$store.state.cart
        // },
        ...mapState(["cart"]),
        ...mapGetters(["cartTotalPrice"]),

        // cartTotalPrice(){
        //     return this.$store.getters.cartTotalPrice
        // }
    },
    methods:{
        ...mapActions({removeCartItem:'removeItemFromCart', clearCartItems:'cleanTheCart'})
        // removeCartItem(product){
        //     this.$store.dispatch('removeItemFromCart', product)
        // },
        // clearCartItems(){
        //     this.$store.dispatch('cleanTheCart')
        // }
    },
    mounted(){
        this.$store.dispatch('getCartItems')
    },
    
}
</script>

<style scoped>
.cart{
     min-width: 320px;
     right: 0;
     left: auto;
}
</style>