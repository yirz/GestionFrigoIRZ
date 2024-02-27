<script setup>
import { defineEmits, defineProps } from "vue";

// -- les events émis par le composant
const emit = defineEmits(["searchp"]);
// -- handler utile si on veut gérer le submit de cette manière
// <form @submit.prevent="handlerSubmit">
</script>

<template>
  <!-- quand le formulaire est validé,
    on doit emmetre un event vers le composant parent 
    pour faire ressortir du composant 
    les valeurs des variables "nom" et "qte" ;
  -->
  <form @submit.prevent="$emit('searchp', motcle)" id="search">
    <input type="text" v-model="motcle" placeholder="Produit recherché" />
    <button type="submit">
      <!-- le bouton ne sera plus un texte mais une image -->
      <img  src='../assets/deux-ticks.png' alt="valider" class ="button">
    </button>
  </form>

  <p id="recherche"></p>
</template>

<style scoped></style>
