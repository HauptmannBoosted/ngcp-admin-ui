import _ from 'lodash'
import { generateResellerFilterParams } from 'src/api/common'
import { apiGetList } from 'src/api/ngcpAPI'

export async function filterEmailTemplatesByReseller ({ commit }, payload) {
    const emailTemplates = await apiGetList({
        resource: 'emailtemplates',
        params: generateResellerFilterParams(payload)
    })
    commit('filteredEmailTemplates', _.get(emailTemplates, 'items', []))
}

export async function filterInvoiceTemplatesByReseller ({ commit }, payload) {
    const invoiceTemplates = await apiGetList({
        resource: 'invoicetemplates',
        params: generateResellerFilterParams(payload)
    })
    commit('filteredInvoiceTemplates', _.get(invoiceTemplates, 'items', []))
}
