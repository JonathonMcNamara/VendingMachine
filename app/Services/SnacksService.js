import { ProxyState } from "../AppState.js";

class SnacksService{

total(name){
    console.log("adding", name);
    let snack = ProxyState.snacks.find(s => s.name == name)
    console.log(name)
}

makeMoney(){
    let money = ProxyState.money
    money += 10
}

}














export const snacksService = new SnacksService()