<template>
  <div class="container footer-container">
  <span class="title">CEIS UNSCH <span class="year">@2019</span></span>
  <hr/>
  <span class="contact">CONTACTO</span>
  <br/>
  <font-awesome-icon :icon="['far', 'envelope']"
  class="envelope" />
  <br/>
  <span class="mail">contacto@sistemas-unsch.com</span>
  <hr/>
  <span class="social-networks">REDES SOCIALES</span>
  <br/>
  <div class="social-cont">
    <a href="https://www.facebook.com/ceis.ingenheiros" target="_blank"><div class="social-helper"></div></a>
    <font-awesome-icon :icon="['fab', 'facebook-f']" class="social-icon" />

  </div>
  <div class="social-cont">
    <div class="social-helper"></div>
    <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon" />
  </div>
  <div class="social-cont">
    <a href="https://github.com/episunsch" target="_blank"><div class="social-helper"></div></a>
    <font-awesome-icon :icon="['fab', 'github']" class="social-icon" />
  </div>
  <hr/>
  <span class="by">by: <a href="http://gedzeppelin.me" target="_blank">thefungusrocket</a></span>
  <span class="powered">powered by: <a href="http://gedzeppelin.me" target="_blank">enigma.scss</a></span>
  </div>
</template>

<script>
export default {
  name: 'ContainerFooter',
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
  .footer-container{
    background-color: $black-100;
    text-align: center;
    color: $white;
    padding-top: 20px;
    height: auto;
    font-family: $font-mono;
  }
  .title{
    font-weight: bold;
    font-family: $font-content;
    font-size: 22px;
  }
  .year{
    color: rgb(125, 125, 125);
  }
  .contact{
    border-bottom: 2px dashed $white;
  }
  .envelope{
    font-size:  22px;
    border: 2px solid;
    border-radius: 9999px;
    padding: 8px;
    margin-top: 17px;
  }
  .mail{

    font-size: 14px;
  }
  .social-networks{
    border-bottom: 2px dashed $white;
  }
  .social-cont{
    display: inline-block;
    margin: 0 13px;
    margin-top: 25px;
    margin-bottom: 10px;
    position: relative;
    width:  38px;
    height:  38px;
    cursor: pointer;
  }
  .social-helper{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid;
    @include transform(rotate(45deg));

  }
  .social-icon{
    position: absolute;
    top: 50%;
    left: 50%;
    @include transform(translate(-50%,-50%));
    font-size:  22px;
  }
  .by{
    font-family: $font-content;
    display: inline-block;
    color: rgb(125, 125, 125);
    font-size: 12px;
    margin-bottom: 75px;
    margin-left: 10%;
    float: left;
  }
  .powered{
    font-family: $font-content;
    display: inline-block;
    color: rgb(125, 125, 125);
    font-size: 12px;
    margin-bottom: 75px;
    margin-right: 10%;
    float: right;
  }
  a{
    color: $white;
    &:visited{
      color: $white;
    }
  }
  hr{
    width: 80%;
    margin-bottom: 12px;
    color: $white;
  }
</style>
