pipeline {
    agent any
    tools {nodejs "NodeJS-16.15.1"}
    stages {
        stage("run build") {
            steps {
                echo "building app..."
                sh 'npm install'
            }
        }
    }
}
