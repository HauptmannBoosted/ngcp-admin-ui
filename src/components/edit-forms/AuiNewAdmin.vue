<template>
    <aui-base-form>
        <slot
            name="actions"
            :loading="loading"
            :has-unsaved-data="hasUnsavedData"
            :has-invalid-data="hasInvalidData"
            :reset="reset"
            :submit="submit"
        />
        <q-banner
            v-if="error"
            dense
            inline-actions
            class="text-white bg-negative q-mb-lg"
            transition-show="fade"
            transition-hide="fade"
        >
            {{ errorMessage }}
            <template
                v-slot:avatar
            >
                <q-icon
                    name="error"
                    color="white"
                />
            </template>
        </q-banner>
        <div
            class="row q-col-gutter-x-xl"
        >
            <div
                class="col-xs-12 col-md-5 col-lg-5"
            >
                <q-list
                    dense
                >
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.reseller_id') ||
                            $aclCan('update', 'entity.admins.columns.reseller_id', getInitialData, user)"
                    >
                        <q-item-section>
                            <aui-select-reseller
                                v-model="formData.reseller_id"
                                dense
                                class="aui-required"
                                :initial-option="initialResellerOption"
                                :disable="loading"
                                :error="$v.formData.reseller_id && $v.formData.reseller_id.$error"
                                :error-message="$errMsg($v.formData.reseller_id)"
                            >
                                <template
                                    #after
                                >
                                    <aui-create-reseller-button
                                        :form-data="formData"
                                    />
                                </template>
                            </aui-select-reseller>
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.login') ||
                            $aclCan('update', 'entity.admins.columns.login', getInitialData, user)"
                    >
                        <q-item-section>
                            <q-input
                                v-model.trim="formData.login"
                                clearable
                                dense
                                class="aui-required"
                                :label="$t('Login')"
                                data-cy="login-field"
                                autocomplete="none"
                                :disable="loading"
                                :error="$v.formData.login && $v.formData.login.$error"
                                :error-message="$errMsg($v.formData.login)"
                                @blur="$v.formData.login.$touch()"
                                @keyup.enter="submit"
                            >
                                <template
                                    v-slot:prepend
                                >
                                    <q-icon
                                        name="fas fa-user-cog"
                                    />
                                </template>
                            </q-input>
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.email') ||
                            $aclCan('update', 'entity.admins.columns.email', getInitialData, user)"
                    >
                        <q-item-section>
                            <q-input
                                v-model.trim="formData.email"
                                clearable
                                dense
                                :label="$t('Email')"
                                data-cy="email-field"
                                autocomplete="none"
                                :disable="loading"
                                :error="$v.formData.email && $v.formData.email.$error"
                                :error-message="$errMsg($v.formData.email)"
                                @blur="$v.formData.email.$touch()"
                                @keyup.enter="submit"
                            >
                                <template
                                    v-slot:prepend
                                >
                                    <q-icon
                                        name="email"
                                    />
                                </template>
                            </q-input>
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.role') ||
                            $aclCan('update', 'entity.admins.columns.role', getInitialData, user)"
                    >
                        <q-item-section>
                            <q-select
                                v-model="formData.role"
                                :options="adminRolesList"
                                emit-value
                                map-options
                                dense
                                class="aui-required"
                                :label="$t('Role')"
                                data-cy="roles-list"
                                :disable="loading"
                                :error="$v.formData.role && $v.formData.role.$error"
                                :error-message="$errMsg($v.formData.role)"
                            >
                                <template
                                    v-slot:prepend
                                >
                                    <q-icon
                                        name="fas fa-user-shield"
                                    />
                                </template>
                            </q-select>
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-if="enablePassword && passwordPermissions"
                    >
                        <q-item-section>
                            <aui-input-scored-password
                                v-model.trim="formData.password"
                                dense
                                clearable
                                autocomplete="new-password"
                                class="aui-required"
                                :label="$t('Password')"
                                data-cy="password-field"
                                :disable="loading"
                                :error="$v.formData.password && $v.formData.password.$error"
                                :error-message="$errMsg($v.formData.password)"
                                @blur="$v.formData.password.$touch()"
                                @score="strengthMeterScoreUpdate"
                                @keyup.enter="submit"
                            />
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-if="enablePassword && passwordPermissions"
                        class="q-mb-lg"
                    >
                        <q-item-section>
                            <q-input
                                ref="passwordRetypeInput"
                                v-model.trim="passwordRetype"
                                clearable
                                icon="lock"
                                dense
                                class="aui-required"
                                :label="$t('Password Retype')"
                                data-cy="password-retype-field"
                                type="password"
                                autocomplete="new-password"
                                :disable="loading"
                                :error="$v.passwordRetype && $v.passwordRetype.$error"
                                :error-message="$errMsg($v.passwordRetype)"
                                @blur="$v.passwordRetype.$touch()"
                                @keyup.enter="submit"
                            >
                                <template v-slot:prepend>
                                    <q-icon name="lock" />
                                </template>
                            </q-input>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
            <div
                class="col-xs-12 col-md-3 col-lg-3"
            >
                <q-list>
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.is_master') ||
                            $aclCan('update', 'entity.admins.columns.is_master', getInitialData, user)"
                    >
                        <q-item-section>
                            <q-toggle
                                v-model="formData.is_master"
                                dense
                                :label="$t('Master')"
                                data-cy="master-flag"
                                :disable="loading"
                            />
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.is_active') ||
                            $aclCan('update', 'entity.admins.columns.is_active', getInitialData, user)"
                    >
                        <q-item-section>
                            <q-toggle
                                v-model="formData.is_active"
                                dense
                                :label="$t('Active')"
                                data-cy="active-flag"
                                :disable="loading"
                            />
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.read_only') ||
                            $aclCan('update', 'entity.admins.columns.read_only', getInitialData, user)"
                    >
                        <q-item-section>
                            <q-toggle
                                v-model="formData.read_only"
                                dense
                                :label="$t('Read Only')"
                                data-cy="readonly-flag"
                                :disable="loading"
                            />
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.show_passwords') ||
                            $aclCan('update', 'entity.admins.columns.show_passwords', getInitialData, user)"
                    >
                        <q-item-section>
                            <q-toggle
                                v-model="formData.show_passwords"
                                dense
                                :label="$t('Show Passwords')"
                                data-cy="show-password-flag"
                                :disable="loading"
                            />
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
            <div
                class="col-xs-12 col-md-4 col-lg-4"
            >
                <q-list>
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.can_reset_password') ||
                            $aclCan('update', 'entity.admins.columns.can_reset_password', getInitialData, user)"
                    >
                        <q-item-section>
                            <q-toggle
                                v-model="formData.can_reset_password"
                                dense
                                :label="$t('Can Reset Password')"
                                data-cy="can-reset-password-flag"
                                :disable="loading"
                            />
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.call_data') ||
                            $aclCan('update', 'entity.admins.columns.call_data', getInitialData, user)"
                    >
                        <q-item-section>
                            <q-toggle
                                v-model="formData.call_data"
                                dense
                                :label="$t('Show CDRs')"
                                data-cy="show-cdrs-flag"
                                :disable="loading"
                            />
                        </q-item-section>
                    </q-item>
                    <q-item
                        v-if="$aclCan('update', 'entity.admins.columns.billing_data') ||
                            $aclCan('update', 'entity.admins.columns.billing_data', getInitialData, user)"
                    >
                        <q-item-section>
                            <q-toggle
                                v-model="formData.billing_data"
                                dense
                                :label="$t('Show Billing Info')"
                                data-cy="show-billing-info-flag"
                                :disable="loading"
                            />
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </aui-base-form>
</template>

