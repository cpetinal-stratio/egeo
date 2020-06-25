@Library('libpipelines@feature/flow-1367-EGEO') _

hose {
    EMAIL = 'cd'
    MODULE = 'egeo-test'
    DEVTIMEOUT = 30
    RELEASETIMEOUT = 30
    REPOSITORY = 'github.com/cpetinal-stratio/egeo'
    LANG = 'typescript'
    FOSS = true
    
    sh ("mvn install")

    DEV = { config ->

        doPublishStatics(config, "target/html", "egeo/prueba")

    }
}

