pipeline {
    agent {
        docker {
            image "node"
            args "-p 3000:3000"
        }
    }
   
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
