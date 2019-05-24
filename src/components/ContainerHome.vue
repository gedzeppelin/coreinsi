<template>
  <div class="container home-container" id="c-home">
    <div class="slider-container" ref="slider" v-hammer:swipe.horizontal="(event) => swipeXHome(event)">
      <div class="holder" ref="holder">

        <div class="slide home1">
          <div class="home-text home1-nr" v-show="animationPosition == 0">
            <p class="home-a">
              {{ $t('home1_1st_p') }}
            </p>
            <p class="home-a home1-p2">
              {{ $t('home1_2nd_p') }}
            </p>
            <span class="home-a home1-city">
              AYACUCHO, HUAMANGA <font-awesome-icon icon="map-marker-alt" /><br />
              PERÚ <font-awesome-icon icon="globe-americas" />
            </span>
            <button type="button" class="btn-round btn-fb-lr-gp home-a home1-btn" @click="scrollToComponent('c-about')">
              {{ $t('button_more_info') }}
              <font-awesome-icon icon="arrow-right" />
            </button>
          </div>
        </div>

        <div class="slide home2">
          <div class="home-text" v-show="animationPosition == 1">
            <p class="home-a home2-p">
              {{ $t('home2_1st_p') }}
            </p>
            <img src="../assets/logo-unsch.png" class="home-a home2-logo" />
            <div class="home-a home2-buttons">
              <button type="button" class="btn-round btn-fb-lr-pw home2-btn" @click="scrollToComponent('c-schedule')">
                {{ $t('button_schedule') }}
                <font-awesome-icon icon="arrow-right" />
              </button>
              <button type="button" class="btn-round btn-fb-lr-pw home2-btn" @click="scrollToComponent('c-about')">
                {{ $t('button_more_info') }}
                <font-awesome-icon icon="arrow-right" />
              </button>
            </div>
          </div>
        </div>

        <div class="slide home3">
          <div class="home-text" v-show="animationPosition == 2">
            <b>
              <p class="home-a home3-p1">
                &#x1F64A;
              </p>
              <p class="home-a home3-p2">
                &#x1F648;
              </p>
              <p class="home-a home3-p3">
                &#x1F649;
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
    font-family: $font-home;
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
    @include breakpoint(tablet){
      width: 70%;
      font-size: 6vw;
    }
    @include breakpoint(large){
      width: 65%;
      font-size: 3.75vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Slide 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .home1{
    background: url("../assets/home1.jpg");
    @include background-fill;
    &-nr{
      @include breakpoint(large){
        text-align: right;
      }
    }
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
    @include breakpoint(tablet){
      line-height: 125%;
      padding: .45rem .75rem;
      font-size: 3vw;
      margin-bottom: 2.5vh;
    }
    @include breakpoint(large){
      padding: .35rem 1rem;
      font-size: 2vw;
    }
  }
  .home1-btn{
    font-size: 40%;
    animation-delay: .70s;
    @include breakpoint(tablet){
      font-size: 2vw;
    }
    @include breakpoint(large){
      font-size: 27.5%;
      margin: 0;
      margin-left:auto;
    }
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
    @include breakpoint(large){
      margin-bottom: 1vh;
    }
  }
  .home2-logo{
    max-width: 50%;
    margin: 0 auto;
    animation-delay: .3s;
    @include breakpoint(desktop){
      max-width: 35%;
      margin-bottom: -2vh;
    }
    @include breakpoint(large){
      max-width: 25%;
      margin-bottom: -2vh;
    }
  }
  .home2-buttons{
    animation-delay: .55s;
  }
  .home2-btn{
    margin: 1.5vh auto;
    font-size: 40%;
    @include breakpoint(tablet){
      display: inline-block;
      padding: .75em 1.15em;
      margin-left: 1vw;
      margin-right: 1vw;
      font-size: 2vw;
    }
    @include breakpoint(large){
      margin-left:1.5vw;
      margin-right:1.5vw;
      font-size: 27.5%;
    }
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
    @include breakpoint(tablet){
      font-size: 2.65rem;
    }
    @include breakpoint(desktop){
      font-size: 3.25rem;
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
          color: $black-75;
        }
      }
    }
    &-left{
      left: 2.5%;
    }
    &-right{
      right: 2.5%;
    }
    &-b{
      color: $black-75;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|
</style>
