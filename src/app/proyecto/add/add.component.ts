import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { List } from 'src/app/Modelo/List';
import { ServiceService } from 'src/app/Service/service.service';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
  constructor(private fB: FormBuilder, private router: Router, private service: ServiceService) { }
 
 
 
  addForm= new FormGroup({
        
    adn: new FormControl('')
  
  })
 

  ngOnInit():void{}
  
onGuardar(add:List) {

  console.log("esto es estoy ene l component "+add)
this.service.Crear(add).subscribe(data=>{
  alert("ser agrego con exito")
  this.router.navigate(["list"]);
})
  }
  }   
    

