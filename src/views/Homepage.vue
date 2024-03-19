<template>
  <main class="main">
    <h1>PRESENTATION</h1>
     <!--j'ai créé des bloc distinct  pour le profile parcours et objectif que je cache a laide du css 
    a chaque apparition d'un bloc pour ne voir qu'un a la fois   -->

    <section class="body">
     
     <div class="buttons">
       <button @click="previousView">précédent</button>
       <button @click="nextView">suivant</button>
     </div>

      <div class="divbox">
        <div v-if="currentDivIndex === 1 " class="profile"> <!--bloc profile-->
            <h2>Profil</h2>
            <div class="profile-body">
              <h3>Bienvenue sur mon portfolio</h3>
              <p>Je suis Mr Bonnaire et voici le portfolio que j'ai créé a l'aide de vue.js le framework de java script. <br>
                 Vous trouverez dans la présentation mon profil, mon parcours ainsi que mes objectifs. <br>
                 Vous pourrez voir aussi les projets que j'ai effectués via les différents outils de programmation. <br>
                 Je serais à votre disposition par téléphone ou par mail via mon formulaire de contact. Bonne visite à vous.
              </p>
              <div class="profile-bloc1">
                <div class="profile-bloc2">
                  <img class="img-profile" src="../assets/img-presentation/image-pre-1.jpeg" alt="web-inteface-globe">
                  <img class="img-profile" src="../assets/img-presentation/image-pre-2.jpeg" alt="travailleur-menuisier">
                </div>
                <div class="profile-bloc3">
                  <h4>BONNAIRE AALA EDDINE</h4>
                  <h5>Mes Diplôme</h5>
                  <ul>
                    <li>Bep Electrotechnique </li>
                    <li>Bac Pro Electrotechnique</li>
                    <li>Préparation BC1 Developpeur web </li>
                  </ul>
                  <h5>Mes Competences</h5>
                  <ul>
                    <li>Developpeur web =>(front end, niveau: Débutant)</li>
                    <li>Electricien =>(niveau: Pro)</li>
                    <li>Menuisier =>(niveau: Pro)</li>
                    <li>Plaquiste =>(niveau: Pro)</li>
                  </ul>
                </div>
              </div>

            </div>
         </div>

         <div v-if="currentDivIndex === 2 " class="route"> <!--bloc parcours-->
            <h2>Parcours</h2>
            <div class="route-body">
             <img class="img-route" src="../assets/autre-img/frise-chrono.png" alt="frise-chrono">
           
             <div class="route-bloc1">
               <h3>Expériences professionelles</h3>

               <h4>Electricien Industriel: SNCF</h4>
               <ul>
                 <li>Montage et pré câblages électriques sur dalle métallique.</li>
                 <li>Câblage et branchement d'une carte Vr et boitier de couplage</li>
                 <li>Teste de continuité et d'isolement avant mise en place des connectiques</li>
               </ul>

               <h4>Electricien batiment: Charitelec58</h4>
               <ul>
                 <li>Etablir un plan de travail et verifier son application</li>
                 <li>Mise en place et branchement d'un tableau électrique</li>
                 <li>Pose de tout appareillage électriques (chauffage,portail élecrtique,alarme)</li>
                 <li>Implantation de circuits électrique (va et vient,télérupteur,boite de dérivation)</li>
                 <li>Dépannage</li>
               </ul>

               <h4>Electricien batiment/Plaquiste: Baudry Didier</h4>
               <ul>
                 <li>Tout travaux électrique dans le batiment</li>
                 <li>Pose ou dépose dune fenêtres, porte sur mesure ou standar</li>
                 <li>Montage d'une ossature bois ou mettalique et structure placoplatre</li>
                 <li>Montage d'une cuisine équiper</li>
                 <li>Pose de plancher flotant ou fixe </li>
               </ul>
             </div>    
           </div>
         </div>

         <div v-if="currentDivIndex === 3 " class="objective"> <!--bloc objectif-->
           <h2>Objectif</h2>
           <div class="objective-body">
             <div class="objective-bloc1">
               <img class="img-objective" src="../assets/img-objectif/ciel.jpg" alt="ciel-etoilé">
               <img class="img-objective" src="../assets/img-objectif/finish-line.jpg" alt="ligne-arriver">
             </div>
             <div class="objective-bloc2">
               <h3>Developpeur web full stack</h3>
               <p>Je suis actuellement en formation pour devenir développeur web. <br>
                 J'ai pour objectif d'apprendre les langages de balisages et de programmation <br> 
                 aussi bien en front-end qu'en back-end, <br>
                 ainsi que le développement des applications mobiles. <br>
                 Je suis convaincue que je possède la motivation et les ressources <br>
                 nécessaires pour gagner de l'expérience dans ce métier. <br>
                 J'ai toujours apprécié l'informatique <br>
                 et j'ai appris à aimer ce métier au cours de la formation.
               </p>
               <h3>Création d'entreprise</h3>
               <p>
                 Je possède aussi actuellement une entreprise d'électricité. <br>
                 C'est une société par action simplifié dont je suis le seul salarier. <br>
                 QTB Electrotech a démarré en début janvier 2024 dont <br>
                 je propose mes services d'installation électrique,<br>
                 le dépannage et diagnostic de mise en norme est gratuit. <br>
                 Une fois ma formation terminée et que je possède assez d'expérience <br>
                 dans le domaine du développement web, <br>
                 je pense également ouvrir une entreprise de création de site web.
               </p>
             </div>
           </div>
         </div>
    </div>
     
   </section>
   
   <h1 class="title2">PROJETS</h1>
   <section>
      <project />
   </section>

   <h1 class="title3">CONTACT</h1>
   <section>
    <formulaire/>
   </section>
  </main>
  
  
</template>

<script>
//j'ai importer la partie projet et formulaire//
import project from '../components/project.vue';
import formulaire from '../components/formulaire.vue'

export default {
  components: {
    project,
    formulaire
  },
  data() {
    return {
      currentDivIndex: 1
      
    };
  },
  methods: {
    nextView() {
      this.currentDivIndex = (this.currentDivIndex % 3) + 1;
    },
    previousView() {
      this.currentDivIndex = (this.currentDivIndex - 1 <= 0 ? 3 : this.currentDivIndex - 1);
    }
  }
};
</script>

<style scoped>
/* j'ai importer égalment le style de chaque bloc pour une meilleur lisibilité*/

@import url(../assets/css/profile-style.css);
@import url(../assets/css/route-style.css);
@import url(../assets/css/objective-style.css);


/*style pour le reste de la page ,titre arriere, plan et bouton*/
main{
  margin-top: 6rem;
  background-color: #c8ccd354;
}
.divbox{
  border-style: ridge;
  border-color: #76787e86;
  border-width: 0.8rem;
}

.title2{
  background: linear-gradient(45deg, #6e8cf090,#6cb6f090 );
}
.title3{
  background: linear-gradient(45deg, #189bff90, #97d2f2); 
}
h1 {
  background: linear-gradient(45deg, #0801448c, #6e8cf090); 
  border-style: double ;
  border-color: rgb(242, 235, 235);
  border-radius: 15%;
  text-align: center;
  }

  p{
    font-size: medium;
  }

.buttons {
  display: flex;
  justify-content: space-around;

}
button {
  width: 5rem;
  height: 1.5rem;
  background-color: #424347; 
  border: none;
  border-radius: 10px; 
  color: rgb(245, 244, 244);
  font-size: 0.7rem; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease; 
}

button:hover {
  background-color: #76eef7; 
}
</style>
