import { AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, ElementRef, Injector, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkPortal, DomPortalHost, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-external-frame',
  templateUrl: './external-frame.component.html',
  styleUrls: ['./external-frame.component.css']
})
export class ExternalFrameComponent implements OnInit, AfterViewInit {

  @ViewChild('portal') templatePortalContent: TemplateRef<unknown> | undefined;
  @Input() title:string = "";

  private externalWindow:any;
  templatePortal: TemplatePortal<any> | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private _viewContainerRef: ViewContainerRef
  ) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.templatePortal = new TemplatePortal(this.templatePortalContent!, this._viewContainerRef);
    this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
    this.externalWindow.document.write('<html><head><title>' + this.title + '</title></head><body>');

    const host = new DomPortalHost(
      this.externalWindow.document.body,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );
    host.attach(this.templatePortal);

  }

  ngOnDestroy(){
    this.externalWindow.close()
  }

}
