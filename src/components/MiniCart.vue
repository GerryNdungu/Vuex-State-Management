<template>
  <div class="dropdown-menu p-2 cart" aria-labelledby="triggerId">
        <div v-for="item in cart" :key="item.product.id">
            <div class="px-2 d-flex justify-content-between" >
                <div>    
                    <strong>{{item.product.title}}</strong>
                    <br />{{item.quantity}} x $ {{item.product.price }}
                </div>
                <div>
                     <a href="#" @click.prevent="removeItemFromCart(item.product)" class="badge badge-secondary">remove</a>
                </div>
            </div>
         </div>
        <hr>   
          <div class="d-flex justify-content-between">
              <span>Total: ${{cartTotalPrice}}</span>
              <a href="#" @click.prevent="cleanTheCart">Clear Cart</a>
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
            ...mapState('cart',["cart"]),
        // ...mapState({
        //     cart:state => state.cart.cart
        // }),
        ...mapGetters("cart",["cartTotalPrice"]),

        // cartTotalPrice(){
        //     return this.$store.getters.cartTotalPrice
        // }
    },
    methods:{
       
        ...mapActions('cart',["removeItemFromCart","cleanTheCart"])
        /// Or thse method below
       // ...mapActions({removeCartItem:'cart/removeItemFromCart', 
        // clearCartItems:'cart/cleanTheCart'})
        // removeCartItem(product){
        //     this.$store.dispatch('removeItemFromCart', product)
        // },
        // clearCartItems(){
        //     this.$store.dispatch('cleanTheCart')
        // }
    },
    mounted(){
        this.$store.dispatch('cart/getCartItems')
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