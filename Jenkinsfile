pipeline {
    agent {
        docker {
            image 'node:16'
            args '-p 3000:3000'
    stages {
        stage("run build") {
            steps {
                echo "building app..."
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
