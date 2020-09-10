@Library('libpipelines@feature/FLOW-1511') _

hose {
    EMAIL = 'cpetinal'
    MODULE = 'egeo-test'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'github.com/cpetinal-stratio/egeo'
    LANG = 'typescript'
    FOSS = true
    DOWNLOADS_USER = "download"
    DEBUG = true

    DEV = { config ->

        doPublishStatics(config, "dist/egeo-demo", "downloads/test",true,true)

    }
}

