FROM openjdk:11

ARG JAR_FILE=target/*.jar

WORKDIR /app

COPY ${JAR_FILE} /app/app.jar

EXPOSE 4001

CMD ["java", "-jar", "/app/app.jar"]