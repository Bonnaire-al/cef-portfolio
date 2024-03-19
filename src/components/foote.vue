<template>
   <!--je n'ai pas de compte twitter ni de compte linkedin j'ai mis la page d'aceuil des sites ducoup-->
  <footer>
    <div class="bloc1">
      <div class="bloc" >
            <a href="https://twitter.com/France/" target="_blank" rel="noopener noreferrer"><img src="../assets/img-reseau/twitter.png" alt="image-twitter" class="logo"></a>
            <a href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="../assets/img-reseau/linkedin.png" alt="image-linkedin" class="logo"></a>
            <a href="https://github.com/Bonnaire-al" target="_blank" rel="noopener noreferrer"><img src="../assets/img-reseau/github1.png" alt="image-github" class="logo"></a>
      </div>
      
      <p>20/03/2024</p>
    </div>
    
  </footer>
</template>


<style scoped>
.bloc1 {
  background-image: url('../assets/autre-img/image2.png');
  background-position: center;
  color: #c02828; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center; 
      
}

.bloc {
  width: 12rem;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}

.logo {
  height: 30px; 
  width: auto; 
}

p {
  margin-top: 0.5rem; 
}

</style>