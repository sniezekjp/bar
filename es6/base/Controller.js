class Controller {
  edit() {
    return true;
  }
  update() {
    return this._service.update();
  }
  create() {
    return this._service.create();
  }
  destroy() {
    return this._service.destroy();
  }
}
export default Controller;