import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    save() {
      console.log('saving');
      let post = this.get('model');
      post.set('title', 'Hey emberfire!');
      post.set('body', 'wohoooooo!!!');
      post.save().
        then(() => {
          console.log('saved!');
        });
    }
  }
});
