pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nextjs-devops-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop nextjs-app || true
                docker rm nextjs-app || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d \
                --name nextjs-app \
                -p 80:3000 \
                nextjs-devops-app
                '''
            }
        }
    }
}
