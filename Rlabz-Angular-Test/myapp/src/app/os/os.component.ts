import { Component, OnInit } from '@angular/core';
import { OsService } from '../os.service';


interface OS {
  id: number;
  name: string;
}

interface OSDetail {
  recommendation: string;
}

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent implements OnInit {
  osList: OS[] = [];
  selectedOsId: number | null = null;
  recommendation: string | null = null;

  constructor(private osService: OsService) {}

  ngOnInit(): void {
    this.fetchOsList();
  }

  fetchOsList(): void {
    this.osService.getOsList().subscribe(data => {
      this.osList = data;
    });
  }

  fetchOsDetail(id: number): void {
    if (this.selectedOsId === id) {
      return;
    }

    this.selectedOsId = id;
    this.osService.getOsDetail(id).subscribe(data => {
      this.recommendation = data.recommendation;
    });
  }
}
