Notes App DevOps Project

This project demonstrates a beginner-level DevOps CI/CD pipeline by deploying a simple Notes Web Application using Docker and Jenkins on AWS EC2.

The main goal of this project is to understand how modern DevOps tools work together to automate application deployment. Instead of manually building and deploying the application every time the code changes, the entire process is automated through a Jenkins pipeline.

The application itself is intentionally simple, while the focus of the project is on DevOps concepts such as containerization, automation, and continuous deployment.

Application

The Notes App is a basic web application that allows users to write and store notes in the browser.

Technologies used to build the application:

HTML

CSS

JavaScript

The application files are served using Nginx inside a Docker container.

DevOps Stack

The following tools and technologies were used in this project.

Tool	Purpose
GitHub	Source code repository
Jenkins	CI/CD automation
Docker	Containerization of the application
Docker Compose	Container deployment
AWS EC2	Cloud server used for deployment

<img width="1569" height="337" alt="diagram-export-3-6-2026-9_44_22-PM" src="https://github.com/user-attachments/assets/3fd1f92b-e3cb-4ee7-b6b4-cd825285beb6" />


Example:

Developer → GitHub → Jenkins → Docker → AWS EC2 → Notes Application

You can insert your architecture image here once created.

CI/CD Workflow

The following workflow is implemented in this project.

The developer pushes the code changes to the GitHub repository.

A GitHub webhook automatically triggers the Jenkins pipeline.

Jenkins pulls the latest source code from the repository.

The Jenkins pipeline runs on a Jenkins agent configured on an EC2 instance.

Docker builds the application image using the Dockerfile.

The existing container (if running) is stopped.

A new container is deployed using the updated image.

The updated Notes Application becomes available on the EC2 instance.

This process ensures that every code update is automatically deployed without manual intervention.

Project Structure
notes-devops-app
│
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
└── README.md

Explanation of important files:

Dockerfile – defines how the Docker image for the application is built

docker-compose.yml – manages container deployment

Jenkinsfile – defines the CI/CD pipeline stages

HTML/CSS/JS files – source code for the Notes application

Jenkins Pipeline

The Jenkins pipeline is responsible for automating the deployment process.

The pipeline includes the following stages:

Code

Jenkins clones the latest version of the project from the GitHub repository.

Build

Docker builds the application image using the Dockerfile.

Test

Basic validation stage (can be extended with automated tests).

Deploy

The old container is removed and a new container is started using the updated Docker image.

(Add Jenkins pipeline screenshot here)

Deployment

The application is deployed on an AWS EC2 instance where the Jenkins agent is configured.

Deployment process:

Jenkins connects to the EC2 agent

Docker builds the image

Docker Compose runs the container

The application becomes accessible through the EC2 public IP

Example access:

http://<EC2-PUBLIC-IP>

(Add deployment screenshot here)

Key Concepts Learned

Through this project, the following DevOps concepts were practiced:

Continuous Integration (CI)

Continuous Deployment (CD)

Docker containerization

Jenkins pipeline automation

GitHub webhooks

Cloud deployment using AWS EC2
