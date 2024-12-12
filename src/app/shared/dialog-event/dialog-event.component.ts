import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { Chorister, Solister } from '../interface/event.interface';

@Component({
  selector: 'app-dialog-event',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTableModule],
  templateUrl: './dialog-event.component.html',
  styleUrl: './dialog-event.component.scss'
})
export class DialogEventComponent implements OnInit {
  readonly data = inject(MAT_DIALOG_DATA);
  choristers: Chorister[] = [];
  solisters: Solister[] = [];
  displayedColumnsChoristers: string[] = ['name', 'role'];
  displayedColumnsSolisters: string[] = ['name', 'songs'];

  ngOnInit() {
    console.log(this.data);
    this.choristers = this.data.choristers.sort((a: Chorister, b: Chorister) => a.role.localeCompare(b.role));
    this.solisters = this.data.solisters;
  }
}
