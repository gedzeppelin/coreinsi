<template>
  <div class="home-container container" id="c-home">
    <div class="slider-container" ref="slider">
      <div class="holder" ref="holder">

        <div class="slide home1">
          <div class="home-text home1-nr" v-if="animationPosition == 0">
            <b>
              <p class="home-a home1-p1">
                {{ $t('home1-1st-p') }}
              </p>
              <p class="home-a home1-p2">
                {{ $t('home1-2nd-p') }}
              </p>

              <p class="home-a home1-city">
                AYACUCHO, HUAMANGA <font-awesome-icon :icon="['fas', 'map-marker-alt']" /><br />
                PERÚ <font-awesome-icon :icon="['fas', 'globe-americas']" />
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
          <div class="home-text" v-if="animationPosition == 1">
            <b>
              <p class="home-a home2-p">
                {{ $t('home2-1st-p') }}
              </p>
            </b>

            <img src="../assets/logo-unsch.png" class="home-a home2-logo" />

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
          <div class="home-text" v-if="animationPosition == 2">
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
    <div class="nav-button nav-button-left">
      <font-awesome-icon icon="angle-left" mask="circle" transform="left-0.75"
      @click="scrollXHomeLeft"
      v-bind:class="{ 'nav-button-gh': holderPosition == 0, 'nav-button-ph': holderPosition == 1, 'nav-button-nch': holderPosition == 2 }" />
    </div>
    <div class="nav-button nav-button-right">
      <font-awesome-icon icon="angle-right" mask="circle" transform="right-0.5"
      @click="scrollXHomeRight"
      v-bind:class="{ 'nav-button-gh': holderPosition == 0, 'nav-button-ph': holderPosition == 1, 'nav-button-nch': holderPosition == 2 }" />
    </div>
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
  |* Animations ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  @include keyframes(home1-pa){
    0%   {opacity:0; transform:translateY(30px)}
    100% {opacity:1; transform:translateY(0px)}
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Grid configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .home-container{
    display: grid;
  }
  .slider-container{
    grid-column: 1;
    grid-row: 1;
    overflow-x: hidden;
  }
  .holder {
    width: 300%;
  }
  .slide{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 33.33%;
    float: left;
  }
  .home-a{
    opacity: 0;
    @include animation-mix(home1-pa, $duration: 0.75s);
  }
  .home-text{
    width: 75%;
    font-size: 9vw;
    text-align: center;
    line-height: 125%;
    max-height: 75%;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Slide 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .home1{
    background: url("../assets/home1.jpg");
    @include background-fill;
  }
  .home1-p2{
    margin-bottom: 1.5vh;
    animation-delay: .25s;
  }
  .home1-city{
    line-height: 150%;
    display: inline-block;
    padding: .35rem .65rem;
    background: $black;
    font-size: 4vw;
    margin-bottom: 3.5vh;
    text-align: right;
    animation-delay: .6s;
  }
  .home1-btn{
    font-size: 40%;
    animation-delay: .70s;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Slide 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .home2{
    background: url("../assets/home2.jpg");
    @include background-fill;
  }
  .home2-p{
    margin-bottom: 2vh;
  }
  .home2-logo{
    max-width: 50%;
    margin: 0 auto;
    animation-delay: .3s;
  }
  .home2-buttons{
    animation-delay: .55s;
  }
  .home2-btn{
    display: block;
    margin: 1.5vh auto;
    font-size: 40%;
  } //=========================================================================\


  /****************************************************************************|
  |* Slide 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .home3{
    background: url("../assets/home3.jpg");
    color: black;
    @include background-fill;
  }
  .home3-p2{
    animation-delay: .5s;
  }
  .home3-p3{
    animation-delay: 1s;
  }
  .home3-p4{
    animation-delay: 1.5s;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Navigation arrows ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .nav-button{
    position: absolute;
    grid-column: 1;
    grid-row: 1;
    top: 50%;
    transform: translateY(-50%);
    &-left{
      left: 2.5%;
    }
    &-right{
      right: 2.5%;
    }
  }
  .nav-button{
    cursor: pointer;
    font-size: 1.75rem;
    @include transition-pdt(color, .5s, ease);
  }
  .nav-button-gh:hover{
    color: gold;
  }
  .nav-button-ph:hover{
    color: $purple;
  }
  .nav-button-nch:hover{
    color: $nav-color;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* FA arrows ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .fa-arrow-right{
    cursor: pointer;
    margin-left: .5em;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

  /****************************************************************************|
  |* RESPONSIVITY LARGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  @include breakpoint(large){
    /**************************************************************************|
    |* Grid configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .home-text{
      width: 65%;
      font-size: 4.25vw;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Slide 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .home1-nr{
      text-align: right;
    }
    .home1-city{
      line-height: 125%;
      padding: .35rem 1rem;
      font-size: 2vw;
    }
    .home1-btn{
      font-size: 27.5%;
      margin: 0;
      margin-left:auto;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Slide 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .home2-p{
      margin-bottom: 1vh;
    }
    .home2-logo{
      max-width: 25%;
      margin-bottom: -2vh;
    }
    .home2-btn{
      display: inline-block;
      margin-left:1.5vw;
      margin-right:1.5vw;
      font-size: 27.5%;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Navigation arrows ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .nav-button{
      font-size: 3.5rem;
      &-left{
        left: 7.5%;
      }
      &-right{
        right: 7.5%;
      }
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
</style>
