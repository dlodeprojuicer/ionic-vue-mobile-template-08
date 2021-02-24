<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="" href="/home">
          <ion-icon :icon="home" />
        </ion-tab-button>
          
        <ion-tab-button tab="" href="">
          <ion-icon :icon="cardOutline" />
        </ion-tab-button>

        <ion-tab-button tab="" href="">
          <ion-icon :icon="personCircleOutline" />
        </ion-tab-button>

        <ion-tab-button tab="" href="">
        </ion-tab-button>
      </ion-tab-bar>
      <ion-fab vertical="bottom" horizontal="end" edge slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { 
  IonPage,
  IonTabBar, 
  IonTabButton, 
  IonTabs, 
  IonIcon,
  IonFab,
  IonFabButton
} from '@ionic/vue';
import { home, cardOutline, personCircleOutline, add } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { 
    IonPage,
    IonTabs, 
    IonTabBar, 
    IonTabButton, 
    IonIcon,
    IonFab,
    IonFabButton 
  },
  setup() {
    return {
      home, 
      personCircleOutline,
      cardOutline,
      add
    }
  }
}
</script>

<style lang="scss" scoped>
ion-tab-bar {
  --background: #ffffff;
  height: 60px;

  ion-icon {
    font-size: 35px;
    color: var(--brand-primary);
  }

  span {
    font-weight: 500;
    font-size: 14px;
  }
}

ion-fab-button {
 --background: var(--brand-primary);
  bottom: 55px;
  margin-right: 15px;
  position: relative;
  transform: rotate(44deg);
  --border-radius: 15px;
  border: 3px solid #fff;
  ion-icon {
    transform: rotate(-44deg);
  }
}
</style>
