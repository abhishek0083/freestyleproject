pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/abhishek0083/freestyleproject.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean validate compile test package verify install'
            }
        }
    }
    post {
        success {
            echo 'Build completed successfully.'
        }
        failure {
            echo 'Build failed.'
        }
    }
}

