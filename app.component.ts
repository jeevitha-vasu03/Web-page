import { Component } from '@angular/core';
import { Model } from './model';
import { Model1 } from './model1';
import { Model2 } from './model2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webPage';
  content1 : Model[] =[ 
    new Model("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9UkV94heEquDnJmOdogHz44JUEipI-SUsQ&usqp=CAU",
    "JAVA", 
    "Java is a programming language and computing platform first released by Sun Microsystems in 1995.")
    ];

content2 : Model1[] =[
  new Model1("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
  "ANGULAR", 
  "Angular is an open-source, JavaScript framework written in TypeScript.")
];

content3 :Model2[] =[
  new Model2("https://static.javatpoint.com/springboot/images/spring-boot-tutorial.jpg",
  "SPRING BOOT",
  "Spring Boot is an open source Java-based framework used to create a micro Service")
]
}