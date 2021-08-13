import {
    PATH_ERROR_403, PATH_RECOVER_PASSWORD
} from 'src/router/common'
import {
    i18n
} from 'boot/i18n'

const getToken = (route) => {
    return {
        token: route.query.token
    }
}

export const routes = [
    {
        name: 'root',
        path: '/',
        component: () => import('layouts/MainLayout'),
        children: [
            {
                name: 'dashboard',
                path: '/dashboard',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'page.dashboard'
                    },
                    proxy: true
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
                    get label () {
                        return i18n.t('Administrators')
                    },
                    icon: 'fas fa-user-cog',
                    root: true
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
                    get label () {
                        return i18n.t('Add Administrator')
                    },
                    icon: 'add',
                    parentPath: 'adminList'
                }
            },
            {
                name: 'adminContext',
                path: '/administrator/:id',
                component: () => import('pages/AuiAdminContext'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'page.administrator.edit'
                    },
                    parentPath: 'adminList',
                    contextRoot: true
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
                            get label () {
                                return i18n.t('Edit')
                            },
                            icon: 'edit',
                            parentPath: 'adminList.adminContext'
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
                    get label () {
                        return i18n.t('Resellers')
                    },
                    icon: 'fas fa-users',
                    root: true
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
                    get label () {
                        return i18n.t('Add Reseller')
                    },
                    icon: 'add',
                    parentPath: 'resellerList'
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
                    },
                    parentPath: 'resellerList',
                    contextRoot: true
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
                            get label () {
                                return i18n.t('Edit')
                            },
                            icon: 'edit',
                            parentPath: 'resellerList.resellerContext',
                            menu: true
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
                            get label () {
                                return i18n.t('Preferences')
                            },
                            icon: 'settings_applications',
                            parentPath: 'resellerList.resellerContext',
                            menu: true
                        }
                    },
                    {
                        name: 'resellerDetails',
                        path: '/reseller/:id/details',
                        component: () => import('pages/AuiDetailsPage'),
                        props: {
                            // TODO: uncomment it when we do not need "resellerDetailsOld" anymore (in the followup ticket)
                            // detailsPageRouteName: 'resellerDetails',
                            // redirectToSubpageRoute: { name: 'resellerDetailsBaseInformation' }
                        },
                        meta: {
                            $p: {
                                operation: 'read',
                                resource: 'entity.resellers'
                            },
                            get label () {
                                return i18n.t('Details')
                            },
                            icon: 'article',
                            parentPath: 'resellerList.resellerContext',
                            menu: true
                        },
                        children: [{
                            // TODO: remove this route when the proxying of resellerDetails will be changed in the followup ticket
                            name: 'resellerDetailsOld',
                            path: '',
                            component: () => import('pages/Proxy'),
                            meta: {
                                get label () {
                                    return i18n.t('Old Reseller Details')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fa fa-info',
                                proxy: true
                            }
                        },
                        {
                            name: 'resellerDetailsBaseInformation',
                            path: 'base-information',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Reseller Base Information')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fa fa-info'
                            }
                        }, {
                            name: 'resellerDetailsContract',
                            path: 'contract',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Reseller Contract')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-handshake'
                            }
                        }, {
                            name: 'resellerDetailsContact',
                            path: 'contact',
                            component: () => import('pages/AuiResellerDetailsContact'),
                            meta: {
                                get label () {
                                    return i18n.t('Reseller Contact')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-address-card'
                            }
                        }, {
                            name: 'resellerDetailsAdminLogins',
                            path: 'admin-logins',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Administrator Logins')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-sign-in-alt'
                            }
                        }, {
                            name: 'resellerDetailsDomains',
                            path: 'domains',
                            component: () => import('pages/AuiResellerDetailsDomain'),
                            meta: {
                                get label () {
                                    return i18n.t('Domains')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-network-wired'
                            }
                        }, {
                            name: 'resellerDetailsBillingProfiles',
                            path: 'billing-profiles',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Billing Profiles')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-hand-holding-usd'
                            }
                        }, {
                            name: 'resellerDetailsBillingNetworks',
                            path: 'billing-networks',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Billing Networks')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-credit-card'
                            }
                        }, {
                            name: 'resellerDetailsProfilePackages',
                            path: 'profile-packages',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Profile Packages')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-cubes'
                            }
                        }, {
                            name: 'resellerDetailsCustomers',
                            path: 'customers',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Customers')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-user'
                            }
                        }, {
                            name: 'resellerDetailsBranding',
                            path: 'branding',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Branding')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-palette'
                            }
                        }, {
                            name: 'resellerDetailsInvoiceTemplates',
                            path: 'invoice-templates',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Invoice Templates')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-file-invoice'
                            }
                        }, {
                            name: 'resellerDetailsPhoneBook',
                            path: 'phone-book',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Phonebook')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-phone-alt'
                            }
                        }, {
                            name: 'resellerDetailsTimeSets',
                            path: 'time-sets',
                            // component: () => import(''),
                            meta: {
                                get label () {
                                    return i18n.t('Time Sets')
                                },
                                parentPath: 'resellerList.resellerContext.resellerDetails',
                                icon: 'fas fa-clock'
                            }
                        }]
                    }
                ]
            },
            {
                name: 'resellerPanelBrandingOverview',
                path: '/reseller/:id/css',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'page.panelBranding'
                    },
                    proxy: true
                }
            },
            {
                name: 'resellerPanelBrandingUpdate',
                path: '/reseller/:id/css/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'page.panelBranding'
                    },
                    proxy: true
                }
            },
            {
                name: 'resellerCatchAll',
                path: '/reseller/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.resellers'
                    },
                    proxy: true
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
                    get label () {
                        return i18n.t('Customers')
                    },
                    icon: 'fas fa-user-tie',
                    root: true
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
                    get label () {
                        return i18n.t('Add Customer')
                    },
                    icon: 'add',
                    parentPath: 'customerList'
                }
            },
            {
                name: 'customerContext',
                path: '/customer/:id',
                component: () => import('pages/AuiCustomerContext'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.customers'
                    },
                    contextRoot: true,
                    parentPath: 'customerList'
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
                            get label () {
                                return i18n.t('Edit')
                            },
                            icon: 'edit',
                            parentPath: 'customerList.customerContext',
                            menu: true
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
                            get label () {
                                return i18n.t('Preferences')
                            },
                            icon: 'settings_applications',
                            parentPath: 'customerList.customerContext',
                            menu: true
                        }
                    },
                    {
                        name: 'customerDetails',
                        path: '/customer/:id/details',
                        component: () => import('pages/Proxy'),
                        meta: {
                            $p: {
                                operation: 'read',
                                resource: 'entity.customers'
                            },
                            get label () {
                                return i18n.t('Details')
                            },
                            icon: 'article',
                            parentPath: 'customerList.customerContext',
                            menu: true
                        }
                    }
                ]
            },
            {
                name: 'customerCatchAll',
                path: '/customer/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.customers'
                    },
                    proxy: true
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
                    get label () {
                        return i18n.t('Contracts')
                    },
                    icon: 'fas fa-handshake',
                    root: true
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
                    get label () {
                        return i18n.t('Add Peering Contract')
                    },
                    icon: 'add',
                    parentPath: 'contractList'
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
                    get label () {
                        return i18n.t('Add Reseller Contract')
                    },
                    icon: 'add',
                    parentPath: 'contractList'
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
                    },
                    contextRoot: true,
                    parentPath: 'contractList'
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
                            get label () {
                                return i18n.t('Edit')
                            },
                            icon: 'edit',
                            parentPath: 'contractList.contractContext'
                        }
                    }
                ]
            },
            {
                name: 'contractCatchAll',
                path: '/contract/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.contracts'
                    },
                    proxy: true
                }
            },
            {
                name: 'contactList',
                path: '/contact',
                component: () => import('pages/AuiContactList'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.customercontacts'
                    },
                    get label () {
                        return i18n.t('Contacts')
                    },
                    icon: 'fas fa-address-card',
                    root: true
                }
            },
            {
                name: 'contactCreateCustomer',
                path: '/contact/create',
                component: () => import('pages/AuiContactCreation'),
                props: {
                    hasReseller: true
                },
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.customercontacts'
                    },
                    get label () {
                        return i18n.t('Add Customer Contact')
                    },
                    icon: 'add',
                    parentPath: 'contactList'
                }
            },
            {
                name: 'contactCreateSystem',
                path: '/contact/create/noreseller',
                component: () => import('pages/AuiContactCreation'),
                props: {
                    hasReseller: false
                },
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.customercontacts'
                    },
                    get label () {
                        return i18n.t('Add System Contact')
                    },
                    icon: 'add',
                    parentPath: 'contactList'
                }
            },
            {
                name: 'contactContext',
                path: '/contact/:id',
                component: () => import('pages/AuiContactContext'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.customercontacts'
                    },
                    contextRoot: true,
                    parentPath: 'contactList'
                },
                children: [
                    {
                        name: 'contactEditCustomer',
                        path: '/contact/:id/edit',
                        redirect: { name: 'contactEdit', query: { resource: 'customercontacts' } }
                    },
                    {
                        name: 'contactEditSystem',
                        path: '/contact/:id/edit/noreseller',
                        redirect: { name: 'contactEdit', query: { resource: 'systemcontacts' } }
                    },
                    {
                        name: 'contactEdit',
                        path: '/contact/:id/edit',
                        component: () => import('pages/AuiContactEdit'),
                        meta: {
                            $p: {
                                operation: 'update',
                                resource: 'entity.customercontacts'
                            },
                            get label () {
                                return i18n.t('Edit')
                            },
                            icon: 'edit',
                            parentPath: 'contactList.contactContext'
                        }
                    }
                ]
            },
            {
                name: 'contactCatchAll',
                path: '/contact/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.customercontacts'
                    },
                    proxy: true
                }
            },
            {
                name: 'domainList',
                path: '/domain',
                component: () => import('pages/AuiDomainList'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.domains'
                    },
                    get label () {
                        return i18n.t('Domains')
                    },
                    icon: 'fas fa-network-wired',
                    root: true
                }
            },
            {
                name: 'domainCreation',
                path: '/domain/create',
                component: () => import('pages/AuiDomainCreation'),
                meta: {
                    $p: {
                        operation: 'create',
                        resource: 'entity.domains'
                    },
                    get label () {
                        return i18n.t('Add Domain')
                    },
                    icon: 'add',
                    parentPath: 'domainList'
                }
            },
            {
                name: 'domainContext',
                path: '/domain/:id',
                component: () => import('pages/AuiDomainContext'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.domains'
                    },
                    contextRoot: true,
                    parentPath: 'domainList'
                },
                children: [
                    {
                        name: 'domainPreferences',
                        path: '/domain/:id/preferences',
                        component: () => import('pages/AuiDomainPreferences'),
                        meta: {
                            $p: {
                                operation: 'read',
                                resource: 'page.domain.preferences'
                            },
                            get label () {
                                return i18n.t('Preferences')
                            },
                            icon: 'settings_applications',
                            parentPath: 'domainList.domainContext'
                        }
                    }
                ]
            },
            {
                name: 'subscriberList',
                path: '/subscriber',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.subscribers'
                    },
                    proxy: true
                }
            },
            {
                name: 'subscriberCatchAll',
                path: '/subscriber/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.subscribers'
                    },
                    proxy: true
                }
            },
            {
                name: 'subscriberProfileList',
                path: '/subscriberprofile',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.subscriberprofiles'
                    },
                    proxy: true
                }
            },
            {
                name: 'subscriberProfileCatchAll',
                path: '/subscriberprofile/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.subscriberprofiles'
                    },
                    proxy: true
                }
            },
            {
                name: 'callListSuppressionList',
                path: '/calllistsuppression',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.calllistsuppressions'
                    },
                    proxy: true
                }
            },
            {
                name: 'callListSuppressionCatchAll',
                path: '/calllistsuppression/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.calllistsuppressions'
                    },
                    proxy: true
                }
            },
            {
                name: 'billingProfileList',
                path: '/billing',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.billingprofiles'
                    },
                    proxy: true
                }
            },
            {
                name: 'billingProfileCatchAll',
                path: '/billing/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.billingprofiles'
                    },
                    proxy: true
                }
            },
            {
                name: 'billingNetworkList',
                path: '/network',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.billingnetworks'
                    },
                    proxy: true
                }
            },
            {
                name: 'billingNetworkCatchAll',
                path: '/network/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.billingnetworks'
                    },
                    proxy: true
                }
            },
            {
                name: 'billingProfilePackageList',
                path: '/package',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.profilepackages'
                    },
                    proxy: true
                }
            },
            {
                name: 'billingProfilePackageCatchAll',
                path: '/package/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.profilepackages'
                    },
                    proxy: true
                }
            },
            {
                name: 'invoiceTemplateList',
                path: '/invoicetemplate',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.invoicetemplates'
                    },
                    proxy: true
                }
            },
            {
                name: 'invoiceTemplateCatchAll',
                path: '/invoicetemplate/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.invoicetemplates'
                    },
                    proxy: true
                }
            },
            {
                name: 'invoiceList',
                path: '/invoice',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.invoices'
                    },
                    proxy: true
                }
            },
            {
                name: 'invoiceCatchAll',
                path: '/invoice/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.invoices'
                    },
                    proxy: true
                }
            },
            {
                name: 'voucherList',
                path: '/voucher',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.vouchers'
                    },
                    proxy: true
                }
            },
            {
                name: 'voucherCatchAll',
                path: '/voucher/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.vouchers'
                    },
                    proxy: true
                }
            },
            {
                name: 'peeringGroupList',
                path: '/peering',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.peeringgroups'
                    },
                    proxy: true
                }
            },
            {
                name: 'peeringGroupCatchAll',
                path: '/peering/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.peeringgroups'
                    },
                    proxy: true
                }
            },
            {
                name: 'rewriteRuleSetList',
                path: '/rewrite',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.rewriterulesets'
                    },
                    proxy: true
                }
            },
            {
                name: 'rewriteRuleSetCatchAll',
                path: '/rewrite/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.rewriterulesets'
                    },
                    proxy: true
                }
            },
            {
                name: 'headerRuleSetList',
                path: '/header',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.headerrulesets'
                    },
                    proxy: true
                }
            },
            {
                name: 'headerRuleSetCatchAll',
                path: '/header/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.headerrulesets'
                    },
                    proxy: true
                }
            },
            {
                name: 'ncosLevelList',
                path: '/ncos',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.ncoslevels'
                    },
                    proxy: true
                }
            },
            {
                name: 'ncosLevelCatchAll',
                path: '/ncos/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.ncoslevels'
                    },
                    proxy: true
                }
            },
            {
                name: 'soundSetList',
                path: '/sound',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.soundsets'
                    },
                    proxy: true
                }
            },
            {
                name: 'soundSetCatchAll',
                path: '/sound/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.soundsets'
                    },
                    proxy: true
                }
            },
            {
                name: 'emailTemplateList',
                path: '/emailtemplate',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.emailtemplates'
                    },
                    proxy: true
                }
            },
            {
                name: 'emailTemplateCatchAll',
                path: '/emailtemplate/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.emailtemplates'
                    },
                    proxy: true
                }
            },
            {
                name: 'deviceList',
                path: '/device',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.pbxdevices'
                    },
                    proxy: true
                }
            },
            {
                name: 'deviceListCatchAll',
                path: '/device/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.pbxdevices'
                    },
                    proxy: true
                }
            },
            {
                name: 'securityBans',
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
                name: 'lnpList',
                path: '/lnp',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: ['entity.lnpcarriers', 'entity.lnpnumbers']
                    },
                    proxy: true
                }
            },
            {
                name: 'lnpCatchAll',
                path: '/lnp/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: ['entity.lnpcarriers', 'entity.lnpnumbers']
                    },
                    proxy: true
                }
            },
            {
                name: 'emergencyMappingContainerList',
                path: '/emergencymapping',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.emergencymappingcontainers'
                    },
                    proxy: true
                }
            },
            {
                name: 'emergencyMappingContainerCatchAll',
                path: '/emergencymapping/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.emergencymappingcontainers'
                    },
                    proxy: true
                }
            },
            {
                name: 'phonebookEntryList',
                path: '/phonebook',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.phonebookentries'
                    },
                    proxy: true
                }
            },
            {
                name: 'phonebookEntryCatchAll',
                path: '/phonebook/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.phonebookentries'
                    },
                    proxy: true
                }
            },
            {
                name: 'timeSetList',
                path: '/timeset',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.timesets'
                    },
                    proxy: true
                }
            },
            {
                name: 'timeSetCatchAll',
                path: '/timeset/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.timesets'
                    },
                    proxy: true
                }
            },
            {
                name: 'sipCallFlowList',
                path: '/callflow',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'statistic.sipcallflows'
                    },
                    proxy: true
                }
            },
            {
                name: 'sipCallFlowCatchAll',
                path: '/callflow/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'statistic.sipcallflows'
                    },
                    proxy: true
                }
            },
            {
                name: 'callRoutingVerifyList',
                path: '/callroutingverify',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'tool.callroutingverify'
                    },
                    proxy: true
                }
            },
            {
                name: 'callRoutingVerifyCatchAll',
                path: '/callroutingverify/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'tool.callroutingverify'
                    },
                    proxy: true
                }
            },
            {
                name: 'peeringOverviewList',
                path: '/peeringoverview',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'tool.peeringoverview'
                    },
                    proxy: true
                }
            },
            {
                name: 'peeringOverviewCatchAll',
                path: '/peeringoverview/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'tool.peeringoverview'
                    },
                    proxy: true
                }
            },
            {
                name: 'batchProvisioningList',
                path: '/batchprovisioning',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'tool.batchprovisioning'
                    },
                    proxy: true
                }
            },
            {
                name: 'batchProvisioningCatchAll',
                path: '/batchprovisioning/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'tool.batchprovisioning'
                    },
                    proxy: true
                }
            },
            {
                name: 'proxyReflection',
                path: '/proxy/*',
                component: () => import('pages/Proxy'),
                meta: {
                    proxy: true,
                    proxyReverseInvisible: true,
                    proxyRewrite ({ route, url }) {
                        url.pathname = route.path.replace('/proxy', '')
                        return url
                    }
                }
            },
            {
                name: 'maliciousCallList',
                path: '/maliciouscall',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'read',
                        resource: 'entity.maliciouscalls'
                    },
                    proxy: true,
                    platformInfo: 'malicious_call'
                }
            },
            {
                name: 'maliciousCallCatchAll',
                path: '/maliciouscall/*',
                component: () => import('pages/Proxy'),
                meta: {
                    $p: {
                        operation: 'update',
                        resource: 'entity.maliciouscalls'
                    },
                    proxy: true,
                    platformInfo: 'malicious_call'
                }
            }
        ]
    },
    {
        name: 'login',
        path: '/login/admin',
        component: () => import('layouts/Login'),
        children: [
            {
                path: '',
                component: () => import('pages/Login'),
                meta: {
                    get label () {
                        return i18n.t('Login')
                    }
                }
            }
        ]
    },
    {
        name: 'error403',
        path: PATH_ERROR_403,
        component: () => import('layouts/Login'),
        children: [
            {
                path: '',
                component: () => import('pages/AuiPageError403'),
                meta: {
                    get label () {
                        return i18n.t('Forbidden')
                    }
                }
            }
        ]
    },
    {
        name: 'passwordRecovery',
        path: PATH_RECOVER_PASSWORD,
        component: () => import('layouts/Login'),
        children: [
            {
                path: '',
                component: () => import('pages/RecoverPassword'),
                props: getToken
            }
        ]
    }
]

if (process.env.MODE !== 'ssr') {
    routes.push({
        name: 'error404',
        path: '*',
        component: () => import('layouts/Login'),
        children: [
            {
                path: '',
                component: () => import('pages/AuiPageError404'),
                meta: {
                    get label () {
                        return i18n.t('Page not found')
                    }
                }
            }
        ]
    })
}

export default routes
