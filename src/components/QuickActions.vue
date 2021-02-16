<template>
  <ion-grid>
    <ion-row>
      <ion-col class="ion-activatable ripple-parent">
        <ion-text class="label">
          Credit Limit
        </ion-text>
        <ion-text class="amount">
          <span class="currency">K</span>5, 000
          <ion-ripple-effect></ion-ripple-effect>
        </ion-text>
      </ion-col>
      <ion-col class="ion-activatable ripple-parent">
        <ion-text class="label">
          Monthly
        </ion-text>
        <ion-text class="amount">
          <span class="currency">K</span>, 232.50
          <ion-ripple-effect></ion-ripple-effect>
        </ion-text>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonRippleEffect, IonText} from "@ionic/vue";

export default {
  name: "quick-actions",
  components: { IonGrid, IonRow, IonCol, IonRippleEffect, IonText },
  methods: {},
};
</script>

<style lang="scss" scoped>
ion-grid {
  margin: 10px 0 20px 0;
}

ion-col {
  background: #FFFFFF;
  box-shadow: 1px 1px 200px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  height: 81px;
  padding: 8px 12px;

  &:nth-child(1) {
    margin-right: 16px;
  }

  &:nth-child(2) {
    margin-left: 16px;
  }

  .currency {
    color: #909090;
  }

  .label {
    // font-family: Roboto;
    color:#767676;
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 23px;
    // margin-bottom: 10px;
    padding: 5px 0;
  }

  .amount {
    // font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 23px;
  }
}

// ion-ripple-effect
ion-button {
  
  border-radius: 0;
  height: 100px;
  // width: 150px;
  color: #404040;
  // font-size: 18100%px;
  --background: #ffffff;
}

.btn-icon {
  color: #36aeea;
  display: block;
  margin-top: 10px;
  font-size: 30px;
  width: 50%;
}
</style>