<template>
  <div class="bg-blue-600 w-full">
    <div
      class="h-screen bg-blue-600 flex justify-center content-center flex-wrap"
    >
      <p class="font-sans text-white error-text">404</p>
    </div>

    <div
      class="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl"
    >
      <span class="opacity-50">Take me back to</span>
      <NuxtLink :to="localePath('/')" class="border-b">Bhawani Industries</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: "basic",
  head: {
    title: "404 Page not Found| Bhawani Industries Jodhpur",

    // Meta tags
    meta: [
      { name: "description", content: "A description of the page", id: "desc" } // id to replace intead of create element
      // ...
    ]
  },
  name: "NotFound"
};
</script>
<style>
.error-text {
  font-size: 130px;
}

@media (min-width: 768px) {
  .error-text {
    font-size: 220px;
  }
}
</style>
