import axios from "axios"
import Product from "../apis/Product"
import Cart from "../apis/Cart"
export const getProducts = ({commit}) => {
    Product.all().then(response => {
            commit('SET_PRODUCTS',response.data)
        })
}

export const getProduct =({commit}, productId) => {
    Product.show(productId).then(response => {
            commit('SET_PRODUCT',response.data)

        })

}

export const addProductToCart =({commit},{product, quantity}) =>{
    commit('ADD_TO_CART',{ product, quantity })
    Cart.store({
        product_id: product.id,
        quantity

    })

}
export const getCartItems = ({commit}) => {
    Cart.all().then(response => {
            commit('SET_CART', response.data)
        })
}
export const removeItemFromCart =({commit}, product) => {
    commit('REMOVE_FROM_CART', product )

    // axios.delete(`http://127.0.0.1:8000/api/cart/${product.id}`)
    Cart.delete(product.id)
}

export const cleanTheCart = ({commit}) =>{
    commit('CLEAR_CART_ITEMS')
    Cart.deleteAll
}