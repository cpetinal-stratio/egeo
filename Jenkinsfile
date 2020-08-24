@Library('libpipelines@feature/flow-1367-EGEO') _

hose {
    EMAIL = 'cpetinal'
    MODULE = 'egeo-test'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'github.com/cpetinal-stratio/egeo'
    LANG = 'typescript'
    FOSS = true


    DEV = { config ->

        doCompile(config)
        doUT(config)
        doPackage(config)

        parallel(QC: {
            doStaticAnalysis(config)
            doCoverallsAnalysis(config)
        }, DEPLOY: {
            doDeploy(config)
        }, failFast: config.FAILFAST)

    }
}

