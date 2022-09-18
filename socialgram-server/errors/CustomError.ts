class CustomAPIError extends Error {
    constructor(message) {
      super(message)
    }
  }
  
  export {};
  module.exports = CustomAPIError