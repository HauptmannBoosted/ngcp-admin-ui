<template>
    <aui-base-sub-context>
        <aui-data-table
            v-if="resourceObject"
            ref="table"
            row-key="id"
            table-id="subscriberregistrations"
            resource="subscriberregistrations"
            resource-base-path="subscriberregistrations"
            :resource-default-filters="() => ({
                subscriber_id: resourceObject.id
            })"
            resource-type="api"
            :resource-singular="$t('registered device')"
            title=""
            :columns="columns"
            :addable="true"
            :add-action-routes="[{ name: 'subscriberDetailsRegisteredDeviceCreation' }]"
            :searchable="false"
            :deletable="true"
            deletion-subject="id"
            :show-header="false"
        />
    </aui-base-sub-context>
</template>

<script>
import AuiBaseSubContext from 'pages/AuiBaseSubContext'
import AuiDataTable from 'components/AuiDataTable'
import dataTable from 'src/mixins/data-table-column'
import subContext from 'src/mixins/sub-context'
export default {
    name: 'AuiResellerDetailsRegisteredDevices',
    components: {
        AuiDataTable,
        AuiBaseSubContext
    },
    mixins: [
        dataTable,
        subContext
    ],
    computed: {
        columns () {
            return [
                this.getIdColumn(),
                {
                    name: 'user_agent',
                    label: this.$t('User Agent'),
                    field: 'user_agent',
                    sortable: true,
                    align: 'left'
                },
                {
                    name: 'contact',
                    label: this.$t('Contact'),
                    field: 'contact',
                    sortable: true,
                    align: 'left'
                },
                {
                    name: 'expires',
                    label: this.$t('Expires'),
                    field: 'expires',
                    sortable: true,
                    align: 'left'
                },
                {
                    name: 'q',
                    label: this.$t('Q-Value'),
                    field: 'q',
                    sortable: true,
                    align: 'left'
                }
            ]
        }
    }
}
</script>
