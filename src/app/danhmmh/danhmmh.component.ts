import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-danhmmh',
  templateUrl: './danhmmh.component.html',
  styleUrls: ['./danhmmh.component.css']
})
export class DanhmmhComponent implements OnInit {

  constructor(private http:HttpClient) { }

  list: any;
  t: number=1;
  ngOnInit() {
    this.getData().subscribe(data => {
      this.list = data
      console.log(this.list);
    })
  }
  getData() {
    return this.http.get('../../assets/Subjects.json')
    //console.log()
  }
  N(){
    this.t++;
  }
  M(){
    this.t--;
    if(this.t=1){
      return this.t;
    }
  }


}
