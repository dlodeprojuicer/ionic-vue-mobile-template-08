<template>
  <ion-page>
    <ion-content class="ion-padding">
      <img src="assets/img/card2.png" class="card-img" />

      <h1>
        Safer payments for everyone!
      </h1>

      <p>
        Create a fresh virtual credit card for all your shopping and online bankiing needs
      </p>

      <ion-button :routerLink="{ name: 'home' }">
        <ion-icon :icon="arrowForward"></ion-icon>
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonIcon,
  IonButton,
  IonContent,
} from "@ionic/vue";

import { arrowForward } from "ionicons/icons";

export default {
  name: "Welcome",
  components: {
    IonPage,
    IonIcon,
    IonButton,
    IonContent
  },
  setup() {
    return {
      arrowForward
    }
  }
};
</script>

<style lang="scss" scoped>
ion-content {
  text-align: center;
}

.card-img {
  width: 300px;
  margin: 80px 0 50px 0;
}

h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  color: #767676;
}

ion-button {
  --background: var(--brand-primary);
  font-size: 20px;
  color: #fff;
  // padding: 10px;
  border-radius: 20px;
  margin-top: 20px;
  width: 60px;
  height: 60px;
}

ion-icon {
  background: none;
}
</style>
  