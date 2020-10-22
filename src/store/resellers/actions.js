import {
	fetchAjaxTable
} from 'src/api/panel'
import _ from 'lodash'

const columns = [
	'id',
	'contract_id',
	'name',
	'status',
	'enable_rtc',
	'null'
]

export async function fetchResellers ({ commit }, options) {
	return fetchAjaxTable('/reseller/ajax', columns, options)
}

export async function fetchResellerList ({ commit, dispatch }, options) {
	commit('resellerListRequesting', options)
	try {
		const data = await dispatch('fetchResellers', options)
		if (data !== null) {
			commit('resellerListSucceeded', data)
		} else {
			commit('resellerListFailed')
		}
	} catch (err) {
		commit('resellerListFailed')
	}
}

export async function toggleEnableRTC ({ commit, state }, options) {
	commit('resellerListRequesting', {
		pagination: state.resellerListPagination,
		filter: state.resellerListFilter
	})
	try {
		const sanatizedValue = this.$toVerbalBoolean(options.value)
		const res = await this.$apiPatchReplace('resellers', options.id, 'enable_rtc', options.value)
		if (res === true) {
			commit('resellerUpdateValue', {
				id: options.id,
				field: 'enable_rtc',
				value: sanatizedValue
			})
			commit('resellerListSucceeded')
		} else {
			commit('resellerListFailed')
		}
	} catch (err) {
		commit('resellerListFailed')
	}
}

export async function filterResellers ({ commit, dispatch }, filter) {
	const resellers = await dispatch('resellers/fetchResellers', {
		filter: filter,
		pagination: {
			sortBy: 'id',
			descending: false,
			page: 1,
			rowsPerPage: 10,
			rowsNumber: null
		}
	}, { root: true })
	commit('filterResellers', _.get(resellers, 'aaData', []))
}
