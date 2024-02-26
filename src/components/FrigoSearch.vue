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
    les valeurs des variables "titre", "quantité" et "prix";
  -->
  <form @submit.prevent="$emit('searchp', motcle)">
    <input type="text" v-model="motcle" placeholder="Produit" />
    <button type="submit">
      <!-- le bouton ne sera plus un texte mais une image -->
      <p>Valider</p>
    </button>
  </form>

  <p id="recherche"></p>
</template>

<style scoped></style>
