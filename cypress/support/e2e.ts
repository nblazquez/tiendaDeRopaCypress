import './commands'
import './login'

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
    namespace Cypress {
      interface Chainable {
        search(value: string): Chainable<Element>;
        login(mail: string, password: string): Chainable<Element>;
      }
    }
  }