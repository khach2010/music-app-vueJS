<template>
        <!-- Registration Form -->
          <div class="text-center text-white font-bold p-5 mb-4" v-if="reg_show_alert" :class="reg_alert_variant">
            {{reg_alert_msg}}
          </div>
          <vee-form :validation-schema="schema" @submit="register" :initial-values="userData">
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <vee-field type="text" name="name"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Name" />
                <ErrorMessage name="name" class="text-red-600" />
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <vee-field type="email" name="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" />
                <ErrorMessage name="email" class="text-red-600" />
            </div>
            <!-- Age -->
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <vee-field type="number" name="age"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded" />
                  <ErrorMessage name="age" class="text-red-600" />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <vee-field type="password" name="password" :bails="false"
              v-slot="{field, errors}">
                  <input type="password" v-bind="field" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300
                  transition duration-500 focus:outline-none
                  focus:border-black rounded"
                placeholder="Password" />
                <div class="text-red-600" v-for="error in errors" :key="error">
                   {{error}}
                </div>
                </vee-field>
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <vee-field type="password" name="comfirm_password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password" />
                 <ErrorMessage name="comfirm_password" class="text-red-600" />
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label class="inline-block mb-2">Country</label>
              <vee-field as="select" name="country"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded">
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
                <option value="Antarcica">Antarcica</option>
              </vee-field>
              <ErrorMessage name="country" class="text-red-600" />
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <vee-field type="checkbox" name="tos" value="1"
              class="w-4 h-4 float-left -ml-6 mt-1 rounded" />
              <label class="inline-block">Accept terms of service</label>
               <ErrorMessage name="tos" class="text-red-600" />
            </div>
            <button type="submit" :disabled="reg_in_submission"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700">
              Submit
            </button>
          </vee-form>
</template>

<script>
export default {
  name: 'RegeisterForm',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        age: 'required|min_value:18|max_value: 100',
        password: 'required|min:3|max:100',
        comfirm_password: 'passwords_mismatch:@password',
        country: 'required|country_excluded:Antarcica',
        tos: 'tos',
      },
      userData: {
        country: 'USA',
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'Please wait! Your account is being created.',
    };
  },
  methods: {
    register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = 'bg-blue-500';
      this.reg_alert_msg = 'Please wait! Your account is being created.';

      this.reg_alert_variant = 'bg-green-500';
      this.reg_alert_msg = 'Success! Your account has been created';
      console.log(values);
    },
  },
};
</script>
