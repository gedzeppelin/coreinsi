<template>
  <div class="container about-container" id="c-about">
    <div class="about-text">

      <h6 class="about-head">{{ $t('about-head') }}</h6>
      <h2 class="about-title">XII COREINSI</h2>
      <p class="about-text-content">
        {{ $t('about-text') }}
      </p>

      <img src="../assets/logo-unsch.png" class="ceis-logo" />

      <button type="button" class="btn-round btn-fb-lr-wp about-btn" @click="scrollToComponent('c-schedule')">
        {{ $t('button-schedule') }}
        <font-awesome-icon icon="arrow-right" />
      </button>

      <h6 class="about-countdown">{{ $t('about-countdown') }}</h6>
      <ul class="countdown">
        <li class="counter">
          <p>{{ weeks }}</p>
          <p class="counter-label">{{ $t('about-countdown-weeks') }}</p>
        </li>
        <li class="counter">
          <p>{{ days }}</p>
          <p class="counter-label">{{ $t('about-countdown-days') }}</p>
        </li>
        <li class="counter">
          <p>{{ hours }}</p>
          <p class="counter-label">{{ $t('about-countdown-hours') }}</p>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerAbout',
  data: function() {
    return {
      weeks: 0,
      days: 0,
      hours: 0,
    };
  },
  methods: {
    updateHours: function() {
      var today = new Date();

      if(today.getMinutes() < 15) this.hours = (23.00 - today.getHours()).toString(); else
      if(today.getMinutes() < 30) this.hours = (23.00 - today.getHours()).toString() + "\u00BE"; else
      if(today.getMinutes() < 45) this.hours = (23.00 - today.getHours()).toString() + "\u00BD";
      else this.hours = (23.00 - today.getHours()).toString() + "\u00BC";

      console.log("Hours left updated: " + this.hours)
    },
  },
  mounted() {
    this.updateHours();
    setInterval(this.updateHours, 30 * 1000);

    var today = new Date(),
    theDay = new Date("2019-06-19"),
    weeksDay = new Date();

    const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const utc2 = Date.UTC(theDay.getFullYear(), theDay.getMonth(), theDay.getDate());

    this.weeks = Math.floor((utc2 - utc1) / (24 * 3600 * 1000 * 7));

    weeksDay.setDate(today.getDate() + (this.weeks * 7));

    const utc3 = Date.UTC(weeksDay.getFullYear(), weeksDay.getMonth(), weeksDay.getDate());

    this.days = Math.floor((utc2 - utc3) / (1000 * 60 * 60 * 24));
  },
}
</script>

<style scoped lang="scss">
  /****************************************************************************|
  |* General configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .about-container{
    background: linear-gradient(to bottom, #42275a, #734b6d);
    // background: linear-gradient($purple2, $purple);
    height: auto;
    font-size: 6vw;
    @include breakpoint(desktop){
      font-size: 3vw;
    }
    @include breakpoint(large){
      font-size: 2vw;
    }
    @include breakpoint(x-large){
      font-size: 1.75vw;
    }
  }
  .about-text{
    margin: 0 auto;
    margin-top: 50px;
    width: 90%;
    text-align: center;
    @include breakpoint(desktop){
      margin-top: 70px;
      width: 75%;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Content configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .about-head{
    // color: $chiffon;
    color: $white;
    margin: 0 auto;
    border-bottom: 3px solid;
    text-align: left;
  }
  .about-title{
    margin: 2.25vh auto;
    color: $gold;
    text-align: left;
  }
  .about-text-content{
    text-align: justify;
    color: $white;
    font-size: 4.5vw;
    @include breakpoint(desktop){
      font-size: 2.75vw;
    }
    @include breakpoint(large){
      font-size: 1.75vw;
    }
    @include breakpoint(x-large){
      font-size: 1.5vw;
    }
  }
  .ceis-logo{
    display: block;
    max-width: 50%;
    margin: 2.5vh auto;
    @include breakpoint(desktop){
      max-width: 30%;
      margin: 2.5% auto;
    }
    @include breakpoint(large){
      max-width: 20%;
    }
    @include breakpoint(x-large){
      margin: 2% auto;
    }
  }
  .about-btn{
    font-size: 75%;
    padding: .75em 1.25em;
    margin-bottom: 5vh;
    @include breakpoint(desktop){
      font-size: 1.75vw;
    }
    @include breakpoint(large){
      font-size: 1.15vw;
    }
    @include breakpoint(x-large){
      font-size: 1vw;
      margin-bottom: 3.5%;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Countdown configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .about-countdown{
    // color: $chiffon;
    color: $white;
    margin: 0 auto;
  }
  .countdown {
    margin: 0 auto;
    border-top: 3px solid $white;
    border-bottom: 3px solid $white;
    padding: 1vh;
    font-size: 8vw;
    font-weight: bold;
    color: $white;
    width: 65%;
    margin-bottom: 5vh;
    @include breakpoint(desktop){
      font-size: 4vw;
      width: 40%;
    }
    @include breakpoint(large){
      font-size: 3vw;
      width: 40%;
    }
    @include breakpoint(x-large){
      font-size: 2.5vw;
      width: 30%;
    }
  }
  .counter {
    display: inline-block;
    width: 33.33%;
  }
  .counter-label {
    font-size: 4vw;
    @include breakpoint(desktop){
      font-size: 2vw;
    }
    @include breakpoint(large){
      font-size: 1.5vw;
    }
    @include breakpoint(x-large){
      font-size: 1.25vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|
</style>
