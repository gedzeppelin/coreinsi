<template>
  <div class="container schedule-container" id="c-schedule">

    <h3 class="schedule-header">
      {{ $t('schedule-header') }}
    </h3>

    <div class="button-container">
      <button type="button" class="btn-round btn-cc-tw date-button-f"
      @click="position = 0" v-bind:class="{ 'active': position == 0 }">
        {{ $t('schedule-1st-day') }}<br/>{{ $t('schedule-1st-long-day') }}
      </button>
      <button type="button" class="btn-round btn-cc-tw date-button-m"
      @click="position = 1" v-bind:class="{ 'active': position == 1 }">
        {{ $t('schedule-2nd-day') }}<br/>{{ $t('schedule-2nd-long-day') }}
      </button>
      <button type="button" class="btn-round btn-cc-tw date-button-m"
      @click="position = 2" v-bind:class="{ 'active': position == 2 }">
        {{ $t('schedule-3rd-day') }}<br/>{{ $t('schedule-3rd-long-day') }}
      </button>
      <button type="button" class="btn-round btn-cc-tw date-button-l"
      @click="position = 3" v-bind:class="{ 'active': position == 3 }">
        {{ $t('schedule-4th-day') }}<br/>{{ $t('schedule-4th-long-day') }}
      </button>
    </div>

    <transition name="fade" mode="out-in">
      <ul key=1 class="activities-list" v-if="position == 0">
        <li class="activities-container" v-for="schedule in $t('schedule-wednesday')">
          <div class="nrr-helper">
            <span class="activity-title">{{ schedule.title }}</span>
            </br>
            <span class="activity-title-2">{{ schedule.title2 }}</span>
            <div v-if="schedule.speaker != ''">
              <span class="speaker-helper">{{ $i18n.locale == "es" ? "por" : "by" }}</span>
              <span>&nbsp;{{ schedule.speaker }}&nbsp;</span>
              <span class="speaker-helper" v-if="schedule.speakerJob != ''">| {{ schedule.speakerJob }}</span>
            </div>
            {{ schedule.time }}
            </br>
            <span :class="{ 'workshop': !schedule.isPresentation }">
              {{ schedule.isPresentation == null ? "" : schedule.isPresentation ? "PONENCIA" : "TALLER" }}
            </span>
          </div>

          <span class="nrrr-helper" v-if="schedule.description != ''">
            <hr/>
            {{ schedule.description }}
          </span>
        </li>
      </ul>

      <ul key=2 class="activities-list" v-if="position == 1">
        <li class="activities-container" v-for="schedule in $t('schedule-thursday')" >
          <div class="nrr-helper">
            <span class="activity-title">{{ schedule.title }}</span>
            </br>
            <span class="activity-title-2">{{ schedule.title2 }}</span>
            <div v-if="schedule.speaker != ''">
              <span class="speaker-helper">{{ $i18n.locale == "es" ? "por" : "by" }}</span>
              <span>&nbsp;{{ schedule.speaker }}&nbsp;</span>
              <span class="speaker-helper" v-if="schedule.speakerJob != ''">| {{ schedule.speakerJob }}</span>
            </div>
            {{ schedule.time }}
            </br>
            <span :class="{ 'workshop': !schedule.isPresentation }">
              {{ schedule.isPresentation == null ? "" : schedule.isPresentation ? "PONENCIA" : "TALLER" }}
            </span>
          </div>

          <span class="nrrr-helper" v-if="schedule.description != ''">
            <hr/>
            {{ schedule.description }}
          </span>
        </li>
      </ul>

      <ul key=3 class="activities-list" v-if="position == 2">
        <li class="activities-container" v-for="schedule in $t('schedule-friday')" >
          <div class="nrr-helper">
            <span class="activity-title">{{ schedule.title }}</span>
            </br>
            <span class="activity-title-2">{{ schedule.title2 }}</span>
            <div v-if="schedule.speaker != ''">
              <span class="speaker-helper">{{ $i18n.locale == "es" ? "por" : "by" }}</span>
              <span>&nbsp;{{ schedule.speaker }}&nbsp;</span>
              <span class="speaker-helper" v-if="schedule.speakerJob != ''">| {{ schedule.speakerJob }}</span>
            </div>
            {{ schedule.time }}
            </br>
            <span :class="{ 'workshop': !schedule.isPresentation }">
              {{ schedule.isPresentation == null ? "" : schedule.isPresentation ? "PONENCIA" : "TALLER" }}
            </span>
          </div>

          <span class="nrrr-helper" v-if="schedule.description != ''">
            <hr/>
            {{ schedule.description }}
          </span>
        </li>
      </ul>

      <ul key=4 class="activities-list" v-if="position == 3">
        <li class="activities-container" v-for="schedule in $t('schedule-saturday')" >
          <div class="nrr-helper">
            <span class="activity-title">{{ schedule.title }}</span>
            </br>
            <span class="activity-title-2">{{ schedule.title2 }}</span>
            <div v-if="schedule.speaker != ''">
              <span class="speaker-helper">{{ $i18n.locale == "es" ? "por" : "by" }}</span>
              <span>&nbsp;{{ schedule.speaker }}&nbsp;</span>
              <span class="speaker-helper" v-if="schedule.speakerJob != ''">| {{ schedule.speakerJob }}</span>
            </div>
            {{ schedule.time }}
            </br>
            <span :class="{ 'workshop': !schedule.isPresentation }">
              {{ schedule.isPresentation == null ? "" : schedule.isPresentation ? "PONENCIA" : "TALLER" }}
            </span>
          </div>

          <span class="nrrr-helper" v-if="schedule.description != ''">
            <hr/>
            {{ schedule.description }}
          </span>
        </li>
      </ul>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'ContainerSchedule',
  data: function() {
    return {
      position: 0,
    };
  },
  methods: {

  },
  mounted(){
    console.log(this.$t('schedule'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


  /****************************************************************************|
  |* Container configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .schedule-container{
    background-image: linear-gradient($bunting, $bossanova);
    position: relative;
    height: auto;
    z-index: 0;
    text-align: center;
    padding-bottom: 25px;
    &::after{
      content: "";
      background: url(https://redstart.studio/wp-content/uploads/2018/09/adrien-olichon-762138-unsplash.jpg);
      opacity: 0.15;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }
    @include breakpoint(tablet){
      padding-bottom: 50px;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .schedule-header{
    display: inline-block;
    margin-bottom: 0;
    font-weight: bold;
    margin-top: 55px;
    border-bottom: 3px dashed;
    @include breakpoint(tablet){
      font-size: 4.5vw;
      border-bottom: 4px dashed;
    }
    @include breakpoint(desktop){
      font-size: 3.1vw;
    }
    @include breakpoint(large){
      font-size: 2.75vw;
    }
    @include breakpoint(x-large){
      font-size: 1.85vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Buttons ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .button-container{
    margin: 0 auto;
    margin-top: 2.5vh;
    @include breakpoint(tablet){
      width: 80%;
      border-radius: 12px;
      overflow: hidden;
    }
    @include breakpoint(desktop){
      width: 52.5%;
      margin-bottom: 1.25em;
    }
    @include breakpoint(large){
      width: 45%;
      margin-bottom: 1.5em;
    }
    @include breakpoint(x-large){
      width: 28.5%;
      margin-top: 2vh;
      margin-bottom: 1.25em;
    }
  }
  %date-button{
    display:inline-block;
    padding: 0.75em 0;
    font-size: 3.25vw;
    width: 25%;
    border-radius: 0;
    border:0 ;
    @include rm-focus-outline;
    @include breakpoint(tablet){
      padding: 0.5em 0;
      font-size: 2.55vw;
    }
    @include breakpoint(desktop){
      padding: 0.325em 0;
      font-size: 1.65vw;
    }
    @include breakpoint(large){
      padding: 0.35em 0;
      font-size: 1.4vw;
    }
    @include breakpoint(x-large){
      padding: 0.3em 0;
      font-size: 1vw;
    }
  }
  .date-button{
    &-f{
      @extend %date-button;
      border-right: 1px solid $waikawaGray;
    }
    &-m{
      @extend %date-button;
      border-right: 1px solid $waikawaGray;
    }
    &-l{
      @extend %date-button;
    }
  }
  .active{
    background: $waikawaGray;
    color: $white;
    &:hover{
      background: $waikawaGray;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Activities ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .activities-list{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .activities-container{
    text-align: justify;
    margin: 1.5em auto;
    padding: .65em;
    width: 87.5%;
    border-radius: 10px;
    background: RGBA(153, 153, 204, .4);
    font-family: $font-content;
    font-size: 3.5vw;
    @include breakpoint(tablet){
      font-size: 2.2vw;
      width: 85%;
      margin: 1.25em auto;
    }
    @include breakpoint(desktop){
      font-size: 1.3vw;
      width: 75%;
    }
    @include breakpoint(large){
      font-size: 1.1vw;
      width: 65%;
    }
    @include breakpoint(x-large){
      font-size: .85vw;
      width: 50%;
    }
  }
  .activity-title{
    color: $gold;
    font-size: 4.15vw;
    text-align: center;
    @include breakpoint(tablet){
      font-size: 2.85vw;
    }
    @include breakpoint(desktop){
      font-size: 1.65vw;
    }
    @include breakpoint(large){
      font-size: 1.35vw;
    }
    @include breakpoint(x-large){
      font-size: 1.05vw;
    }
    &-2{
      color: $gold;
      font-size: 3.65vw;
      @include breakpoint(tablet){
        font-size: 2.35vw;
      }
      @include breakpoint(desktop){
        font-size: 1.5vw;
      }
      @include breakpoint(large){
        font-size: 1.2vw;
      }
      @include breakpoint(x-large){
        font-size: .95vw;
      }
    }
  }
  .speaker-helper{
    color: #D3D3D3;
    font-size: 3vw;
    @include breakpoint(tablet){
      font-size: 1.75vw;
    }
    @include breakpoint(desktop){
      font-size: 1.15vw;
    }
    @include breakpoint(x-large){
      font-size: .75vw;
    }
  }
  hr{
    @include breakpoint(desktop){
      display: none;
    }
  }
  .nrr-helper{
    @include breakpoint(desktop){
      display: inline-block;
      width: 48.25%;
      vertical-align: middle;
    }
  }
  .nrrr-helper{
    @include breakpoint(desktop){
      display: inline-block;
      width: 50%;
      padding-left: .6em;
      margin-left: auto;
      border-left: 1px solid;
      vertical-align: middle;
    }
  }
  .workshop{
    font-family: $font-fancy;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

  .fade-enter-active, .fade-leave-active {
    transition: opacity .35s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
