import { PATH_ERROR_403 } from 'src/router/common'

const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout'),
		children: [
			{
				path: '/dashboard',
				component: () => import('pages/Proxy'),
				meta: {
					permission: '*'
				}
			},
			{
				path: '/administrator',
				component: () => import('pages/AuiPageAdministrators'),
				meta: {
					permission: ['admin', 'reseller', 'lintercept']
				}
			},
			{
				path: '/administrator/create',
				component: () => import('pages/AuiPageAdminCreation'),
				meta: {
					permission: ['admin', 'reseller', 'lintercept']
				}
			},
			{
				path: '/administrator/:id/edit',
				component: () => import('pages/AuiPageAdminUpdate'),
				meta: {
					permission: ['admin', 'reseller', 'lintercept']
				}
			},
			{
				path: '/reseller',
				component: () => import('pages/AuiPageResellers'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/reseller/create',
				component: () => import('pages/AuiPageResellerCreation'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/reseller/:id/css',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['reseller']
				}
			},
			{
				path: '/reseller/:id/css/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['reseller']
				}
			},
			{
				path: '/reseller/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/customer',
				component: () => import('pages/AuiPageCustomers'),
				meta: {
					permission: ['admin', 'reseller', 'ccare']
				}
			},
			{
				path: '/customer/create',
				component: () => import('pages/AuiPageCustomerCreation'),
				meta: {
					permission: ['admin', 'reseller', 'ccare']
				}
			},
			{
				path: '/customer/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller', 'ccare']
				}
			},
			{
				path: '/contract',
				component: () => import('pages/AuiPageContracts'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/contract/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/contact',
				component: () => import('pages/AuiPageContacts'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/contact/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/domain',
				component: () => import('pages/AuiPageDomains'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/domain/create',
				component: () => import('pages/AuiPageDomainCreation'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/domain/:id/preferences',
				component: () => import('pages/AuiPagePreferencesDomain'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/subscriber',
				component: () => import('pages/AuiPageSubscribers'),
				meta: {
					permission: ['admin', 'reseller', 'ccare']
				}
			},
			{
				path: '/subscriber/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller', 'ccare']
				}
			},
			{
				path: '/subscriberprofile',
				component: () => import('pages/AuiPageSubscriberProfileSets'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/subscriberprofile/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/calllistsuppression',
				component: () => import('pages/AuiGlobalCallListSuppressions'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/calllistsuppression/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/billing',
				component: () => import('pages/AuiBillingProfiles'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/billing/create',
				component: () => import('pages/AuiBillingProfilesCreation'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/billing/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/network',
				component: () => import('pages/AuiBillingNetworks'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/network/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/package',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/package/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/invoicetemplate',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/invoicetemplate/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/invoice',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/invoice/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/voucher',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/voucher/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/peering',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/peering/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/rewrite',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/rewrite/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/header',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/header/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/ncos',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/ncos/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/sound',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/sound/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/emailtemplate',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/emailtemplate/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/device',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/device/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/security',
				component: () => import('pages/AuiPageSecurityBans'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/lnp',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/lnp/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/emergencymapping',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/emergencymapping/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/phonebook',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/phonebook/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/timeset',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/timeset/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/callflow',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/callflow/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/callroutingverify',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/callroutingverify/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/peeringoverview',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/peeringoverview/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin']
				}
			},
			{
				path: '/batchprovisioning',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			},
			{
				path: '/batchprovisioning/*',
				component: () => import('pages/Proxy'),
				meta: {
					permission: ['admin', 'reseller']
				}
			}
		]
	},
	{
		path: '/login/admin',
		component: () => import('layouts/Login'),
		children: [
			{
				path: '',
				component: () => import('pages/Login'),
				meta: {
					permission: 'public'
				}
			}
		]
	},
	{
		path: PATH_ERROR_403,
		component: () => import('layouts/Login'),
		children: [
			{
				path: '',
				component: () => import('pages/AuiPageError403'),
				meta: {
					permission: 'public'
				}
			}
		]
	}
]

if (process.env.MODE !== 'ssr') {
	routes.push({
		path: '*',
		component: () => import('layouts/Login'),
		children: [
			{
				path: '',
				component: () => import('pages/AuiPageError404'),
				meta: {
					permission: 'public'
				}
			}
		]
	})
}

export default routes