<script>
import {
    required,
    email
} from 'vuelidate/lib/validators'
import AuiSelectReseller from 'src/components/AuiSelectReseller'
import { mapState, mapGetters } from 'vuex'
import AuiInputScoredPassword from 'components/input/AuiInputScoredPassword'
import AuiBaseForm from 'components/edit-forms/AuiBaseForm'
import baseFormMixin from 'src/mixins/base-form'
import AuiCreateResellerButton from 'components/buttons/AuiCreateResellerButton'

export default {
    name: 'AuiNewAdmin',
    components: {
        AuiCreateResellerButton,
        AuiBaseForm,
        AuiInputScoredPassword,
        AuiSelectReseller
    },
    mixins: [baseFormMixin],
    props: {
        reseller: {
            type: Object,
            default: null
        },
        enablePassword: {
            type: Boolean,
            default: true
        },
        error: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: ''
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            passwordStrengthScore: null,
            passwordRetype: ''
        }
    },
    validations () {
        const formData = {}
        const validations = {
            formData: formData
        }
        const fields = {
            reseller_id: {
                required
            },
            login: {
                required
            },
            email: {
                email
            },
            role: {
                required
            }
        }
        Object.keys(fields).forEach((field) => {
            if (this.$aclCan('update', 'entity.admins.columns.' + field)) {
                formData[field] = fields[field]
            }
        })
        if (this.enablePassword && this.passwordPermissions) {
            formData.password = {
                required,
                passwordStrength () {
                    return this.passwordStrengthScore >= 2
                }
            }
            validations.passwordRetype = {
                required,
                sameAsPassword (val) {
                    return val === this.formData.password
                }
            }
        }
        return validations
    },
    computed: {
        ...mapState('user', [
            'user'
        ]),
        ...mapGetters('administrators', [
            'adminRolesList'
        ]),
        initialResellerOption () {
            if (this.reseller) {
                return {
                    label: this.reseller.name,
                    value: this.reseller.id
                }
            }
            return null
        },
        passwordPermissions () {
            if (this.getInitialData?.id) {
                return this.$aclCan('update', 'entity.admins.columns.password', this.getInitialData, this.user)
            } else {
                return this.$aclCan('create', 'entity.admins.columns.password')
            }
        },
        getInitialData () {
            if (this.initialFormData) {
                return {
                    reseller_id: this.initialFormData.reseller_id,
                    login: this.initialFormData.login,
                    email: this.initialFormData.email,
                    is_active: this.initialFormData.is_active,
                    role: this.initialFormData.role,
                    call_data: this.initialFormData.call_data,
                    read_only: this.initialFormData.read_only,
                    billing_data: this.initialFormData.billing_data,
                    show_passwords: this.initialFormData.show_passwords,
                    is_master: this.initialFormData.is_master,
                    can_reset_password: this.initialFormData.can_reset_password
                }
            } else {
                const conditionalData = {}
                if (this.enablePassword) {
                    conditionalData.password = ''
                }
                return {
                    reseller_id: null,
                    login: '',
                    email: '',
                    is_active: true,
                    role: 'admin',
                    call_data: true,
                    read_only: false,
                    billing_data: true,
                    show_passwords: true,
                    is_master: false,
                    can_reset_password: false,
                    ...conditionalData
                }
            }
        }
    },
    methods: {
        strengthMeterScoreUpdate (score) {
            this.passwordStrengthScore = score
        },
        prepareSubmitData (submitData) {
            if (submitData.email === '') {
                submitData.email = null
            }
            return submitData
        }
    }
}
</script>
