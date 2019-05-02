<template>
  <div id="app">
    <header v-bind:class="{ 'scrolled-y': isScrolled, 'expanded': isTogleAux }">
      <div class="burger-nav" @click="expandHeader">
          <span class="line" ref="line1"></span>
          <span class="line" ref="line2"></span>
          <span class="line line-3" ref="line3"></span>
      </div>

      <span class="header-logo">
        XII COREINSI
      </span>

      <span class="header-logo-r header-logo-re" @click="scrollToComponent('c-home'); expandHeader();" v-bind:class="{ 'active': position == 0 }" v-if="isTogleAux">
        {{ $t('app-1st-li') }}
      </span>
      <span class="header-logo-r" v-else>
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
        <li @click="scrollToComponent('c-about'); expandHeader();" v-bind:class="{ 'active': position == 1 }" class="nav-item nav-item-r2">
          {{ $t('app-2nd-li') }}
        </li>
        <li @click="scrollToComponent('c-speakers'); expandHeader();" v-bind:class="{ 'active': position == 2 }" class="nav-item">
          {{ $t('app-3rd-li') }}
        </li>
        <li @click="scrollToComponent('c-schedule'); expandHeader();" v-bind:class="{ 'active': position == 3 }" class="nav-item">
          {{ $t('app-4th-li') }}
        </li>
        <li @click="scrollToComponent('c-pricing'); expandHeader();" v-bind:class="{ 'active': position == 4 }" class="nav-item">
          {{ $t('app-5th-li') }}
        </li>
        <li @click="scrollToComponent('c-contact'); expandHeader();" v-bind:class="{ 'active': position == 5 }" class="nav-item nav-item-rl">
          {{ $t('app-6th-li') }}
        </li>
      </nav>

      <span class="language-selector">
        <abbr v-bind:class="{ 'language-selected': isEnActive }"
              @click="change_lang">
          es
        </abbr>
        <aside>&nbsp;|&nbsp;</aside>
        <abbr v-bind:class="{ 'language-selected': !isEnActive }"
              @click="change_lang">
          en
        </abbr>
      </span>
    </header>

    <router-view/>
    <font-awesome-icon v-if="true" @click="scrollToComponent('c-home')" icon="angle-up" mask="circle" size="3x" transform="up-0.75" class="nav-up-button"/>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        isTogleAux: false,
        isEnActive: true,
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
        this.isTogleAux = this.isTogleAux === true ? false : true;
        if(this.isTogleAux == true) {
          this.$refs.line1.style = "transform:rotate(45deg);top:8px;background:gold;"
          this.$refs.line2.style = "width:0;opacity:0;"
          this.$refs.line3.style = "transform:rotate(-45deg);top:-8px;background:gold;"
        } else {
          this.$refs.line1.style = this.$refs.line3.style = this.$refs.line2.style = null;
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
    width: 100%;
    height: 100%;
    margin: 0px;
    scroll-behavior: smooth;
    font: 100% $font-stack;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  header{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    background: $nav-color;
    position: fixed;
    width: 100%;
    padding: 1.5% 0px;
    top: 0;
    left: 0;
    font-size: 24px;
    z-index: 1;
    @include transition-pd(all, .5s);
    &.scrolled-y{
      background: $nav-color2;
      padding: .65% 0px;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header resposive menu button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .burger-nav{
    display: none;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header logo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .header-logo{
    display: inline-block;
    width: 15%;
    margin-left: 1%;
    margin-right: 0px;
    color: gold;
    @include unselectable;
  }
  .header-logo-r{
    display: none;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header navigation ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .nav-header{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 68%;
    padding: 0px;
    margin: 0px;
    &.nav-responsive{
      display: none;
    }
  }
  .nav-item{
    width: 15%;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    text-decoration: none;
    color: white;
    list-style-type: none;
    cursor: pointer;
    @include rm-focus-outline;
    @include transition-pdf(font-size, .15s, linear);
    &.active{
      color: gold;
      font-size: 24px;
    }
    &:hover{
      color: gold;
      font-size: 24px;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Navigation bar language selector ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .language-selector {
    display: inline-block;
    width: 15%;
    margin-right: 1%;
    font-size: 18px;
    line-height: 28px;
    text-align: right;
  }
  abbr {
    display: inline-block;
    color: white;
    cursor: pointer;
    @include unselectable;
    @include transition-pd(color, .35s);
    &.language-selected {
      color: gold;
      text-decoration: underline;
    }
    &.thinking {
      color: white;
      text-decoration: none;
    }
    &:hover {
      color: gold;
    }
  }
  aside {
    display: inline-block;
    color: white;
    @include unselectable;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Navigation fixed button (to top) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .nav-up-button{
    cursor: pointer;
    position: fixed;
    bottom: 2.5%;
    right: 1.5%;
    color: gold;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

  /****************************************************************************|
  |* RESPONSIVITY 800px ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  @media only screen and (max-width: 800px){
    /**************************************************************************|
    |* Global configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    html, body{
      font-size: 60%;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Header configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    header{
      background: $nav-color-r;
      padding: 17.5px 0px;
      flex-wrap: wrap;
      &.expanded{
        background: $nav-color;
      }
      &.scrolled-y{
        padding: 10px 0px;
        background: $nav-color2;
      }
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Header resposive menu button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
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
      transition: all ease-in-out .35s;
      border-radius: 10px;
      &-3{
        margin-bottom: 0px;
      }
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Header responsive logo/first-nav-item ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .header-logo{
      display: none;
    }
    .header-logo-r{
      display: inline-block;
      width: auto;
      margin: 0px;
      font-size: 18px;
      color: gold;
      @include unselectable;
      @include transition-pdf(color, .15s, linear);
      &e{
        color: $white;
        cursor: pointer;
      }
      &.active{
        color: gold;
      }
      &:hover{
        color:gold;
      }
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Header responsive navigation since 2nd nav-item ~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .nav-header{
      visibility: hidden;
      opacity: 0;
      max-height: 0px;
      width: 100%;
      order: 1;
      @include transition-multi(opacity .35s ease-in, max-height .25s ease-out);
      &.nav-responsive{
        display: inline-flex;
        flex-direction: column;
        justify-content: null;
        align-items: null;
      }
      &.nav-normal{
        display: none;
      }
    }
    .nav-open{
      opacity: 1;
      visibility: visible;
      max-height: 200px;
    }
    .nav-item{
      display: inline-block;
      padding: 5px 0;
      width: auto;
      font-size: 18px;
      line-height: 21px;
      @include transition-pdf(color, .15s, linear);
      &-r2{
        padding-top: 10px;
      }
      &-rl{
        padding-bottom: 0;
      }
      &:hover{
        color: gold;
        font-size: 18px;
      }
      &.active{
        color: gold;
        font-size: 18px;
      }
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Navigation bar language selector ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .language-selector {
      width: auto;
      margin-right: 2.25%;
      font-size: 15px;
      line-height: 21px;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


    /**************************************************************************|
    |* Navigation fixed button (to top) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
    |**************************************************************************/
    .nav-up-button{
      bottom: 2.75%;
      right: 5%;
      font-size: 700%;
    } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
</style>
