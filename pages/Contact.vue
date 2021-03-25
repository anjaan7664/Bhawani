<template>
  <div class="text-center">
    <h1
      class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-12"
    >
      {{ $t("form.contact_us") }}
    </h1>
    <section>
      <div
        class="mx-2 lg:mx-24 rounded p-2"
        style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
      >
        <iframe
          class="w-full h-64 lg:h-80"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?q=BHAWANI%20INDUSTRIES%20G-107%2C%20111-112%20AGRO%20FOOD%20PARK%2C%20Boranada%2C%20Rajasthan%20342012&t=&z=17&ie=UTF8&iwloc=&output=embed"
          style=""
        ></iframe>
      </div>
    </section>
    <section class="flex flex-wrap lg:mx-6 pt-12">
      <div class="w-full md:w-1/2 text-left">
        <div
          class="mx-2 lg:m-6 rounded lg:mx-12 p-4 lg:p-8 mb-10"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
        >
          <h1 class="font-Merriweather text-center text-3xl text-secondary">
            {{ $t("form.reach_us") }}
          </h1>
          <h2
            class="text-primary text-left text-xl font-Montserrat font-bold pt-2"
          >
            {{ $t("form.postal") }}
          </h2>
          <a
            href="https://goo.gl/maps/1AAYysmvtQKmgZAy8"
            class="text-lg text-left lg:ml-0 underline"
          >
            {{ $t("footer.address") }}
          </a>
          <h2
            class="text-primary text-left text-xl font-Montserrat font-bold pt-3"
          >
            {{ $t("form.email_add") }}
          </h2>
          <a
            href="mailto:info@bhawaniind.com"
            class="text-lg text-left underline"
            >info@bhawaniind.com</a
          >
          <h2
            class="text-primary text-left text-xl font-Montserrat font-bold pt-5"
          >
            {{ $t("form.phone") }}
          </h2>
          <a href="tel:+919829769596" class="text-lg text-left underline"
            >+919829769596</a
          >
        </div>
      </div>
      <!-- Contact Us -->
      <div class="w-full md:w-1/2">
        <div
          class="mx-2 lg:m-6 rounded lg:mx-12 p-4 lg:p-8"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
        >
          <contact-form />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from "../components/contactForm.vue";
export default {
  name: "Contact",
  head: {
    title: "Contact Us | Bhawani Industries Jodhpur",

    // Meta tags
    meta: [
      { name: "description", content: "", id: "desc" }
      // ...
    ]
  },
  components: { ContactForm }
};
</script>
