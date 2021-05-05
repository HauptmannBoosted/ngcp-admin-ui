import {
    PATH_ERROR_403
} from 'src/router/common'
import { i18n } from 'boot/i18n'

const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout'),
        children: [
            {
                path: '/dashboard',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'page.dashboard'
                    }
                }
            },
            {
                name: 'adminList',
                path: '/administrator',
                component: () => import('pages/AuiAdminList'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.admins'
                    },
                    label: i18n.t('Administrators'),
                    icon: 'fas fa-user-cog'
                }
            },
            {
                name: 'adminCreation',
                path: '/administrator/create',
                component: () => import('pages/AuiAdminCreation'),
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.admins'
                    },
                    label: i18n.t('Add Administrator'),
                    icon: 'add',
                    listRoute: 'adminList'
                }
            },
            {
                name: 'adminContext',
                path: '/administrator/:id',
                component: () => import('pages/AuiAdminContext'),
                meta: {

                },
                children: [
                    {
                        name: 'adminEdit',
                        path: '/administrator/:id/edit',
                        component: () => import('pages/AuiAdminEdit'),
                        meta: {
                            $p: {
                                operation: 'read',
                                resource: 'page.administrator.edit'
                            },
                            label: i18n.t('Edit '),
                            icon: 'edit',
                            listRoute: 'adminList'
                        }
                    }
                ]
            },
            {
                name: 'resellerList',
                path: '/reseller',
                component: () => import('pages/AuiResellerList'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.resellers'
                    },
                    label: i18n.t('Resellers'),
                    icon: 'fas fa-users'
                }
            },
            {
                name: 'resellerCreation',
                path: '/reseller/create',
                component: () => import('pages/AuiResellerCreation'),
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.resellers'
                    },
                    label: i18n.t('Add Reseller'),
                    icon: 'add',
                    listRoute: 'resellerList'
                }
            },
            {
                name: 'resellerContext',
                path: '/reseller/:id',
                component: () => import('pages/AuiResellerContext'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.resellers'
                    }
                },
                children: [
                    {
                        name: 'resellerEdit',
                        path: '/reseller/:id/edit',
                        component: () => import('pages/AuiResellerEdit'),
                        meta: {
                            $p: {
                                operation: 'update',
                                resource: 'entity.resellers'
                            },
                            label: i18n.t('Edit'),
                            icon: 'edit',
                            listRoute: 'resellerList'
                        }
                    },
                    {
                        name: 'resellerPreferences',
                        path: '/reseller/:id/preferences',
                        component: () => import('pages/AuiResellerPreferences'),
                        meta: {
                            $p: {
                                operation: 'read',
                                resource: 'page.reseller.preferences'
                            },
                            label: i18n.t('Preferences'),
                            icon: 'settings_applications',
                            listRoute: 'resellerList'
                        }
                    },
                    {
                        name: 'resellerDetails',
                        path: '/reseller/:id/details',
                        component: () => import('pages/Proxy'),
                        meta: {
                            $p: {
                                operation: 'update',
                                resource: 'entity.resellers'
                            },
                            label: i18n.t('Details'),
                            icon: 'article',
                            listRoute: 'resellerList'
                        }
                    }
                ]
            },
            {
                path: '/reseller/:id/css',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'page.panelBranding'
                    }
                }
            },
            {
                path: '/reseller/:id/css/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'page.panelBranding'
                    }
                }
            },
            {
                path: '/reseller/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.resellers'
                    }
                }
            },
            {
                name: 'customerList',
                path: '/customer',
                component: () => import('pages/AuiCustomerList'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.customers'
                    },
                    label: i18n.t('Customers'),
                    icon: 'fas fa-user-tie'
                }
            },
            {
                name: 'customerCreation',
                path: '/customer/create',
                component: () => import('pages/AuiCustomerCreation'),
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.customers'
                    },
                    label: i18n.t('Add Customer'),
                    icon: 'add',
                    listRoute: 'customerList'
                }
            },
            {
                path: '/customer/:id',
                component: () => import('pages/AuiCustomerContext'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.customers'
                    }
                },
                children: [
                    {
                        name: 'customerEdit',
                        path: '/customer/:id/edit',
                        component: () => import('pages/AuiCustomerEdit'),
                        meta: {
                            $p: {
                                operation: 'update',
                                resource: 'entity.customers'
                            },
                            label: i18n.t('Edit'),
                            icon: 'edit',
                            listRoute: 'customerList'
                        }
                    },
                    {
                        name: 'customerPreferences',
                        path: '/customer/:id/preferences',
                        component: () => import('pages/AuiCustomerPreferences'),
                        meta: {
                            $p: {
                                operation: 'read',
                                resource: 'page.customer.preferences'
                            },
                            label: i18n.t('Preferences'),
                            icon: 'settings_applications',
                            listRoute: 'customerList'
                        }
                    },
                    {
                        name: 'customerDetails',
                        path: '/customer/:id/details',
                        component: () => import('pages/Proxy'),
                        meta: {
                            $p: {
                                operation: 'update',
                                resource: 'entity.customers'
                            },
                            label: i18n.t('Details'),
                            icon: 'article',
                            listRoute: 'customerList'
                        }
                    }
                ]
            },
            {
                path: '/customer/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.customers'
                    }
                }
            },
            {
                name: 'contractList',
                path: '/contract',
                component: () => import('pages/AuiContractList'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.contracts'
                    },
                    label: i18n.t('Contracts'),
                    icon: 'fas fa-handshake'
                }
            },
            {
                name: 'contractCreatePeering',
                path: 'contract/peering/create',
                component: () => import('pages/AuiContractCreation'),
                props: {
                    type: 'sippeering'
                },
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.contracts'
                    },
                    label: i18n.t('Add Peering Contract'),
                    icon: 'add',
                    listRoute: 'contractList'
                }
            },
            {
                name: 'contractCreateReseller',
                path: '/contract/reseller/create',
                component: () => import('pages/AuiContractCreation'),
                props: {
                    type: 'reseller'
                },
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.contracts'
                    },
                    label: i18n.t('Add Reseller Contract'),
                    icon: 'add',
                    listRoute: 'contractList'
                }
            },
            {
                name: 'contractContext',
                path: '/contract/:id',
                component: () => import('pages/AuiContractContext'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.contracts'
                    }
                },
                children: [
                    {
                        name: 'contractEdit',
                        path: '/contract/:id/edit',
                        component: () => import('pages/AuiContractEdit'),
                        meta: {
                            $p: {
                                operation: 'update',
                                resource: 'entity.contracts'
                            },
                            label: i18n.t('Edit'),
                            icon: 'edit',
                            listRoute: 'contractList'
                        }
                    }
                ]
            },
            {
                path: '/contract/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.contracts'
                    }
                }
            },
            {
                path: '/contact',
                component: () => import('pages/AuiPageContacts'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.customercontacts'
                    }
                }
            },
            {
                path: '/contact/create',
                component: () => import('pages/AuiPageContactCreation'),
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.customercontacts'
                    }
                }
            },
            {
                path: '/contact/create/noreseller',
                component: () => import('pages/AuiPageContactCreation'),
                props: {
                    noreseller: true
                },
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.customercontacts'
                    }
                }
            },
            {
                path: '/contact/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.customercontacts'
                    }
                }
            },
            {
                path: '/domain',
                component: () => import('pages/AuiPageDomains'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.domains'
                    }
                }
            },
            {
                path: '/domain/create',
                component: () => import('pages/AuiPageDomainCreation'),
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.domains'
                    }
                }
            },
            {
                path: '/domain/:id/preferences',
                component: () => import('pages/AuiPagePreferencesDomain'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'page.domain.preferences'
                    }
                }
            },
            {
                path: '/subscriber',
                component: () => import('pages/AuiPageSubscribers'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.subscribers'
                    }
                }
            },
            {
                path: '/subscriber/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.subscribers'
                    }
                }
            },
            {
                path: '/subscriberprofile',
                component: () => import('pages/AuiPageSubscriberProfileSets'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.subscriberprofiles'
                    }
                }
            },
            {
                path: '/subscriberprofile/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.subscriberprofiles'
                    }
                }
            },
            {
                path: '/calllistsuppression',
                component: () => import('pages/AuiGlobalCallListSuppressions'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.calllistsuppressions'
                    }
                }
            },
            {
                path: '/calllistsuppression/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.calllistsuppressions'
                    }
                }
            },
            {
                path: '/billing',
                component: () => import('pages/AuiBillingProfiles'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.billingprofiles'
                    }
                }
            },
            {
                path: '/billing/create',
                component: () => import('pages/AuiBillingProfilesCreation'),
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.billingprofiles'
                    }
                }
            },
            {
                path: '/billing/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.billingprofiles'
                    }
                }
            },
            {
                path: '/network',
                component: () => import('pages/AuiBillingNetworks'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.billingnetworks'
                    }
                }
            },
            {
                path: '/network/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.billingnetworks'
                    }
                }
            },
            {
                path: '/package',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.profilepackages'
                    }
                }
            },
            {
                path: '/package/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.profilepackages'
                    }
                }
            },
            {
                path: '/invoicetemplate',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.invoicetemplates'
                    }
                }
            },
            {
                path: '/invoicetemplate/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.invoicetemplates'
                    }
                }
            },
            {
                path: '/invoice',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.invoices'
                    }
                }
            },
            {
                path: '/invoice/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.invoices'
                    }
                }
            },
            {
                path: '/voucher',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.vouchers'
                    }
                }
            },
            {
                path: '/voucher/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.vouchers'
                    }
                }
            },
            {
                path: '/peering',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.peeringgroups'
                    }
                }
            },
            {
                path: '/peering/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.peeringgroups'
                    }
                }
            },
            {
                path: '/rewrite',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.rewriterulesets'
                    }
                }
            },
            {
                path: '/rewrite/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.rewriterulesets'
                    }
                }
            },
            {
                path: '/header',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.headerrulesets'
                    }
                }
            },
            {
                path: '/header/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.headerrulesets'
                    }
                }
            },
            {
                path: '/ncos',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.ncoslevels'
                    }
                }
            },
            {
                path: '/ncos/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.ncoslevels'
                    }
                }
            },
            {
                path: '/sound',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.soundsets'
                    }
                }
            },
            {
                path: '/sound/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.soundsets'
                    }
                }
            },
            {
                path: '/emailtemplate',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.emailtemplates'
                    }
                }
            },
            {
                path: '/emailtemplate/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.emailtemplates'
                    }
                }
            },
            {
                path: '/device',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.pbxdevices'
                    }
                }
            },
            {
                path: '/device/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.pbxdevices'
                    }
                }
            },
            {
                path: '/security',
                component: () => import('pages/AuiPageSecurityBans'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: ['entity.bannedips', 'entity.bannedusers']
                    }
                }
            },
            {
                path: '/lnp',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: ['entity.lnpcarriers', 'entity.lnpnumbers']
                    }
                }
            },
            {
                path: '/lnp/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: ['entity.lnpcarriers', 'entity.lnpnumbers']
                    }
                }
            },
            {
                path: '/emergencymapping',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.emergencymappingcontainers'
                    }
                }
            },
            {
                path: '/emergencymapping/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.emergencymappingcontainers'
                    }
                }
            },
            {
                path: '/phonebook',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.phonebookentries'
                    }
                }
            },
            {
                path: '/phonebook/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.phonebookentries'
                    }
                }
            },
            {
                path: '/timeset',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.timesets'
                    }
                }
            },
            {
                path: '/timeset/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.timesets'
                    }
                }
            },
            {
                path: '/callflow',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'statistic.sipcallflows'
                    }
                }
            },
            {
                path: '/callflow/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'statistic.sipcallflows'
                    }
                }
            },
            {
                path: '/callroutingverify',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'tool.callroutingverify'
                    }
                }
            },
            {
                path: '/callroutingverify/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'tool.callroutingverify'
                    }
                }
            },
            {
                path: '/peeringoverview',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'tool.peeringoverview'
                    }
                }
            },
            {
                path: '/peeringoverview/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'tool.peeringoverview'
                    }
                }
            },
            {
                path: '/batchprovisioning',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'tool.batchprovisioning'
                    }
                }
            },
            {
                path: '/batchprovisioning/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'tool.batchprovisioning'
                    }
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
                component: () => import('pages/Login')
            }
        ]
    },
    {
        path: PATH_ERROR_403,
        component: () => import('layouts/Login'),
        children: [
            {
                path: '',
                component: () => import('pages/AuiPageError403')
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
                component: () => import('pages/AuiPageError404')
            }
        ]
    })
}

export default routes
