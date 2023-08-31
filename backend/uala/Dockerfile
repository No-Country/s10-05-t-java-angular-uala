#FROM openjdk:17-jdk-slim AS build
#COPY . .
#RUN mvn clean package -DskipTests

#FROM openjdk:17-jdk-slim
#COPY --from=build target/uala-0.0.1-SNAPSHOT.jar uala.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "uala.jar"]

FROM openjdk:17-jdk-slim AS build

COPY pom.xml mvnw ./ COPY .mvn .mvn 
RUN ./mvnw dependency:resolve

COPY src src 
RUN ./mvnw package

FROM openjdk:17-jdk-slim WORKDIR demo 
COPY --from=build target/uala-0.0.1-SNAPSHOT.jar demo.jar 
ENTRYPOINT ["java", "-jar", "demo.jar"]