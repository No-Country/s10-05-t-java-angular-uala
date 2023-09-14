FROM maven:3.8.5-openjdk-17 AS build
RUN mvn clean package -DskipTests
FROM openjdk:17.0.1-jdk-slim
COPY  --from=build /target/uala-0.0.1-SNAPSHOT.jar uala.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "uala.jar"]

