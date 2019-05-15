<template>
  <div class="container pricing-container" id="c-pricing">
    <span class="pricing-head">COSTO DE <b>INSCRIPCIONES</b></span>

    <div class="pricing-content">
      <div class="price-item-title">
        PRECIOS
      </div>
      <span class="item price-item-1">Del 13 al 26</br>de MAYO</span>
      <span class="item price-item-2">Del 27 de MAYO</br>al 9 de JUNIO</span>
      <span class="item price-item-3">Del 10 al 19</br>de JUNIO</span>

      <div class="indv-item-title">
        INDIVIDUAL
      </div>
      <span class="item-e indv-item-e1">E</span>
      <span class="item indv-item-1">S/70.O0</span>
      <span class="item indv-item-2">S/80.00</span>
      <span class="item indv-item-3">S/90.00</span>
      <span class="item-e indv-item-e2">P</span>
      <span class="item indv-item2-1">S/80.O0</span>
      <span class="item indv-item2-2">S/100.00</span>
      <span class="item indv-item2-3">S/120.00</span>

      <div class="grp-item-title">
        GRUPAL
      </div>
      <span class="item-e grp-item-e1">10+</span>
      <span class="item grp-item-1">S/60.O0</span>
      <span class="item grp-item-2">S/70.00</span>
      <span class="item grp-item-3">S/80.00</span>
      <span class="item-e grp-item-e2">15+</span>
      <span class="item grp-item2-1">S/50.O0</span>
      <span class="item grp-item2-2">S/60.00</span>
      <span class="item grp-item2-3">S/70.00</span>
    </div>

    <button type="button" class="btn-round btn-fb-lr-gp pricing-btn">
      COMPRAR INDIVIDUAL
    </button>
    <button type="button" class="btn-round btn-fb-lr-gp pricing-btn">
      COMPRAR GRUPAL
    </button>

    <pre class="footnote">
* E: Estudiante.
&nbsp;&nbsp;P: Profesional.
&nbsp;&nbsp;10+: Más que 10 estudiantes.
&nbsp;&nbsp;15+: Más que 15 estudiantes.
    </pre>

  </div>
</template>

