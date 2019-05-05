<template>
  <div id="app">
    <header v-bind:class="{ 'scrolled-y': isScrolled }">
      <div class="burger-nav" @click="isTogleAux == true ? collapseHeader() : expandHeader();">
          <span class="line" ref="line1"></span>
          <span class="line" ref="line2"></span>
          <span class="line line-3" ref="line3"></span>
      </div>

      <span class="header-logo">
        XII COREINSI
      </span>

      <span class="header-logo-r header-logo-re" @click="scrollToComponent('c-home'); collapseHeader();" v-bind:class="{ 'active': position == 0 }" v-if="isTogleAux">
        {{ $t('app-1st-li') }}
      </span>
      <span class="header-logo-r" @click="scrollTooComponent()" v-else>
        {{ position == 0 ? $t('app-1st-li') : position == 1 ? $t('app-2nd-li') : position == 2 ? $t('app-3rd-li') : position == 3 ? $t('app-4th-li') : position == 4 ? $t('app-5th-li') : $t('app-6th-li') }}
      </span>

      <nav class="nav-header nav-normal">
        <li @click="scrollToComponent('c-home')" v-bind:class="{ 'active': position == 0 }" class="nav-item">
          {{ $t('app-1st-li') }}
        </li>
        <li @click="scrollToComponent('c-about')" v-bind:class="{ 'active': position == 1 }" class="nav-item">
          {{ $t('app-2nd-li') }}
        </li>
        <li @click="scrollToComponent('c-speakers')" v-bind:class="{ 'active': position == 2 }" class="nav-item">
          {{ $t('app-3rd-li') }}
        </li>
        <li @click="scrollToComponent('c-schedule')" v-bind:class="{ 'active': position == 3 }" class="nav-item">
          {{ $t('app-4th-li') }}
        </li>
        <li @click="scrollToComponent('c-pricing')" v-bind:class="{ 'active': position == 4 }" class="nav-item">
          {{ $t('app-5th-li') }}
        </li>
        <li @click="scrollToComponent('c-contact')" v-bind:class="{ 'active': position == 5 }" class="nav-item">
          {{ $t('app-6th-li') }}
        </li>
      </nav>

      <nav class="nav-header nav-responsive" v-bind:class="{ 'nav-open': isTogleAux }">
        <li @click="scrollToComponent('c-about'); collapseHeader();" v-bind:class="{ 'active': position == 1 }" class="nav-item nav-item-r2">
          {{ $t('app-2nd-li') }}
        </li>
        <li @click="scrollToComponent('c-speakers'); collapseHeader();" v-bind:class="{ 'active': position == 2 }" class="nav-item">
          {{ $t('app-3rd-li') }}
        </li>
        <li @click="scrollToComponent('c-schedule'); collapseHeader();" v-bind:class="{ 'active': position == 3 }" class="nav-item">
          {{ $t('app-4th-li') }}
        </li>
        <li @click="scrollToComponent('c-pricing'); collapseHeader();" v-bind:class="{ 'active': position == 4 }" class="nav-item">
          {{ $t('app-5th-li') }}
        </li>
        <li @click="scrollToComponent('c-contact'); collapseHeader();" v-bind:class="{ 'active': position == 5 }" class="nav-item nav-item-rl">
          {{ $t('app-6th-li') }}
        </li>
      </nav>

      <span class="language-selector">
        <abbr v-bind:class="{ 'language-selected': !isEnActive }"
              @click="change_lang">
          es
        </abbr>
        <aside>&nbsp;|&nbsp;</aside>
        <abbr v-bind:class="{ 'language-selected': isEnActive }"
              @click="change_lang">
          en
        </abbr>
      </span>
    </header>

    <router-view/>

    <font-awesome-icon v-if="true" @click="scrollToComponent('c-home'); if(isTogleAux == true) collapseHeader();" icon="angle-up" mask="circle" transform="up-0.75" class="nav-up-button"/>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        isTogleAux: false,
        isEnActive: false,
        isScrolled: false,
        position: 0,
      };
    },
    methods: {
      onScroll() {
        this.isScrolled = window.scrollY > 20;

        if(window.scrollY < this.getElementY('c-home')) {
          this.position = 0;
        } else if(window.scrollY < this.getElementY('c-about')) {
          this.position = 1;
        } else if(window.scrollY < this.getElementY('c-speakers')) {
          this.position = 2;
        } else if(window.scrollY < this.getElementY('c-schedule')) {
          this.position = 3;
        } else if(window.scrollY < this.getElementY('c-pricing')) {
          this.position = 4;
        }
      },
      change_lang: function() {
        this.isEnActive = this.isEnActive === true ? false : true;
        this.$i18n.locale = this.$i18n.locale === 'es' ? 'en' : 'es';
      },
      expandHeader: function() {
        this.isTogleAux = true;
        this.$refs.line1.style = "transform:rotate(45deg);top:8px;background:gold;"
        this.$refs.line2.style = "width:0;opacity:0;"
        this.$refs.line3.style = "transform:rotate(-45deg);top:-8px;background:gold;"
      },
      collapseHeader: function() {
        this.isTogleAux = false;
        this.$refs.line1.style = this.$refs.line3.style = this.$refs.line2.style = null;
      },
      scrollTooComponent: function() {
        switch(this.position){
          case 0:
            this.scrollToComponent('c-home');
            break;
          case 1:
            this.scrollToComponent('c-about');
            break;
          case 2:
            this.scrollToComponent('c-speakers');
            break;
          case 3:
            this.scrollToComponent('c-schedule');
            break;
          case 4:
            this.scrollToComponent('c-pricing');
            break;
          case 5:
            this.scrollToComponent('c-contact');
            break;
        }
      }
    },
    mounted() {
      // Register an event listener when the Vue component is ready
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      // Unregister the event listener before destroying this Vue instance
      window.removeEventListener('scroll', this.onScroll)
    }
  };
