export interface Menu{
    brand : Brand;
    items : MenuItem[];
}

export interface Brand {
    name  : string | null;
    img  ?: string | null
}

export interface MenuItem{
    path         : string | null;
    label        : string;
    bootsTrapIco : string;
}
