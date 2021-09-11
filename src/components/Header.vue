<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link class="text-white font-bold uppercase text-2xl mr-4"
      :to="{ name: 'home' }" exact-active-class="no-active">Music</router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <li>
              <router-link class="px-2 text-white"
              :to="{name: 'about'}">About</router-link>
            </li>
          <!-- Navigation Links -->
          <li v-if="!userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">
              Login / Register
            </a>
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white"
              :to="{name: 'manage'}">Manage</router-link>
            </li>
            <li>
              <a class="px-2 text-white" href="#"
                @click.prevent="signout">Logout</a>
            </li>
          </template>
        </ul>
         <ul class="flex flex-row mt-1 ml-auto">
           <li>
             <a href="#" class="px-2 text-white" @click.prevent="changeLocal">
               {{ currentLocal }}
             </a>
           </li>
         </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState(['userLoggedIn']),
    currentLocal() {
      return this.$i18n.locale === 'fr' ? 'English 🇬🇧' : 'France 🇫🇷';
    },
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
    signout() {
      this.$store.dispatch('signout');
      // console.log(this.$route);
      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'home' });
      }
    },
    changeLocal() {
      this.$i18n.locale = this.$i18n.locale === 'fr' ? 'en' : 'fr';
    },
    // signout() {
    //   this.$store.dispatch('signout')
    // }
    // toggleAuthModal() {
    //   this.$store.commit('toggleAuthModal');
    // },
  },
};
</script>
