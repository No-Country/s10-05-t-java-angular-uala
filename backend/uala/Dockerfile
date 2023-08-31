#FROM openjdk:17-jdk-slim AS build
#COPY . .
#RUN mvn clean package -DskipTests

#FROM openjdk:17-jdk-slim
#COPY --from=build target/uala-0.0.1-SNAPSHOT.jar uala.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "uala.jar"]

FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY target/uala-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]