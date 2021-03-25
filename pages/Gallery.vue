<template>
  <div class="text-center">
    <h1
      class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-12"
    >
      {{ $t("our_gallery") }}
    </h1>
    <div class="flex flex-wrap">
      <div v-for="im in images" :key="im.src" class="w-full lg:w-1/3">
        <div class="m-3 lg:h-64">
          <img
            v-preview:scope-a
            :src="im.src"
            :alt="im.alt"
            class="block h-full object-cover w-full rounded"
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
          />
        </div>
      </div>
    </div>
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
  head: {
    title: "Our Photo Gallery | Bhawani Industries Jodhpur",
    // Meta tags
    meta: [
      { name: "description", content: "", id: "desc" }
      // ...
    ]
  },
  name: "Gallery",
  components: {},

  data() {
    return {
      index: null,
      images: [
        { src: require("../assets/images/others/office.webp"), alt:"Bhawani Industries Office" },
        { src: require("../assets/images/others/building.webp"),alt:"Bhawani Industries Building" },
        { src: require("../assets/images/others/imgs (1).webp"),alt:"Bhawani Industries Office 1" },
        { src: require("../assets/images/others/imgs (2).webp"),alt:"Bhawani Industries Office Inside Cabin" },
        { src: require("../assets/images/others/imgs (3).webp"),alt:"Bhawani Industries office members" },
        { src: require("../assets/images/others/imgs (4).webp"),alt:"Bhawani Industries Vehicles(RJ19GG6666,RJ19GG5555)" },
        { src: require("../assets/images/others/imgs (5).webp"),alt:"Dilip Bhootra" },
        { src: require("../assets/images/others/imgs (6).webp"),alt:"Bhawani Industries Office 3" },
        { src: require("../assets/images/others/imgs (7).webp"),alt:"Bhawani Industries Office Temple" },
        { src: require("../assets/images/others/imgs (8).webp"),alt:"Bhawani Industries Truck RJ19GG6666" },
        { src: require("../assets/images/others/imgs (9).webp"),alt:"Bhawani Industries Office Inside Look" },
        { src: require("../assets/images/others/imgs (10).webp"), alt:"Dilip Bhootra" },
        { src: require("../assets/images/others/imgs (11).webp"), alt:"Dilip Bhootra" },
        { src: require("../assets/images/others/imgs (12).webp"), alt:"Bhawani Industries Office inside" },
        { src: require("../assets/images/others/imgs (13).webp"), alt:"Bhawani Industries Office Temple 2" },
        { src: require("../assets/images/others/imgs (14).webp"), alt:"Bhawani Industries Office 5" },
        { src: require("../assets/images/others/imgs (15).webp"), alt:"Dilip Bhootra with laptop" },
        { src: require("../assets/images/others/imgs (16).webp"), alt:"Bhawani Industries Team Members" },
        { src: require("../assets/images/others/imgs (17).webp"), alt:"Dilip Bhootra" },
        { src: require("../assets/images/others/imgs (18).webp"), alt:"Bhawani Industries Office 7" }
      ]
    };
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer;
    }
  }
};
</script>
