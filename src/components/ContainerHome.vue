<template>
  <div class="container home-container" id="c-home">
    <div class="slider-container" ref="slider" v-hammer:swipe.horizontal="(event) => swipeXHome(event)">
      <div class="holder" ref="holder">

        <div class="slide home1">
          <div class="home-text home1-nr" v-if="animationPosition == 0">
            <p class="home-a">
              {{ $t('home1-1st-p') }}
            </p>
            <p class="home-a home1-p2">
              {{ $t('home1-2nd-p') }}
            </p>
            <span class="home-a home1-city">
              AYACUCHO, HUAMANGA <font-awesome-icon icon="map-marker-alt" /><br />
              PERÚ <font-awesome-icon icon="globe-americas" />
            </span>
            <button type="button" class="btn-round btn-fb-lr-gp home-a home1-btn" @click="scrollToComponent('c-about')">
              {{ $t('button-more-info') }}
              <font-awesome-icon icon="arrow-right" />
            </button>
          </div>
        </div>

        <div class="slide home2">
          <div class="home-text" v-if="animationPosition == 1">
            <p class="home-a home2-p">
              {{ $t('home2-1st-p') }}
            </p>
            <img src="../assets/logo-unsch.png" class="home-a home2-logo" />
            <div class="home-a home2-buttons">
              <button type="button" class="btn-round btn-fb-lr-pw home2-btn" @click="scrollToComponent('c-schedule')">
                {{ $t('button-schedule') }}
                <font-awesome-icon icon="arrow-right" />
              </button>
              <button type="button" class="btn-round btn-fb-lr-pw home2-btn" @click="scrollToComponent('c-about')">
                {{ $t('button-more-info') }}
                <font-awesome-icon icon="arrow-right" />
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

    <font-awesome-icon :icon="['far', 'arrow-alt-circle-left']"
    class="nav-button nav-button-left"
    @click="scrollXHomeLeft"
    v-bind:class="{ 'nav-button-g': holderPosition == 0, 'nav-button-p': holderPosition == 1,
    'nav-button-b': holderPosition == 2 }" />

    <font-awesome-icon :icon="['far', 'arrow-alt-circle-right']"
    class="nav-button nav-button-right"
    @click="scrollXHomeRight"
    v-bind:class="{ 'nav-button-g': holderPosition == 0, 'nav-button-p': holderPosition == 1,
    'nav-button-b': holderPosition == 2 }" />
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
    swipeXHome: function(event){
      if(event.pointerType == "touch"){
        if(event.type == "swipeleft"){
          this.scrollXHomeRight();
        } else if(event.type == "swiperight"){
          this.scrollXHomeLeft();
        }
      }
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
  @include keyframes(home-a){
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
    position: relative;
    height: 100vh;
    width: 33.33%;
    float: left;
  }
  .home-a{
    opacity: 0;
    @include animation-mix(home-a, $duration: 0.75s);
  }
  .home-text{
    position: absolute;
    max-height: 75%;
    width: 75%;
    top: 45%;
    left: 50%;
    line-height: 125%;
    font-size: 9vw;
    font-weight: bold;
    text-align: center;
    transform: translate(-50%, -45%);
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
    margin: 1.5vh auto;
    font-size: 40%;
  } //=========================================================================\


  /****************************************************************************|
  |* Slide 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .home3{
    background: url("../assets/home3.jpg");
    color: $black;
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
    font-size: 1.75rem;
    color: $white;
    cursor: pointer;
    transform: translateY(-50%);
    @include transition-pdt(color, .25s, ease-in);
    &-left{
      left: 2.5%;
    }
    &-right{
      right: 2.5%;
    }
    &-b{
      color: $nav-color;
    }
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
      @include transition-pdt(color, .5s, ease-out);
      &-left{
        left: 7.5%;
      }
      &-right{
        right: 7.5%;
      }
      &-g{
        color: $white;
        &:hover{
          color: $gold;
        }
      }
      &-p{
        color: $white;
        &:hover{
          color: $purple;
        }
      }
      &-b{
        color: $white;
        &:hover{
          color: $nav-color;
        }
      }
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|

  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
</style>
