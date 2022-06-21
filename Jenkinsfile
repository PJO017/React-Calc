pipeline {
    agent any
    stages {
        stage("run build") {
            steps {
                echo "building app..."
                nodejs('NodeJS-16.0.0') {
                    sh 'npm install'
                    sh 'npm run build'
                }

            }
        }
    }
}
