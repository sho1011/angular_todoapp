import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-download',
  templateUrl: './csv-download.component.html',
  styleUrls: ['./csv-download.component.css']
})
export class CsvDownloadComponent implements OnInit {

  records = [
    ['id', '名前', '年齢'],
    ['00001', '中瀬将健', 23],
    ['00002','山田太郎', 40]
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleDownload(): void{
    let data: string = this.records.map((record)=>record.join(',')).join('\r\n')
    let bom  = new Uint8Array([0xEF, 0xBB, 0xBF])
    let blob = new Blob([bom,data], {type: 'text/csv'})
    let url = (window.URL || window.webkitURL).createObjectURL(blob);
    let link = document.createElement('a');
    link.download = 'okaimonolist.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
