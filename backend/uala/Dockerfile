FROM maven:3.9.0-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17
COPY --from=build target/uala-0.0.1-SNAPSHOT.jar uala.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "uala.jar"]
