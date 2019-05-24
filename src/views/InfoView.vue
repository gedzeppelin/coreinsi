<template>
  <div class="info-view">
    <header :class="{ 'expanded': isTogleAux, 'scrolled-y': isScrolled }">
      <div class="burger-nav" @click="isTogleAux ? collapseHeader() : expandHeader()">
          <span class="line" ref="line1"></span>
          <span class="line" ref="line2"></span>
          <span class="line line-3" ref="line3"></span>
      </div>

      <span class="header-logo">XII COREINSI</span>

      <span class="header-logo-r header-logo-re" @click="scrollToComponent('c-home'); collapseHeader();"
            :class="{ 'active': position === 0 }" v-if="isTogleAux">
        {{ $t('app_1st_li') }}
      </span>
      <span class="header-logo-r" @click="scrollTooComponent()" v-else>
        {{ position === 0 ? $t('app_1st_li') : position === 1 ? $t('app_2nd_li') : position === 2 ? $t('app_3rd_li') :
           position === 3 ? $t('app_4th_li') : $t('app_5th_li') }}
      </span>

      <nav class="nav-header nav-header-normal">
        <li @click="scrollToComponent('c-home')" :class="{ 'active': position === 0 }" class="nav-item">
          {{ $t('app_1st_li') }}
        </li>
        <li @click="scrollToComponent('c-about')" :class="{ 'active': position === 1 }" class="nav-item">
          {{ $t('app_2nd_li') }}
        </li>
        <li @click="scrollToComponent('c-speakers')" :class="{ 'active': position === 2 }" class="nav-item">
          {{ $t('app_3rd_li') }}
        </li>
        <li @click="scrollToComponent('c-schedule')" :class="{ 'active': position === 3 }" class="nav-item">
          {{ $t('app_4th_li') }}
        </li>
        <li @click="scrollToComponent('c-pricing')" :class="{ 'active': position === 4 }" class="nav-item">
          {{ $t('app_5th_li') }}
        </li>
      </nav>

      <nav :class="{ 'open': isTogleAux }" class="nav-header nav-header-responsive">
        <li :class="{ 'active': position === 1 }" @click="scrollToComponent('c-about'); collapseHeader();"
            class="nav-item nav-item-r2">
          {{ $t('app_2nd_li') }}
        </li>
        <li :class="{ 'active': position === 2 }" @click="scrollToComponent('c-speakers'); collapseHeader();"
            class="nav-item">
          {{ $t('app_3rd_li') }}
        </li>
        <li @click="scrollToComponent('c-schedule'); collapseHeader();" :class="{ 'active': position === 3 }"
            class="nav-item">
          {{ $t('app_4th_li') }}
        </li>
        <li :class="{ 'active': position === 4 }" @click="scrollToComponent('c-pricing'); collapseHeader();"
            class="nav-item">
          {{ $t('app_5th_li') }}
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

    <ContainerHome />
    <ContainerAbout />
    <ContainerSpeakers />
    <ContainerSchedule />
    <ContainerPricing />
    <ContainerFooter />

    <div @click="scrollToComponent('c-home'); if(isTogleAux) collapseHeader();" class="nav-button-up"></div>

  </div>
</template>

<script>
  // @ is an alias to /src
  import ContainerHome from '@/components/ContainerHome.vue';
  import ContainerAbout from '@/components/ContainerAbout.vue';
  import ContainerSpeakers from '@/components/ContainerSpeakers.vue';
  import ContainerSchedule from '@/components/ContainerSchedule.vue';
  import ContainerPricing from '@/components/ContainerPricing.vue';
  import ContainerFooter from '@/components/ContainerFooter.vue';

  export default {
    name: 'infoPage',
    components: {
      ContainerHome,
      ContainerAbout,
      ContainerSpeakers,
      ContainerSchedule,
      ContainerPricing,
      ContainerFooter
    },
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
        if(this.isEnActive) {
          this.loadLanguageAsync('es');
        } else {
          this.loadLanguageAsync('en');
        }
        this.isEnActive = !this.isEnActive;
      },
      expandHeader: function() {
        this.isTogleAux = true;
        this.$refs.line1.style = "transform:rotate(45deg);top:8px;background:#ffd700;";
        this.$refs.line2.style = "width:0;opacity:0;";
        this.$refs.line3.style = "transform:rotate(-45deg);top:-8px;background:#ffd700;"
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
  }
