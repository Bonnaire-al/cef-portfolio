<template>
  <div class="form-bloc">
    <form id="sendform" @submit.prevent="submitForm">
      <label for="nom">Nom:</label>
      <input type="text" id="nom" v-model="nom" required>
      <label for="prenom">Prénom:</label>
      <input type="text" id="prenom" v-model="prenom" required>
      <label for="objet">Objet:</label>
      <input type="text" id="objet" v-model="objet" required>
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>
      <button type="submit">Envoyer</button>
    </form>
</div>
</template>

<script>
import emailjs from 'emailjs-com'; //j'ai configuer un service de gestion d'envoie d'email sans passer par le backend

export default {
  data() {
    return {
      nom: '',
      prenom: '',
      objet: '',
      message: '',
      serviceId: 'service_5fbh55h', 
      templateId: 'template_kedcmpr', 
      userId: '553WhETy15P9Hlzx_' 
    };
  },
  methods: {
    async submitForm() {
      try {
        const formElement = document.querySelector('form');
        await emailjs.sendForm(this.serviceId, this.templateId, formElement, this.userId);
        alert('merci pour le message, a bientot cordiallment MR,B');
        this.resetForm();
      } catch (error) {
        console.error('Une erreur s\'est produite lors de l\'envoi du message :', error);
        alert('Une erreur s\'est produite lors de l\'envoi du message.');
      }
    },
    resetForm() {
      this.nom = '';
      this.prenom = '';
      this.objet = '';
      this.message = '';
    }
  }
};
</script>


  
  <style scoped>
.form-bloc{
  background-image: url(../assets/autre-img/courrier.png) ;
  background-position: center;
  background-size: cover;
  top: 5rem;
  width: 60%;
  margin-left: 20%;
  color: #ff0000;

} 
  
form {
  max-width: 400px;
  margin: 0 auto;
}

div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 70%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  height: 100px;
}

button {
  display: block;
  width: 25%;
  margin-left: 35%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 100%;
  
}

button:hover {
  background-color: #ff0000;
}

.link1{
  text-decoration: none;
 }
</style>
  