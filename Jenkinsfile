pipeline {
    agent any
    stages {
        stage("run build") {
            steps {
                echo "building app..."
                nodejs('NodeJS-16.0.0') {
                    sh 'unset CI'
                    sh 'npm i'
                    sh 'npm run build'
                }

            }
        }
    }
}
