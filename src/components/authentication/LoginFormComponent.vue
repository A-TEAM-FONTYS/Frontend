<template>
  <div>
    <form @submit.prevent="submit">
      <div class="flex flex-col mb-6">
        <span class="uppercase text-sm text-gray-400 font-light">email</span>
        <div
          class="flex items-center border-b border-b-2 border-gray pt-2 pb-1 w-full"
          :class="{ hasError: $v.form.email.$error }"
        >
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"
            type="text"
            placeholder="Email"
            aria-label="Email"
            v-model="form.email"
          />
        </div>
        <div class="text-sm text-red-400" v-if="$v.$error">
          <div v-if="!$v.form.email.required">Email is required</div>
        </div>
        <div class="text-sm text-red-400" v-if="!$v.form.email.email">
          Please enter a valid email address
        </div>
      </div>
      <div class="flex flex-col mb-12">
        <span class="uppercase text-sm text-gray-400 font-light">password</span>
        <div
          class="flex items-center border-b border-b-2 border-gray pt-2 pb-1 w-full"
          :class="{ hasError: $v.form.password.$error }"
        >
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none"
            :type="passwordShow ? 'text' : 'password'"
            placeholder="Password"
            aria-label="Password"
            v-model="form.password"
          />
          <Icon
            :name="passwordShow ? 'eye-off' : 'eye'"
            :width="22"
            class="text-sunglow hover:text-white mr-2"
            @click.native="passwordShow = !passwordShow"
          />
        </div>
        <div class="text-sm text-red-400" v-if="$v.$error">
          <div v-if="!$v.form.password.required">Password is required</div>
        </div>
      </div>
      <div
        class="flex items-center justify-between w-full pb-4 border-b border-b-1 border-gray"
      >
        <button
          class="bg-limed-spruce hover:bg-outer-space rounded-lg text-white py-3 px-4 w-full uppercase tracking-wide text-xs font-bold"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import Icon from '@/components/base/IconComponent.vue'
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      passwordShow: false
    }
  },
  components: { Icon },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  computed: {
    ...mapState('user', ['error'])
  },
  methods: {
    ...mapActions('user', ['login']),
    async submit() {
      this.$v.form.$touch()
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$pending || this.$v.form.$error) return
      // to form submit after this
      const user = {
        email: this.form.email,
        password: this.form.password
      }

      this.login(user).then(() => {
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="postcss" scoped></style>
