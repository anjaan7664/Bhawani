<template>
  <div class="home lg:mt-24">
    <h1
      class="text-3xl md:text-4xl lg:text-5xl text-center font-bold md:my-8 font-teko tracking-widest pt-3"
    >
      {{ $t("welcome") }}
    </h1>
    <section
      class="flex flex-wrap flex-row lg:flex-row-reverse w-full text-center lg:text-left mt-4"
    >
      <div class="lg:w-1/2 img-colarge">
        <div class="colarge-1">
          <img
            src="../assets/images/others/office.webp"
            alt=""
            class="h-auto relative max-w-full rounded-md my-anim"
            style="vertical-align: middle;"
          />
          <img
            src="../assets/images/factory.webp"
            alt=""
            class="h-auto absolute max-w-full rounded-md my-anim2 "
            style="vertical-align: middle;"
          />
        </div>
        <div class="since-year-outer font-teko text-3xl">
          <div class="since-year">
            <span class="text-4xl font-bold md:text-6xl">Since</span>
            <strong class="mt-0 text-4xl md:text-6xl px-5 lg:px-10 lg:py-4"
              >2007</strong
            >
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/2 lg:pl-4 lg:pr-20 my-2">
        <h1 class="main-heading text-4xl lg:text-5xl leading-tight">
          {{ $t("main_heading") }}
        </h1>
        <p
          class="lg:pr-24 text-lg lg:pt-3 font-Montserrat mt-8 mb-10 lg:mb-12 "
        >
          {{ $t("main_sub_heading") }}
        </p>
        <NuxtLink
          to="/About"
          class="font-Libre rounded secondary-gradient px-5 py-3 text-2xl font-normal text-white 
          mt-12 transition duration-500 ease-in-out hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 button-cta"
        >
          {{ $t("know_more") }}
        </NuxtLink>
      </div>
    </section>

    <!-- This is Section to telling why we are best  -->
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      class="text-center mt-8"
      flex
      flex-wrap
    >
      <h1
        class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-12"
      >
        {{ $t("showOff.why") }}
      </h1>
      <div class="flex flex-wrap">
        <div
          v-for="showOff in showOffs"
          :key="showOff.image"
          class="show-div w-full md:w-1/2 flex flex-wrap p-2 lg:mb-8 transition duration-300 ease-in-out transform md:hover:-translate-y-1 md:hover:scale-105 "
        >
          <div class="w-1/3 lg:w-1/4 text-center">
            <img
              :src="showOff.image"
              :title="showOff.alt"
              :alt="showOff.alt"
              class=" bg-secondary p-2 rounded mt-2 show-div-child h-auto w-32 sm:w-40 sm:h-40 md:w-48 md:h-auto lg:h-auto lg:w-full mx-auto"
            />
          </div>
          <div class="w-2/3 lg:w-3/4">
            <h1
              class="font-Libre text-accent text-left text-xl sm:text-2xl lg:text-3xl pl-3 md:leading-8 md:text-2xl lg:mt-3"
            >
              {{ $t(showOff.heading) }}
            </h1>
            <p
              class="leading-4 lg:leading-5 pl-3 lg:text-gray-700 text-xs  sm:text-lg lg:text-lg lg:pt-3 font-sans md:text-lg md:leading-6 sm:leading-5 text-justify"
            >
              {{ $t(showOff.paragraph) }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <div></div>
    <!-- Video From factory -->
    <section
      data-aos="zoom-in"
      data-aos-duration="1000"
      class="text-center my-10"
    >
      <h1
        class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-6  "
      >
        {{ $t("something_about_us") }}
      </h1>
      <div class="">
        <client-only>
        <iframe
          src="https://www.youtube.com/embed/wYEx-DyQgoU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full map-class"
        ></iframe>
        </client-only>
      </div>
    </section>
    <!-- This is section for showing Products  -->
    <section
      class="text-center mt-10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1
        class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-6  "
      >
        {{ $t("product.our_prod") }}
      </h1>
      <div class="flex flex-wrap md:flex-row">
        <NuxtLink
          :to="localePath('/products')"
          v-for="product in Products"
          :key="product.image"
          class="w-full md:w-1/3"
        >
          <div
            class="group text-center mx-1 my-3 lg:m-5 rounded-md shadow-2xl pb-6 transition duration-500 ease-in-out transform md:hover:-translate-y-1 md:hover:scale-110"
          >
            <img
              :src="product.image"
              :title="product.alt"
              :alt="product.alt"
              class="w-full"
            />
            <h3
              class="pt-3 px-3 text-left text-primary font-Montserrat font-bold"
            >
              {{ $t(product.heading) }}
            </h3>
            <p class="px-3 text-left font-Montserrat">
              {{ $t(product.paragraph) }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>
    <!-- Section for showing Machinery  -->
    <section class="text-center mt-10" data-aos="zoom-in" data-aos-duration="1000">
      <h1
        class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-6  "
      >
        {{ $t("machinery.our_machinery") }}
      </h1>
      <div class="rounded-md flex flex-wrap md:flex-row text-center">
        <NuxtLink
          :to="localePath('/Machinery')"
          v-for="machine in Machinery"
          :key="machine.image"
          class="w-full md:w-1/3"
        >
          <div
            class="group text-center mx-1 my-3 lg:m-5 pb-6 transition duration-500 ease-in-out transform shadow-2xl hover:shadow hover:scale-95"
          >
            <img
              :src="machine.image"
              :title="machine.alt"
              :alt="machine.alt"
              class="object-cover"
            />
            <h3 class="pt-3 px-3 text-primary font-Libre text-xl">
              {{ $t(machine.name) }}
            </h3>
          </div>
        </NuxtLink>
      </div>
    </section>
    <!-- This is Team Section  -->
    <section class="text-center mt-10" data-aos="zoom-in" data-aos-duration="1000">
      <h1
        class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle my-6"
      >
        {{ $t("team.meet") }}
      </h1>
      <div class="flex flex-wrap">
        <div
          to="/Team"
          v-for="owner in owners"
          :key="owner.image"
          class="w-full md:w-1/3 text-center"
        >
          <div
            class="mx-1 lg:mx-5 my-5 rounded-md transition duration-300 ease-in-out transform shadow-2xl md:hover:-translate-y-3"
          >
            <div class="relative meet-the-team">
              <!-- <div class="">
                <a v-if="owner.insta != ''" :href="owner.insta" target="_blank">
                  <img
                    class="absolute right-0 bottom-0 m-3 h-8"
                    src="../assets/images/svg/insta.svg"
                    alt=""
                /></a>
                <a v-if="owner.fb != ''" :href="owner.fb" target="_blank">
                  <img
                    class="absolute bottom-0 m-3 h-8"
                    src="../assets/images/svg/fb.webp"
                    alt=""
                /></a>
                <a :href="'tel:' + owner.number">
                  <img
                    class="absolute ml-auto mr-auto bottom-0 m-3 h-8 left-0 right-0"
                    src="../assets/images/svg/mobile.svg"
                    alt=""
                /></a>
              </div> -->
              <img
                :src="owner.image"
                :title="owner.alt"
                :alt="owner.alt"
                class="object-cover w-full rounded-md"
              />
            </div>
            <h1 class=" text-black text-3xl font-Lobster text-center">
              {{ $t(owner.name) }}
            </h1>
            <h1 class="px-3 text-center text-primary font-Libre text-xl">
              {{ $t(owner.post) }}
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- Group of Companies and Contact  -->
    <section class="text-center mt-10 flex flex-wrap ">
      <div
        class="w-full md:w-1/2 md:pl-16"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1
          class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle my-6"
        >
          {{ $t("company.group_of_companies") }}
        </h1>
        <div class="text-left md:text-center">
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            <span class="font-bold">{{ $t("firm.bhawani") }}</span
            >, {{ $t("firm.unja") }}
          </h2>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            <span class="font-bold"> {{ $t("firm.hitesh") }}</span
            >, {{ $t("firm.jodhpur") }},
          </h2>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            <span class="font-bold"> {{ $t("firm.bhootra") }}</span
            >, {{ $t("firm.jodhpur") }},
          </h2>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            <span class="font-bold"> {{ $t("firm.rr") }}</span
            >, {{ $t("firm.jodhpur") }},
          </h2>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            <span class="font-bold"> {{ $t("firm.ladli") }} </span>,
            {{ $t("firm.jodhpur") }},
          </h2>
        </div>
      </div>
      <div
        class="w-full md:w-1/2 text-center"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h1
          class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle my-6 text-center"
        >
          {{ $t("form.get_in_touch") }}
        </h1>

        <div class="border-8 md:w-2/3 rounded m-auto">
          <div class="p-3 mb-6 mx-auto">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              :placeholder="$t('form.name')"
            />
            <input
              class="appearance-none block w-full  h-20 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              :placeholder="$t('form.message')"
            />

            <div class="mt-8">
              <button
                class="uppercase text-sm font-bold tracking-wide primary-gradient text-gray-100 h-16 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline "
              >
                {{ $t("form.send_message") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showOffs: [
        {
          image: require("../assets/images/svg/factory.webp"),
          alt: "",
          heading: "showOff.1.heading",
          paragraph: "showOff.1.paragraph",
        },
        {
          image: require("../assets/images/svg/Transparency.webp"),
          alt: "",
          heading: "showOff.2.heading",
          paragraph: "showOff.2.paragraph",
        },
        {
          image: require("../assets/images/svg/Rigorous.webp"),
          alt: "",
          heading: "showOff.3.heading",
          paragraph: "showOff.3.paragraph",
        },
        {
          image: require("../assets/images/svg/Advanced.webp"),
          alt: "",
          heading: "showOff.4.heading",
          paragraph: "showOff.4.paragraph",
        },
        {
          image: require("../assets/images/svg/Premium.webp"),
          alt: "",
          heading: "showOff.5.heading",
          paragraph: "showOff.5.paragraph",
        },
        {
          image: require("../assets/images/svg/Certified.webp"),
          alt: "",
          heading: "showOff.6.heading",
          paragraph: "showOff.6.paragraph",
        },
      ],
      Products: [
        {
          image: require("../assets/images/products/dal.webp"),
          alt: "",
          heading: "product.1.name",
          paragraph: "product.1.paragraph",
        },
        {
          image: require("../assets/images/products/korma.webp"),
          alt: "",
          heading: "product.2.name",
          paragraph: "product.2.paragraph",
        },
        {
          image: require("../assets/images/products/churi.webp"),
          alt: "",
          heading: "product.3.name",
          paragraph: "product.3.paragraph",
        },
      ],
      owners: [
        {
          alt: "",
          image: require("../assets/images/employ/dinesh.webp"),
          name: "team.dinesh",
          post: "team.chairman",
          insta: "http://instagram.com/_u/anjaan7664/",
          fb: "",
          number: "+919829769596",
        },
        {
          alt: "",
          image: require("../assets/images/employ/dilip.webp"),
          name: "team.dilip",
          post: "team.co_chairman",
          insta: "",
          fb: "https://www.facebook.com/Anj7664",
          number: "+918003948349",
        },
        {
          alt: "",
          image: require("../assets/images/employ/hitesh.webp"),
          name: "team.hitesh",
          post: "team.co_chairman",
          insta: "",
          fb: "https://www.facebook.com/Anj7664",
          number: "+91730041005",
        },
      ],
      Machinery: [
        {
          image: require("../assets/images/machinery/jeera.webp"),
          alt: "",
          name: "machinery.1.name",
        },
        {
          image: require("../assets/images/machinery/guar2.webp"),
          alt: "",
          name: "machinery.2.name",
        },
        {
          image: require("../assets/images/machinery/store.webp"),
          alt: "",
          name: "machinery.3.name",
        },
      ],
      Companies: [
        { name: "Bhawani Trading, Unjha(Guj.)     " },
        { name: "Hitesh Industries, Jodhpur(Raj.) " },
        { name: "Bhootra Industries, Jodhpur(Raj.)" },
        { name: "R.R.& Company, Jodhpur(Raj.)     " },
        { name: "Ladli Spices, Jodhpur(Raj.)      " },
      ],
    };
  },
  components: {},

};
</script>
