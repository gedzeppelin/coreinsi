<template>
  <div class="home-container container" id="c-home">
    <div class="slider-container" ref="slider" v-bind:class="{ 'on-wait': onWait }">
      <div class="holder" ref="holder">

        <div class="slide home1" ref="slide1">
            <div class="home1-text" v-if="holderPosition == 0">
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

        <div class="slide home2" ref="slide2">
            <div class="home2-text" v-if="holderPosition == 1">
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

      </div>
    </div>
    <font-awesome-icon icon="angle-left" mask="circle" size="4x" transform="left-0.75"
    @click="scrollXHomeRight"
    v-bind:class="{ 'nav-button-gh': holderPosition == 0, 'nav-button-ph': holderPosition == 1 }" class="nav-button" />
    <font-awesome-icon icon="angle-right" mask="circle" size="4x" transform="right-0.5"
    @click="scrollXHomeRight"
    v-bind:class="{ 'nav-button-gh': holderPosition == 0, 'nav-button-ph': holderPosition == 1 }" class="nav-button" />
  </div>

</template>

<script>
export default {
  name: 'ContainerHome',
  data: function() {
    return {
      holderPosition: 0,
      holderSlides: [],
      aux: 0,
      aux2: 0,
      onWait: false
    };
  },
  methods: {
    scrollXHomeRight: function() {
      var holder = this.$refs.holder;

      if(this.holderPosition < holder.childElementCount - 1){
        this.holderPosition++;
        this.aux = holder.firstChild.cloneNode(true);
        this.aux2 = holder.lastChild.cloneNode(true);
        console.log(this.aux)
        console.log(this.aux2)
        // holder.removeChild(holder.firstChild);
        holder.replaceChild(this.aux2, holder.firstChild);
        // holder.replaceChild(this.aux2, holder.childNodes[0]);
        this.onWait = true;
        this.onWait = false;
        // holder.appendChild(this.aux);
        // setTimeout(function() {holder.removeChild(holder.firstChild); holder.appendChild(this.aux); this.onWait = true; }, 500);

      } else{
        this.holderPosition = 0;
        // holder.add(holder.remove(0));



      }

      console.log(holder.children)

      // var slider = this.$refs.slider;
      // this.$nextTick(function(){
  		// 	slider.scroll({
      //     left: this.holderSlides[this.holderPosition].scrollWidth,
      //     behavior: 'smooth'
      //   });
  		// });

    },
  },
  mounted() {
    this.holderSlides = [this.$refs.slide1, this.$refs.slide2];
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
    overflow-x: scroll;
    grid-column: 1;
    grid-row: 1;
    &.on-wait{
      overflow-x: hidden;
    }
  }
  .holder {
    width: 200%;
  }
  .slide{
    display: flex;
    justify-content: center;
    width: 50%;
    height: 100vh;
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
