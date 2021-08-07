import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as MinVal,
  max_value as MaxVal,
  confirmed,
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', MinVal)
    defineRule('max_value', MaxVal)
    defineRule('confirmed', confirmed)
  },
}
