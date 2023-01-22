<script setup lang="ts">
import { ref } from 'vue';

export type Owner = {
  id: string
  name: string
  email: string
  profile_photo_url: string
  updated_at: Date
  created_at: Date
}

export type VideoCardProps = {
  fetcher: () => Promise<string | undefined>;
  title: string;
  owner: Owner;
  views: number;
  created: Date;
}

const props = defineProps<VideoCardProps>()

const imgSrc = ref<string>("")

props.fetcher().then((res) => {
  imgSrc.value = res || ""
})
</script>

<template>
  <v-card max-width="400" class="mx-auto">
    <v-img
      cover
      :aspect-ratio="16 / 9"
      :src="imgSrc || '/static/no-image.jpg'"
    ></v-img>

    <v-card-item style="align-items: start">
      <template v-slot:prepend>
        <v-avatar
          color="grey-darken-3"
          image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-avatar>
      </template>
      <v-card-title style="white-space: normal">
        {{ props.title }}
      </v-card-title>

      <v-card-subtitle>
        <p class="mr-1">{{ props.owner.name }}</p>
        <span class="mr-1">{{ props.views }}</span>
        <span class="mr-1">{{ props.created ? new Date(props.created).toLocaleDateString() : "" }}</span>
      </v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<style scoped></style>
