export const app: angular.IComponentOptions = {
  template: require('./layout.html'),
  controller: function() {

    this.title = 'UI-tabs app';
    this.select = tab => {
      alert(tab.title);
    };

  }
};
