import { Snack } from "./Models/VendingMachines.js";
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []


money = 10

  /** @type {import('./Models/VendingMachines').Snack[]} */
snacks = [
  new Snack("MintChip","3.00","/assets/img/fudge.jpg",0),
  new Snack("CookieDough","2.50","/assets/img/fudge.jpg",0),
  new Snack("Vanilla","1.00","/assets/img/fudge.jpg",0),
  new Snack("Chocolate","1.75","/assets/img/fudge.jpg",0),
  new Snack("ChocolateFudge","2.25","/assets/img/fudge.jpg",0),
  new Snack("RedVelvet","3.75","/assets/img/fudge.jpg",0)
]






}



export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
