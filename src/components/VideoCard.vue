<script setup lang="ts"></script>

<template>
  <v-card max-width="400" class="mx-auto">
    <v-img
      cover
      :aspect-ratio="16 / 9"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-item style="align-items: start">
      <template v-slot:prepend>
        <v-avatar
          color="grey-darken-3"
          image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-avatar>
      </template>
      <v-card-title style="white-space: normal">
        Organization Admin Settings: Dashboard overview [1/7]
      </v-card-title>

      <v-card-subtitle>
        <span class="mr-1">Figma 16K views 2 months ago</span>
      </v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<style scoped></style>
