<template>
  <div class="container schedule-container" id="c-schedule">
    <h3 class="schedule-header">
      {{ $t('schedule-header') }}
    </h3>
    <div class="button-date">
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
      <ul key=1 class="task-list" v-if="position == 0">
        <li class="task-container" v-for="schedule in $t('schedule')" :key="schedule.title" >
          <div style="display: block; margin-bottom: 10px;">
            <span class="title-left">{{ schedule.title }}</span>
            <span class="title-right">{{ schedule.time1 }}<br/>{{ schedule.time2 }}</span>
            <span class="pre-speaker">by</span>
            <span class="speaker">&nbsp;{{ schedule.speaker }}&nbsp;</span>
            <span class="speaker-job">| {{ schedule.speakerJob }}</span>
          </div>
          {{ schedule.description }}
        </li>
      </ul>


      <ul key=2 class="task-list" v-if="position == 1">
        <li class="task-container" v-for="schedule in $t('schedule')" :key="schedule.title" >
          <div style="display: block; margin-bottom: 10px;">
            <span class="title-left">{{ schedule.title }}</span>
            <span class="title-right">{{ schedule.time1 }}<br/>{{ schedule.time2 }}</span>
            <span class="pre-speaker">by</span>
            <span class="speaker">&nbsp;{{ schedule.speaker }}&nbsp;</span>
            <span class="speaker-job">| {{ schedule.speakerJob }}</span>
          </div>
          {{ schedule.description }}
        </li>
      </ul>

      <ul key=3 class="task-list" v-if="position == 2">
        <li class="task-container" v-for="schedule in $t('schedule')" :key="schedule.title" >
          <div style="display: block; margin-bottom: 10px;">
            <span class="title-left">{{ schedule.title }}</span>
            <span class="title-right">{{ schedule.time1 }}<br/>{{ schedule.time2 }}</span>
            <span class="pre-speaker">by</span>
            <span class="speaker">&nbsp;{{ schedule.speaker }}&nbsp;</span>
            <span class="speaker-job">| {{ schedule.speakerJob }}</span>
          </div>
          {{ schedule.description }}
        </li>
      </ul>

      <ul key=4 class="task-list" v-if="position == 3">
        <li class="task-container" v-for="schedule in $t('schedule')" :key="schedule.title" >
          <div style="display: block; margin-bottom: 10px;">
            <span class="title-left">{{ schedule.title }}</span>
            <span class="title-right">{{ schedule.time1 }}<br/>{{ schedule.time2 }}</span>
            <span class="pre-speaker">by</span>
            <span class="speaker">&nbsp;{{ schedule.speaker }}&nbsp;</span>
            <span class="speaker-job">| {{ schedule.speakerJob }}</span>
          </div>
          {{ schedule.description }}
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
  $bunting: #151853;
  $bossanova: #42275a;
  $waikawaGray: #5D5E8D;

  .schedule-container{
    background-image: linear-gradient($bunting, $bossanova);
    position: relative;
    height: auto;
    z-index: 0;
    text-align: center;
    &::after{
      content: "";
      background: url(https://redstart.studio/wp-content/uploads/2018/09/adrien-olichon-762138-unsplash.jpg);
      // @include background-fill;
      opacity: 0.15;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }
  }

  .schedule-header{
    font-weight: bold;
    width: 70%;
    margin: 0 auto;
    margin-top: 60px;
    border-bottom: 3px dashed;
    @include breakpoint(desktop){
      width: 30%;
      border-bottom: 4px dashed;
    }
  }

  .button-date{
    margin: 0 auto;
    margin-top: 2.5vh;
  }
  %date-button{
    display:inline-block;
    padding: 0.75em 0;
    font-size: 3.25vw;
    width: 25%;
    border-radius: 0;
    border:0 ;
    @include rm-focus-outline;
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
  }

  .task-list{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .task-container{
    text-align: justify;
    margin: 1.5em auto;
    padding: .65em;
    width: 87.5%;
    // border: 2px solid $blueBell;
    border-radius: 10px;
    background: RGBA(153, 153, 204, .4);
    font-family: $font-content;
    font-size: 3.5vw;
  }

  .title{
    &-left{
      float: left;
      width: 80%;
      color: $gold;
      font-size: 4vw;
    }
    &-right{
      float:right;
      text-align: right;
      width: 20%;
      font-size: 4vw;
    }
  }
  .pre-speaker{
    color: #D3D3D3;
    font-size: 3vw;
  }
  .speaker{
    font-size: 3.5vw;
  }
  .speaker-job{
    font-size: 3vw;
    color: #D3D3D3;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .35s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
