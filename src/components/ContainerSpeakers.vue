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
                Alex Villa
              <p class="speaker-job">
                Doctor
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
              <h2>Alex Villa</h2>
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
                Juan Gabriel
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
              <h2>Juan Gabriel</h2>
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
    font-size: 5vw;
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
    @include breakpoint(tablet){
      font-size: 4.15vw;
    }
    @include breakpoint(desktop){
      font-size: 2.5vw;
    }
    @include breakpoint(large){
      font-size: 2.15vw;
    }
    @include breakpoint(x-large){
      font-size: 1.7vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Title ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .speakers-header{
    display: inline-block;
    margin-bottom: 0;
    font-weight: bold;
    margin-top: 55px;
    border-bottom: 3px dashed;
    @include breakpoint(tablet){
      margin-bottom: .35em;
      border-bottom: 4px dashed;
    }
    @include breakpoint(desktop){
      margin-bottom: .65em;
    }
    @include breakpoint(x-large){
      margin-bottom: .45em;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Non-responsive helper ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .nr-helper{
    @include breakpoint(tablet){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 1em;
    }
    @include breakpoint(desktop){
      width: 80%;
    }
    @include breakpoint(large){
      width: 70%;
    }
    @include breakpoint(x-large){
      width: 56%;
      margin-bottom: 1.25em;
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
    margin: 1.5em auto;
    @include breakpoint(tablet){
      margin: .5em auto;
      width: 40vw;
      height: 55vw;
    }
    @include breakpoint(desktop){
      width: 22vw;
      height: 31vw;
    }
    @include breakpoint(large){
      width: 20vw;
      height: 28.5vw;
    }
    @include breakpoint(x-large){
      width: 16vw;
      height: 22.8vw;
    }
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
  |* Flip front card content ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
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
      @include breakpoint(tablet){
        font-size: 3.15vw;
      }
      @include breakpoint(desktop){
        font-size: 1.7vw;
      }
      @include breakpoint(large){
        font-size: 1.55vw;
      }
      @include breakpoint(x-large){
        font-size: 1.3vw;
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
    @include breakpoint(tablet){
      font-size: 2.5vw;
    }
    @include breakpoint(desktop){
      font-size: 1.4vw;
    }
    @include breakpoint(large){
      font-size: 1.265vw;
    }
    @include breakpoint(x-large){
      font-size: 1.05vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Flip back card content ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .back-card-content{
    @extend %card-content;
    @include breakpoint(tablet){
      font-size: 2.65vw;
    }
    @include breakpoint(desktop){
      font-size: 1.5vw;
    }
    @include breakpoint(desktop){
      font-size: 1.35vw;
    }
    @include breakpoint(desktop){
      font-size: 1.05vw;
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
  |* Flip card buttons ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .card-btn{
    font-size: 4vw;
    height:10%;
    width: 100%;
    border-radius: 0;
    background: $malibu;
    padding:0;
    @include breakpoint(tablet){
      font-size: 2.55vw;
    }
    @include breakpoint(desktop){
      font-size: 1.35vw;
    }
    @include breakpoint(large){
      font-size: 1.225vw;
    }
    @include breakpoint(x-large){
      font-size: 1vw;
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
