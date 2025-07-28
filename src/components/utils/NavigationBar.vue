<script setup>
import { useTheme } from 'vuetify'
import { shallowRef, ref, computed } from 'vue'
import CircularBtn from '@/components/utils/circularBtn.vue'
import router from '@/router/index.js'
const theme = useTheme()

const emit = defineEmits(['themeChange'])
const drawer = shallowRef(false)
const homeNav = {
  text: 'Home',
  to: '/',
}
const items = [
  // {
  //   text: 'Home',
  //   to: '/',
  // },
  {
    text: 'About',
    to: '/about',
    img: '/tenor-saxophone-clip-art.png',
    color: '#F5D500',
  },
  {
    text: 'TBA Swinging Nine',
    to: '/swinging-nine',
    img: '/tenor-saxophone-clip-art.png',
    color: '#1C8502',
  },
  {
    text: 'Gallery',
    to: '/gallery',
    img: '/tenor-saxophone-clip-art.png',
    color: '#0067FF',
  },
  //
  {
    text: 'Media',
    to: '/media',
    img: '/tenor-saxophone-clip-art.png',
    color: '#820201',
  },
]
function pageNavigate(item) {
  console.log('Navigating to:', item.to)
  // Implement navigation logic here, e.g., using Vue Router
  router.push({ path: item.to })
}
const currentMode = computed(() => {
  return theme.global.current.value.dark ? 'dark' : 'light'
})
const dynamicNavTextColor = computed(() => {
  return theme.global.current.value.dark ? 'tba-white' : 'tba-red'
})
const switchLabel = computed(() => {
  console.log('theme.global.name', theme.global.name.value)
  return theme.global.name.value === 'dark' ? 'Switch to Light Mode' : ' Switch to Dark Mode'
})
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  emit('themeChange', currentMode.value)
}
</script>
<template>
  <v-layout class="mb-10 pb-11 d-flex">
    <v-navigation-drawer v-model="drawer" color="primary">
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :active="i === 0"
          link
          :to="item.to"
          :title="item.text"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar id="navigation-bar" class="px-md-4">
      <template #prepend>
        <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" />
      </template>

      <div class="ml-3 header-text d-flex justify-space-between w-100">
        <h1 :class="dynamicNavTextColor" class="text-h4">
          <button @click="pageNavigate(homeNav)" class="text-decoration-none">
            <img
              src="@/assets/tba-title.png"
              alt="TBA Big Band Home"
              class="mt-1"
              style="height: 50%; width: 50%"
            />
          </button>
        </h1>
      </div>
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn
          tile
          color="red"
          v-for="(item, i) in items"
          :key="i"
          class="mr-2"
          rounded
          size="large"
          @click="pageNavigate(item)"
        >
          <v-icon
            color="red"
            size="large"
            icon="mdi-music"
            class="mr-2"
            v-bind="item"
            :background-color="item.color"
            >mdi-music
          </v-icon>
          {{ item.text }}
        </v-btn>
        <!--<circular-btn-->
        <!--  v-for="(item, i) in items"-->
        <!--  :key="i"-->
        <!--  :active="i === 0"-->
        <!--  class="nav-btn"-->
        <!--  v-bind="item"-->
        <!--  :imageUrl="item.img"-->
        <!--  :text-color="'red'"-->
        <!--  :background-color="item.color"-->
        <!--  @click="pageNavigate(item)"-->
        <!--/>-->
      </template>
    </v-app-bar>

    <!--<v-main height="200">-->
    <!--  &lt;!&ndash;  &ndash;&gt;-->
    <!--</v-main>-->
  </v-layout>
</template>
<style>
.header-text .nassau-white {
  color: #fff;
}
.header-text .nassau-blue {
  color: #001f5a;
}
.header-text .tba-red {
  color: #ff0605;
}
.SelectedTileactive {
  border-radius: 4px;
  background: rgba(10, 204, 117, 0.19);
}

.nav-btn {
  width: 150px; /* Set the width */
  height: 150px; /* Set the height (must be equal to width for a perfect circle) */
  border-radius: 50%; /* Create the circular shape */
  display: flex; /* Use flexbox for centering content */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  cursor: pointer; /* Change cursor on hover */
}

.nav-btn:hover {
  background-color: #2c3e50; /* Darker background color on hover */
  /* You can also change the image or adjust blend mode on hover if needed */
}

.nav-btn span {
  color: white; /* Set the text color */
  font-family: Arial, sans-serif; /* Choose a font */
  font-size: 20px; /* Set the font size */
  text-align: center; /* Center text within its own space */
}
.tba-red {
  color: #ff0605 !important;
}
</style>
