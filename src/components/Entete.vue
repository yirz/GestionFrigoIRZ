<template>
  <p id="space2"></p>
  <h1>Le Frigo de Yann
    <p id="space"></p>
    <img src="../assets/frigo.png" alt="produits" />
  </h1>
</template>

<style scoped>
h1 {
  font-family: "Bauhaus 93", "Algerian", "sans-serif";
  /* On choisi plusieurs polices au cas où le navigateur ne connaisse pas la 1ere police */
  font-size: 60px;
  color: white;
  text-align: center;
  background-color: #115da4;
}

#accueil {
  /* correspond à l'image */
  text-align: center;
}

#space2 {
  height: 50px;
}

#space {
  width: 10px;
  height: auto;
  display: inline-block;
}
</style>
