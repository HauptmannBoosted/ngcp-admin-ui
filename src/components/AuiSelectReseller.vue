<template>
    <aui-select-lazy
        icon="fas fa-users"
        :label="$t('Reseller')"
        clearable
        store-getter="resellers/filteredResellerOptions"
        store-action="resellers/filterResellers"
        :load-initially="false"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <template
            v-for="(_, slotName) of $scopedSlots"
            v-slot:[slotName]="scope"
        >
            <slot
                :name="slotName"
                v-bind="scope"
            />
        </template>
    </aui-select-lazy>
</template>

<script>
import AuiSelectLazy from 'components/input/AuiSelectLazy'
export default {
    name: 'AuiSelectReseller',
    components: {
        AuiSelectLazy
    }
}
</script>
