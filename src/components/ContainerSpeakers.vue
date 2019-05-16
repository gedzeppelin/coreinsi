<template>
  <div class="container speakers-container" id="c-speakers">
    <h3 class="speakers-header">
      {{ $t('speakers-header') }}
    </h3>

    <div class="nr-helper">

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-f">
              {{ $t('button-more-info') }}
            </button>
            <div class="front-card-content">
              <div class="front-card-content-text">
                Elver Galarga
              <p class="speaker-job">
                Dealer
              </p>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="back-card-content">
              <div class="speaker-social">
                 <a href="https://www.facebook.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'facebook-f']" />
                 </a>
                 <a href="https://www.instagram.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'instagram']" />
                 </a>
                 <a href="https://twitter.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'twitter']" />
                 </a>
                 <a href="https://github.com/ " target="_blank">
                   <font-awesome-icon :icon="['fab', 'github']" />
                 </a>
                 <a href="https://www.linkedin.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                 </a>
              </div>
              <h2>Elver Galarga</h2>
              <p>A good person.</p>
            </div>
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-b">
              {{ $t('button-less-info') }}
            </button>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-f">
              {{ $t('button-more-info') }}
            </button>
            <div class="front-card-content">
              <div class="front-card-content-text">
                Benito Camelo
              <p class="speaker-job">
                Lawyer
              </p>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="back-card-content">
              <div class="speaker-social">
                 <a href="https://www.facebook.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'facebook-f']" />
                 </a>
                 <a href="https://www.instagram.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'instagram']" />
                 </a>
                 <a href="https://twitter.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'twitter']" />
                 </a>
                 <a href="https://github.com/ " target="_blank">
                   <font-awesome-icon :icon="['fab', 'github']" />
                 </a>
                 <a href="https://www.linkedin.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                 </a>
              </div>
              <h2>Benito Camelo</h2>
              <p>A good person.</p>
            </div>
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-b">
              {{ $t('button-less-info') }}
            </button>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-f">
              {{ $t('button-more-info') }}
            </button>
            <div class="front-card-content">
              <div class="front-card-content-text">
                Elsa Badillo
              <p class="speaker-job">
                Cop
              </p>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="back-card-content">
              <div class="speaker-social">
                 <a href="https://www.facebook.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'facebook-f']" />
                 </a>
                 <a href="https://www.instagram.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'instagram']" />
                 </a>
                 <a href="https://twitter.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'twitter']" />
                 </a>
                 <a href="https://github.com/ " target="_blank">
                   <font-awesome-icon :icon="['fab', 'github']" />
                 </a>
                 <a href="https://www.linkedin.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                 </a>
              </div>
              <h2>Elsa Badillo</h2>
              <p>A good person.</p>
            </div>
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-b">
              {{ $t('button-less-info') }}
            </button>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-f">
              {{ $t('button-more-info') }}
            </button>
            <div class="front-card-content">
              <div class="front-card-content-text">
                Elba Zurita
              <p class="speaker-job">
                Priest
              </p>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="back-card-content">
              <div class="speaker-social">
                 <a href="https://www.facebook.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'facebook-f']" />
                 </a>
                 <a href="https://www.instagram.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'instagram']" />
                 </a>
                 <a href="https://twitter.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'twitter']" />
                 </a>
                 <a href="https://github.com/ " target="_blank">
                   <font-awesome-icon :icon="['fab', 'github']" />
                 </a>
                 <a href="https://www.linkedin.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                 </a>
              </div>
              <h2>Elba Zurita</h2>
              <p>A good person.</p>
            </div>
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-b">
              {{ $t('button-less-info') }}
            </button>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-f">
              {{ $t('button-more-info') }}
            </button>
            <div class="front-card-content">
              <div class="front-card-content-text">
                Aquiles Brinco
              <p class="speaker-job">
                Programmer
              </p>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="back-card-content">
              <div class="speaker-social">
                 <a href="https://www.facebook.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'facebook-f']" />
                 </a>
                 <a href="https://www.instagram.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'instagram']" />
                 </a>
                 <a href="https://twitter.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'twitter']" />
                 </a>
                 <a href="https://github.com/ " target="_blank">
                   <font-awesome-icon :icon="['fab', 'github']" />
                 </a>
                 <a href="https://www.linkedin.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                 </a>
              </div>
              <h2>Aquiles Brinco</h2>
              <p>A good person.</p>
            </div>
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-b">
              {{ $t('button-less-info') }}
            </button>
          </div>
        </div>
      </div>

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-f">
              {{ $t('button-more-info') }}
            </button>
            <div class="front-card-content">
              <div class="front-card-content-text">
                Elvis Tek
              <p class="speaker-job">
                Teacher
              </p>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="back-card-content">
              <div class="speaker-social">
                 <a href="https://www.facebook.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'facebook-f']" />
                 </a>
                 <a href="https://www.instagram.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'instagram']" />
                 </a>
                 <a href="https://twitter.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'twitter']" />
                 </a>
                 <a href="https://github.com/ " target="_blank">
                   <font-awesome-icon :icon="['fab', 'github']" />
                 </a>
                 <a href="https://www.linkedin.com/" target="_blank">
                   <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                 </a>
              </div>
              <h2>Elvis Tek</h2>
              <p>A good person.</p>
            </div>
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-b">
              {{ $t('button-less-info') }}
            </button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'ContainerSpeakers',
  data: function() {
    return {};
  },
  methods: {
    flipCard: function(event){
      if(event.target.parentElement.parentElement.style.transform == ""){
        event.target.parentElement.parentElement.style = "transform: rotateY(180deg);";
      } else {
        event.target.parentElement.parentElement.style = "";
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /****************************************************************************|
  |* General configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .speakers-container{
    background: linear-gradient($royalBlue, $malibu);
    position: relative;
    height: auto;
    text-align: center;
    font-size: 4.5vw;
    z-index: 0;
    &::after{
      content: "";
      background: url("https://media.giphy.com/media/4GXNdzsOcVR0aZl7mT/giphy.gif");
      opacity: 0.1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }
    @include breakpoint(desktop){
      font-size: 2vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Title ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .speakers-header{
    font-weight: bold;
    width: 70%;
    margin: 0 auto;
    margin-top: 60px;
    border-bottom: 3px dashed;
    @include breakpoint(desktop){
      width: 30%;
      border-bottom: 4px dashed;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Non-responsive helper ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .nr-helper{
    @include breakpoint(desktop){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      width: 75%;
      margin: 2% auto;
      margin-bottom: 5%;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Flip card ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  %flip-card-side{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .flip-card{
    width: 80vw;
    height: 110vw;
    margin: 1.75em auto;
    @include breakpoint(desktop){
      margin: 2.5vh 2.5%;
      width: 17.5vw;
      height: 25vw;
    }
    // perspective: 1000px;
    &-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform .75s;
      transform-style: preserve-3d;
      &.flipped{
        @include transform(rotateY(180deg));
      }
    }
    &-front {
      @extend %flip-card-side;
    }
    &-back {
      @extend %flip-card-side;
      background-color: $white;
      color: $malibu;
      border-radius: 10px;
      transform: rotateY(180deg);
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Flip card ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  %card-content{
    position: absolute;
    width: 100%;
    height: 90%;
  }
  .front-card-content{
    @extend %card-content;
    background: url("../assets/avatar.jpg");
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    @include background-fill;
    &-text{
      font-size: 5.75vw;
      text-align: left;
      position: absolute;
      height: 18%;
      width: 90%;
      bottom: 0;
      left: 5%;
      @include breakpoint(desktop){
        font-size: 1.75vw;
      }
    }
    &::before{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background: linear-gradient(transparent, $avatar-trans);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .speaker-job{
    font-size: 4.5vw;
    color: $gold;
    font-family: $font-speaker-job;
    @include breakpoint(desktop){
      font-size: 1.25vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Flip card ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .back-card-content{
    @extend %card-content;
    @include breakpoint(desktop){
      font-size: 1.5vw;
    }
  }
  .speaker-social{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 10%;
    width: 70%;
    background: $malibu;
    margin: 0 auto;
    svg{
      cursor: pointer;
      color: $white;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Flip card ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .card-btn{
    font-size: 4vw;
    height:10%;
    width: 100%;
    border-radius: 0;
    background: $malibu;
    padding:0;
    @include breakpoint(desktop){
      font-size: 1.25vw;
    }
    &-f{
      color: inherit;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    &-b{
      position: absolute;
      bottom:0;
      color: $white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|
</style>
