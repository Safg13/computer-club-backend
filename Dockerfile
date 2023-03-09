FROM openjdk:19
ARG jarFile=target/registrationform-0.0.1-SNAPSHOT.jar
WORKDIR /opt/app
COPY ${jarFile} library.jar
EXPOSE 5432
ENTRYPOINT ["java", "-jar", "library.jar"]