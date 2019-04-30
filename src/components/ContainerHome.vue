<template>
  <div class="home-container container" id="c-home">
    <div class="slider-container" ref="slider">
      <div class="holder" ref="holder">

        <div class="slide home1">
          <div class="home1-text" v-if="animationPosition == 0">
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

            <button type="button" class="btn-round btn-fb-lr-gp home-a home1-btn" @click="scrollToComponent('c-about')">
              {{ $t('home-button-info') }}
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>

          </div>
        </div>

        <div class="slide home2">
          <div class="home2-text" v-if="animationPosition == 1">
            <b>
              <p class="home-a home2-p">
                {{ $t('home2-1st-p') }}
              </p>
            </b>

            <img src="../assets/logo-unsch.png" width="20%" class="home-a home2-logo" />

            <div class="home-a home2-buttons">
              <button type="button" class="btn-round btn-fb-lr-pw home2-btn" @click="scrollToComponent('c-schedule')">
                {{ $t('home2-button') }}
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </button>
              <button type="button" class="btn-round btn-fb-lr-pw home2-btn" @click="scrollToComponent('c-about')">
                {{ $t('home-button-info') }}
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </button>
            </div>
          </div>
        </div>

        <div class="slide home3">
          <div class="home3-text" v-if="animationPosition == 2">
            <b>
              <p class="home-a">
                FRESI
              </p>
              <p class="home-a home3-p2">
                OF
              </p>
              <p class="home-a home3-p3">
                MRD
              </p>
              <p class="home-a home3-p4">
                &#x1F648;
              </p>
            </b>
          </div>
        </div>

      </div>
    </div>
    <font-awesome-icon icon="angle-left" mask="circle" size="4x" transform="left-0.75"
    @click="scrollXHomeLeft"
    v-bind:class="{ 'nav-button-gh': holderPosition == 0, 'nav-button-ph': holderPosition == 1, 'nav-button-nch': holderPosition == 2 }" class="nav-button" />
    <font-awesome-icon icon="angle-right" mask="circle" size="4x" transform="right-0.5"
    @click="scrollXHomeRight"
    v-bind:class="{ 'nav-button-gh': holderPosition == 0, 'nav-button-ph': holderPosition == 1, 'nav-button-nch': holderPosition == 2 }" class="nav-button" />
  </div>

</template>

<script>
export default {
  name: 'ContainerHome',
  data: function() {
    return {
      holderPosition: 0,
      animationPosition: 0
    };
  },
  methods: {
    scrollXHomeLeft: function() {
      let slider = this.$refs.slider;
      let holder = this.$refs.holder;

      this.holderPosition = this.holderPosition == 0 ? holder.childElementCount - 1 : this.holderPosition - 1;

      this.$nextTick(function(){
        slider.scroll({
          left: holder.children[this.holderPosition].offsetLeft,
          behavior: 'smooth'
        });
      });
    },

    scrollXHomeRight: function() {
      let slider = this.$refs.slider;
      let holder = this.$refs.holder;

      this.holderPosition = this.holderPosition < holder.childElementCount - 1 ? this.holderPosition + 1 : 0;

      this.$nextTick(function(){
        slider.scroll({
          left: holder.children[this.holderPosition].offsetLeft,
          behavior: 'smooth'
        });
      });
    },

    onScroll: function() {
      if(this.$refs.slider.scrollLeft.between(this.$refs.holder.children[this.holderPosition].offsetLeft - 2, this.$refs.holder.children[this.holderPosition].offsetLeft + 2, true)){
        this.animationPosition = this.holderPosition;
      } else{
        this.animationPosition = -1;
      }
    }
  },
  mounted() {
    // Register an event listener when the Vue component is ready
    this.$refs.slider.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    this.$refs.slider.removeEventListener('scroll', this.onScroll)
  }
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
  @-moz-keyframes home1-pa{
    0%   {opacity:0; margin-top:28px;}
    100% {opacity:1; margin-top:0px;}
  }
  @-o-keyframes home1-pa{
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
    width: 300%;
  }
  .slide{
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 33.33%;
    height: 100vh;
    float: left;
  }
  .home-a{
    opacity: 0;
    margin-top: 0px;
    animation: home1-pa .75s ease-out;
    -webkit-animation: home1-pa .75s ease-out;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|


  /****************************************************************************|
  |* Slide 1 ································································ *|
  |****************************************************************************/
  .home1{
    background: url("../assets/home1.jpg");
    @include background-fill;
  }
  .home1-text{
    font-size: 4em;
    text-align: right;
    margin-top: 30vh;
  }
  .home1-p1{
    // animation-delay: .55s;
  }
  .home1-p2{
    margin-bottom: 0px;
    animation-delay: .25s;
    // animation-delay: .8s;
  }
  .home1-city{
    display: inline-block;
    padding: .55em;
    margin-left: auto;
    background: $black;
    font-size: .55em;
    margin-bottom: 1.25em;
    animation-delay: .6s;
    // animation-delay: 1.15s;
  }
  .home1-btn{
    display: inline-block;
    animation-delay: .70s;
    // animation-delay: 1.225s;
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|


  /****************************************************************************|
  |* Slide 2 ································································ *|
  |****************************************************************************/
  .home2{
    background: url("../assets/home2.jpg");
    @include background-fill;
  }
  .home2-text{
    font-size: 4.5em;
    text-align: center;
    margin-top: 24vh;
  }
  .home2-p{
    // animation-delay: .55s;
  }
  .home2-logo{
    display: block;
    margin: 0 auto;
    margin-bottom: .25em;
    animation-delay: .3s;
    // animation-delay: .85s;
  }
  .home2-buttons{
    text-align: center;
    animation-delay: .55s;
    // animation-delay: 1s;
  }
  .home2-btn{
    vertical-align: middle;
    margin-right: 1em;
    margin-left: 1em;
  } //=========================================================================\


  /****************************************************************************|
  |* Slide 3 ································································ *|
  |****************************************************************************/
  .home3{
    background: url("../assets/home3.jpg");
    @include background-fill;
  }
  .home3-text{
    font-size: 4.5em;
    text-align: center;
    margin-top: 24vh;
    color: black;
  }
  .home3-p2{
    animation-delay: .5s;
  }
  .home3-p3{
    animation-delay: 1s;
  }
  .home3-p4{
    animation-delay: 2s;
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
  }
  .nav-button-nch:hover{
    color: $nav-color;
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
