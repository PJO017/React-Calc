pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage("run build") {
            steps {
                echo "building app..."
                sh 'npm install'
            }
        }
    }
}
