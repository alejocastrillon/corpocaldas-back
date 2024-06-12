FROM openjdk:17
COPY target/AccessLayerRequest-0.0.1-SNAPSHOT.jar /app/AccessLayerRequest-0.0.1-SNAPSHOT.jar
WORKDIR /app
EXPOSE 8081
CMD ["java", "-jar", "AccessLayerRequest-0.0.1-SNAPSHOT.jar"]