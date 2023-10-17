# Kapeta Readme
This file contains some structural information about this service.

This file will be overwritten every time you change the service definition in Kapeta.

## Structure
This service is structured as follows:
* ```src/main/java/com/kapeta/sample/repositories```: Contains anything related to databases
* ```src/main/java/com/kapeta/sample/dto```: Contains the entities used by the service.
* ```src/main/java/com/kapeta/sample/gen```: Contains the generated files that you shouldn't edit directly.
  * These are generated files and should not be edited directly
* ```src/main/java/com/kapeta/sample/gen/rest```: Contains the REST API routes.
* ```src/main/java/com/kapeta/sample/gen/service```: Contains the REST interfaces.
  * These are generated files and should not be edited directly
* ```src/main/java/com/kapeta/sample/service```: Contains the service layer logic. This is where you should add your business logic

## REST API 
To edit the REST API handlers edit the services found here:
* [src/main/java/com/kapeta/sample/service/MessagesService.java](src/main/java/com/kapeta/sample/service/MessagesService.java)

The REST layer itself is generated for you - so your service
will be called as specified within the REST API definition in Kapeta.

You just need to worry about the logic.

The service files will only be generated if they don't already exist - or if they have not
changed since the last time they were generated.


## MongoDB: messages
To use the "messages" MongoDB database - simply create Spring
repositories in this package:

```com.kapeta.sample.repositories.messages```

These will be picked up and used by the database.

If you extend ```com.kapeta.spring.mongo.repository.BaseMongoRepository``` in your repositories
you'll get some extra functionality for free.

### Schema changes
This service uses Mongock to apply database migrations to **messages**. 
You simply define changes in a class annotated with ```@ChangeLog```, 
```@ChangeUnit``` or ```@ChangeSet```.

These classes should be placed in the following package:
```com.kapeta.sample.repositories.messages.migrations```

See Mongock documentation for more information:
[https://docs.mongock.io/v5/migration/index.html](https://docs.mongock.io/v5/migration/index.html)

When you have added migrations you simply (re)start the application to apply them. 


