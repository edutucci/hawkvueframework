<template>
  <dir></dir>
</template>

<script>
export default {
  name: 'HInputBase',
  props: {
    floatLabel: {
      type: String,
      default: ''
    },
    staticLabel: {
      type: String,
      default: ''
    },
    errorLabel: {
      type: String
    },
    helperText: {
      type: String
    },
    textCounter: {
      type: Number,
      default: 0
    },
    textCenter: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      default: 9999
    },
    outlined: {
      type: Boolean,
      default: false
    },
    filled: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    cleartext: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    type: function (value) {
      console.log('type value: ', value)
      if (value === 'text' || value === 'password') {
        this.inputtype = value
      } else {
        this.inputtype = 'text'
      }
    }
  },
  data () {
    return {
      primary: false,
      nofocus: true,
      // staticLabelStyle: {
      //   fontSize: '12px',
      //   position: 'relative'
      // },
      // floatLabelStyle: {
      //   position: 'absolute',
      //   top: '2px',
      //   left: '9px',
      //   fontSize: '12px',
      //   zIndex: '2'
      // },
      inputDisplay: '',
      inputtype: 'text'
    }
  },
  methods: {
    // onInputFocus () {
    //   this.focused = true
    //   this.floatLabelStyle.top = '2px'
    //   this.floatLabelStyle.left = '9px'
    //   this.floatLabelStyle.fontSize = '12px'

    //   if (this.rounded) {
    //     this.floatLabelStyle.left = '22px'
    //   }

    //   this.primary = true
    //   this.nofocus = false

    //   this.$emit('focus')
    // },
    // onInputBlur () {
    //   this.focused = false
    //   this.primary = false
    //   this.nofocus = true
    //   this.changeFloatLabelStyle()
    //   this.$emit('blur')
    // },
    // changeFloatLabelStyle () {
    //   if (this.floatLabel && ((this.value && this.value.length) || (this.placeholder && this.placeholder.length))) {
    //     this.floatLabelStyle.top = '2px'
    //     this.floatLabelStyle.left = '9px'
    //     this.floatLabelStyle.fontSize = '12px'
    //   } else {
    //     this.floatLabelStyle.top = '20px'
    //     this.floatLabelStyle.left = '9px'
    //     this.floatLabelStyle.fontSize = '16px'
    //   }

    //   if (this.rounded) {
    //     this.floatLabelStyle.left = '22px'
    //   }
    // },
    // onChange (value) {
    //   let txtValue = ''
    //   if (value === undefined && this.value) {
    //     txtValue = this.value
    //   } else {
    //     txtValue = value
    //   }
    //   this.inputDisplay = txtValue
    //   this.$emit('change', txtValue)
    // },
    // onClick () {
    //   this.focused = true
    //   this.$emit('click')
    // },
    // onInputIconClick () {
    //   if (this.type === 'password') {
    //     this.inputtype = (this.inputtype === 'password') ? 'text' : 'password'
    //   } else if (this.cleartext) {
    //     this.inputDisplay = ''
    //     this.onInputFocus()
    //   }
    // },
    // onInputRightIconClick () {
    //   this.focused = true
    //   this.$emit('rightIconClick')
    // }
  }
}
</script>
