export interface PanelTemplate {
    title:string, 
    panelFrame:any, 
    dataTemplate:any, 
    backdrop:boolean, 
    externalWindows:boolean, 
    animation:boolean, 
    center?:boolean, 
    position?:{top:string, left:string}
}

export interface PanelTemplateData {
    template:any;
    templateData:any;
}