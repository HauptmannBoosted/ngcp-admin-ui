<template>
    <aui-base-add-page>
        <template
            #default="props"
        >
            <aui-new-contact
                :initial-form-data="props.initialFormData"
                :has-reseller="hasReseller"
                :loading="$waitPage()"
                @submit="create"
            >
                <template
                    #actions="{ loading, hasInvalidData, submit }"
                >
                    <aui-form-actions-creation
                        :loading="loading"
                        :has-invalid-data="hasInvalidData"
                        @submit="submit"
                    />
                </template>
            </aui-new-contact>
        </template>
    </aui-base-add-page>
</template>
<script>
import AuiNewContact from 'components/edit-forms/AuiNewContact'
import AuiBaseAddPage from 'pages/AuiBaseAddPage'
import { WAIT_PAGE } from 'src/constants'
import { showGlobalSuccessMessage } from 'src/helpers/ui'
import AuiFormActionsCreation from 'components/AuiFormActionsCreation'
import { mapWaitingActions } from 'vue-wait'
export default {
    name: 'AuiContactCreation',
    components: {
        AuiFormActionsCreation,
        AuiBaseAddPage,
        AuiNewContact
    },
    props: {
        hasReseller: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        ...mapWaitingActions('contact', {
            createCustomerContact: WAIT_PAGE,
            createSystemContact: WAIT_PAGE
        }),
        async create (data) {
            if (data.reseller_id) {
                await this.createCustomerContact(data)
            } else {
                await this.createSystemContact(data)
            }
            await this.$auiGoToPrevForm()
            showGlobalSuccessMessage(this.$t('Contact created successfully'))
        }
    }
}
</script>
