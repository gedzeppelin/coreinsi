<template>
  <div class="home-container container" id="c-home">
    <div class="slider-container" ref="slider">
      <div class="holder">

        <div class="slide home1">
            <div class="home1-text" v-if="isShow">
              <b>
                <p class="home-a home1-p1">
                  {{ $t('home1-1st-p') }}
                </p>
                <p class="home-a home1-p2">
                  {{ $t('home1-2nd-p') }}
                </p>

                <p class="home-a home1-city">
                  <font-awesome-icon :icon="['fas', 'map-marker-alt']" /> AYACUCHO, HUAMANGA, PERÚ
                </p>
              </b>

              </br>

              <a class="btn btn-round btn-fb-lr-gp home-a home1-btn" href="#c-about">
                {{ $t('home-button-info') }}
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </a>

            </div>
        </div>

        <div class="slide home2">
            <div class="home2-text" v-if="!isShow">
              <b>
                <p class="home-a home2-p">
                  {{ $t('home2-1st-p') }}
                </p>
              </b>

              <img src="../assets/logo-unsch.png" width="20%" class="home-a home2-logo" />

              <div class="home-a home2-buttons">
                <a class="btn btn-round btn-fb-lr-pw home2-btn">
                  {{ $t('home2-button') }}
                  <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </a>
                <a class="btn btn-round btn-fb-lr-pw home2-btn" href="#c-about">
                  {{ $t('home-button-info') }}
                  <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </a>
              </div>
            </div>
        </div>

      </div>
    </div>
    <font-awesome-icon icon="angle-left" mask="circle" size="4x" transform="left-0.75"
    @click="scroll_x_home_left"
    v-bind:class="{ 'nav-button-gh': position == 0, 'nav-button-ph': position == 1 }" class="nav-button" />
    <font-awesome-icon icon="angle-right" mask="circle" size="4x" transform="right-0.5"
    @click="scroll_x_home_right"
    v-bind:class="{ 'nav-button-gh': position == 0, 'nav-button-ph': position == 1 }" class="nav-button" />
  </div>

</template>

<script>
export default {
  name: 'ContainerHome',
  data: function() {
    return {
      hover: false,
      isShow: true,
      position: 0,
    };
  },
  methods: {
    scroll_x_home_right: function() {
      this.position = 1;
      this.isShow = false;

      var slider = this.$refs.slider;
      this.$nextTick(function(){
  			slider.scroll({
          left: slider.clientWidth,
          behavior: 'smooth'
        });
  		});
    },

    scroll_x_home_left: function() {
      this.position = 0;
      this.isShow = true;

      this.$nextTick(function(){
        this.$refs.slider.scroll({
          left: 0,
          behavior: 'smooth'
        });
      });
    },
  },
}
</script>

<style scoped lang="scss">
  /****************************************************************************|
  |* Animations ····························································· *|
  |****************************************************************************/
  @-webkit-keyframes home1-pa{
    0%   {opacity:0; margin-top:28px;}
    100% {opacity:1; margin-top:0px;}
  }
  @keyframes home1-pa{
    0%   {opacity:0; margin-top:28px;}
    100% {opacity:1; margin-top:0px;}
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|


  /****************************************************************************|
  |* Grid configuration ····················································· *|
  |****************************************************************************/
  p{
    margin: .1em auto;
  }
  .home-container{
    display: grid;
    color: $white;
  }
  .slider-container{
    overflow-x: hidden;
    grid-column: 1;
    grid-row: 1;
  }
  .holder {
    width: 200%;
  }
  .slide{
    display: flex;
    justify-content: center;
    width: 50%;
    height: 100vh;
    transition: all 2s;
  }
  .home-a{
    opacity: 0;
    margin-top: 0px;
    animation: home1-pa .65s ease-out;
    -webkit-animation: home1-pa .65s ease-out;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|


  /****************************************************************************|
  |* Slide 1 ································································ *|
  |****************************************************************************/
  .home1{
    background: url("../assets/home1.jpg") no-repeat;
    float: left;
  }
  .home1-text{
    font-size: 4em;
    text-align: right;
    margin-top: 30vh;
  }
  .home1-p1{
    animation-delay: .55s;
  }
  .home1-p2{
    animation-delay: .8s;
    margin-bottom: 0px;
  }
  .home1-city{
    display: inline-block;
    padding: .55em;
    margin-left: auto;
    background: $black;
    font-size: .55em;
    margin-bottom: 1.25em;
    animation-delay: 1.15s;
  }
  .home1-btn{
    display: inline-block;
    animation-delay: 1.225s;
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|


  /****************************************************************************|
  |* Slide 2 ································································ *|
  |****************************************************************************/
  .home2{
    background: url("../assets/home2.jpg") no-repeat;
    float: right;
  }
  .home2-text{
    font-size: 4.5em;
    text-align: center;
    margin-top: 24vh;
  }
  .home2-p{
    animation-delay: .55s;
  }
  .home2-logo{
    display: block;
    margin: 0 auto;
    margin-bottom: .25em;
    animation-delay: .85s;
  }
  .home2-buttons{
    text-align: center;
    animation-delay: 1s;
  }
  .home2-btn{
    vertical-align: middle;
    margin-right: 1em;
    margin-left: 1em;
  } //=========================================================================\


  /****************************************************************************|
  |* Navigation arrows ······················································ *|
  |****************************************************************************/
  .nav-button{
    grid-column: 1;
    grid-row: 1;
    margin-top: 45vh;
    cursor: pointer;
    @include transition-pdf(color, .5s, ease);
  }
  .nav-button-gh:hover{
    color: gold;
  }
  .nav-button-ph:hover{
    color: $purple;
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|


  /****************************************************************************|
  |* FA icons ······························································· *|
  |****************************************************************************/
  .fa-angle-right{
    margin-left: 87.5vw;
  }

  .fa-angle-left{
    margin-left: 6.5vw;

  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|
</style>
