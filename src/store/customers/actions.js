import _ from 'lodash'
import saveAs from 'file-saver'
import { ajaxFetchTable, ajaxGet } from 'src/api/ngcpPanelAPI'
import { apiPatchReplace, apiPost, apiPut } from 'src/api/ngcpAPI'
import contentDisposition from 'content-disposition'

export async function createCustomer ({ commit }, data) {
    data.billing_profile_definition = 'profiles'
    if (data.billing_profile_id) {
        data.billing_profiles = [
            {
                profile_id: data.billing_profile_id,
                network_id: null,
                start: null,
                stop: null
            },
            ...data.billing_profiles
        ]
        delete data.billing_profile_id
    }
    await apiPost({
        resource: 'customers',
        data: data
    })
}

export async function updateCustomer (context, payload) {
    const resourceId = payload.id
    delete payload.id
    payload.billing_profile_definition = 'profiles'
    if (_.has(payload, 'profile_package_id')) {
        const profilePackageId = payload.profile_package_id
        delete payload.profile_package_id
        await apiPatchReplace({
            resource: 'customers',
            resourceId: resourceId,
            field: 'profile_package_id',
            value: profilePackageId
        })
    }
    if (_.has(payload, 'billing_profile_id')) {
        const billingProfileId = payload.billing_profile_id
        delete payload.billing_profile_id
        await apiPatchReplace({
            resource: 'customers',
            resourceId: resourceId,
            field: 'billing_profile_id',
            value: billingProfileId
        })
    }
    return apiPut({
        resource: 'customers',
        resourceId: resourceId,
        data: payload
    })
}

export async function fetchProductsList () {
    // TODO: Product loading code should be replaced with proper API call when it will be implemented
    const options = {
        pagination: {
            sortBy: 'id',
            descending: false,
            page: 1,
            rowsPerPage: 10,
            rowsNumber: null
        }
    }
    const res = await ajaxFetchTable('/product/ajax', ['name'], options)
    return _.get(res, 'aaData', [])
}

/**
 * TODO: temporary "ajax" implementation until the API will provide "Download CSV" implementation for customer Phonebook Entries
 */

export async function ajaxDownloadPhonebookCSV (context, customerId = 0) {
    const downloadURL = `/customer/${customerId}/phonebook_download_csv`
    const res = await ajaxGet(downloadURL)

    const contentDispositionParsed = contentDisposition.parse(res.headers['content-disposition'])
    const fileName = contentDispositionParsed?.parameters?.filename || 'customer_phonebook_entries.csv'
    saveAs(new Blob([res.data], { type: res.headers['content-type'] || 'text/csv' }), fileName)
}
