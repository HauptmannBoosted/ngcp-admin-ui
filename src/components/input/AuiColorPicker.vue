<template>
    <q-input
        v-model="color"
        dense
        clearable
        :label="label"
        :error="$v.color.$error"
        :error-message="$t('Please add a valid color (hex, hexa, rgb or rgba)')"
        @input="$v.$touch()"
        @clear="deleteColor"
    >
        <template v-slot:prepend>
            <div
                v-if="color && colorPreview.length > 0"
                class="aui-color-picker-preview"
                :style="colorPreview"
            />
        </template>
        <template v-slot:append>
            <q-icon
                name="colorize"
                class="cursor-pointer"
            >
                <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                >
                    <q-color
                        v-model="color"
                        format-model="rgba"
                        @change="emitInput"
                    />
                </q-popup-proxy>
            </q-icon>
        </template>
    </q-input>
</template>

<script>
import { isColor } from 'src/validators/common'
export default {
    name: 'AuiColorPicker',
    props: {
        value: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: null
        }
    },
    data () {
        return {
            color: null
        }
    },
    validations: {
        color: {
            isColor
        }
    },
    computed: {
        colorPreview () {
            return isColor(this.color) ? 'background:' + this.color : ''
        }
    },
    watch: {
        value (val) {
            this.color = val
        }
    },
    mounted () {
        this.color = this.value
    },
    methods: {
        deleteColor () {
            this.color = null
            this.emitInput()
        },
        emitInput () {
            this.$emit('input', this.color)
        }
    }
}
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
.aui-color-picker-preview
    width: 20px
    height: 20px
</style>
