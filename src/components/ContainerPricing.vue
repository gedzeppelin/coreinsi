<template>
  <div class="container pricing-container" id="c-pricing">

    <div class="pricing-content">
      <div class="head-helper">
        <span class="pricing-head" v-html="$t('pricing-title')"></span>
      </div>

      <div class="dates-item-title">
        {{ $t('pricing-1st-title') }}
      </div>
      <span class="item dates-item-1" v-html="$t('pricing-dates-1')"></span>
      <span class="item dates-item-2" v-html="$t('pricing-dates-2')"></span>
      <span class="item dates-item-3" v-html="$t('pricing-dates-3')"></span>

      <div class="indv-item-title">
        {{ $t('pricing-2nd-title') }}
      </div>
      <span class="item-e indv-e1" :class="{ 'i-e1-en': $i18n.locale == 'en' }">
        <b>{{ $i18n.locale == "es" ?  "E" : "S" }}</b>
      </span>
      <span class="item indv-item-1">S/70.00</span>
      <span class="item indv-item-2">S/80.00</span>
      <span class="item indv-item-3">S/90.00</span>
      <span class="item-e indv-e2" :class="{ 'i-e2-en': $i18n.locale == 'en' }">
        <b>P</b>
      </span>
      <span class="item indv-item2-1">S/80.00</span>
      <span class="item indv-item2-2">S/100.00</span>
      <span class="item indv-item2-3">S/120.00</span>

      <div class="grp-item-title">
        {{ $t('pricing-3rd-title') }}
      </div>
      <span class="item-e grp-e1" :class="{ 'g-en': $i18n.locale == 'en' }">
        10+
      </span>
      <span class="item grp-item-1">S/60.00</span>
      <span class="item grp-item-2">S/70.00</span>
      <span class="item grp-item-3">S/80.00</span>
      <span class="item-e grp-e2" :class="{ 'g-en': $i18n.locale == 'en' }">
        15+
      </span>
      <span class="item grp-item2-1">S/50.00</span>
      <span class="item grp-item2-2">S/60.00</span>
      <span class="item grp-item2-3">S/70.00</span>
    </div>

    <button type="button" class="btn-round btn-fb-lr-b pricing-btn">
      {{ $t('pricing-indv-btn') }}
    </button>
    <button type="button" class="btn-round btn-fb-lr-b pricing-btn">
      {{ $t('pricing-grp-btn') }}
    </button>

    <pre class="footnote" v-html="$t('pricing-footnote')"></pre>
  </div>
</template>

