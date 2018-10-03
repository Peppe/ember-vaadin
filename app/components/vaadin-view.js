import Component from '@ember/component';

export default Component.extend({
  name: "",
  input: "",
  actions: {
    clicked() {
      this.set("name", this.input);
    }
  }
});
