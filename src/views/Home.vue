<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h1 class="greeting">
        Hi, Kasonde!
      </h1>
      <p class="greeting-tag">
        Let's make your banking needs easy!
      </p>

      <img src="assets/img/card1.png" class="card-img" @click="cardDetails()" />

      <QuickActions />

      <SectionDivider data="History" />

      <RecentList :data="recentList" />
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonPage, 
  IonContent, 
} from "@ionic/vue";

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
    IonContent
  },
  data() {
    return {
      recentList: [
        {
          name: "Netflix",
          cost: "K140.20",
          description: "Today",
          color: "#36AEEA"
        },
        {
          name: "Audible",
          cost: "K98.20",
          description: "Yesterday",
          color: "#226391"
        },
        {
          name: "Canva",
          cost: "K98.20",
          description: "Jan 23, 2021",
          color: "#797A7C"
        },
        {
          name: "F1 TV",
          cost: "K44.20",
          description: "Jan 18, 2021",
          color: "#D8373F"
        },
      ],
    };
  },
  methods: {
    cardDetails() {
      this.$router.push("/card-details");
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>