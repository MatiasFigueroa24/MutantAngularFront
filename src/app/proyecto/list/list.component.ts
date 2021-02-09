import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/Modelo/List';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  list: List[];
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getList().subscribe((data) => {
      this.list = data;

     
    });
    this.service.getList().subscribe(res => this.list=res)
  }
}

