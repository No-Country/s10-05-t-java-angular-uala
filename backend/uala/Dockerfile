#FROM openjdk:17-jdk-slim AS build
#COPY . .
#RUN mvn clean package -DskipTests

#FROM openjdk:17-jdk-slim
#COPY --from=build target/uala-0.0.1-SNAPSHOT.jar uala.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "uala.jar"]

FROM eclipse-temurin:17-jdk-focal
WORKDIR /app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY src ./src
CMD ["./mvnw", "spring-boot:run"]