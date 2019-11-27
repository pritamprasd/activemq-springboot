# activemq-springboot

`rest-client --HTTP--> activemq-sender --OpenWire--> ActiveMQ --OpenWire--> activemq-receiver`

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fpritamprasd%2Factivemq-springboot%2Fbadge%3Fref%3Dmaster&style=flat)](https://actions-badge.atrox.dev/pritamprasd/activemq-springboot/goto?ref=master)

- ActiMQ Download : bit.ly/acmqdwld
- To send a message to activemq-sender :
`
GET http://localhost:8081/api/message/{your-msg}
`
`
e.g., curl -X GET \  http://localhost:8081/api/message/HakunaMatata
`

- Consumed messages will appear as logs in activemq-receiver


- ActiveMQ Admin 
    - user/pass: admin/admin
    - console: http://localhost:8161/admin

- Dependencies Used:
```
                <dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-activemq</artifactId>
		</dependency>
```
