<template>
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button>
        <ion-icon :icon="home" />
      </ion-tab-button>
        
      <ion-tab-button>
        <ion-icon :icon="cardOutline" />
      </ion-tab-button>

      <ion-tab-button>
        <ion-icon :icon="personCircleOutline" />
      </ion-tab-button>

      <ion-tab-button class="fake-fab">
        <ion-icon :icon="add" />
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script lang="ts">
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
  }

  span {
    font-weight: 500;
    font-size: 14px;
  }
}

.fake-fab {
 --background: var(--brand-primary);
  // top: 38px;
  color: #fff;
  position: relative;
}
</style>
