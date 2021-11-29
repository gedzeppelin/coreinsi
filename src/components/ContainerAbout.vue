<template>
  <div class="container about-container" id="c-about">
    <div class="about-text">
      <h6 class="about-head">{{ $t("about_head") }}</h6>
      <h2 class="about-title">XII COREINSI</h2>
      <p class="about-text-content" v-html="$t('about_text')"></p>
      <h6 class="about-section">{{ $t("about_section_where") }}</h6>
      <p class="about-text-content" v-html="$t('about_text_where')"></p>
      <h6 class="about-section">{{ $t("about_section_when") }}</h6>
      <p class="about-text-content">
        {{ $t("about_text_when") }}
        <span class="schedule-link" @click="scrollToComponent('c-schedule')">{{
          $i18n.locale === "es" ? "aquí" : "here"
        }}</span
        >.
      </p>
      <h6 class="about-section">{{ $t("about_section_who") }}</h6>
      <p class="about-text-content" v-html="$t('about_text_who')"></p>
      <h6 class="about-section">{{ $t("about_section_who2") }}</h6>
      <p class="about-text-content">
        {{ $t("about_text_who2") }}
      </p>

      <img src="../assets/logo-coreinsi.png" class="ceis-logo" />

      <button
        type="button"
        class="btn-round btn-cc-wp about-btn"
        @click="scrollToComponent('c-schedule')"
      >
        {{ $t("button_schedule") }}
        <font-awesome-icon icon="arrow-right" />
      </button>

      <h6 class="about-countdown">{{ $t("about_countdown") }}</h6>
      <ul class="countdown">
        <li class="counter">
          <p>{{ weeks }}</p>
          <p class="counter-label">{{ $t("about_countdown_weeks") }}</p>
        </li>
        <li class="counter">
          <p>{{ days }}</p>
          <p class="counter-label">{{ $t("about_countdown_days") }}</p>
        </li>
        <li class="counter">
          <p>{{ hours }}</p>
          <p class="counter-label">{{ $t("about_countdown_hours") }}</p>
        </li>
        <li class="counter">
          <p>{{ minutes }}</p>
          <p class="counter-label">{{ $t("about_countdown_minutes") }}</p>
        </li>
        <li class="counter">
          <p>{{ seconds }}</p>
          <p class="counter-label">{{ $t("about_countdown_seconds") }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContainerAbout",
  data: function () {
    return {
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  methods: {
    updateDiff: function () {
      if (this.$moment().seconds() == 0 || this.seconds < 0) {
        this.setDiff();
      } else {
        this.seconds -= 1;
      }
    },
    setDiff() {
      var now = this.$moment();
      var theDay = this.$moment("20190619", "YYYYMMDD");
      if (now > theDay) {
        this.weeks = "XX";
        this.days = "XX";
        this.hours = "XX";
        this.minutes = "XX";
        this.seconds = "XX";
      } else {
        this.weeks = theDay.diff(now, "weeks");
        now.weeks(now.weeks() + this.weeks);
        this.days = theDay.diff(now, "days");
        now.days(now.days() + this.days);
        this.hours = theDay.diff(now, "hours");
        now.hours(now.hours() + this.hours);
        this.minutes = theDay.diff(now, "minutes");
        now.minutes(now.minutes() + this.minutes);
        this.seconds = theDay.diff(now, "seconds");
        setInterval(this.updateDiff, 1000);
      }
    },
  },
  mounted() {
    this.setDiff();
  },
};
</script>

<style scoped lang="scss">
/****************************************************************************|
  |* General configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.about-container {
  background: radial-gradient(circle, $eggplant 15%, $bossanova);
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: auto;
  font-size: 6vw;
  @include breakpoint(tablet) {
    font-size: 4vw;
  }
  @include breakpoint(desktop) {
    font-size: 3vw;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  @include breakpoint(large) {
    font-size: 2vw;
  }
  @include breakpoint(x-large) {
    font-size: 1.75vw;
  }
}
.about-text {
  margin: 0 auto;
  width: 90%;
  @include breakpoint(desktop) {
    width: 75%;
  }
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Content configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.about-head {
  margin: 0;
  border-bottom: 3px solid;
  font-family: $font-mono;
}
.about-title {
  margin: 2.25vh auto;
  color: $gold;
}
.about-section {
  display: inline-block;
  margin: 14px 0;
  font-family: $font-mono;
  border-bottom: 2px dotted;
  color: $gold;
  @include breakpoint(tablet) {
    margin: 15px 0;
  }
  @include breakpoint(desktop) {
    margin: 16px 0;
  }
  @include breakpoint(large) {
    margin: 18px 0;
  }
}
.about-text-content {
  text-align: justify;
  font-size: 4.75vw;
  font-family: $font-content;
  @include breakpoint(tablet) {
    font-size: 3vw;
  }
  @include breakpoint(desktop) {
    font-size: 2.75vw;
  }
  @include breakpoint(large) {
    font-size: 1.75vw;
  }
  @include breakpoint(x-large) {
    font-size: 1.5vw;
  }
}
.schedule-link {
  cursor: pointer;
  text-decoration: underline;
}
.ceis-logo {
  display: block;
  max-width: 75%;
  margin: 4% auto;
  @include breakpoint(tablet) {
    margin: 2.5% auto;
    max-width: 55%;
  }
  @include breakpoint(desktop) {
    max-width: 40%;
    margin: 2.5% auto;
  }
  @include breakpoint(large) {
    max-width: 35%;
  }
  @include breakpoint(x-large) {
    max-width: 30%;
    margin: 2% auto;
  }
}
.about-btn {
  font-size: 75%;
  padding: 0.75em 1.25em;
  margin-bottom: 5vh;
  @include breakpoint(desktop) {
    font-size: 1.5vw;
  }
  @include breakpoint(large) {
    font-size: 1.15vw;
  }
  @include breakpoint(x-large) {
    font-size: 1vw;
    margin-bottom: 3.5%;
  }
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Countdown configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.about-countdown {
  text-align: center;
  margin: 0;
}
.countdown {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 0.25em 0;
  border-top: 3px dashed;
  border-bottom: 3px dashed;
  list-style-type: none;
  width: 100%;
  font-size: 8.5vw;
  @include breakpoint(tablet) {
    justify-content: space-evenly;
    width: 75%;
    font-size: 5.5vw;
  }
  @include breakpoint(desktop) {
    font-size: 4.5vw;
  }
  @include breakpoint(large) {
    width: 60%;
    font-size: 3.5vw;
  }
  @include breakpoint(x-large) {
    width: 50%;
    font-size: 2.5vw;
  }
}
.counter {
  border: 2px solid;
  border-radius: 15px;
  padding: 0.25em 0px;
  width: 18%;
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 1));
  @include breakpoint(tablet) {
    width: 17%;
  }
  @include breakpoint(desktop) {
    width: 16%;
  }
}
.counter-label {
  font-size: 3.75vw;
  @include breakpoint(tablet) {
    font-size: 2.25vw;
  }
  @include breakpoint(desktop) {
    font-size: 1.5vw;
  }
  @include breakpoint(large) {
    font-size: 1.15vw;
  }
  @include breakpoint(x-large) {
    font-size: 0.95vw;
  }
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|
</style>
