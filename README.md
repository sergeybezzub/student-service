## Simple sample of NodeJS Microservice (REST API and persisting to MySQL)

# How to test localy

- ✅ You should have **NodeJS** and **Docker** engine installed 
- ✅ Load and start MySQL docker container
  ```sh 
  docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=school -p 3306:3306 -d mysql:latest
- ✅ Clone project from github
- ✅ Setup dependencies 
  ```sh
  npm install express mysql2

- ✅ Connect to database from console `docker exec -it mysql-container mysql -uroot -proot`

- ✅ Create `school` schema and `student` table
  ```sh
   CREATE DATABASE school;
   USE school;
   CREATE TABLE student (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   class VARCHAR(50) NOT NULL
   );
  
- ✅ Start microservice
  ```sh
   node server.js
  
- ✅ Add new student to database
  ```sh
   `curl -X POST http://localhost:3000/students -H "Content-Type: application/jso{"id":1,"name":"Johan Dow","class":"10А"}`
   `curl -X POST http://localhost:3000/students -H "Content-Type: application/jso{"id":1,"name":"Johan Dow","class":"10А"}`
- ✅ Get students list by class name
  ```sh
   `http://localhost:3000/students/10A`



   




