export default class Machine {
  constructor() {
    this.userQuarters = 0
    this.userInventory = []
    this.items = {
      chips: {
        name: "Chips",
        price: 1.00,
        quantity: 3
      },
      cookies: {
        name: "Cookies",
        price: 1.25,
        quantity: 3
      },
      candy: {
        name: "Candy",
        price: .75,
        quantity: 3
      },
      soda: {
        name: "Soda",
        price: 1.50,
        quantity: 3

      },
      clif: {
        name: "Clif-Bar",
        price: 2.00,
        quantity: 3

      },
      cheezeit: {
        name: "Cheeze-Its",
        price: 1.25,
        quantity: 3

      },
      arizona: {
        name: "Arizona",
        price: .75,
        quantity: 3

      },
      vitamin: {
        name: "Vitamin Water",
        price: 1.00,
        quantity: 3

      }
    }

  }

}