import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Add } from 'src/app/Modelo/Add';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor( private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(add:Add){
this.service.getCrear(add).subscribe(data=>{
   alert("se agrego con exito");
  
})
  }

}
