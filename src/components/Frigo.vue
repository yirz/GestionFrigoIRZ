<script setup>
import { reactive, onMounted } from "vue"; // reactive, onMounted
import Produit from "../Produit";
import ProduitItem from "./ProduitItem.vue";
import ProduitForm from "./ProduitForm.vue";
import FrigoSearch from "./FrigoSearch.vue";

const listProduits = reactive([]);
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/13/produits";

function getProduit() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // -- vider la liste des produits
      listProduits.splice(0, listProduits.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Livre
      //  et l'ajouter dans la liste listep
      let produits = dataJSON;
      for (let p of produits) {
        listProduits.push(new Produit(p.id, p.nom, p.qte));
      }
    })
    .catch((error) => console.log(error));
}

function handlerAdd(nom, qte, photo) {
  // -- il faut créer un nouveau produit instance de la classe
  if (qte <= 0) {
    // Si la quantité est négative ou nulle, on force la quantité à 1
    qte = 1;
  }
  console.log(nom, qte);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ nom: nom, qte: qte, photo: photo }),
  };

  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      getProduit();
    })
    .catch((error) => console.log(error));
}

function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  console.log(url + "/" + id);
  // -- l'id du livre à supprimer doit être ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getProduit();
    })
    .catch((error) => console.log(error));
}

function handler1Add(p) {
  console.log(p);
  // -- ajouter 1 en quantité en stock
  p.add1p();
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la chose modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify(p),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // actualiser la liste des livres
      getProduit();
    })
    .catch((error) => console.log(error));
}

function handlerSearch(motcle) {
  /* on récupère le mot clé nécessaire à la recherche */
  const fetchOptions = { method: "GET" };

  fetch(url + "?search=" + motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      let Produitscorespondants = dataJSON;
      document.getElementById("recherche").innerHTML += "<ul>";
      /* on insère de l'html pour créer une liste de livre correspondant au critère*/
      for (let p of Produitscorespondants) {
        /* pour chaque livres, on récupère ses attributs et on l'incère dans l'html */
        document.getElementById("recherche").innerHTML +=
          "<li> Il reste " + p.qte + " " + p.nom + "</li>";
      }
      /* on oublie pas de fermer la liste */
      document.getElementById("recherche").innerHTML += "</ul>";
    })
    .catch((error) => console.log(error));
}
function handler1Delete(p) {
  console.log(p);
  if (p.qte > 1) {
    // -- soustraire 1 de la quantité en stock
    p.delete1p();
    // -- entête http pour la req AJAX
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // -- la chose modifiée est envoyé au serveur
    //  via le body de la req AJAX
    const fetchOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(p),
    };
    // -- la req AJAX
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // actualiser la liste des livres
        getProduit();
      })
      .catch((error) => console.log(error));
  } else {
    handlerDelete(p.id);
    getProduit();
  }
}

onMounted(() => {
  getProduit();
});
</script>

<template>
  <div class="container mt-5">
    <h2 class="mb-4">Les produits dans le frigo :</h2>
    <ul class="list-group">
      <ProduitItem
        v-for="produit of listProduits"
        :key="produit.id"
        :produit="produit"
        :deletep="handlerDelete"
        @add1p="handler1Add"
        @delete1p="handler1Delete"
      ></ProduitItem>
    </ul>

    <h2 class="mt-5">Ajouter un produit :</h2>
    <ProduitForm @addp="handlerAdd"></ProduitForm>

    <h2 class="mt-5">Rechercher un Produit</h2>
    <div class="mb-4">
      <FrigoSearch @searchp="handlerSearch" />
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #d4d2c9;
}

h2 {
  font-family: "Bauhaus 93", "Algerian", "sans-serif";
  /* On choisi deux polices au cas où le navigateur ne connaisse pas la 1ere police */
  font-size: 30px;
  color: #115da4;
  text-align: center;
  background-color: #fff3e4;
}
.list-group {
  margin-top: 20px;
}
</style>
