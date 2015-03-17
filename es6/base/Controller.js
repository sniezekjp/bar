class Controller {
  edit() {
    console.log('editing');
  }
  update() {
    this._service.update();
  }
  create() {
    this._service.create();
  }
  destroy() {
    this._service.destroy();
  }
}
export default Controller;