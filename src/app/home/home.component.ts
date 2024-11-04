import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // ประกาศตัวแปร user และกำหนดชนิดข้อมูล
  user = {
    name: 'ชื่อผู้ใช้ที่คุณต้องการ',
    phone: 'เบอร์โทรของผู้ใช้'
  };

  constructor() {}

  ngOnInit(): void {}
}
