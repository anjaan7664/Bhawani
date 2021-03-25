<template>
  <div class="text-center">
    <h1
      class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-6 lg:mb-12"
    >
      {{ $t("nav.about_us") }}
    </h1>
    <section>
      <div class="flex flex-wrap">
        <div class="md:flex items-center w-full lg:w-1/2 ">
          <!-- Block in LG  -->
          <div
            class="relative w-full h-full overflow-hidden hidden lg:block"
            style="min-height: 19rem;"
          >
            <div class="">
              <img
                class="absolute object-cover ml-8 mt-8 bottom-0 right-0"
                style="width:400px; height:300px"
                src="../assets/images/factory.webp"
                alt="Bhawani Industries Factory Building"
              />
              <img
                class="absolute object-cover my-anim-about mb-4 left-0 top-0  border-8 border-primary"
                style="width:400px; height:300px"
                src="../assets/images/others/building.webp"
                alt="Bhawani Industries New Building"
              />
            </div>
          </div>
          <!-- Block in LG ends Here -->
          <!-- hidden in LG  -->
          <div
            class="flex flex-wrap overflow-hidden lg:hidden mx-2 text-center"
          >
            <div class="p-2">
              <img
                class="object-cover my-anim-about border-4 border-primary"
                src="../assets/images/others/building.webp"
                alt="Bhawani Industries New Building"
              />
            </div>

            <div class="bottom-0 text-black  text-center">
              <h1 class="font-teko text-4xl " style="">
                Since <span class="text-primary">2007</span>
              </h1>
            </div>
          </div>
          <!-- hidden in LG end here -->
        </div>
        <div class="w-full lg:w-1/2">
          <h1 class="text-3xl lg:text-4xl font-Montserrat">
            {{ $t("about.background") }}
          </h1>
          <p
            class="text-lg lg:text-2xl font-sans lg:font-Montserrat mx-1 lg:mx-8 text-left"
          >
            {{ $t("about.main_para") }}
          </p>
        </div>
      </div>
    </section>
    <section class="mt-6">
      <h1
        class="mx-auto font-Merriweather text-3xl lg:text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-4 lg:mb-12"
      >
        {{ $t("about.start") }}
      </h1>
      <div class="text-left">
        <p class="lg:font-Poppins text-lg mx-1 lg:mx-4 lg:mx-0">
          {{ $t("about.main_about") }}
        </p>
      </div>
    </section>
    <div class="w-full flex flex-wrap text-center mb-3 mt-6 ">
      <div class="w-full mb-3">
        <h1
          class="mx-auto font-Merriweather text-3xl lg:text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-4 lg:mb-12"
        >
          {{ $t("footer.bank") }}
        </h1>
      </div>
      <div class="w-auto lg:w-auto lg:mr-5 p-1 text-left mx-auto text-xl">
        <p>GSTIN: <strong>08AAIFB4123F1ZT</strong></p>
        <p>TIN: <strong>08392610026</strong></p>
        <p>PAN: <strong>AAIFB4123F</strong></p>
        <p>TAN: <strong>JDHB05032G</strong></p>
      </div>
      <div class="w-auto lg:w-auto p-1 text-left mx-auto text-xl">
        <p>Bank Detail: <strong>Bank Of Baroda</strong></p>
        <p>A/C No. : <strong>31730500000060</strong></p>
        <p>IFS Code: <strong>barb0borana</strong></p>
        <p>Branch: <strong>Boranada</strong></p>
      </div>
    </div>
    <section>
      <h1
        class="mx-auto font-Merriweather text-3xl border-primary border-b-4 w-auto inline-block align-middle mt-12 mb-6"
      >
        {{ $t("about.cert") }}
      </h1>
      <div>
        <div class="flex flex-wrap my-4">
          <div v-for="crt in cert" :key="crt.image" class="w-full lg:w-1/4">
            <img
              v-preview:scope-a
              :src="crt.image"
              alt="Certificates"
              class="w-full px-5 my-2"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import createPreviewDirective from "vue-photoswipe-directive";
 
export default {
  directives: {
    preview: createPreviewDirective(null, PhotoSwipe, PhotoSwipeUI)
  },

  name: "About",
  head: {
    title: "About Our Company | Bhawani Industries Jodhpur",

    // Meta tags
    meta: [
      { name: "description", content: "", id: "desc" }
      // ...
    ]
  },
  components: {},
  data() {
    return {
      cert: [
        { image: require("../assets/images/cert.webp") },
        { image: require("../assets/images/cert.webp") },
        { image: require("../assets/images/cert.webp") },
        { image: require("../assets/images/cert.webp") }
      ]
    };
  }
};
</script>
