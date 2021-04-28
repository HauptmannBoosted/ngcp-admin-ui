import { addErrorInterceptor, markErrorAsHandled, registerGlobalErrorHooks } from 'src/helpers/errorHandling'
import { showGlobalErrorMessage } from 'src/helpers/ui'
import { i18n } from 'boot/i18n'

export default async ({ Vue, store }) => {
    registerGlobalErrorHooks(Vue)

    addErrorInterceptor(function handleAPITimeout (error) {
        // Note: this condition is "axios" lib specific timeout behaviour
        if (error?.code === 'ECONNABORTED' && (error?.message || '').toLowerCase().includes('timeout')) {
            showGlobalErrorMessage(
                i18n.t('Your internet connection is quite slow or NGCP platform in a maintenance state. Please try to repeat you action later.')
            )
            markErrorAsHandled(error)
        }
    })
}
