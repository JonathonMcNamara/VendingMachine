import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";


function _updateSnacks(){
    let snacks = ProxyState.snacks
}



function _drawSnacks(){
    let snacks = ProxyState.snacks
    let template = ''
    snacks.forEach( s => template += s.Template)
    document.getElementById("snacks").innerHTML = template
}

function _makeMoney(){
    snacksService.makeMoney()
    document.getElementById("money").innerText = ProxyState.money
  }

export class SnacksController{
    constructor(){
        console.log(ProxyState.snacks);
        _drawSnacks()
    }
    total(name){
        snacksService.total(name)
        _updateSnacks()
    }
}