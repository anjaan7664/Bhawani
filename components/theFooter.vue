<template>
  <footer class="bg-black w-full mt-8">
    <div class="text-white max-size m-auto lg:pt-1 ">
      <div class="bg-black flex flex-row w-full flex-wrap ">
        <div class="w-full lg:w-2/5 flex flex-wrap border-r-2 border-black">
          <div class="flex flex-wrap w-full pt-4 lg:mt-6">
            <img
              src="../assets/images/logo.webp"
              alt="Bhawani Industries logo"
              class="h-48 lg:h-32 mx-auto lg:mx-0 lg:w-2/4 lg:pl-10"
            />
            <div class="w-full lg:w-2/4 pt-4 lg:pt-4">
              <h1
                class="text-5xl text-center font-extrabold font-Poppins leading-10 lg:leading-normal"
              >
                {{ $t("footer.bhawani") }}
              </h1>
              <h2 class="text-center text-lg  lg:text-xl lg:-m-4">
                {{ $t("footer.group_of_companies") }}
              </h2>
            </div>
          </div>
        </div>
        <div class="bg-black w-full lg:w-3/5 flex flex-wrap">
          <div
            class="flex text-center lg:text-left flex-col w-full sm:w-1/2 lg:pl-32 mt-6"
          >
            <div class="w-auto mx-auto lg:mx-0 inline-block">
              <h1
                class="text-3xl lg:text-2xl border-primary border-b-2 w-auto inline-block mb-2"
              >
                {{ $t("footer.quick_link") }}
              </h1>
            </div>
            <NuxtLink
              :to="localePath('/Products')"
              class="hover:text-primary transition-colors duration-200 text-lg mb-2 lg:mb-0"
              >-{{ $t("footer.our_product") }}</NuxtLink
            >
            <NuxtLink
              :to="localePath('/About')"
              class="hover:text-primary transition-colors duration-200 text-lg mb-2 lg:mb-0"
              >-{{ $t("footer.about_us") }}</NuxtLink
            >
            <NuxtLink
              :to="localePath('/Contact')"
              class="hover:text-primary transition-colors duration-200 text-lg mb-2 lg:mb-0"
              >-{{ $t("footer.contact_us") }}</NuxtLink
            >
            <NuxtLink
              :to="localePath('/Gallery')"
              class="hover:text-primary transition-colors duration-200 text-lg mb-2 lg:mb-0"
              >-{{ $t("footer.gallery") }}</NuxtLink
            >
            <NuxtLink
              :to="localePath('/Machinery')"
              class="hover:text-primary transition-colors duration-200 text-lg mb-2 lg:mb-0"
              >-{{ $t("footer.machinery") }}</NuxtLink
            >
            <NuxtLink
              :to="localePath('/Team')"
              class="hover:text-primary transition-colors duration-200 text-lg mb-2 lg:mb-0"
              >-{{ $t("footer.our_team") }}</NuxtLink
            >
          </div>
          <div class="w-full sm:w-1/2 text-center lg:text-left mt-6">
            <h1
              class="text-3xl lg:text-2xl border-primary border-b-2 w-auto inline-block mx-auto lg:mx-0 mb-2"
            >
              {{ $t("footer.get_in_touch") }}
            </h1>
            <div class="flex flex-row mb-2 mx-auto w-64 lg:w-auto">
              <img
                src="../assets/images/svg/location.svg"
                alt=""
                class="w-12 lg:w-auto mr-4"
              />
              <a
                href="https://goo.gl/maps/1AAYysmvtQKmgZAy8"
                class="text-left underline"
              >
                {{ $t("footer.address") }}
              </a>
            </div>
            <a
              href="tel:+912912944707"
              class="flex flex-row mb-2 mx-auto w-64 lg:w-auto underline"
            >
              <img src="../assets/images/svg/phone.svg" alt="" class="mr-4" />
              <p class="">+91-291-2944707</p>
            </a>
            <a
              href="mailto:Dilipbhootra555@gmail.com"
              class="flex flex-row mb-2 mx-auto w-64 lg:w-auto underline"
            >
              <img src="../assets/images/svg/mail.svg" alt="" class="mr-4" />
              <p>Dilipbhootra555@gmail.com</p>
            </a>
            <div class="flex flex-row mb-2 mx-auto w-64 lg:w-auto">
              <img src="../assets/images/svg/time.svg" alt="" class="mr-4" />
              <p>{{ $t("footer.time") }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black flex-wrap flex flex-row lg:h-16 items-center">
        <div class="flex flex-row lg:ml-3 mx-auto">
          <p class="m-2">Copyright © 2020</p>
          <a
            target="_blank"
            href="http://satlaa.com"
            class="mt-2 mb-2 text-red transition-colors duration-300 font-semibold hover:text-white "
            >Satlaa Tech</a
          >
          <!-- <a
            class="mt-2 mb-2 font-semibold ml-2"
            href="#"
            @click.prevent="setlocale(setLocaleLang)"
            >{{ $t("footer.changeLang") }}</a -->
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            class="mt-2 mb-2 font-semibold ml-2"
            :to="switchLocalePath(locale.code)"
            >{{ $t("footer.changeLang") }}</nuxt-link
          >
        </div>
        <div class="lg:ml-auto lg:mr-4 flex flex-row mx-auto">
          <NuxtLink
            :to="localePath('/Terms')"
            class="m-2 text-red transition-colors duration-300 text-bold hover:text-white font-Poppins"
            >Terms & Condition</NuxtLink
          >
          <p class="m-2">/</p>
          <NuxtLink
            :to="localePath('/Privacy-policy')"
            class="m-2 text-red transition-colors duration-300 text-bold hover:text-white font-Poppins"
            >Privacy-Policy</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
// import { loadMessages } from "../plugins/i18n";
export default {
  name: "theFooter",
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      locale: "locale",
      locales: "locales"
    }),
    setLocaleLang() {
      if (this.locale == "en") {
        return "hn";
      } else {
        return "en";
      }
    },
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
  },
  methods: {
    setlocale(locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale);
        this.$store.dispatch("setLocale", { locale });
        window.scrollTo(0, 0);
      }
    }
  }
};
</script>
