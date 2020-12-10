import {
	fetchAjaxTable
} from 'src/api/panel'
import _ from 'lodash'
import { apiGetList } from 'src/api/common'

const columns = [
	'id',
	'external_id',
	'contact_email',
	'product_name',
	'billing_profile_name',
	'status'
]

export async function fetchContracts ({ commit }, options) {
	return fetchAjaxTable('/contract/ajax', columns, options)
}

export async function filterContracts ({ commit, dispatch }, filter) {
	const contracts = await dispatch('contracts/fetchContracts', {
		filter: filter,
		pagination: {
			sortBy: 'id',
			descending: false,
			page: 1,
			rowsPerPage: 10,
			rowsNumber: null
		}
	}, { root: true })
	commit('filterContracts', _.get(contracts, 'aaData', []))
}

export async function filterContacts ({ commit }, filter) {
	const contacts = await apiGetList({
		resource: 'systemcontacts',
		params: {
			email: filter + '*'
		}
	})
	commit('filterContacts', _.get(contacts, 'items', []))
}
