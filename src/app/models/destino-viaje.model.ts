export class DestinoViaje{

    private selected: boolean;
    public servicios: string[];

    //public nombre: string;
    //public imagenUrl: string;
    //constructor(n:string , u:string){
    //    this.nombre = n;
    //    this.imagenUrl = u;
    //    this.servicios = ['pileta', 'desayuno'];
    //}

    //Es lo mismo decir
    constructor(public nombre:string , public imagenUrl:string){
        this.servicios = ['pileta', 'desayuno'];
    }

    isSelected(){
        return this.selected;
    }

    setSelected(value){
        this.selected = value;
    }

}