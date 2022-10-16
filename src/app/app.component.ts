import { Component, ViewChild } from '@angular/core';
import { MultipleDraggableModalsComponent } from 'multiple-draggable-modals';
import { ExampleModalComponent } from './components/example-modal/example-modal.component';
import { IgcDockManagerLayout,
  IgcDockManagerPaneType,
  IgcSplitPaneOrientation } from 'igniteui-dockmanager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootstrap';
  Data:any; // Property which can be used to transfer any kind of data to the modal.
  Backdrop:boolean = false;
  Escape:boolean = false;
  Animation:boolean = true;

  @ViewChild(MultipleDraggableModalsComponent, {static: false}) modals!: MultipleDraggableModalsComponent; // <--

  constructor(){}
  ngOnInit(){}

  OpenModal(){
    this.modals.AddModal("ExampleName",ExampleModalComponent,this.Data,this.Backdrop,this.Escape,this.Animation);
  }
  RemoveAll(){
    this.modals.RemoveAll();
  }

  public layout: IgcDockManagerLayout = {
    rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.horizontal,
        panes: [
            {
                type: IgcDockManagerPaneType.splitPane,
                orientation: IgcSplitPaneOrientation.vertical,
                panes: [
                    {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'content1',
                        header: 'Content Pane 1'
                    },
                    {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'content2',
                        header: 'Unpinned Pane 1',
                        isPinned: false
                    }
                ]
            },
            {
                type: IgcDockManagerPaneType.splitPane,
                orientation: IgcSplitPaneOrientation.vertical,
                size: 200,
                panes: [
                    {
                        type: IgcDockManagerPaneType.documentHost,
                        size: 200,
                        rootPane: {
                            type: IgcDockManagerPaneType.splitPane,
                            orientation: IgcSplitPaneOrientation.horizontal,
                            allowEmpty: true,
                            panes: [
                                {
                                    type: IgcDockManagerPaneType.tabGroupPane,
                                    panes: [
                                        {
                                            type: IgcDockManagerPaneType.contentPane,
                                            header: 'Document 1',
                                            contentId: 'content3',
                                            documentOnly: true
                                        },
                                        {
                                            type: IgcDockManagerPaneType.contentPane,
                                            header: 'Document 2',
                                            contentId: 'content4',
                                            documentOnly: true
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'content5',
                        header: 'Unpinned Pane 2',
                        isPinned: false
                    }
                ]
            },
            {
                type: IgcDockManagerPaneType.splitPane,
                orientation: IgcSplitPaneOrientation.vertical,
                panes: [
                    {
                        type: IgcDockManagerPaneType.tabGroupPane,
                        size: 200,
                        panes: [
                            {
                                type: IgcDockManagerPaneType.contentPane,
                                contentId: 'content6',
                                header: 'Tab 1'
                            },
                            {
                                type: IgcDockManagerPaneType.contentPane,
                                contentId: 'content7',
                                header: 'Tab 2'
                            },
                            {
                                type: IgcDockManagerPaneType.contentPane,
                                contentId: 'content8',
                                header: 'Tab 3'
                            },
                            {
                                type: IgcDockManagerPaneType.contentPane,
                                contentId: 'content9',
                                header: 'Tab 4'
                            },
                            {
                                type: IgcDockManagerPaneType.contentPane,
                                contentId: 'content10',
                                header: 'Tab 5'
                            }
                        ]
                    },
                    {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'content11',
                        header: 'Content Pane 2'
                    }
                ]
            }
        ]
    },
    floatingPanes: [
        {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            floatingHeight: 150,
            floatingWidth: 250,
            floatingLocation: { x: 300, y: 200 },
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'content12',
                    header: 'Floating Pane'
                }
            ]
        }
    ]
};
}
