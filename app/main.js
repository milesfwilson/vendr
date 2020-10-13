// import ValuesController from "./Controllers/ValuesController.js";
import MachineController from "./Controllers/MachineController.js"

class App {
  // valuesController = new ValuesController();
  machineController = new MachineController()
}

window["app"] = new App();


// items -> quantity -> price
// user -> quarters -> items purchased
// button -> increase quarter count in user
// draw -> items -> user inventory -> user quarters

