
import _ from 'lodash'
import {
	fetchAjaxTable
} from '../common'

const columns = [
	'id',
	'reseller_name',
	'login',
	'is_master',
	'is_ccare',
	'is_active',
	'read_only',
	'show_passwords',
	'call_data',
	'billing_data',
	'lawful_intercept',
	''
]

export async function fetchAdministrators ({ commit }, options) {
	commit('adminsRequesting', options)
	try {
		const data = await fetchAjaxTable(this.$httpPanel, '/administrator/ajax', columns, options)
		if (data !== null) {
			commit('adminsSucceeded', data)
		} else {
			commit('adminsFailed')
		}
	} catch (err) {
		commit('adminsFailed')
	}
}

export async function createAdministrator ({ commit }, data) {
	try {
		commit('user/entityCreationRequesting', null, { root: true })
		const res = await this.$httpApi.post('/admins/', data)
		if (res.status === 201) {
			commit('user/entityCreationSucceeded', null, { root: true })
			await this.$router.push({ path: '/administrator' })
		} else {
			commit('user/entityCreationFailed', res.data.message, { root: true })
		}
	} catch (err) {
		commit('user/entityCreationFailed', err.response.data.message, { root: true })
	}
}

export async function deleteAdministrator ({ commit, state, dispatch }, id) {
	commit('user/entityDeletionRequesting', null, { root: true })
	const res = await this.$httpApi.delete('/admins/' + id)
	if (res.status >= 200 && res.status <= 299) {
		commit('user/entityDeletionSucceeded', null, { root: true })
		await dispatch('fetchAdministrators', {
			pagination: state.administratorsPagination,
			filter: state.administratorsFilter
		})
	} else {
		commit('user/entityDeletionFailed', res.data.message, { root: true })
	}
}

export async function filterResellers ({ commit, dispatch }, filter) {
	const params = {
		rows: 10,
		page: 1
	}
	if (_.isString(filter) && filter.length > 0) {
		params.name = filter
	}
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
	commit('filterResellers', resellers.aaData)
}

export async function loadAdministrator ({ commit, dispatch }, id) {
	await dispatch('filterResellers', '')
	commit('adminRequesting')
	const admin = await this.$fetchEntity('admins', id)
	if (admin !== null) {
		const reseller = await this.$fetchEntity('resellers', admin.reseller_id)
		if (reseller !== null) {
			commit('adminSucceeded', {
				admin: admin,
				reseller: reseller
			})
		} else {
			commit('adminFailed')
		}
	} else {
		commit('adminFailed')
	}
}

export async function toggleAdministratorField ({ commit, dispatch, state }, options) {
	commit('adminsRequesting', {
		pagination: state.administratorsPagination,
		filter: state.administratorsFilter
	})
	try {
		const res = await this.$apiPatchReplace('admins', options.id, options.field, options.value)
		if (res === true) {
			commit('adminUpdateValue', options)
			commit('adminsSucceeded')
		} else {
			commit('adminsFailed')
		}
	} catch (err) {
		commit('adminsFailed')
	}
}
