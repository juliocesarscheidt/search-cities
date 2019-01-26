import Vue from 'vue';
import Main from '@/components/Main';

describe('Main.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Main);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('label[for="selectedState"]').textContent)
      .to.equal('State');
  });
});
