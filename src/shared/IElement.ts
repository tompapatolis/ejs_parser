interface IElement {
    type: string;    
}

export interface IParagraph extends IElement {
    type: "paragraph";
    data: {
        text: string;
    }
}

export interface IHeader extends IElement {
    type: "header";
    data: {
        text: string;
        level: number;
    }
}

export interface IList extends IElement {
    type: "list";
    data: {
        style: string;
        items: string[];
    }
}

export interface IDelimiter extends IElement {
    type: "delimiter";
    data: {}
}

export interface IQuote extends IElement {
    type: "quote";
    data: {
        text: string;
        caption: string;
        alignment: string;
    }
}

export interface IImage extends IElement {
    type: "image";
    data: {       
        url            : string;       
        caption        : string;
        withBorder     : boolean;
        stretched      : boolean;
        withBackground : boolean;
    }

}

export interface IEmbed extends IElement {
    type: "embed";
    data: {
        service : string;
        source  : string;
        embed   : string;
        width   : number;
        height  : number;
        caption : string;
    }
}

export interface ICode extends IElement {
    type: "code";
    data: {
        code: string;
    }
}

export type Element = IParagraph | IHeader | IList | IDelimiter | IImage | IQuote | IEmbed | ICode;