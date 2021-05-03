<template>
  <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
          <div class="container">
              <div class="nav navbar-nav">
                    <router-link to="/" class="nav-item nav-link">Home</router-link>
                    <a class="nav-item nav-link" href="#">Product</a>
                </div>
                <div>
                    <div class="dropdown open">
                        <button class="btn btn-secondary dropdown-toggle" type="button"
                                        id="triggerId"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                    {{cartCount}} Cart
                                </button>
                            <div @click="$event.stopPropagation()">
                                <mini-cart />
                            </div>
                    </div>
                </div>
          </div>
          
      </nav>
       
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MiniCart from "./MiniCart"
export default {
    components:{
        MiniCart
    },
    computed:mapGetters({
        cartCount: "cartItemCount"
    })
}
</script>

<style scoped>

</style>