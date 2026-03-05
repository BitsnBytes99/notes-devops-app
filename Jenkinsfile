pipeline {

agent { label 'satya-agent' }

stages {

stage('Clone Repository') {
steps {
git 'https://github.com/BitsnBytes99/notes-devops-app'
}
}

stage('Build Docker Image') {
steps {
sh 'docker build -t notes-app .'
}
}

stage('Stop Old Container') {
steps {
sh 'docker stop notes-app || true'
sh 'docker rm notes-app || true'
}
}

stage('Run New Container') {
steps {
sh 'docker run -d -p 80:80 --name notes-app notes-app'
}
}

}

}