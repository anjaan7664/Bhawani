<template>
  <div class="text-center">
    <h1
      class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-6 "
    >
      {{ $t("product.our_prod") }}
    </h1>
    <section
      v-for="product in products"
      :key="product.name"
      class="flex flex-row mx-1 lg:px-5 lg:mx-10 lg:py-0 mb-5"
    >
      <div class="flex flex-wrap my-4">
        <div class="w-full lg:w-1/2 text-center">
          <div class="h-full lg:px-6 lg:pt-3 pb-2 lg:mx-auto w-full ">
            <carousel :per-page="1" :autoplay="true" :loop="true">
              <slide v-for="img in product.image" :key="img.url">
                <div class="text-center">
                  <img
                    v-preview:scope-a
                    class="shadow-md object-cover object-center h-full w-full"
                    :src="img.url"
                    alt
                  />
                </div>
              </slide>
            </carousel>
          </div>
        </div>
        <div class="full lg:w-1/2">
          <h1
            class="text-left text-secondary text-3xl lg:text-4xl font-Poppins"
          >
            {{ $t(product.name) }}
          </h1>
          <h2 class="text-left text-2xl lg:text-3xl font-Poppins">
            {{ $t("product.packaging") }}
          </h2>
          <p class="text-left text-lg lg:text-xl">
            {{ $t(product.packaging) }}
          </p>
          <h2 class="text-left text-2xl lg:text-3xl font-Poppins">
            {{ $t("product.uses") }}
          </h2>
          <p class="text-left text-lg md:text-xl md:mr-5 ">
            {{ $t(product.uses) }}
          </p>
        </div>
        <h1 class="md:mx-5 text-left text-2xl lg:text-3xl font-Poppins  ">
          {{ $t("product.other_info") }}
        </h1>
        <p class="text-left text-lg md:text-xl md:mx-5 ">
          {{ $t(product.main_para) }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import PhotoSwipe from "photoswipe/dist/photoswipe";
import PhotoSwipeUI from "photoswipe/dist/photoswipe-ui-default";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import createPreviewDirective from "vue-photoswipe-directive";

export default {
  directives: {
    preview: createPreviewDirective(null, PhotoSwipe, PhotoSwipeUI)
  },
  head: {
    title: "Our Products | Bhawani Industries Jodhpur",

    // Meta tags
    meta: [
      { name: "description", content: "", id: "desc" }
      // ...
    ]
  },
  data() {
    return {
      products: [
        {
          image: [
            { url: require("../assets/images/products/dal.webp") },
            { url: require("../assets/images/products/dal2.webp") },
            { url: require("../assets/images/products/dal3.webp") }
          ],
          alt: "product.1.name",
          name: "product.1.name",
          package: "product.1.packaging",
          uses: "product.1.uses",
          short_para: "",
          main_para: "product.1.info"
        },
        {
          image: [
            { url: require("../assets/images/products/korma.webp") },
            { url: require("../assets/images/products/korma2.webp") },
            { url: require("../assets/images/products/korma3.webp") }
          ],
          alt: "product.2.name",
          name: "product.2.name",
          package: "product.2.packaging",
          uses: "product.2.uses",
          short_para: "",
          main_para: "product.2.info"
        },
        {
          image: [
            { url: require("../assets/images/products/churi.webp") },
            { url: require("../assets/images/products/churi2.webp") },
            { url: require("../assets/images/products/churi3.webp") }
          ],
          alt: "product.3.name",
          name: "product.3.name",
          package: "product.3.packaging",
          uses: "product.3.uses",
          short_para: "",
          main_para: "product.3.info"
        }
      ]
    };
  }
};
</script>