<script>
export default {
  name: 'ContainerPricing',
  data: function() {
    return {

    };
  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $lightningYellow: #FEC923;
  $aaa: #e5b839;
  $bbb: #007e4f;
  $tango: #F36817;
  $chathamsBlue: #0F586B;
  $persianGreen: #00B28E;
  $bonJour: #EDEBEC;

  .pricing-container{
    padding-top: 55px;
    text-align: center;
    color: #696969;
    height: auto;
  }
  .pricing-head{
    font-size: 6.75vw;
    border-image: linear-gradient(to right, $lightningYellow 25%, $tango 25%,
                  $tango 50%, $chathamsBlue 50%, $chathamsBlue 75%, $persianGreen 75%,
                  $persianGreen 100%);
    border-image-slice: 1;
    border-bottom: 1.5vw solid;
    @include breakpoint(desktop){
      font-size: 4.25vw;
      border-bottom: 1vw solid;
    }
    @include breakpoint(large){
      font-size: 4vw;
    }
    @include breakpoint(x-large){
      font-size: 3vw;
      border-bottom: .75vw solid;
    }
  }

  .pricing-content{
    display: grid;
    grid-template-columns: 10% 30% 30% 30%;
    grid-template-rows: auto auto 1.25em auto auto auto 1.25em;
    grid-template-areas:
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
    font-size: 5vw;
    width: 90%;
    margin: 1.5em auto;
    @include breakpoint(desktop){
      font-size: 2.5vw;
      grid-template-columns: 19% 2.5% 19% 19% 2.5% 19% 19%;
      grid-template-rows: auto;
      margin: 2.25em auto;
      margin-bottom: 2em;
      grid-template-areas:
        "p-header . i-header i-header . g-header g-header"
        "p-header .   i-e1      i-e2    .    g-e1     g-e2"
        "p-i1 . i-i1 i2-i1 . g-i1 g2-i1"
        "p-i2 . i-i2 i2-i2 . g-i2 g2-i2"
        "p-i3 . i-i3 i2-i3 . g-i3 g2-i3";
    }
    @include breakpoint(x-large){
      width: 80%;
    }
  }

  %item-title{
    padding: .175em 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: $white;
    overflow: hidden;
  }
  %item-base{
    padding: .35em 0;
    font-size: 3.5vw;
  }
  %item{
    @extend %item-base;
    border-bottom: $bonJour 2px solid;
    @include breakpoint(desktop){
      font-size: 1.75vw;
    }
  }
  %item-1{
    @extend %item;
    border-left: $bonJour 2px solid;
  }
  %item-2{
    @extend %item;
    border-left: $bonJour 2px solid;
    border-right: $bonJour 2px solid;
    @include breakpoint(desktop){
      border-right: 0;
    }
  }
  %item-3{
    @extend %item;
    border-right: $bonJour 2px solid;
    @include breakpoint(desktop){
      border-left: $bonJour 2px solid;
      border-right: 0;
    }
  }

  %item-e{
    @extend %item-base;
    color: $white;
  }
  %item-e1{
    @extend %item-e;
    border-top-left-radius: 5px;
    border-bottom: $bonJour 2px solid;
    @include breakpoint(desktop){
      font-size: 1.75vw;
      border-top-left-radius: 0;
      border-bottom: 0;
      border-right: $bonJour 2px solid;
    }
  }
  %item-e2{
    @extend %item-e;
    border-bottom-left-radius: 5px;
    @include breakpoint(desktop){
      font-size: 1.5vw;
      border-bottom-left-radius: 0;
    }
  }

  .price{
    &-item-title{
      @extend %item-title;
      background-color: $tango;
      grid-area: p-header;
    }
    &-item{
      &-1{
        @extend %item-1;
        grid-area: p-i1;
        @include breakpoint(desktop){
          border-right: $bonJour 2px solid;
        }
      }
      &-2{
        @extend %item-2;
        grid-area: p-i2;
        @include breakpoint(desktop){
          border-right: $bonJour 2px solid;
        }
      }
      &-3{
        @extend %item-3;
        grid-area: p-i3;
        @include breakpoint(desktop){
          border-right: $bonJour 2px solid;
        }
      }
    }
  }

  .indv{
    &-item-title{
      @extend %item-title;
      background-color: $aaa;
      grid-area: i-header;
    }
    &-item{
      &-e1{
        @extend %item-e1;
        background: $lightningYellow;
        grid-area: i-e1;
      }
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
      &-e2{
        @extend %item-e2;
        background: $lightningYellow;
        grid-area: i-e2;
      }
    }
    &-item2{
      &-1{
        @extend %item-1;
        grid-area: i2-i1;
        @include breakpoint(desktop){
          border-right: $bonJour 2px solid;
        }
      }
      &-2{
        @extend %item-2;
        grid-area: i2-i2;
        @include breakpoint(desktop){
          border-right: $bonJour 2px solid;
        }
      }
      &-3{
        @extend %item-3;
        grid-area: i2-i3;
        @include breakpoint(desktop){
          border-right: $bonJour 2px solid;
        }
      }
    }
  }

  .grp{
    &-item-title{
      @extend %item-title;
      background-color: $bbb;
      grid-area: g-header;
    }
    &-item{
      &-e1{
        @extend %item-e1;
        background: $persianGreen;
        grid-area: g-e1;
      }
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
      &-e2{
        @extend %item-e2;
        background: $persianGreen;
        grid-area: g-e2;
      }
    }
    &-item2{
      &-1{
        @extend %item-1;
        grid-area: g2-i1;
        @include breakpoint(desktop){
          border-right: $bonJour 2px solid;
        }
      }
      &-2{
        @extend %item-2;
        grid-area: g2-i2;
        @include breakpoint(desktop){
          border-right: $bonJour 2px solid;
        }
      }
      &-3{
        @extend %item-3;
        grid-area: g2-i3;
        @include breakpoint(desktop){
          border-right: $bonJour 2px solid;
        }
      }
    }
  }

  .pricing-btn{
    margin: .5em auto;
    padding: 1em;
    color: $white;
    @include btn-fillback-lr(#006f95,#00a8c3)
    &:hover{
      color: $tango;
    }
    @include breakpoint(tablet){
      display: inline-block;
      padding: 1em 1.5em;
      margin: 0 .5em;
      margin-bottom: 1em;
      font-size: 2.5vw;
    }
    @include breakpoint(desktop){
      margin-bottom: 3em;
      font-size: 1.75vw;
    }
    @include breakpoint(large){
      font-size: 1.5vw;
    }
    @include breakpoint(x-large){
      font-size: 1.25vw;
    }
    @include breakpoint(x-large){
      padding: .9em 1.4em;
      font-size: 1.15vw;
    }
  }

  .footnote{
    text-align: left;
    display: block;
    margin: 2em auto;
    font-size: 3vw;
    width: 90%;
    @include breakpoint(desktop){
      display: none;
    }
  }
</style>
