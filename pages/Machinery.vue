<template>
  <div class="text-center">
    <h1
      class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-12"
    >
      {{ $t("machinery.our_machinery") }}
    </h1>
    <div class="">
      <div
        v-for="machine in machines"
        :key="machine.images"
        class="w-full mb-12"
      >
        <div class="m-2 lg:mx-12">
          <div class="w-full">
            <carousel :per-page="1" :autoplay="true" :loop="true">
              <slide v-for="img in machine.image" :key="img.url">
                <div class="text-center">
                  <img
                    v-preview:scope-a
                    class="object-cover rounded-md w-full h-auto"
                    :src="img.url"
                    alt
                  />
                </div>
              </slide>
            </carousel>
          </div>

          <h1 class="text-2xl lg:text-4xl">{{ $t(machine.name) }}</h1>
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
  name: "Machinery",
  data() {
    return {
      machines: [
        {
          image: [
            { url: require("../assets/images/machinery/jeera.webp"),alt:"Jeera Cleaning Machine 1" },
            { url: require("../assets/images/machinery/jeera2.webp"),alt:"Jeera Cleaning Machine 2" }
          ],
          alt: "",
          name: "machinery.2.name",
          use: ""
        },
        {
          image: [
            { url: require("../assets/images/machinery/guar2.webp"),alt:"Guar Gum Manufacturing Machine 1" },
            { url: require("../assets/images/machinery/guar5.webp"),alt:"Guar Gum Manufacturing Machine 2" },
            { url: require("../assets/images/machinery/guar3.webp"),alt:"Guar Gum Manufacturing Machine 3" },
            { url: require("../assets/images/machinery/guar4.webp"),alt:"Guar Gum Manufacturing Machine 4" }
          ],
          alt: "",
          name: "machinery.1.name",
          use: ""
        }
      ]
    };
  },
  head: {
    title: "Our Plant Machinery | Bhawani Industries Jodhpur",

    // Meta tags
    meta: [
      { name: "description", content: "A description of the page" },
      { name: "keywords", content: "dvcv,fhfg" }
      // ...
    ]
  }
};
</script>
