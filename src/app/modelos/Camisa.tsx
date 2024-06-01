export class Camisa{
    public codCamisa: number;
    public marcaCamisa: string;
    public codTallaCamisa: string;
    public colorCamisa: string;
    public imagenCamisa: string;
    public imagenCamisaBase64: string;

    constructor(codc: number, marc: string, talc: string, colc: string, imag: string, base: string){
        this.codCamisa = codc;
        this.marcaCamisa = marc;
        this.codTallaCamisa = talc;
        this.colorCamisa = colc;
        this.imagenCamisa = imag;
        this.imagenCamisaBase64 = base;
    }
}