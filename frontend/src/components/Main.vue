<template>
  <div class="wrapper d-flex align-content-center align-items-center flex-column" v-bind:class="{ black: applyClass }">
    <hr>
    <div class="form-group mt-2">
      <label for="selectedState">State</label>
      <select id="selectedState" v-model="selectedState" name="selectedState" class="form-control" v-bind:class="{ black: applyClass }" v-on:change="onChangeState">
        <option v-for="state in states" v-bind:key="state.id" v-bind:value="state.id">{{ state.name }}</option>
      </select>
    </div>
    <div class="form-group mt-2">
      <label for="selectedCity">City</label>
      <select id="selectedCity" v-model="selectedCity" name="selectedCity" class="form-control" v-bind:class="{ black: applyClass }" v-on:change="onChangeCity">
        <option v-for="city in cities" v-bind:key="city.id" v-bind:value="city.id">{{ city.name }}</option>
      </select>
    </div>
    <hr>
    <button class="btn btn-large btn-primary mt-5" v-on:click="setColor">Mudar Cor <i class="fas fa-adjust"></i></button>
  </div>
</template>

<script>
import { getStates, getCities } from '@/services/getData.js';

export default {
  name: 'Main',
  data () {
    return {
      cities: [
        { 'id': 0, 'name': '-- Selecione --' }
      ],
      states: [],
      selectedState: 0,
      selectedCity: 0,
      applyClass: false
    };
  },
  mounted () {
    getStates()
      .then(res => {
        let _states = res.data.states;
        _states.unshift({ 'id': 0, 'name': '-- Selecione --' });
        this.states = _states;
        this.selectedState = this.getFromStorage('user_states') || 0;
        if (this.selectedState) {
          // getting correlated cities information
          this.getCities(this.selectedState);
          this.selectedCity = this.getFromStorage('user_cities');
        }
      });
    if (this.getFromStorage('user_color_applied')) {
      this.applyClass = this.getFromStorage('user_color_applied') ? true : false;
    } else {
      this.setStorage('user_color_applied', this.applyClass);
    }
  },
  methods: {
    setStorage (propStorage, thisAttr) {
      localStorage.setItem(propStorage, JSON.stringify({ 'value': thisAttr }));
    },
    getFromStorage (propStorage) {
      if (localStorage.getItem(propStorage)) {
        let _selected = JSON.parse(localStorage.getItem(propStorage)).value;
        return _selected || 0;
      };
    },
    setColor () {
      this.applyClass = !this.applyClass;
      this.setStorage('user_color_applied', this.applyClass);
    },
    getCities (selectedState) {
      getCities(selectedState)
        .then(res => {
          let cities = res.data.cities;
          cities.unshift({ 'id': 0, 'name': '-- Selecione --' });
          this.cities = cities;
        });
    },
    onChangeState (e) {
      if (this.selectedState) {
        this.setStorage('user_states', this.selectedState);
        this.getCities(this.selectedState);
      } else {
        this.setStorage('user_states', 0);
      }
      this.selectedCity = 0;
      this.setStorage('user_cities', this.selectedCity);
    },
    onChangeCity (e) {
      if (this.selectedCity) {
        this.setStorage('user_cities', this.selectedCity);
      }
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
