<script setup>
import { defineEmits, defineProps } from "vue";

defineProps(["produit", "deletep"]);
defineEmits(["add1p", "delete1p"]);
</script>

<template>
  <li>
    {{ produit.print() }}
    <img v-bind:src="produit.photo" />
    <button @click="deletep(produit.id)" class="button">
      <img  src='../assets/delete.png' alt="tomates"  >
    </button>
    <button @click="$emit('delete1p', produit)" >
      <p class="button">-1</p>
    </button>
    <button @click="$emit('add1p', produit)" >
      <p class="button">+1 </p>
    </button>
  </li>
</template>

<style>
ul {
  /* afin de retirer les puces de la liste */
  list-style-type: none;
}

.button{
  height: 10px;
}
</style>
