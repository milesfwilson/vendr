import { ProxyState } from "../AppState.js"
import { machineService } from "../Services/MachineService.js"

function _draw() {
  let machine = ProxyState.machine
  let template = ''
  for (const key in machine.items) {
    if (machine.items.hasOwnProperty(key)) {

      template += `
  <div class="col-3 text-center">
  <div class="p-2 m-2 card shadow rounded text-dark">
  <h5>${machine.items[key].name}</h5>
  <h6>$${machine.items[key].price}</h6>`
      if (machine.items[key].quantity <= 0) {
        template +=
          `<button class="btn btn-danger" onclick="app.machineController.buy('${key}')" disabled>Buy</button>
    </div>
    </div>
    `
      } else {
        template +=

          `<button class="btn btn-success" onclick="app.machineController.buy('${key}')">Buy</button>
    </div>
    </div>
    `
      }
    }
  }

  let money = `<h3>You have $${machine.userQuarters}</h3>`
  let inventory = `<h5>Purchases: ${machine.userInventory.join(", ")}</h5>`

  document.getElementById("machine").innerHTML = template
  document.getElementById("inventory").innerHTML = inventory
  document.getElementById("money").innerHTML = money
}



export default class MachineController {
  constructor() {
    console.log("Hello from the controller")
    ProxyState.on("machine", _draw)
    _draw()
  }


  addQuarters() {
    machineService.addQuarters()
  }

  addMoney(moneyAdded) {
    machineService.addMoney(moneyAdded)
  }

  buy(itemName) {

    machineService.buy(itemName)
  }

}