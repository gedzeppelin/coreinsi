<template>
  <div class="container speakers-container" id="c-speakers">
    <h2 class="speakers-header">
      {{ $t('speakers_header') }}
    </h2>

    <div class="nr-helper">

      <div class="flip-card" v-for="(speaker, name) in $t('speakers')">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-f">
              {{ $t('button_more_info') }}
            </button>
            <div class="front-card-content" :style="{ backgroundImage: 'url(' + require('../assets/' + speaker.img) + ')' }">
              <div class="front-card-content-text">
                {{ speaker.name }}
              <p class="speaker-job">
                {{ speaker.job }}
              </p>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="back-card-content">
              <div class="speaker-social" v-if="speaker.socialNetworks">
                 <a v-if="speaker.socialNetworks.facebook" :href="speaker.socialNetworks.facebook" target="_blank">
                   <font-awesome-icon :icon="['fab', 'facebook-f']" />
                 </a>
                 <a v-if="speaker.socialNetworks.instagram" :href="speaker.socialNetworks.instagram" target="_blank">
                   <font-awesome-icon :icon="['fab', 'instagram']" />
                 </a>
                 <a v-if="speaker.socialNetworks.twitter" :href="speaker.socialNetworks.twitter" target="_blank">
                   <font-awesome-icon :icon="['fab', 'twitter']" />
                 </a>
                 <a v-if="speaker.socialNetworks.github":href="speaker.socialNetworks.github" target="_blank">
                   <font-awesome-icon :icon="['fab', 'github']" />
                 </a>
                 <a v-if="speaker.socialNetworks.linkedin" :href="speaker.socialNetworks.linkedin" target="_blank">
                   <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                 </a>
              </div>
              <div class="back-card-text">
                <h3>{{ speaker.name }}</h3>
                <ul>
                  <li v-for="item in speaker.description" style="list-style-type: square;" v-html="item">
                  </li>
                </ul>
                <span class="presentations">{{ $i18n.locale == "es" ? "PONENCIAS" : "PRESENTATIONS" }}:</span>
                <ul>
                  <li v-for="(item, index) in speaker.talks">
                    {{ $t('speakers.' + name + '.talks[' + index + ']') }}
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" @click="flipCard" class="btn-round card-btn card-btn-b">
              {{ $t('button_less_info') }}
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
      background: url("../assets/speakers-background.gif");
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
      width: 75%;
    }
    @include breakpoint(x-large){
      width: 58%;
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
    -webkit-backface-visibility: hidden;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 0px $black;
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
      width: 23vw;
      height: 32.5vw;
    }
    @include breakpoint(large){
      width: 22vw;
      height: 31vw;
    }
    @include breakpoint(x-large){
      width: 17vw;
      height: 24vw;
    }
    &-inner {
      position: relative;
      width: 100%;
      height: 100%;
      @include transition-pd(transform, .75s);
      transform-style: preserve-3d;
      -webkit-transform-style: preserve-3d;
      &.flipped{
        @include transform(rotateY(180deg));
      }
    }
    &-front {
      z-index: -1;
      @extend %flip-card-side;
    }
    &-back {
      @extend %flip-card-side;
      background-color: $white;
      color: $shark;
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
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    @include background-fill;
    &-text{
      font-size: 5.75vw;
      text-align: left;
      position: absolute;
      height: 16%;
      width: 90%;
      bottom: 0;
      left: 5%;
      @include breakpoint(tablet){
        font-size: 3vw;
      }
      @include breakpoint(desktop){
        font-size: 1.675vw;
      }
      @include breakpoint(large){
        font-size: 1.65vw;
      }
      @include breakpoint(x-large){
        font-size: 1.25vw;
      }
    }
    &::before{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 35%;
      background: linear-gradient(transparent, $black-85);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  .presentations{
    display: block;
    margin-top: .75em;
    font-weight: bold;
  }
  .speaker-job{
    font-size: 4vw;
    color: $gold;
    font-family: $font-speaker-job;
    @include breakpoint(tablet){
      font-size: 2vw;
    }
    @include breakpoint(desktop){
      font-size: 1.2vw;
    }
    @include breakpoint(large){
      font-size: 1.18vw;
    }
    @include breakpoint(x-large){
      font-size: .875vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Flip card back content ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .back-card-content{
    @extend %card-content;
    @include breakpoint(tablet){
      font-size: 2.4vw;
    }
    @include breakpoint(desktop){
      font-size: 1.5vw;
    }
    @include breakpoint(large){
      font-size: 1.3vw;
    }
    @include breakpoint(x-large){
      font-size: 1vw;
    }
  }
  a{
    display: inline-block;
    margin: 0 2vw;
    vertical-align: sub;
    @include breakpoint(tablet){
      margin: 0 1.125vw;
    }
    @include breakpoint(desktop){
      margin: 0 .75vw;
    }
    @include breakpoint(large){
      margin: 0 .6vw;
    }
    @include breakpoint(x-large){
      margin: 0 .435vw;
    }
  }
  .back-card-text{
    width: 87.5%;
    margin: 0 auto;
    padding: 0;
    font-size: 3.65vw;
    text-align: left;
    @include breakpoint(tablet){
      font-size: 1.75vw;
    }
    @include breakpoint(desktop){
      font-size: 1.1vw;
    }
    @include breakpoint(large){
      font-size: 1vw;
    }
    @include breakpoint(x-large){
      font-size: .785vw;
    }
  }
  h3{
    text-align: center;
    font-size: 5.25vw;
    margin-top: .75em;
    margin-bottom: .5em;
    @include breakpoint(tablet){
      font-size: 2.65vw;
    }
    @include breakpoint(desktop){
      font-size: 1.375vw;
    }
    @include breakpoint(large){
      font-size: 1.5vw;
    }
    @include breakpoint(x-large){
      font-size: 1.1vw;
    }
  }
  ul{
    margin:0;
    padding-left: 3.25vw;
    @include breakpoint(tablet){
      padding-left: 1.6vw;
    }
    @include breakpoint(desktop){
      padding-left: .95vw;
    }
    @include breakpoint(desktop){
      padding-left: .7vw;
    }
  }
  li{
    margin: .5vw 0;
    @include breakpoint(desktop){
      margin: 0;
    }
    @include breakpoint(x-large){
      margin: .25vw 0;
    }
  }
  .speaker-social{
    display: inline-block;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 1.85em;
    padding: 0 .6em;
    background: $malibu;
    @include breakpoint(tablet){
      height: 1.75em;
      padding: 0 .4em;
    }
    @include breakpoint(desktop){
      padding: 0 .25em;
    }
    @include breakpoint(large){
      padding: 0 .25em;
    }
    @include breakpoint(x-large){
      padding: 0 .25em;
    }
    svg{
      cursor: pointer;
      color: $white;
      vertical-align: sub;
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
    background: $black-85;
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
      width: 100%;
      z-index: 2;
      bottom:0;
      color: $white;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|
</style>
