FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
FROM openjdk:17.0.1-jdk-slim
COPY  target/uala-0.0.1-SNAPSHOT.jar uala.jar
ENTRYPOINT ["java", "-jar", "uala.jar"]

