class CustomError extends Error {
  constructor(message = "Something went wrong", code = 500) {
    super();
    this.message = message;
    this.code = code;
    this.name = "Logic Error";
  }
}

module.exports = CustomError;
