<template>
    <q-layout view="hHh lpR fFf">
        <q-header
            class="bg-transparent"
        >
            <q-toolbar>
                <q-space />
                <aui-selection-language />
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
        <custom-footer />
    </q-layout>
</template>

<script>
import CustomFooter from '../components/CustomFooter'
import AuiSelectionLanguage from '../components/AuiSelectionLanguage'
export default {
    name: 'LoginLayout',
    components: {
        CustomFooter,
        AuiSelectionLanguage
    }
}
</script>
