<template>
  <div>
    <h1
      class="mx-auto font-Merriweather text-4xl border-primary border-b-4 w-auto inline-block align-middle my-6"
    >
      {{ $t("footer.contact_us") }}
    </h1>
    <form ref="cntf" accept-charset="UTF-8" v-on:submit.prevent="onSubmit()">
      <div class="mt-2">
        <input
          type="email"
          v-model="email"
          class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required="required"
        />
      </div>
      <div class="mt-2">
        <input
          type="text"
          v-model="name"
          class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          id="exampleInputName"
          :placeholder="$t('form.name')"
          required="required"
        />
      </div>
      <div class="mt-2">
        <textarea
          v-model="msgContent"
          :placeholder="$t('form.message')"
          id="exampleInputmsg"
          class="w-full h-12 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          required="required"
        ></textarea>
      </div>

      <my-captcha class="w-full m-auto my-2" :callSuccess="captchaBtn" resolve="text"></my-captcha>
      <button
        type="submit"
        class="uppercase h-16 text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline transition duration-300 hover:bg-red"
      >
        {{ $t("form.send_message") }}
      </button>
    </form>
  </div>
</template>

<script>

export default {
  name: "contactForm",
  components: {
  },
  data() {
    return {
      message: "",
      loading: true,
      name: "",
      email: "",
      msgContent: "",
      isSuccess: false,
      verify: false,
      btndis: false
    };
  },

  methods: {
   
    captchaBtn() {
      this.btndis = true;
    },
   
    onSubmit() {
      let data = {
        name: this.name,
        email: this.email,
        msgContent: this.msgContent
      };
      if (this.btndis) {
        this.$axios
          .post("https://bhawaniind.com/api/mail.php", data, {
            headers: {
              Accept: "application/json"
            }
          })
          .then(response => {
            this.$swal(
              "Your Message has Sent",
              "We will contact you soon!",
              "success"
            );
            this.$refs.cntf.reset();
          })
          .catch(err => {
            this.$swal("Something Went Wrong.", "Try Again", "error");
          });
      } else {
        this.$swal("Please Verify You're not a robot", "Try Again", "error");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.form {
  margin: 10px;
}
.row {
  margin: 10px;
}
</style>
