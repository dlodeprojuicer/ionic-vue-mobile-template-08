<template>
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
  </ion-tabs>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonIcon, } from '@ionic/vue';
import { home, cardOutline, personCircleOutline, add } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon },
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
  height: 70px;

  ion-icon {
    font-size: 35px;
    color: var(--brand-primary);
  }

  span {
    font-weight: 500;
    font-size: 14px;
  }
}

</style>
