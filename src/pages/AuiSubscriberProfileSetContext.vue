<template>
    <aui-context-aware-page
        resource="subscriberprofilesets"
        :resource-relations="resourceRelations"
        default-sub-context-route="subscriberProfileSetEdit"
        :context-name="({ resourceObject }) => {
            if (resourceObject) {
                return String('#' + resourceObject.id + ' - ' + resourceObject.name)
            } else {
                return '...'
            }
        }"
    >
        <router-view />
    </aui-context-aware-page>
</template>

<script>
import AuiContextAwarePage from 'pages/AuiContextAwarePage'
export default {
    name: 'AuiSubscriberProfileSetContext',
    components: {
        AuiContextAwarePage
    },
    computed: {
        resourceRelations () {
            return {
                reseller_id: {
                    name: 'reseller',
                    resource: 'resellers',
                    required: false
                }
            }
        }
    }
}
</script>
