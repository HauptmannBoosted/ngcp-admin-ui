
export default {
    entity: {
        admins: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        resellers: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        customers: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        contracts: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        customercontacts: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        domains: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        subscribers: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        subscriberprofilesets: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        subscriberregistrations: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        subscriberprofiles: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        calllistsuppressions: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        billingprofiles: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        billingnetworks: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        profilepackages: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        invoicetemplates: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        invoices: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        vouchers: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        peeringgroups: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        rewriterulesets: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        rewriterules: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        headerrulesets: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        headerrules: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        ncoslevels: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        ncospatterns: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        soundsets: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        emailtemplates: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        bannedips: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        bannedusers: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        pbxdevices: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        lnpcarriers: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        lnpnumbers: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        emergencymappingcontainers: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        emergencymappings: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        customerlocations: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        phonebookentries: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        timesets: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        maliciouscalls: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        },
        balanceintervals: {
            $p: {
                read: true
            },
            columns: {
                $p: {
                    read: true
                }
            }
        }
    },
    page: {
        dashboard: {
            $p: {
                $all: true
            },
            card: {
                systemstat: {
                    $p: {
                        read: true
                    }
                },
                billing: {
                    peeringCosts: {
                        $p: {
                            read: true
                        }
                    },
                    resellerRevenue: {
                        $p: {
                            read: true
                        }
                    },
                    customerRevenue: {
                        $p: {
                            read: true
                        }
                    }
                },
                peering: {
                    $p: {
                        read: true
                    }
                },
                reseller: {
                    $p: {
                        read: true
                    }
                }
            }
        },
        administrator: {
            edit: {
                $p: {
                    $all: true
                }
            }
        },
        domain: {
            preferences: {
                $p: {
                    read: true
                }
            }
        },
        customer: {
            preferences: {
                $p: {
                    read: true
                }
            }
        },
        reseller: {
            preferences: {
                $p: {
                    read: true
                }
            }
        }
    },
    tool: {
        $p: {
            $all: true
        }
    },
    statistic: {
        $p: {
            $all: true
        }
    },
    doc: {
        $p: {
            $all: true
        }
    },
    ngcp: {
        version: {
            $p: {
                read: true
            }
        }
    }
}
