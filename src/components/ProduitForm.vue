<script setup>
import { defineEmits, defineProps } from "vue";
import { ref } from "vue";

const nom = ref("");
const qte = ref("");
const photo = ref("");

const emit = defineEmits(["addp"]);
function handlerSubmit() {
  // en dehors du template il faut se souvenir que les attributs
  // sont des objets avec l'attribut value (créé par ref())
  emit("addp", nom.value, qte.value, photo.value);
  nom.value = "";
  photo.value = "";
}
</script>

<template>
  <form @submit.prevent="$emit('addp', nom, qte, photo)">
    <input type="" v-model="nom" placeholder="nom ?" />
    <input type="int" v-model="qte" placeholder="quantité ?" />
    <input type="" v-model="photo" placeholder="photo ?" />
    <img src="../../assets/tomate_rund_010919.png" />

    <button type="submit">
      <p>Ajouter</p>
    </button>
  </form>
</template>

<style></style>
