import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    save() {
      console.log('saving');
      this.set('saving', true);

      let post = this.store.createRecord('post', {});
      post.set('title', this.get('title'));
      post.set('body', this.get('body'));
      post.save().
        then(() => {
          console.log('saved!');
          this.set('title', '');
          this.set('body', '');
          this.set('saving', false);
        });
    }
  }
});
