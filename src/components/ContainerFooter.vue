<template>
  <div class="container footer-container">
    <span class="title">Gedy Palomino <span class="year">@2019</span></span>

    <hr class="hr-footer" />

    <div class="nr-contact-helper">
      <div class="nr-item-helper-left">
        <span class="contact">{{ $t("footer_contact") }}</span>
        <br />
        <a href="mailto:gedy.palomino@gmail.com">
          <font-awesome-icon :icon="['far', 'envelope']" class="envelope" />
        </a>
        <br />
        <span class="mail">gedy.palomino@gmail.com</span>
      </div>

      <hr class="hr-footer-middle" />

      <div class="nr-item-helper-right">
        <span class="social-networks">{{ $t("footer_social") }}</span>
        <br />

        <div class="social-cont">
          <font-awesome-icon
            :icon="['fab', 'linkedin-in']"
            class="social-icon"
          />
          <div class="social-helper">
            <a
              href="https://www.linkedin.com/in/gedy-palomino-446491120/"
              target="_blank"
            />
          </div>
        </div>

        <div class="social-cont">
          <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon" />
          <div class="social-helper">
            <a href="https://twitter.com/gedzeppelin" target="_blank" />
          </div>
        </div>

        <div class="social-cont">
          <font-awesome-icon :icon="['fab', 'github']" class="social-icon" />
          <div class="social-helper">
            <a href="https://github.com/gedzeppelin" target="_blank" />
          </div>
        </div>
      </div>
    </div>

    <hr class="hr-footer" />

    <span class="nr-by-powered">
      @<a href="https://gedzeppelin.dev" target="_blank">gedzeppelin</a>
    </span>

    <span class="by">
      @<a href="https://gedzeppelin.dev" target="_blank">gedzeppelin</a>
    </span>
  </div>
</template>

<script>
export default {
  name: "ContainerFooter",
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/****************************************************************************|
  |* General configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.footer-container {
  background-color: $black-100;
  text-align: center;
  color: $white;
  padding-top: 20px;
  height: auto;
  font-family: $font-mono;
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Footer title ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.title {
  display: block;
  font-weight: bold;
  font-family: $font-content;
  font-size: 22px;
  @include breakpoint(desktop) {
    font-size: 28px;
  }
}
.year {
  color: $boulder;
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Non-responsive helpers ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.nr-contact-helper {
  @include breakpoint(desktop) {
    margin-top: 22px;
    margin-bottom: 17px;
  }
}
%nr-item-helper-common {
  @include breakpoint(desktop) {
    display: inline-block;
    vertical-align: middle;
  }
}
.nr-item-helper {
  &-left {
    @extend %nr-item-helper-common;
    @include breakpoint(desktop) {
      margin-right: 5%;
    }
  }
  &-right {
    @extend %nr-item-helper-common;
    @include breakpoint(desktop) {
      margin-left: 5%;
    }
  }
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Seccion title ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.contact {
  border-bottom: 2px dashed $white;
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Mail contact ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.envelope {
  font-size: 22px;
  border: 2px solid;
  border-radius: 9999px;
  padding: 8px;
  margin-top: 17px;
}
.mail {
  font-size: 14px;
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Social networks contact ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
.social-networks {
  border-bottom: 2px dashed $white;
}
.social-cont {
  display: inline-block;
  margin: 0 13px;
  margin-top: 25px;
  margin-bottom: 10px;
  position: relative;
  width: 38px;
  height: 38px;
  @include breakpoint(desktop) {
    margin-bottom: 5px;
  }
}
.social-helper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid;
  @include transform(rotate(45deg));

  & > a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
  }
}
.social-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  @include transform(translate(-50%, -50%));
  font-size: 22px;
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* Bottom text ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
%bottom-text {
  font-family: $font-content;
  display: inline-block;
  color: $boulder;
  font-size: 12px;
  margin-bottom: 70px;
  @include breakpoint(tablet) {
    margin-bottom: 50px;
  }
}
.by {
  @extend %bottom-text;
  margin-left: 10%;
  float: left;
  @include breakpoint(tablet) {
    margin-left: 20%;
  }
  @include breakpoint(desktop) {
    display: none;
  }
}
.powered {
  @extend %bottom-text;
  margin-right: 10%;
  float: right;
  @include breakpoint(tablet) {
    margin-right: 20%;
  }
  @include breakpoint(desktop) {
    display: none;
  }
}
.nr-by-powered {
  display: none;
  @extend %bottom-text;
  font-size: 12.5px;
  @include breakpoint(desktop) {
    display: inline-block;
  }
}
a {
  color: $white;
  &:visited {
    color: $white;
  }
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

/****************************************************************************|
  |* <hr/> definition ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
%hr-footer-helper {
  width: 80%;
  margin-bottom: 12px;
  color: $white;
  @include breakpoint(tablet) {
    width: 60%;
  }
}
.hr-footer {
  @extend %hr-footer-helper;
  @include breakpoint(desktop) {
    display: none;
  }
  &-middle {
    @extend %hr-footer-helper;
    @include breakpoint(desktop) {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      width: 0;
      margin-top: 0px;
      margin-bottom: 0px;
      height: 100px;
    }
  }
} //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|
</style>
