class Service {
  create() {
    console.log(`${this.endpoint} service create`);
  }
  update() {
    console.log(`${this.endpoint} service update`);
  }
  destroy() {
    console.log(`${this.endpoint} service destroy`);
  }
}

export default Service;