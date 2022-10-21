export interface ResponseBody{
    success: boolean;
    query: string;
    userName:string;
    actionType:string;
    intent: string;
    data: data;
}

export interface Entity{
    entity: string,
    start: number,
    end: number,
    confidence_entity: number,
    value:  string,
    extractor: string
    role: string
}

export interface data{
    entityList: Entity[],
    intent: string
}
 