<script>
export default {
  name: 'ContainerPricing',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /****************************************************************************|
  |* Container configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .pricing-container{
    text-align: center;
    color: #696969;
    height: auto;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Content grid configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .pricing-content{
    display: grid;
    grid-template-columns: 10% 30% 30% 30%;
    grid-template-rows: auto auto auto 1.25em auto auto auto 1.25em;
    grid-template-areas:
      ". head head head"
      ". p-header p-header p-header"
      ". p-i1 p-i2 p-i3"
      ". . . ."
      ". i-header i-header i-header"
      "i-e1 i-i1 i-i2 i-i3"
      "i-e2 i2-i1 i2-i2 i2-i3"
      ". . . ."
      ". g-header g-header g-header"
      "g-e1 g-i1 g-i2 g-i3"
      "g-e2 g2-i1 g2-i2 g2-i3";
    font-size: 4.5vw;
    width: 90%;
    margin: 0 auto;
    margin-top: 55px;
    margin-bottom: 1.5em;
    @include breakpoint(tablet){
    }
    @include breakpoint(desktop){
      font-size: 2.5vw;
      grid-template-columns: 19% 2.5% 19% 19% 2.5% 19% 19%;
      grid-template-rows: auto;
      margin: 2.25em auto;
      margin-bottom: 1.5em;
      grid-template-areas:
        "head head head head head head head"
        "p-header . i-header i-header . g-header g-header"
        "p-header .   i-e1      i-e2    .    g-e1     g-e2"
        "p-i1 . i-i1 i2-i1 . g-i1 g2-i1"
        "p-i2 . i-i2 i2-i2 . g-i2 g2-i2"
        "p-i3 . i-i3 i2-i3 . g-i3 g2-i3";
    }
    @include breakpoint(large){
      width: 85%;
      margin-bottom: 1.25em;
    }
    @include breakpoint(x-large){
      width: 80%;
      margin-bottom: 1.1em;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .head-helper{
    grid-area: head;
    font-family: $font-sans2;
    font-size: 5.5vw;
    margin-bottom: 1.25em;
    @include breakpoint(tablet){
      margin-bottom: 1em;
    }
    @include breakpoint(desktop){
      font-size: 4.25vw;
      margin-bottom: .75em;
    }
    @include breakpoint(large){
      font-size: 3.75vw;
      margin-bottom: .85em;
    }
    @include breakpoint(x-large){
      font-size: 3vw;
      margin-bottom: .9em;
    }
  }
  .pricing-head{
    border-image: linear-gradient(to right, $lightningYellow 25%, $tango 25%,
                  $tango 50%, $chathamsBlue 50%, $chathamsBlue 75%, $persianGreen
                  75%, $persianGreen 100%);
    border-image-slice: 1;
    border-bottom: 1.5vw solid;
    @include breakpoint(desktop){
      border-bottom: 1vw solid;
    }
    @include breakpoint(x-large){
      border-bottom: .75vw solid;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Placehorder selectors: items/titles-base ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  %item-title{
    padding: .2em 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: $white;
    overflow: hidden;
    @include breakpoint(tablet){
      font-size: 3.25vw;
    }
    @include breakpoint(desktop){
      font-size: 2.45vw;
      padding: .225em 0;
    }
    @include breakpoint(large){
      font-size: 2vw;
    }
    @include breakpoint(x-large){
      font-size: 1.85vw;
    }
  }
  %item-base{
    padding: .35em 0;
    font-size: 3vw;
    @include breakpoint(tablet){
      font-size: 2.5vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Placehorder selectors: items ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .item{
    @extend %item-base;
    border-bottom: $bonJour 2px solid;
    @include breakpoint(desktop){
      font-size: 1.75vw;
    }
    @include breakpoint(large){
      font-size: 1.6vw;
    }
    @include breakpoint(x-large){
      font-size: 1.5vw;
    }
  }
  %item-1{
    border-left: $bonJour 2px solid;
    &-nrle{
      @extend %item-1;
      @include breakpoint(desktop){
        border-right: $bonJour 2px solid;
      }
    }
  }
  %item-2{
    border-left: $bonJour 2px solid;
    border-right: $bonJour 2px solid;
    @include breakpoint(desktop){
      border-right: 0;
    }
    &-nrle{
      @extend %item-2;
      @include breakpoint(desktop){
        border-right: $bonJour 2px solid;
      }
    }
  }
  %item-3{
    border-right: $bonJour 2px solid;
    @include breakpoint(desktop){
      border-left: $bonJour 2px solid;
      border-right: 0;
    }
    &-nrle{
      @extend %item-3;
      @include breakpoint(desktop){
        border-right: $bonJour 2px solid;
      }
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Placehorder selectors: especial items ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .item-e{
    @extend %item-base;
    color: $white;
    @include breakpoint(desktop){
      padding: .45em 0;
      font-size: 1.6vw;
    }
    @include breakpoint(large){
      padding: .4em 0;
      font-size: 1.4vw;
    }
    @include breakpoint(x-large){
      padding: .35em 0;
      font-size: 1.3vw;
    }
  }
  %item-e1{
    border-top-left-radius: 5px;
    border-bottom: $bonJour 2px solid;
    @include breakpoint(desktop){
      border-top-left-radius: 0;
      border-bottom: 0;
      border-right: $bonJour 2px solid;
    }
  }
  %item-e2{
    border-bottom-left-radius: 5px;
    @include breakpoint(desktop){
      border-bottom-left-radius: 0;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Grid section: dates ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .dates{
    &-item-title{
      @extend %item-title;
      background-color: $tango;
      grid-area: p-header;
      @include breakpoint(desktop){
        line-height: 2.57em;
      }
      @include breakpoint(large){
        line-height: 2.64em;
      }
    }
    &-item{
      &-1{
        @extend %item-1-nrle;
        grid-area: p-i1;
      }
      &-2{
        @extend %item-2-nrle;
        grid-area: p-i2;
      }
      &-3{
        @extend %item-3-nrle;
        grid-area: p-i3;
      }
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Grid section: individual prices ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .indv{
    &-item-title{
      @extend %item-title;
      background-color: $tulipTree;
      grid-area: i-header;
    }
    &-e1{
      @extend %item-e1;
      background: $lightningYellow;
      grid-area: i-e1;
      @include breakpoint(desktop){
        &::after{
          content: "STUDIANTES";
          font-weight: bold;
        }
      }
    }
    &-e2{
      @extend %item-e2;
      background: $lightningYellow;
      grid-area: i-e2;
      @include breakpoint(desktop){
        &::after{
          content: "ROFESIONALES";
          font-weight: bold;
        }
      }
    }
    &-item{
      &-1{
        @extend %item-1;
        grid-area: i-i1;
      }
      &-2{
        @extend %item-2;
        grid-area: i-i2;
      }
      &-3{
        @extend %item-3;
        grid-area: i-i3;
      }
    }
    &-item2{
      &-1{
        @extend %item-1-nrle;
        grid-area: i2-i1;
      }
      &-2{
        @extend %item-2-nrle;
        grid-area: i2-i2;
      }
      &-3{
        @extend %item-3-nrle;
        grid-area: i2-i3;
      }
    }
  }
  .i-e1-en{
    @include breakpoint(desktop){
      &::after{
        content: "TUDENTS";
        font-weight: bold;
      }
    }
  }
  .i-e2-en{
    @include breakpoint(desktop){
      &::after{
        content: "ROFESSIONALS";
        font-weight: bold;
      }
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Grid section: group prices ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .grp{
    &-item-title{
      @extend %item-title;
      background-color: $tropicalRainForest;
      grid-area: g-header;
    }
    &-e1{
      @extend %item-e1;
      background: $persianGreen;
      grid-area: g-e1;
      @include breakpoint(desktop){
        &::after{
          content: " ESTUDIANTES";
        }
      }
    }
    &-e2{
      @extend %item-e2;
      background: $persianGreen;
      grid-area: g-e2;
      @include breakpoint(desktop){
        &::after{
          content: " ESTUDIANTES";
        }
      }
    }
    &-item{
      &-1{
        @extend %item-1;
        grid-area: g-i1;
      }
      &-2{
        @extend %item-2;
        grid-area: g-i2;
      }
      &-3{
        @extend %item-3;
        grid-area: g-i3;
      }
    }
    &-item2{
      &-1{
        @extend %item-1-nrle;
        grid-area: g2-i1;
      }
      &-2{
        @extend %item-2-nrle;
        grid-area: g2-i2;
      }
      &-3{
        @extend %item-3-nrle;
        grid-area: g2-i3;
      }
    }
  }
  .g-en{
    @include breakpoint(desktop){
      &::after{
        content: " STUDENTS";
      }
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Buy buttons ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .pricing-btn{
    margin: .5em auto;
    padding: .9em;
    @include breakpoint(tablet){
      display: inline-block;
      padding: .8em 1.3em;
      margin: 0 .5em;
      margin-bottom: 1em;
      font-size: 2.5vw;
    }
    @include breakpoint(desktop){
      margin-bottom: 3em;
      font-size: 1.75vw;
      padding: .85em 1.3em;
    }
    @include breakpoint(large){
      font-size: 1.5vw;
    }
    @include breakpoint(x-large){
      font-size: 1.25vw;
    }
    @include breakpoint(x-large){
      padding: .95em 1.45em;
      font-size: 1.15vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Small screens footnote ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .footnote{
    font-family: $font-mono;
    text-align: left;
    display: block;
    margin: 2em auto;
    font-size: 3vw;
    width: 90%;
    @include breakpoint(desktop){
      display: none;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|
</style>
