<template lang="pug">
  .main-input-container(
    :class="[bgColor]"
  )
    .column
      .col.cursor-pointer
        .row
          .col-auto(v-if="leadingIcon && leadingIcon.length > 0")
            .row.justify-center.align-items-center.full-height
              .col-auto.h-ml-sm.h-mr-sm
                h-icon(:icon="leadingIcon" :text-color="iconColor")
          .col.position-relative(
          )
            .row
              .col(
                :class="[inputContainerFieldBackgroundColor, \
                  inputContainerFieldBottomBorderColor, \
                  {'border border-radius': !filled, \
                  'border-bottom border-top-radius': filled, 'border-2': filled, \
                  }]"
              )
                .column.full-height(
                  class="input-container"
                  :class="[{ 'dense': dense, 'outlined': !filled, 'filled': filled }]"
                )
                  .col-auto(
                    v-if="label && label.length > 0"
                    class="text-black"
                    :class="[{ }]"
                  )
                    .text-overline.text-bold.h-pr-xs.h-ml-md(
                      :class="[inputContainerFieldBackgroundColor, labelColor, \
                       { 'input-label-outlined': !filled, }]"
                       style="font-size: 10px;"
                    )
                      | {{label}}
                  .col.full-height
                    .row.align-items-center.full-height
                      .col.h-mr-sm.h-ml-sm.bg-yellow300(
                        :class="{ 'h-mt-xs': !filled }"
                      )
                        .row.align-items-center
                          .col(
                            :class="[{'input-margin-label-outlined': !filled}]"
                          )
                            slot
                      .col-auto
                        .row.justify-center.align-items-center.full-height(
                          :class="[{'input-margin-label-outlined': !filled}]"
                        )
                          .col-auto.input-icons-padding(v-if="errorMessage && errorMessage.length > 0")
                            h-icon(
                              :text-color="iconErrorTextColor"
                              icon="fas fa-exclamation-circle"
                            )
                          .col-auto.input-icons-padding(v-if="clearable")
                            h-icon(
                              :text-color="iconColor"
                              icon="fas fa-times-circle"
                              @click="onClearable"
                            )
                          .col-auto.input-icons-padding(v-if="type === 'password'")
                            h-icon(
                              :text-color="iconColor"
                              icon="fas fa-eye"
                              @click="onTogglePassword"
                            )
                          .col-auto.input-icons-padding(v-if="trailingIcon && trailingIcon.length > 0")
                              h-icon(
                                :icon="trailingIcon"
                                :text-color="iconColor"
                              )
                          .col-auto.input-icons-padding(v-if="inputDropdown")
                            h-icon(
                              :text-color="iconDropdownColor"
                              icon="fas fa-caret-down"
                            )
      .col
        .column.h-mt-xs(
          :class="[\
           { 'input-message-padding-no-icon': leadingIcon || leadingIcon.length === 0, \
             'input-message-padding-icon': leadingIcon && leadingIcon.length > 0 } ]"
        )
          .col
            .row
              .col-auto.text-caption(
                :class="[helperTextColor]"
                v-if="(helperText && helperText.length > 0 && (!errorMessage || (errorMessage && errorMessage.length === 0)))"
              )
                | {{helperText}}
              .col-space.text-right(
                :class="[helperTextColor]"
                v-if="inputCounter"
              )
                | {{inputTextCounter}}
          .col.text-caption(
            :class="[errorTextColor]"
            v-if="errorMessage && errorMessage.length > 0"
          )
            | {{errorMessage}}

</template>

<script>

import InputProperties from './InputProperties'

export default {
  extends: InputProperties,
  name: 'InputContainer',
  props: {
    focused: {
      type: Boolean,
      default: false
    },
    inputTextCounter: {
      type: String,
      default: ''
    },
    inputDropdown: {
      type: Boolean,
      default: false
    },
    labelColor: {
      type: String,
      default: 'text-black'
    },
    iconColor: {
      type: String,
      default: 'text-gray600'
    },
    iconDropdownColor: {
      type: String,
      default: 'text-primary'
    },
    helperTextColor: {
      type: String,
      default: 'text-gray600'
    },
    errorTextColor: {
      type: String,
      default: 'text-red800'
    },
    iconErrorTextColor: {
      type: String,
      default: 'text-red600'
    },
    inputContainerFieldBackgroundColor: {
      type: String,
      default: 'bg-gray'
    },
    inputContainerFieldBottomBorderColor: {
      type: String,
      default: 'bg-gray'
    }
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    onClearable () {
      this.$emit('onClearable')
    },
    onTogglePassword () {
      this.$emit('onTogglePassword')
    },
    containerClick () {
      console.log('container click')
      // @click="checkViewport"
    }
  }
}
</script>

<style scoped>

</style>
