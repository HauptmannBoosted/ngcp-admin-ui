<template>
    <proxy
        :proxy-page-title="false"
        @loaded="pageLoaded"
    />
</template>

<script>
import Proxy from 'pages/Proxy'
export default {
    name: 'AuiDetailsPageProxy',
    components: { Proxy },
    methods: {
        pageLoaded ({ iframeWindow, route }) {
            if (route?.meta?.v1DetailsPageSectionId) {
                const accordionSectionId = route?.meta?.v1DetailsPageSectionId
                const $ = iframeWindow?.$
                if (typeof $ === 'function') {
                    $(() => {
                        $('#wrapper > h2').hide()
                        $('#content > .row').hide()
                        $('#toggle-accordions').remove()
                        $('#content .ngcp-separator:first').remove()
                        $(`#${accordionSectionId}`).trigger('shown.bs.collapse')
                    })
                    $('.accordion-group').filter(function () {
                        return $(`.accordion-body[id="${accordionSectionId}"]`, this).length !== 1
                    }).hide()
                    iframeWindow.localStorage.setItem('lastTab', accordionSectionId)
                    $(`#${accordionSectionId}`).addClass('in')
                        .parent().addClass('open')
                        .find('.accordion-heading').remove().end()
                        .find('.accordion-toggle').removeClass('collapsed').end()
                        .find('.accordion-inner').css('border', 'none')
                }
            }
        }
    }
}
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
.proxy-iframe-wrapper::v-deep
    height: calc(100vh - 150px)
    .proxy-iframe
        height: calc(100vh - 150px)
</style>
