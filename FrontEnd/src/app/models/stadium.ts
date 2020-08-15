export interface Stadium {
    sport:string,
    MinPlayer:number,
    MaxPlayer:number,
    price:number,
    openHeure:string,
    closeHeure:string,
    surface:number
}

export interface StadiumSuccessCreate{
    success:string
}