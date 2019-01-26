<template>
  <div class="container d-flex align-content-center align-items-center flex-column">
    <hr>
    <div class="form-group mt-2">
      <label for="selectedState">State</label>
      <select id="selectedState" v-model="selectedState" name="selectedState" class="form-control" v-on:change="onChangeState">
        <option v-for="state in states" v-bind:key="state.id" v-bind:value="state.id">{{ state.name }}</option>
      </select>
    </div>
    <div class="form-group mt-2">
      <label for="selectedCity">City</label>
      <select id="selectedCity" v-model="selectedCity" name="selectedCity" class="form-control" v-on:change="onChangeCity">
        <option v-for="city in cities" v-bind:key="city.id" v-bind:value="city.id">{{ city.name }}</option>
      </select>
    </div>
    <hr>
    <!-- <div class="form-group mt-2">
      <label for="multiselect-state">State</label>
      <multiselect
        v-model="selectedState" :options="states" name="multiselect-state" label="name" :searchable="true" :allow-empty="false" track-by="name" v-on:change="onChangeState"
      ></multiselect>
    </div>
    <div class="form-group mt-2">
       <label for="multiselect-city">City</label>
      <multiselect
        v-model="selectedCity" :options="cities" name="multiselect-city" label="name" :searchable="true" :allow-empty="false" track-by="name" v-on:change="onChangeCity"
      ></multiselect>
    </div> -->
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
      selectedCity: 0
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
  },
  methods: {
    setStorage (propStorage, thisAttr) {
      if (localStorage.getItem(propStorage)) {
        localStorage.setItem(propStorage, thisAttr);
      } else {
        localStorage.setItem(propStorage, thisAttr);
      }
    },
    getFromStorage (propStorage) {
      if (localStorage.getItem(propStorage)) {
        let _selected = localStorage.getItem(propStorage);
        return _selected || 0;
      };
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
