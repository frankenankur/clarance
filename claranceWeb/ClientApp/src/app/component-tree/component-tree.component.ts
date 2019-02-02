import { ComponentTreeService } from './component-tree.service';
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'src/assets/types/treeNode';

@Component({
  selector: 'app-component-tree',
  templateUrl: './component-tree.component.html',
  styleUrls: ['./component-tree.component.sass']
})
export class ComponentTreeComponent implements OnInit {

data: TreeNode[] = [];
isLoadingResults = true;

  constructor(private api: ComponentTreeService) { }

  ngOnInit() {
    this.api.getNodes()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

  }

}
