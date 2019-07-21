<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="fas fa-bars" />
        </q-btn>

        <q-toolbar-title>
          Renan Santana
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-white text-primary">
      <q-toolbar>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Links</q-item-label>
        <q-item clickable tag="a" target="_blank" to="/index">
          <q-item-section avatar>
            <q-icon name="fas fa-id-card" />
          </q-item-section>
          <q-item-section>
            <q-item-label>About Me</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item clickable tag="a" target="_blank" to="">
          <q-item-section avatar>
            <q-icon name="fas fa-code fa-sm" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Experience</q-item-label>
            <q-item-label caption>Verbose version</q-item-label>
          </q-item-section>
        </q-item> -->
        <!-- <q-item clickable tag="a" target="_blank" href="">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'main_layout',
  data() {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop,
      leftDrawerOpen: false,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>
</style>
