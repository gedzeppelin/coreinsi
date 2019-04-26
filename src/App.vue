<template>
  <div id="app">
    <header v-bind:class="{ 'scrolled-y': isScrolled }">
      <span class="header-logo">
        XII COREINSI
      </span>

      <nav>
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
  |* Global configuration ··················································· *|
  |****************************************************************************/
  html, body{
    background: $white;
    width: 100%;
    height: 100%;
    margin: 0px;
    scroll-behavior: smooth;
    font: 100% $font-stack;
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|


  /****************************************************************************|
  |* Header configuration ··················································· *|
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
    @include transition-pd(padding, .5s);
  }

  .scrolled-y{
    background: $nav-color2;
    padding: .65% 0px;
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|


  /****************************************************************************|
  |* Header logo ···························································· *|
  |****************************************************************************/
  .header-logo{
    display: inline-block;
    width: 15%;
    margin-left: 1%;
    margin-right: 0px;
    color: gold;
    @include unselectable;
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|


  /****************************************************************************|
  |* Header navigation ······················································ *|
  |****************************************************************************/
  nav{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 68%;
    padding: 0px;
    margin: 0px;
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
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|


  /****************************************************************************|
  |* Navigation bar language selector ······································· *|
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
  } //·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·=·|

  .nav-up-button{
    cursor: pointer;
    position: fixed;
    bottom: 2.5%;
    right: 1.5%;
    color: gold;
  }

  @media only screen and (max-width: 768px){

  }
</style>
