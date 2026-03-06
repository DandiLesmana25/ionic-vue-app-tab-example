<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Beranda</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      
       <h1>Scroll the content and notice that the text goes behind the header and footer.</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed tellus nec mauris auctor dignissim fermentum
      in risus. Sed nec convallis sapien, id tincidunt enim. Mauris ornare eleifend nunc id mattis. Fusce augue diam,
      sagittis nec posuere at, consectetur tempor lectus. Nulla at lectus eget mauris iaculis malesuada mollis sed
      neque. Curabitur et risus tristique, malesuada mauris finibus, elementum massa. Proin lacinia mauris quis ligula
      blandit ullamcorper. Donec ut posuere lorem. In volutpat magna vitae tellus posuere pulvinar. Nam varius ligula
      justo, nec placerat lacus pharetra ac. Aenean massa orci, tristique in nisl ut, aliquet consectetur libero. Etiam
      luctus placerat vulputate. Aliquam ipsum massa, porttitor at mollis ut, pretium sit amet mi. In neque mauris,
      placerat et neque vel, tempor interdum dolor. Suspendisse gravida malesuada tellus, vel dapibus nisl dignissim
      vel. Cras ut nulla sit amet erat malesuada euismod vel a nulla.
    </p>
    <p>
      Phasellus sit amet iaculis odio, eget feugiat erat. Etiam sit amet turpis sit amet massa viverra maximus. Aenean
      venenatis porttitor pharetra. Fusce vulputate urna purus, vel efficitur mauris auctor non. Etiam libero odio,
      sodales in velit a, faucibus venenatis erat. Ut convallis sit amet urna in ultrices. Cras neque est, vehicula sed
      lorem ac, placerat commodo elit. Praesent turpis metus, elementum eget iaculis ac, elementum in odio. Nunc et elit
      faucibus, condimentum mauris consequat, ornare dolor. Sed ac lectus a est blandit tempor. Etiam lobortis tristique
      maximus.
    </p>
    <p>
      Quisque tempus porttitor massa, vel condimentum risus finibus a. Aliquam viverra maximus odio, id ornare justo
      tristique ac. Mauris euismod arcu eget neque sagittis rutrum. Ut vehicula porta lacus nec lobortis. Vestibulum et
      elit ultrices, lacinia metus in, lobortis est. Vivamus nisi justo, venenatis sit amet arcu ac, congue faucibus
      justo. Duis volutpat posuere enim, vel sagittis elit dictum et. Sed et congue mauris. Nam venenatis venenatis
      risus, ac condimentum neque sagittis sed. In eget nulla ultricies urna sollicitudin posuere. Aenean sagittis
      congue mauris. Proin nec libero mi. In hac habitasse platea dictumst. Praesent nunc nulla, dictum id molestie sed,
      pretium vitae turpis.
    </p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>


<style scoped>

</style>