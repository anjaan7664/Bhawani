<template>
  <header
    class="bg-white shadow-md top-0"
    style="z-index: 100; width:100%; position: fixed;"
  >
    <div
      class="font-sans antialiased max-size mx-auto text-black my-1 lg:my-0 md:mx-20 lg:mx-auto relative h-full"
    >
      <nav
        class="flex items-center justify-between flex-wrap relative lg:px-2 md:p-0 sm:py-2 lg:pb-0"
      >
        <NuxtLink :to="localePath('/')" class="flex items-center ml-2 xl:mr-6">
          <img
            src="../assets/images/bhwni.webp"
            alt="Bhawani Industries logo"
            class="h-12 xsm:h-16 lg:h-20 "
          />
        </NuxtLink>
        
        <div class="block lg:hidden ">
          <button
            @click="toggle"
            class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light  mr-1 sm:mr-3"
          >
            <svg
              class="fill-current w-6 h-6 "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul
          :class="open ? 'block' : 'hidden'"
          class="nav-list lg:flex lg:flex-row flex flex-col w-full lg:w-auto pt-4 lg:pt-0"
        >
          <li class="relative" @click="toggle">
            <NuxtLink
              class="NuxtLink block px-6 py-3 lg:py-8 font-Poppins lg:hover:bg-primary lg:hover:text-white"
              :to="localePath('/')"
              >{{ $t("nav.home") }}</NuxtLink
            >
          </li>

          <li class="relative nav-bar">
            <NuxtLink
              class="NuxtLink lg:hover:bg-primary lg:hover:text-white block px-6 dropdown py-3 lg:py-8 font-Poppins"
              to=""
              >{{ $t("nav.about_us") }}</NuxtLink
            >
            <ul
              class="nav-child lg:absolute z-10 lg:shadow-md bg-gray-300 lg:bg-white hidden border px-6 transition duration-300 lg:w-full"
            >
              <li class="" @click="toggle">
                <NuxtLink
                  class=" block py-2 w-full lg:hover:pl-4 hover:text-primary"
                  :to="localePath('/Gallery')"
                  >{{ $t("nav.gallery") }}</NuxtLink
                >
              </li>
              <li class="" @click="toggle">
                <NuxtLink
                  class=" block py-2 w-full lg:hover:pl-4 hover:text-primary"
                  :to="localePath('/About')"
                  >{{ $t("nav.about_us") }}</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li class="relative" @click="toggle">
            <NuxtLink
              class="NuxtLink block px-6 py-3 lg:py-8 font-Poppins  lg:hover:bg-primary lg:hover:text-white"
              :to="localePath('/Products')"
              >{{ $t("nav.products") }}</NuxtLink
            >
          </li>
          <li class="relative nav-bar">
            <NuxtLink
              class="NuxtLink block px-6 dropdown py-3 lg:py-8 font-Poppins  lg:hover:bg-primary lg:hover:text-white"
              to=""
              >{{ $t("nav.contact_us") }}</NuxtLink
            >
            <ul
              class="nav-child lg:absolute z-10 lg:shadow-md bg-gray-300 lg:bg-white hidden lg:border px-6 transition duration-300 lg:w-full"
            >
              <li class="nav-dropdown" @click="toggle">
                <NuxtLink
                  class="block py-2 w-full lg:hover:pl-4 hover:text-primary"
                  :to="localePath('/Team')"
                  >{{ $t("nav.our_team") }}</NuxtLink
                >
              </li>
              <li class="" @click="toggle">
                <NuxtLink
                  class="block py-2 w-full lg:hover:pl-4 hover:text-primary "
                  :to="localePath('/Contact')"
                  >{{ $t("nav.office") }}</NuxtLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "theHeader",
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>
<style lang="scss">
li {
  float: left;
}

.NuxtLink {
  &:hover {
    @apply transition duration-300;
    .nav-dropdown {
      display: block;
    }
  }
  &:not(:only-child):after {
    padding-left: 4px;
    content: " ▾";
  }
}

.nav-bar:hover .nav-child {
  @apply flex flex-col;
}
#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: black;
    position: absolute;
    display: block;
    content: "";
    transition: all 300ms ease-in-out;
  }
  span:before {
    top: -10px;
  }
  span:after {
    bottom: -10px;
  }
  &.active span {
    background-color: transparent;
    &:before,
    &:after {
      top: 0;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  .nav-mobile {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    height: 16px;
    width: 16px;
  }
}
</style>