</script>

<style lang="scss">
  .info-view{
    display: flex;
    flex-direction: column;
  }

  /****************************************************************************|
  |* Global configuration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  html, body{
    background: $white;
    color: $white;
    font: 18px $font-sans;
    @include breakpoint(large){
      // font-size: 5em;
    }
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
    background: $black-50;
    @include transition-pd(all, .5s);
    @include breakpoint(large){
      flex-wrap: nowrap;
      background: $black-75;
      font-size: 24px;
    }
  }
  .expanded{
    background: $black-75;
  }
  .scrolled-y{
    padding: 10px 0px;
    background: $black-100;
    @include breakpoint(large){
      background: $black-100;
      padding: 18 0px;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header resposive menu button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .burger-nav {
    display: inline-block;
    margin: 0px;
    margin-left: 2.5%;
    margin-right: 1.12em;
    width: auto;
    cursor: pointer;
    @include breakpoint(large){
      display: none;
    }
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
    @include breakpoint(large){
      display: none;
    }
    &-3{
      margin-bottom: 0px;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header responsive logo/first-nav-item ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .header-logo{
    display: none;
    @include breakpoint(large){
      display: inline-block;
      width: 15%;
      margin-left: 1%;
      color: gold;
      @include unselectable;
    }
  }
  .header-logo-r{
    display: inline-block;
    color: $gold;
    cursor: pointer;
    @include unselectable;
    @include breakpoint(large){
      display: none;
    }
    &e{
      color: $white;
    }
    &.active{
      color: $gold;
    }
    &:hover{
      color:$gold;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Header responsive navigation since 2nd nav-item ~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .nav-header{
    display: inline-flex;
    align-items: center;
    &-responsive{
      flex-direction: column;
      order: 1;
      visibility: hidden;
      opacity: 0;
      max-height: 0px;
      width: 100%;
      @include transition-multi(opacity .35s ease-in, max-height .25s ease-out);
      @include breakpoint(large){
        display: none;
      }
    }
    &-normal{
      display: none;
      @include breakpoint(large){
        display: inline-flex;
        justify-content: space-between;
        width: 68%;
      }
    }
    &.open{
      visibility: visible;
      opacity: 1;
      max-height: 250px;
    }
  }
  .nav-item{
    display: inline-block;
    width: auto;
    padding: 5px 0;
    color: white;
    cursor: pointer;
    @include transition-pdt(color, .15s, linear);
    @include breakpoint(large){
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
    }
    &-r2{
      padding-top: 10px;
    }
    &-rl{
      padding-bottom: 0;
    }
    &:hover{
      color: $gold;
    }
    &.active{
      color: $gold;
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
    @include breakpoint(large){
      width: 15%;
      margin-right: 1%;
      font-size: 18px;
      line-height: 28px;
    }
  }
  abbr {
    display: inline-block;
    @include transition-pd(color, .25s);
    &.language-selected {
      color: $gold;
      text-decoration: underline;
    }
    &:hover {
      color: $gold;
    }
  }
  aside {
    display: inline-block;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* Navigation fixed button (to top) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .nav-button-up{
    cursor: pointer;
    position: fixed;
    bottom: 2%;
    right: 3.5%;
    height: 36px;
    width: 36px;
    background-image: url("../assets/up-arrow.png");
    background-repeat: no-repeat;
    background-color: $mineShaft-60;
    background-position: center;
    background-size: 18px;
    border-radius: 999px;
    @include transition-pd(background-color, .35s);
    &:hover{
      background-color: $mineShaft;
    }
    @include breakpoint(tablet){
      bottom: 2.5%;
      right: 2.5%;
      height: 46px;
      width: 46px;
      background-size: 23px;
    }
    @include breakpoint(large){
      right: 1.5%;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /****************************************************************************|
  |* FA arrows ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  .fa-arrow-right{
    margin-left: .25em;
    @include breakpoint(large){
      font-size: inherit;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|
</style>
