import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
list:any;
pushh:any;
account:any;
  constructor(private http:HttpClient) { }
  getTodayDate() {
    let ndate = new Date();
    return ndate;
  }
  ngOnInit() {
    this.getData().subscribe(data => {
      this.list = data
      console.log(this.list);
    })
  }
  getData(){
    return this.http.get('../../assets/Students.json')
  }
  addlist(acc){
    this.pushh.push(acc);
  }
}
