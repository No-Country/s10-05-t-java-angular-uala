FROM eclipse-temurin:17-jdk
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17
COPY --from=build target/uala-0.0.1-SNAPSHOT.jar uala.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "uala.jar"]
