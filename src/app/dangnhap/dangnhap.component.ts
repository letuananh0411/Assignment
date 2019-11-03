import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  list: any;
  user;
  pass;
  kt= true;
  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    this.getData().subscribe(data => {
      this.list = data
      console.log(this.list);
    })
  }
  getData() {
    return this.http.get('../../assets/Students.json')
    //console.log()
  }
  KT(){
    this.kt=true;
    for(let i=0;i<this.list.length;++i){
      if(this.user==this.list[i].username && this.pass==this.list[i].password){
        alert('Chính xác');
      }
      else {
        this.kt = false;
      }
    }
    if(!this.kt){
      alert('Sai thông tin')
    }
  }

}
