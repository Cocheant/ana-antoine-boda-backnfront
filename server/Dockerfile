# Step 1: Use an official Java runtime as a parent image
FROM openjdk:17-jdk-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the jar file produced by Spring Boot build into the container
COPY target/weddingApp-0.0.1-SNAPSHOT.jar weddingapp.jar

# Step 4: Expose the port that your Spring Boot app runs on (usually 8080)
EXPOSE 8080

# Step 5: Run the jar file
ENTRYPOINT ["java", "-jar", "weddingapp.jar"]
