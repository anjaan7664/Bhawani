<template>
  <div class="Team">
    <section class="text-center">
      <h1
        class="mx-auto font-Merriweather text-3xl lg:text-4xl border-primary border-b-4 w-auto inline-block align-middle mb-6  "
      >
        {{ $t("team.expert") }}
      </h1>

      <div class="flex flex-wrap">
        <div
          v-for="owner in owners"
          :key="owner.image"
          class="w-full lg:w-1/3 text-center"
        >
          <div
            class="mx-5 my-5 rounded-md transition duration-300 ease-in-out transform shadow-2xl xl:hover:-translate-y-3"
          >
            <div class="relative">
              <a v-if="owner.insta != ''" :href="owner.insta" target="_blank">
                <img
                  class="absolute ml-auto mr-auto bottom-0 m-3 h-8 left-0 right-0"
                  src="../assets/images/svg/insta.svg"
                  alt="insta svg"
              /></a>

              <a v-if="owner.number != ''" :href="'tel:' + owner.number">
                <img
                  class="absolute left-0 bottom-0 m-3 h-8"
                  src="../assets/images/svg/mobile.svg"
                  alt="mobile svg"
              /></a>
              <a v-if="owner.fb != ''" :href="owner.fb" target="_blank">
                <img
                  class="absolute right-0 bottom-0 m-3 h-8"
                  src="../assets/images/svg/fb.webp"
                  alt="fb svg"
              /></a>
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
      <div class="flex flex-wrap">
        <div
          v-for="member in members"
          :key="member.image"
          class="w-full lg:w-1/4 text-center"
        >
          <div
            class="mx-5 my-5 rounded-md transition duration-300 ease-in-out transform shadow-2xl xl:hover:-translate-y-3"
          >
            <div class="relative">
              <a v-if="member.fb != ''" :href="member.fb" target="_blank">
                <img
                  class="absolute right-0 bottom-0 m-3 h-8"
                  src="../assets/images/svg/fb.webp"
                  alt="fb svg"
              /></a>
              <a v-if="member.insta != ''" :href="member.insta" target="_blank">
                <img
                  class="absolute ml-auto mr-auto bottom-0 m-3 h-8 left-0 right-0"
                  src="../assets/images/svg/insta.svg"
                  alt="instagram svg"
              /></a>
              <a v-if="member.number != ''" :href="'tel:' + member.number">
                <img
                  class="absolute left-0 bottom-0 m-3 h-8"
                  src="../assets/images/svg/mobile.svg"
                  alt="mobile svg"
              /></a>

              <img
                :src="member.image"
                :title="member.alt"
                :alt="member.alt"
                class="object-cover w-full rounded-md"
              />
            </div>
            <h1 class=" text-black text-3xl font-Lobster text-center">
              {{ $t(member.name) }}
            </h1>
            <h1 class="px-3 text-center text-primary font-Libre text-xl">
              {{ $t(member.post) }}
            </h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Team",
  head: {
    title: "Our Team | Bhawani Industries Jodhpur",

    // Meta tags
    meta: [
      { name: "description", content: "", id: "desc" }
      // ...
    ]
  },

  components: {},
  data() {
    return {
      owners: [
        {
          alt: "Dinesh Bhootra",
          image: require("../assets/images/employ/dinesh.webp"),
          name: "team.dinesh",
          post: "team.chairman",
          insta: "",
          fb: "",
          number: "+919829769596"
        },
        {
          alt: "Dilip Bhootra",
          image: require("../assets/images/employ/dilip.webp"),
          name: "team.dilip",
          post: "team.co_chairman",
          insta: "",
          fb: "https://www.facebook.com/dilip.bhootra.1",
          number: "+918003948349"
        },
        {
          alt: "Hitesh Bhootra",
          image: require("../assets/images/employ/hitesh.webp"),
          name: "team.hitesh",
          post: "team.co_chairman",
          insta: "",
          fb: "https://www.facebook.com/marwadichokra.hitu",
          number: "+91730041005"
        }
      ],
      members: [
        {
          image: require("../assets/images/employ/employ4.webp"),
          alt: "Udaram Prajapat",
          number: "",
          name: "team.udaram",
          post: "team.accountant",
          fb: "",
          insta: ""
        },
        {
          image: require("../assets/images/employ/pawan.webp"),
          alt: "Pawan Sharma",
          number: "+919799182021",
          name: "team.pawan",
          post: "team.co_manager",
          fb: "https://www.facebook.com/pawansharmabangalore",
          insta: ""
        },
        {
          image: require("../assets/images/employ/employ2.webp"),
          alt: "Jitendra Choudhary",
          number: "+919649613868",
          name: "team.jitu",
          post: "team.co_manager",
          fb: "https://www.facebook.com/jitendra.choudhary.3133",
          insta: "http://instagram.com/_u/pintusajatboy"
        },
        {
          image: require("../assets/images/employ/employ7.webp"),
          alt: "Tarun Sharma",
          number: "+918104448349",
          name: "team.tarun",
          post: "team.co_manager",
          fb: "https://www.facebook.com/100025300384965",
          insta: ""
        },
        {
          image: require("../assets/images/employ/employ1.webp"),
          alt: "Jhumarlal Bishnoi",
          number: "",
          name: "team.jhumar",
          post: "team.employ",
          fb: "",
          insta: ""
        },
        {
          image: require("../assets/images/employ/employ3.webp"),
          alt: "Mohammad Khan",
          number: "",
          name: "team.mohd",
          post: "team.employ",
          fb: "",
          insta: ""
        },
        {
          image: require("../assets/images/employ/employ5.webp"),
          alt: "Ganpat Sen",
          number: "",
          name: "team.ganpat",
          post: "team.employ",
          fb: "",
          insta: ""
        },
        {
          image: require("../assets/images/employ/employ6.webp"),
          alt: "Aba Khan",
          number: "",
          name: "team.aba",
          post: "team.employ",
          fb: "",
          insta: ""
        }
      ],
      isHovering: false
    };
  }
};
</script>
