<template>
  <ion-list>
    <ion-item v-for="(item,index) in data" :key="index">
      <ion-text slot="start" class="left">
        <img src="assets/img/list-icon.png" class="icon-img" />
      </ion-text>
      <ion-label>
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
      </ion-label>
      <ion-text class="cost">
        <b>{{ item.cost }}</b>
      </ion-text>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonList, IonItem, IonLabel, IonText } from "@ionic/vue";

export default {
  name: "recent-list",
  props: {
		data: {
			type: Array,
			required: true,
			default: () => []
		}
  },
  components: { IonList, IonItem, IonLabel, IonText },
}
</script>

<style lang="scss" scoped>
h2 {
  // font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000;
}

p {
  // font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
}

ion-list {
  margin: 20px 0;
  background: none;
}

ion-item {
  --background: none;
  margin: 5px 0 0 -15px;
  line-height: 50px;

  // &::part(.item-inner) {
  //   --border-style: none;
  // }
}

.icon-img {
  border-radius: 30px;
  width: 40px;
}

ion-text.left {
  padding: 15px 0px 0px 0;
  margin: 0 14px 0 0px;

  ion-icon.left-icons {
    font-size: 25px;
  }
}

ion-text.cost {
  color: var(--brand-primary);
  font-style: normal;
  font-weight: bold;
  // font-size: 24px;
  line-height: 23px;
}

ion-icon.right-icons {
  color: #36AEEA;
  margin-left: 5px;
}
</style>
