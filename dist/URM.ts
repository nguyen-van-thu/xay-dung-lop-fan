enum SPEED {
    SLOW = 1,
    MEDIUM = 2,
    FAST = 3,
}

export class URM {
    private _speed  : SPEED = SPEED.SLOW;
    private _on : boolean ;
    private _radius : number = 5 ;
    private _color : string = "blue";

    constructor(speed: SPEED, on: boolean, radius: number, color: string) {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get on(): boolean {
        return this._on;
    }

    set on(value: boolean) {
        this._on = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
    toString(){
        if (this._on == true){
            console.log(`${this._speed} va ${this._color} va ${this._radius}`);
            console.log(`fan is on : ${this._on}`)
        }else {
            console.log(`${this._color} va ${this._radius}`);
            console.log(`fan is off  :`)
        }
    }

}
let quatbat = new URM(SPEED.FAST, true,10,"yellow")
let quattat = new URM(SPEED.MEDIUM, false,5,"blue");
quatbat.toString();
quattat.toString();