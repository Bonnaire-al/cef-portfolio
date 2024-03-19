<script setup>
import foote from './components/foote.vue';

import { RouterLink, useRouter } from 'vue-router';
const router = useRouter();

const navigateToPage = (event) => {
  router.push(event.target.value);
};
</script>

<template>
 <header>
    <div class="cont1">
      <div class="box">
        <!-- le lien de haut de page sur la photo comme demander sur l'énoncer
          j'ai router la page d'acceuil, j'ai pas tres bien compris pour la page d'erreur 
           j'ai router "projet" et "contact" sur la page -->

        <RouterLink to='/'><a href="#" onclick="window.scrollTo(0, 0);"><img src="./assets/autre-img/imgprofil.png" alt="image.profil" class="profil"></a></RouterLink>
         
      </div>
      <h1>PORTFOLIO</h1>
      <nav class="box1">
        <select title="selectionner-une-option" class="menuDeroulant" @change="navigateToPage">
          <option id="op-style" value="/error">Presentation</option>
          <option id="op-style" value="/error">Projets</option>
          <option id="op-style" value="/error">Contact</option>
        </select>
      </nav>
      
    </div>
  
 </header>

 <RouterView />

 <foote/>
         
   </template>

<style scoped>
header{
  position: fixed;
  width: 100%;
  top: 0; 
  z-index: 999; 

}

.profil{
  height: 4rem;
  border-radius: 50%;
  width: 4rem;
  margin-right: 2rem;
  padding-left: 0.2rem;
}



@keyframes colorAnimation {
    0% {
      background: linear-gradient(45deg, #0801448c, #6e8cf090); 
    }
    50% {
      background: linear-gradient(45deg, #6e8cf090,#6cb6f090 );
    }
    100% {
      background: linear-gradient(45deg, #189bff90, #97d2f2); 
    }
  } 

.cont1 {
  animation: colorAnimation 6s ease infinite alternate;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15%;
  margin: 2rem;
  height: 3rem;
            
}
.box1 {
    width: 10%;
    
   
}
.menuDeroulant {
  padding: 10px;
  font-size: small;
  border: 3px solid #030694;
  border-radius: 5px;
  background-color: #ffffff;
  color: #fa0404;
  text-decoration: underline;
}

h1{
  color: #030694;
  font-size: 300%;
}

#op-style {
  padding: 20px;
}


#op-style:hover {
  background-color: #c9d610;
  text-decoration: underline;
}






</style>
