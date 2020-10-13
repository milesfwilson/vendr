import { ProxyState } from "../AppState.js"


class MachineService {
  buy(itemName) {
    let machine = ProxyState.machine
    if (machine.userQuarters >= machine.items[itemName].price) {
      machine.userInventory.push(machine.items[itemName].name)
      machine.userQuarters -= machine.items[itemName].price
      machine.items[itemName].quantity -= 1
    } else {
      console.log("Please Add More Quarters")
    }
    console.log(machine.userInventory)
    ProxyState.machine = machine
  }

  addQuarters() {
    let machine = ProxyState.machine
    machine.userQuarters += .25
    console.log(machine.userQuarters)
    ProxyState.machine = machine
  }

  addMoney(moneyAdded) {
    let machine = ProxyState.machine
    machine.userQuarters += moneyAdded
    ProxyState.machine = machine
  }

  constructor() {
    console.log("Hello from MachineService!")
  }

}


export const machineService = new MachineService()