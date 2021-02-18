<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-icon :icon="arrowBack" @click="backFn()"></ion-icon>

      <h1 class="greeting">
        Create Virtual Card
      </h1>
      <p class="greeting-tag">
        Fresh virtual credit cards are the next thing
      </p>

      <div class="form">
        <div class="image">
          <img src="assets/img/card4.png" class="card-img" />
        </div>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label>Card Name</ion-label>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col class="value-col">
              <ion-icon :icon="personCircleOutline"></ion-icon> Kasonde Mumba
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-label>Card Weekly Limits</ion-label>
            </ion-col>
          </ion-row>
          <ion-row class="spaced-col">
            <ion-col class="value-col">
              K1,000
            </ion-col>
            <ion-col class="value-col">
              K5,000
            </ion-col>
          </ion-row>
          <ion-row class="spaced-col">
            <ion-col class="value-col">
              K10,000
            </ion-col>
            <ion-col class="value-col">
              No Limit
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <ion-button expand="full">Create Card</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonPage, 
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
  IonIcon,
  IonButton
} from "@ionic/vue";
import { personCircleOutline, arrowBack } from "ionicons/icons";

export default {
  name: "card-details",
  title: "card-details",
  requiresAuth: false,
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonCol,
    IonRow,
    IonLabel,
    IonIcon,
    IonButton
  },
  setup() {
    return {
      personCircleOutline,
      arrowBack
    }
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
    backFn() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
ion-content {
  --background: var(--brand-secondary);
}

ion-icon {
  font-size: 30px;
  color: var(--brand-primary);
  font-weight: 500;
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

.image {
  text-align: center;
}

.card-img {
  width: 180px;
  margin-top: -50px;
}

.form {
  background: #fff;
  padding: 0 20px;
  margin-top: 85px;
  border-radius: 50px;

  ion-grid {
    padding-bottom: 0;
    padding-top: 0;

    ion-row {
      margin: 20px 0;

      ion-col {
        ion-label {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 23px;
          color: #A4A4A4;
        } 

        &.value-col {
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 23px;
          color: #000;
          background: var(--brand-secondary);
          padding: 20px;
          border-radius: 10px;
        }
      }

      &.spaced-col {
        text-align: center;
        ion-col:nth-child(odd) {
          margin-right: 20px;
        }

        &.spaced-col > ion-col:nth-child(even) {
          margin-left: 20px;
        }

        &.spaced-col > ion-col:nth-child(1) {
          margin-bottom: 20px;
        }

        &.spaced-col > ion-col:nth-child(2) {
          margin-bottom: 20px;
        }
      }
    }
  }
}

ion-button {
  --background: var(--brand-primary);
  font-size: 24px;
  text-transform: none;
  --border-radius: 20px;
  height: 60px;
  margin-top: 40px;

  &::part(native) {
    border-radius: 20px;
  }
}
</style>