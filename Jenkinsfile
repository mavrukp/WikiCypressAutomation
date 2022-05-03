pipeline {

    agent {
        docker { 
            image 'cypress/base:14.17.0' 
            args '-e NO_COLOR=1'
        }
    }
    
    stages {
        //environment {
        // we will be recording test results and video on Cypress dashboard
        // to record we need to set an environment variable
        // we can load the record key variable from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        //   CYPRESS_RECORD_KEY = credentials('cypress-example-kitchensink-record-key')
       //}
       
        stage('Git Checkout'){
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'refs/heads/main']], extensions: [], userRemoteConfigs: [[credentialsId: '672b1f50-2513-4d87-bbd9-408f0b0e4ed2', url: 'https://github.com/mavrukp/WikiCypressAutomation.git']]])
            }
        }

        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm ci'
                sh 'npm test'
            }
        }
    }
}
