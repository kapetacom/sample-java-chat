FROM openjdk:19

ADD kapeta.yml /application/kapeta.yml
ADD target/sample-chat-messages-service.jar /application/sample-chat-messages-service.jar

WORKDIR /application

HEALTHCHECK --interval=5s --timeout=15s --start-period=5s --retries=10 CMD curl --fail http://localhost:80/__kapeta/health || exit 1

CMD [ "java", "-jar", "/application/sample-chat-messages-service.jar" ]
