@Library('libpipelines@feature/flow-1367-EGEO') _

hose {
    EMAIL = 'cpetinal'
    MODULE = 'egeo-test'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'github.com/cpetinal-stratio/egeo'
    LANG = 'typescript'
    FOSS = true
    DOWNLOADS_USER = "egeodownload"

    DEV = { config ->

        doPublishStatics(config, "dist/egeo-demo", "egeo/test",null,true)

    }
}

