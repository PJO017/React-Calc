pipeline {
    agent any
    tools {nodejs "NodeJS-16.15.1"}
    stages {
        stage("run build") {
            steps {
                echo "building app..."
                sh 'npm i'
                sh 'npm build'
            }
        }
        stage("run test") {
            steps {
                echo "testing app..."
            }
        }
        stage("deploy") {
            steps {
                echo "deploying app..."
            }
        }
    }
}
