#FROM openjdk:17-jdk-slim AS build
#COPY . .
#RUN mvn clean package -DskipTests

#FROM openjdk:17-jdk-slim
#COPY --from=build target/uala-0.0.1-SNAPSHOT.jar uala.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "uala.jar"]

FROM maven:3.8.3-openjdk-17 as builder

WORKDIR /workdir
COPY pom.xml .
COPY src ./src


RUN mvn package -DskipTests


FROM openjdk:17.0-jdk-slim

COPY --from=builder /workdir/target/uala-0.0.1-SNAPSHOT.jar /myproj.jar


CMD ["java" , "-Djava.security.egd=file:/dev/./urandom", "-jar", "/myproj.jar"]
