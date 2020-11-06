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

export interface IImage extends IElement {
    type: "image";
    data: {
        file:  {
            url: string;
        }
        caption        : string;
        withBorder     : boolean;
        stretched      : boolean;
        withBackground : boolean;
    }

}

export type Element = IParagraph | IHeader | IList | IDelimiter | IImage;