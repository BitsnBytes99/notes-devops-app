# Notes App DevOps Project

This is a simple Notes Application built using:

HTML  
CSS  
JavaScript  

The application is containerized using Docker and deployed automatically using Jenkins CI/CD pipeline on AWS EC2.

## DevOps Stack

- GitHub
- Jenkins
- Docker
- AWS EC2

## CI/CD Workflow

1. Developer pushes code to GitHub
2. GitHub webhook triggers Jenkins
3. Jenkins pipeline runs on EC2 agent
4. Docker image is built
5. Container is deployed on EC2
6. Updated application becomes live automatically