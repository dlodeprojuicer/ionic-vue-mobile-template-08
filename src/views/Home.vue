<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h1 class="greeting">
        Hi, Kasonde!
      </h1>
      <p class="greeting-tag">
        Let's make your banking needs easy!
      </p>

      <img src="assets/img/card1.png" class="card-img" />

      <QuickActions />

      <SectionDivider data="History" />

      <RecentList :data="recentList" />

      <!-- <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab> -->

      <div class="fake-fab">
        <ion-icon :icon="add" />
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonIcon } from "@ionic/vue";
import { grid, menu, shield, statsChart, repeat, refresh, add } from "ionicons/icons";

import RecentList from "../components/RecentList";
import QuickActions from "../components/QuickActions";
import SectionDivider from "../components/SectionDivider";

export default {
  name: "home",
  title: "Home",
  requiresAuth: false,
  components: {
    IonPage,
    RecentList,
    QuickActions,
    SectionDivider,
    IonContent,
    IonIcon
    // IonFab, 
    // IonIcon,
    // IonFabButton
  },
  setup() {
    return {
      add,
      menu,
      grid,
      shield, 
      statsChart, 
      repeat, 
      refresh
    }
  },
  data() {
    return {
      recentList: [
        {
          name: "Netflix",
          cost: "K140.20",
          description: "Today",
          icon: repeat,
          color: "#36AEEA"
        },
        {
          name: "Audible",
          cost: "K98.20",
          description: "Yesterday",
          icon: statsChart,
          color: "#226391"
        },
        {
          name: "Canva",
          cost: "K98.20",
          description: "Jan 23, 2021",
          icon: shield,
          color: "#797A7C"
        },
        {
          name: "F1 TV",
          cost: "K44.20",
          description: "Jan 18, 2021",
          icon: refresh,
          color: "#D8373F"
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fake-fab {
  background: var(--brand-primary);
  width: 50px;
  height: 50px;
  padding-top: 2px;
  color: #fff;
  float: right;
  border: 6px solid #fff;
  border-radius: 5px;
  transform: rotate(44deg);
  text-align: center;
  font-size: 35px;
  font-weight: 500;
}

ion-content {
  --background: var(--brand-secondary);
}

h1.greeting {
  font-size: 24px;
  color: #000000;
}

p.greeting-tag {
  color: var(--brand-tertiary);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
}

.card-img {
  margin: 30px 0;
}

ion-fab-button {
 --background: var(--brand-primary);
  top: 38px;
  position: relative;
}
</style>