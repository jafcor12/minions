FROM openjdk:11

WORKDIR /app

ARG JAR_FILE=target/*.jar

COPY ${JAR_FILE} /app/app.jar

EXPOSE 4001

CMD ["java", "-jar", "/app.jar"]