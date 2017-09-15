<template>
  <label :class="className"
         :style="style"
         role="checkbox">
    <input type="checkbox"
           class="v-switch-input"
           @change.stop="toggle">
    <span class="v-switch-core"
          :style="coreStyle"
          :aria-checked="ariaChecked"></span>
    <div v-if="labels">
      <span class="v-switch-label v-left" v-if="toggled">{{labelChecked}}</span>
      <span class="v-switch-label v-right" v-else>{{labelUnchecked}}</span>
    </div>
  </label>
</template>

<script>
  const DEF_CHECKED_COLOR = '#75C791'
  const DEF_UNCHEKED_COLOR = '#bfcbd9'

  const DEF_CHECKED_LABEL = '是'
  const DEF_UNCHECKED_LABEL = '否'

  const margin = 3

  const contains = (object, title) => {
    return typeof object === 'object' && object.hasOwnProperty(title)
  }

  export default {
    name: 'ToggleButton',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      sync: {
        type: Boolean,
        default: false
      },
      color: {
        type: [String, Object],
        validator (value) {
          return typeof value === 'object'
            ? (value.checked || value.unchecked)
            : typeof value === 'string'
        }
      },
      labels: {
        type: [Boolean, Object],
        default: false,
        validator (value) {
          return typeof value === 'object'
            ? (value.checked || value.unchecked)
            : typeof value === 'boolean'
        }
      },
      height: {
        type: Number,
        default: 22
      },
      width: {
        type: Number,
        default: 50
      }
    },
    computed: {
      className () {
        let { toggled, disabled } = this;

        return [
          'v-switch',
          { toggled, disabled }
        ]
      },

      ariaChecked () {
        return this.toggled.toString()
      },

      style () {
        let { width, height } = this
        let distance = width - height + margin

        return {
          '--h': height + 'px',
          '--w': width + 'px',
          '--d': distance + 'px'
        }
      },

      colorChecked () {
        if (typeof this.color !== 'object') {
          return this.color || DEF_CHECKED_COLOR
        }

        return contains(this.color, 'checked')
          ? this.color.checked
          : DEF_CHECKED_COLOR
      },

      colorUnchecked () {
        return contains(this.color, 'unchecked')
          ? this.color.unchecked
          : DEF_UNCHEKED_COLOR
      },

      colorCurrent () {
        return this.toggled ? this.colorChecked : this.colorUnchecked
      },

      labelChecked () {
        return contains(this.labels, 'checked')
          ? this.labels.checked
          : DEF_CHECKED_LABEL
      },

      labelUnchecked () {
        return contains(this.labels, 'unchecked') ? this.labels.unchecked : DEF_UNCHECKED_LABEL
      },

      coreStyle () {
        return {
          'background-color': this.colorCurrent
        }
      }
    },
    watch: {
      value (value) {
        if (this.sync) {
          this.toggled = value
        }
      }
    },
    data () {
      return {
        toggled: this.value
      }
    },
    methods: {
      toggle (event) {
        this.toggled = !this.toggled
        this.$emit('change', { value: this.toggled, srcEvent: event })
      }
    }
  }
</script>

<style>
  .v-switch {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    user-select: none;
    font-size: 12px;
    cursor: pointer;
  }
  .v-switch .v-switch-label, .v-switch {
    line-height: 22px;
    height: 22px;
  }
  .v-switch .v-switch-input {
    display: none;
  }
  .v-switch .v-switch-label {
    position: absolute;
    top: 0;
    font-weight: 600;
    color: white;
  }
  .v-switch .v-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    outline: 0;
    box-sizing: border-box;
    transition: border-color .3s, background-color .3s;
    user-select: none;
  }

  .v-switch .v-switch-core:before {
    display: block;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 20;
    transform: translate(3px, 3px);
    transition: transform .3s;
    border-radius: 100%;
    background-color: #fff;
    content: '';
    width: 16px;
    height: 16px;
  }
  .v-switch .v-switch-core:before {
    width: calc(22px - 6px);
    height: calc(22px - 6px);
  }
  .v-switch .v-switch-label.v-right {
    right: 15px;
  }
  .v-switch .v-switch-label.v-left {
    left: 15px;
  }
  .v-switch.toggled .v-switch-core:before {
    transform: translate(30px,3px);
  }
  .v-switch .v-switch-core.toggled:before {
        transform: translate(30px, 3px);
  }
  .v-switch .v-switch-core.disabled {
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.6;
    }
  .v-switch .v-switch-label {
      line-height: 22px;
      height: 22px;
    }

  .v-switch .v-switch-core {
    border-radius: 999px;
    width: 50px;
    height: 22px;
  }
  .v-switch.v-switch-core:before {
    width: calc(22px - 6px);
    height: calc(22px - 6px);
  }
</style>
