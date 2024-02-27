<script setup>
import { defineEmits, defineProps } from "vue";

defineProps(["produit", "deletep"]);
defineEmits(["add1p", "delete1p"]);
</script>

<template>
  <div class = "produit">
   <img v-bind:src="produit.photo" class = "img_photo" />
    <br>
      {{ produit.print() }}


    <br>

    
    <button @click="deletep(produit.id)" class="button">
      <img  src='../assets/poubelle.png' alt="supprimer"  >
    </button>
    <button @click="$emit('delete1p', produit)" class="button">
      <img  src='../assets/enlever.png' alt="-1"  >
    </button>
    <button @click="$emit('add1p', produit)" class="button">
      <img  src='../assets/ajouter.png' alt="+1"  >
    </button>
  </div>
</template>

<style>
.produit{
  margin-left: 100px;
  background-color: rgb(187, 187, 191);
  border : 1 px;
  border-color: blue;
  height:159px;
  width: 200px;
  margin-top: 120px;
  
}


.button{
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
  border-left-style: none;
  cursor: pointer;
  height: 20px;
  width: 20px;
}
.img_photo{
  width: 80px;
  height: 80px;
}

</style>
