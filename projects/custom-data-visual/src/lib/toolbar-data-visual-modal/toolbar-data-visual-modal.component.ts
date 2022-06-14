import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'lib-toolbar-data-visual-modal',
  templateUrl: './toolbar-data-visual-modal.component.html',
  styleUrls: ['./toolbar-data-visual-modal.component.scss']
})
export class ToolbarDataVisualModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ToolbarDataVisualModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {console.log(this.data);
  }

  close() {
    this.dialogRef.close();
  }

}
