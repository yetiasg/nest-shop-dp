<template>
  <div class="names">
    <p v-for="name in names" :key="name">{{name}}</p>
  </div>
  
  <div class="list-view">
    <div class="details" v-for="product in products" :key="product.id">
      <p>{{product.id}}</p>
      <p>{{product.name}}</p>
      <p>{{product.price}}</p>
      <p>{{product.description}}</p>
      <p>{{product.categories}}</p>
      <p>{{product.stock}}</p>
      <p>{{product.archived}}</p>
      <p><span class="remove" @click="removeProduct(product.id)">X</span>
      <span class="update" @click="openUpdateProductModal(product)">U</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      names: ['id', 'name', 'price', 'description', 'categories', 'stock', 'archived', 'options'],
    }
  },
  computed:{
    products(){
      return this.$store.state.requests.products;
    }
  },
  methods:{
    removeProduct(id){
      this.$store.dispatch('removeProductById', id)
    },
    openUpdateProductModal(product){
      this.$store.commit('handleUpdateProductModal', true)
      this.$store.commit('productToUpdate', product)
      this.updateProductModal = !this.updateProductModal
    },
    
  },
  mounted(){
     this.$store.dispatch('fetchAllProducts');
  }
}
</script>


<style scoped>
  .names{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 10px;
    width: calc(100% - 17px);
  }

  .names > p{
    width: calc(100% / 8);
    padding: 1rem;
  }

  .list-view{
    height: calc(100% - 4.72rem);
    overflow-y: scroll;
  }

  .details{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #F5F5F5;
    border-radius: 10px;
    margin: 0.5rem 0;
  }

  .details > p{
    width: calc(100%/8);
    padding: 1rem;
    word-wrap: break-word;
  }

  .remove{
    display: flex;
    justify-content: center;
    align-items: center;
    width:1.6rem;
    height: 1.6rem;
    font-size: 1rem;
    border-radius: 50px;
    background-color: rgb(201, 43, 43);
    color: white;
  }

  .remove:hover{
    background-color: rgb(225, 73, 73);
    cursor: pointer;
  }

  .update{
    display: flex;
    justify-content: center;
    align-items: center;
    width:1.6rem;
    height: 1.6rem;
    font-size: 1rem;
    border-radius: 50px;
    background-color: rgb(201, 138, 43);
    color: white;
  }

  .update:hover{
    background-color: rgb(226, 159, 58);
    cursor: pointer;
  }
</style>