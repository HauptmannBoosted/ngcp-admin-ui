
export async function fetchAdmins ({ commit }) {
	commit('adminsRequesting')
	try {
		const res = await this.$http.get('https://192.168.178.23:1443/administrator/ajax', {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			params: {
				sEcho: 1,
				iColumns: 12,
				sColumns: ',,,,,,,,,,,',
				iDisplayStart: 0,
				iDisplayLength: 5,
				mDataProp_0: 'id',
				sSearch_0: '',
				bRegex_0: false,
				bSearchable_0: true,
				bSortable_0: true,
				mDataProp_1: 'reseller_name',
				sSearch_1: '',
				bRegex_1: false,
				bSearchable_1: true,
				bSortable_1: true,
				mDataProp_2: 'login',
				sSearch_2: '',
				bRegex_2: false,
				bSearchable_2: true,
				bSortable_2: true,
				mDataProp_3: 'is_master',
				sSearch_3: '',
				bRegex_3: false,
				bSearchable_3: true,
				bSortable_3: true,
				mDataProp_4: 'is_ccare',
				sSearch_4: '',
				bRegex_4: false,
				bSearchable_4: true,
				bSortable_4: true,
				mDataProp_5: 'is_active',
				sSearch_5: '',
				bRegex_5: false,
				bSearchable_5: true,
				bSortable_5: true,
				mDataProp_6: 'read_only',
				sSearch_6: '',
				bRegex_6: false,
				bSearchable_6: true,
				bSortable_6: true,
				mDataProp_7: 'show_passwords',
				sSearch_7: '',
				bRegex_7: false,
				bSearchable_7: true,
				bSortable_7: true,
				mDataProp_8: 'call_data',
				sSearch_8: '',
				bRegex_8: false,
				bSearchable_8: true,
				bSortable_8: true,
				mDataProp_9: 'billing_data',
				sSearch_9: '',
				bRegex_9: false,
				bSearchable_9: true,
				bSortable_9: true,
				mDataProp_10: 'lawful_intercept',
				sSearch_10: '',
				bRegex_10: false,
				bSearchable_10: true,
				bSortable_10: true,
				mDataProp_11: null,
				sSearch_11: '',
				bRegex_11: false,
				bSearchable_11: true,
				bSortable_11: false,
				sSearch: '',
				bRegex: false,
				iSortCol_0: 0,
				sSortDir_0: 'asc',
				iSortingCols: '1'
			}
		})
		if (res.status === 200) {
			commit('adminsSucceeded')
		} else {
			commit('adminsFailed')
		}
	} catch (err) {
		commit('adminsFailed')
	}
}
