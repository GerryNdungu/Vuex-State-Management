<template>
  <div class="d-flex align-items-stretch flex-wrap">
      <product-card v-for="product in products" :key="product.id" :product="product"/>
      
  </div>
</template>

<script>
import ProductCard from "./ProductCard"
import { mapGetters,  mapActions, mapState} from 'vuex'
export default {
    components:{
        ProductCard
    },
    computed:{
        ...mapState(['products'])
        
    },
    mounted(){
        this.getProducts()
    },
    methods:{
        ...mapActions(['getProducts'])
    }
}
</script>

<style>

</style>