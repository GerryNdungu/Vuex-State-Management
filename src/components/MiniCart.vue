<template>
  <div class="dropdown-menu p-2 cart" aria-labelledby="triggerId">
        <div>
            <div class="px-2 d-flex justify-content-between" >
                <div>    
                    <strong>Product Title</strong>
                    <br />1 * $23
                </div>
                <div>
                     <a href="#" class="badge badge-secondary">remove</a>
                </div>
            </div>
         </div>
        <hr>   
          <div class="d-flex justify-content-between">
              <span>Total: $23</span>
              <a href="#">Clear Cart</a>
          </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cart{
     min-width: 320px;
     right: 0;
     left: auto;
}
</style>