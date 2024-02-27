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
  <form @submit.prevent="$emit('addp', nom, qte, photo)" id ="add">
    <input type="" v-model="nom" placeholder="nom" />
    <input type="int" v-model="qte" placeholder="quantité" />
    <input type="" v-model="photo" placeholder="URL photo" />
    <button type="submit">
      <img  src='../assets/deux-ticks.png' alt="Ajouter" class ="button">
    </button>
  </form>
  <div>
  <!--<img src="C:/Users/yanni/OneDrive/Bureau/GestionFrigoIRZ/src/components/tomates.png" alt="tomates"/>-->
  </div>
</template>

<style>

 

</style>
