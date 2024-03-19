<template>
  <!--voici les modal dynamique pour les projets-->
<div class="projecte">

  <!--j'ai fait des tableaux pour les données voici la modal cv-->
<div class="bloc">
   <div class="body-projecte">
     <img src="../assets/img-project/cv.png" alt="cv">
     <h3> CV avec une maquette à respecter.</h3>
     <button @click="openModal(1)">VOIR</button>
   </div>
   <div v-if="activeModal === 1" class="modal-overlay">
     <div class="modal">
         <span @click="closeModal()" class="close-button">FERMER</span>
         <h4>Projet 1: CV</h4>
         <table>
           <thead>
             <tr>
               <th>Désignation</th>
               <th>Description</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>Date de création</td>
               <td>10/2023</td>
             </tr>
             <tr>
               <td>Technologies utilisées</td>
               <td>html5 : css3</td>
             </tr>
             <tr>
               <td>Contrainte technique </td>
               <td>Cahier des charges à respecter</td>
             </tr>
             <tr>
               <td>Lien github/pdf</td>
               <td><a href="https://github.com/Bonnaire-al/cv-cef" target="_blank" >Lien git</a></td>
             </tr>
           </tbody>
         </table>
      </div>
   </div>
</div>

 <!-- modal cahier des charges-->
<div class="bloc">
    <div class="body-projecte">
      <img src="../assets/img-project/CCharges.png" alt="cahier-des-charges">
      <h3>Cahier des charges pour un site e-commerce.</h3>
      <button @click="openModal(2)">VOIR</button>
   </div>
   <div v-if="activeModal === 2" class="modal-overlay">
     <div class="modal">
        <span @click="closeModal()" class="close-button">FERMER</span>
         <h4>Projet 2: Cahier des Charges</h4>
         <table>
           <thead>
             <tr>
               <th>Désignation</th>
               <th>Description</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>Date de création</td>
               <td>11/2023</td>
             </tr>
             <tr>
               <td>Technologies utilisées</td>
               <td>Word</td>
             </tr>
             <tr>
               <td>Contrainte technique </td>
               <td>CC pour un site e-commerce</td>
             </tr>
             <tr>
               <td>Lien github/pdf</td>
               <td><a href="../cahier.pdf" target="_blank" >Lien PDF</a></td>
             </tr>
           </tbody>
         </table>
      </div>
   </div>
</div>

 <!--modal espace commentaire-->
<div class="bloc">
   <div class="body-projecte">
      <img src="../assets/img-project/espace-com.png" alt="espace-commentaire">
      <h3>Création d'un espace commentaire.</h3>
      <button @click="openModal(3)">VOIR</button>
   </div>
   <div v-if="activeModal === 3" class="modal-overlay">
     <div class="modal">
        <span @click="closeModal()" class="close-button">FERMER</span>
         <h4>Projet 3: Espace commentaire</h4>
         <table>
           <thead>
             <tr>
               <th>Désignation</th>
               <th>Description</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>Date de création</td>
               <td>12/2023</td>
             </tr>
             <tr>
               <td>Technologies utilisées</td>
               <td>java script</td>
             </tr>
             <tr>
               <td>Contrainte technique </td>
               <td>modification d'un espace déja coder</td>
             </tr>
             <tr>
               <td>Lien github/pdf</td>
               <td><a href="https://github.com/Bonnaire-al/cef-espace-commentaire" target="_blank">Lien Git</a></td>
             </tr>
           </tbody>
         </table>
      </div>
   </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeModal: null
    };
  },
  methods: {
    openModal(modalNumber) {
      this.activeModal = modalNumber;
    },
    closeModal() {
      this.activeModal = null;
    }
  }

};
</script>

<style>
/*j'ai importé le css pour les fenetre du modal dynamique;
je ne suis pas tres fort pour nommer les classes desolé jai fait au plus simple*/
@import url(../assets/css/modal.css);

img{
    width: 3rem;
    height: 3rem;
    padding-left: 0.5rem;

}

button {
  display: inline-block;
  margin-right: 2rem;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: #83726d;
  border: 2px solid #19048b;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, transform 0.3s;
}

button:hover {
  background-color: #f80000;
  border-color: #000000;
  transform: scale(1.05);
}


.body-projecte{
    margin-top: 2rem;
    width: 75%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(135deg, #eeeeee, #798588, #ffffff);
    background-size: 600% 600%;
    animation: gradientAnimation 10s ease infinite;
    color: #030441;
    border-style: groove;
    border-color: rgb(5, 3, 95) ;
    margin-left: 5rem;
    transition: box-shadow 1s;
}

.body-projecte:hover {
/* Ajoute une ombre en bas à droite */
    box-shadow: 200px 50px 50px 15px rgba(0, 0, 0, 0.5); 
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 25%;
  }
  25% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 0% 75%;
  }
  75% {
    background-position: 100% 75%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>