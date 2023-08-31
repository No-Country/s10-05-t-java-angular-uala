FROM maven:3.9.0-eclipse-temurin-17-alpine AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build target/uala-0.0.1-SNAPSHOT.jar uala.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "uala.jar"]
