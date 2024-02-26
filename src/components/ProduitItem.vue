<script setup>
import { defineEmits, defineProps } from "vue";

defineProps(["produit", "deletep"]);
defineEmits(["add1p", "delete1p"]);
</script>

<template>
  <li>
    {{ produit.print() }}
    <button @click="deletep(produit.id)">
      <p>Supprimer</p>
    </button>
    <button @click="$emit('delete1p', produit)">
      <p>-1</p>
    </button>
    <button @click="$emit('add1p', produit)">
      <p>+1</p>
    </button>
  </li>
</template>

<style>
ul {
  /* afin de retirer les puces de la liste */
  list-style-type: none;
}
</style>
