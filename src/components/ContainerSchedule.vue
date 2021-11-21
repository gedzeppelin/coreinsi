<template>
  <div class="container schedule-container" id="c-schedule">
    <div class="schedule-bg" />

    <h2 class="schedule-header">
      {{ $t("schedule_header") }}
    </h2>

    <div class="button-container">
      <button
        type="button"
        class="btn-round btn-cc-tw date-button-f"
        @click="position = 0"
        v-bind:class="{ active: position == 0 }"
      >
        {{ $t("schedule_1st_day") }}<br />{{ $t("schedule_1st_long_day") }}
      </button>
      <button
        type="button"
        class="btn-round btn-cc-tw date-button-m"
        @click="position = 1"
        v-bind:class="{ active: position == 1 }"
      >
        {{ $t("schedule_2nd_day") }}<br />{{ $t("schedule_2nd_long_day") }}
      </button>
      <button
        type="button"
        class="btn-round btn-cc-tw date-button-m"
        @click="position = 2"
        v-bind:class="{ active: position == 2 }"
      >
        {{ $t("schedule_3rd_day") }}<br />{{ $t("schedule_3rd_long_day") }}
      </button>
      <button
        type="button"
        class="btn-round btn-cc-tw date-button-l"
        @click="position = 3"
        v-bind:class="{ active: position == 3 }"
      >
        {{ $t("schedule_4th_day") }}<br />{{ $t("schedule_4th_long_day") }}
      </button>
    </div>

    <div
      :key="schedulesIndex"
      v-for="(scheduleS, scheduleSName, schedulesIndex) in $t('schedules')"
    >
      <ul
        class="activities-list activities-a"
        v-show="position == schedulesIndex"
      >
        <li
          class="activities-container"
          :key="scheduleName"
          v-for="(schedule, scheduleName) in scheduleS"
          :class="{ 'break-helper': schedule.isBreak }"
        >
          <div
            class="nr-activity-helper"
            :class="{ 'full-width': schedule.description === undefined }"
          >
            <span class="activity-title">{{ schedule.title }}</span>
            <br />
            <span class="activity-title-2">{{ schedule.title2 }}</span>
            <div v-if="schedule.speaker">
              <span
                >{{
                  $t(
                    "schedules." +
                      scheduleSName +
                      "." +
                      scheduleName +
                      ".speaker"
                  )
                }}&nbsp;</span
              >
              <span class="speaker-helper" v-if="schedule.speakerJob"
                >|
                {{
                  $t(
                    "schedules." +
                      scheduleSName +
                      "." +
                      scheduleName +
                      ".speakerJob"
                  )
                }}</span
              >
            </div>
            {{ schedule.time }}
            <br />
            <span
              v-if="schedule.isPresentation !== undefined"
              :class="{ workshop: !schedule.isPresentation }"
            >
              {{
                schedule.isPresentation
                  ? $t("schedule_presentation")
                  : $t("schedule_workshop")
              }}
            </span>
          </div>

          <span class="nr-description-helper" v-if="schedule.description">
            <hr />
            {{ schedule.description }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContainerSchedule",
  data: function () {
    return {
      position: 0,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/****************************************************************************|
  |* Animations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
@include keyframes(schedule-a) {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Container configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.schedule-container {
  background-image: linear-gradient($bunting, $bossanova);
  position: relative;
  height: auto;
  z-index: 0;
  text-align: center;
  & > .schedule-bg {
    background-image: url(https://redstart.studio/wp-content/uploads/2018/09/adrien-olichon-762138-unsplash.jpg);
    opacity: 0.1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    background-size: cover;
    z-index: -1;
  }
  @include breakpoint(tablet) {
    padding-bottom: 7rem;
    padding-top: 7rem;
  }
  @include breakpoint(desktop) {
    padding-bottom: 8rem;
    padding-top: 8rem;
  }
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Header ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.schedule-header {
  display: inline-block;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: bold;
  border-bottom: 3px dashed;
  @include breakpoint(tablet) {
    border-bottom: 4px dashed;
  }
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Buttons ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.button-container {
  margin: 0 auto;
  margin-top: 2.5vh;
  @include breakpoint(tablet) {
    width: 80%;
    border-radius: 12px;
    overflow: hidden;
  }
  @include breakpoint(desktop) {
    width: 52.5%;
    margin-bottom: 1.25em;
  }
  @include breakpoint(large) {
    width: 45%;
    margin-bottom: 1.5em;
  }
  @include breakpoint(x-large) {
    width: 28.5%;
    margin-top: 2vh;
    margin-bottom: 1.25em;
  }
}
%date-button {
  display: inline-block;
  padding: 0.75em 0;
  font-size: 3.25vw;
  width: 25%;
  border-radius: 0;
  border: 0;
  @include rm-focus-outline;
  @include breakpoint(tablet) {
    padding: 0.5em 0;
    font-size: 2.55vw;
  }
  @include breakpoint(desktop) {
    padding: 0.325em 0;
    font-size: 1.65vw;
  }
  @include breakpoint(large) {
    padding: 0.35em 0;
    font-size: 1.4vw;
  }
  @include breakpoint(x-large) {
    padding: 0.3em 0;
    font-size: 1vw;
  }
}
.date-button {
  &-f {
    @extend %date-button;
    border-right: 1px solid $waikawaGray;
  }
  &-m {
    @extend %date-button;
    border-right: 1px solid $waikawaGray;
  }
  &-l {
    @extend %date-button;
  }
}
.active {
  background: $waikawaGray;
  color: $white;
  &:hover {
    background: $waikawaGray;
  }
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Activities ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.activities-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  transition: all 1s;
}
.activities-a {
  opacity: 0;
  @include animation-mix(schedule-a, $duration: 0.7s);
}
.activities-container {
  text-align: justify;
  margin: 1.5em auto;
  padding: 0.65em;
  width: 87.5%;
  border-radius: 10px;
  background: RGBA(153, 153, 204, 0.4);
  font-family: $font-content;
  font-size: 3.5vw;
  @include breakpoint(tablet) {
    font-size: 2.2vw;
    width: 85%;
    margin: 1.25em auto;
  }
  @include breakpoint(desktop) {
    font-size: 1.3vw;
    width: 75%;
  }
  @include breakpoint(large) {
    font-size: 1.1vw;
    width: 65%;
  }
  @include breakpoint(x-large) {
    font-size: 0.85vw;
    width: 50%;
  }
}
.break-helper {
  text-align: center;
  width: 43.75%;
  @include breakpoint(tablet) {
    width: 30%;
  }
  @include breakpoint(desktop) {
    width: 17%;
  }
  @include breakpoint(large) {
    width: 13%;
  }
  @include breakpoint(x-large) {
    width: 10.5%;
  }
}
.activity-title {
  color: $gold;
  font-size: 4.15vw;
  text-align: center;
  @include breakpoint(tablet) {
    font-size: 2.85vw;
  }
  @include breakpoint(desktop) {
    font-size: 1.65vw;
  }
  @include breakpoint(large) {
    font-size: 1.35vw;
  }
  @include breakpoint(x-large) {
    font-size: 1.05vw;
  }
  &-2 {
    color: $gold;
    font-size: 3.65vw;
    @include breakpoint(tablet) {
      font-size: 2.35vw;
    }
    @include breakpoint(desktop) {
      font-size: 1.5vw;
    }
    @include breakpoint(large) {
      font-size: 1.2vw;
    }
    @include breakpoint(x-large) {
      font-size: 0.95vw;
    }
  }
}
.speaker-helper {
  color: #d3d3d3;
  font-size: 3vw;
  @include breakpoint(tablet) {
    font-size: 1.75vw;
  }
  @include breakpoint(desktop) {
    font-size: 1.15vw;
  }
  @include breakpoint(x-large) {
    font-size: 0.75vw;
  }
}
hr {
  @include breakpoint(desktop) {
    display: none;
  }
}
.nr-activity-helper {
  @include breakpoint(desktop) {
    display: inline-block;
    width: 48.25%;
    vertical-align: middle;
  }
}
.full-width {
  width: 100%;
}
.nr-description-helper {
  @include breakpoint(desktop) {
    display: inline-block;
    width: 50%;
    padding-left: 0.6em;
    margin-left: auto;
    border-left: 1px solid;
    vertical-align: middle;
  }
}
.workshop {
  font-family: $font-fancy;
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