</script>

<style lang="scss">
  /****************************************************************************|
  |* Global configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  html, body{
    background: $white;
    color: $white;
    font: 18px $font-stack;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  header{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 18px 0px;
    background: $nav-color-r;
    @include transition-pd(all, .5s);
    &.expanded{
      background: $nav-color;
    }
    &.scrolled-y{
      padding: 10px 0px;
      background: $nav-color2;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header resposive menu button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .burger-nav {
    display: inline-block;
    margin: 0px;
    margin-left: 2.5%;
    margin-right: 13px;
    width: auto;
    cursor: pointer;
  }
  .line {
    background: $white;
    display: block;
    width: 30px;
    height: 4px;
    margin-bottom: 4px;
    position: relative;
    top: 0;
    border-radius: 10px;
    @include transition-pdt(all, ease-in-out, .35s);
    &-3{
      margin-bottom: 0px;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header responsive logo/first-nav-item ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .header-logo{
    display: none;
  }
  .header-logo-r{
    display: inline-block;
    width: auto;
    color: gold;
    cursor: pointer;
    @include unselectable;
    &e{
      color: $white;
    }
    &.active{
      color: gold;
    }
    &:hover{
      color:gold;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header responsive navigation since 2nd nav-item ~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .nav-header{
    display: inline-flex;
    align-items: center;
    &.nav-responsive{
      flex-direction: column;
      order: 1;
      visibility: hidden;
      opacity: 0;
      max-height: 0px;
      width: 100%;
      @include transition-multi(opacity .35s ease-in, max-height .25s ease-out);
    }
    &.nav-open{
      visibility: visible;
      opacity: 1;
      max-height: 250px;
    }
  }
  .nav-normal{
    display: none;
  }
  .nav-item{
    display: inline-block;
    width: auto;
    padding: 5px 0;
    color: white;
    cursor: pointer;
    @include transition-pdt(color, .15s, linear);
    &-r2{
      padding-top: 10px;
    }
    &-rl{
      padding-bottom: 0;
    }
    &:hover{
      color: gold;
    }
    &.active{
      color: gold;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Navigation bar language selector ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .language-selector {
    display: inline-block;
    width: auto;
    margin-right: 2.25%;
    font-size: 15px;
    line-height: 21px;
    text-align: right;
    cursor: pointer;
    @include unselectable;
  }
  abbr {
    display: inline-block;
    @include transition-pd(color, .25s);
    &.language-selected {
      color: gold;
      text-decoration: underline;
    }
    &:hover {
      color: gold;
    }
  }
  aside {
    display: inline-block;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Navigation fixed button (to top) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .nav-up-button{
    cursor: pointer;
    position: fixed;
    bottom: 2.5%;
    right: 5%;
    color: gold;
    font-size: 2rem;
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
    |* Global configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    html, body{
      font-size: 1.0  5rem;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Header configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    header{
      flex-wrap: nowrap;
      background: $nav-color;
      font-size: 24px;
      &.scrolled-y{
        background: $nav-color2;
        padding: 18 0px;
      }
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Header resposive menu button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .burger-nav{
      display: none;
    }
    .line{
      display: none;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Header logo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .header-logo{
      display: inline-block;
      width: 15%;
      margin-left: 1%;
      color: gold;
      @include unselectable;
    }
    .header-logo-r{
      display: none;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Header navigation ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .nav-responsive{
      display: none;
    }
    .nav-normal{
      display: inline-flex;
      justify-content: space-between;
      width: 68%;
    }
    .nav-item{
      width: 15%;
      padding: 0;
      font-size: 1rem;
      line-height: 28px;
      text-align: center;
      @include transition-multi(font-size .1s linear, color .2s ease-in);
      &:hover{
        color: gold;
        font-size: 24px;
      }
      &.active{
        color: gold;
        font-size: 24px;
      }
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Navigation bar language selector ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .language-selector {
      width: 15%;
      margin-right: 1%;
      font-size: 18px;
      line-height: 28px;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Navigation fixed button (to top) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .nav-up-button{
      bottom: 2%;
      right: 1.5%;
      font-size: 2.5rem;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
</style>
