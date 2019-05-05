<template>
  <div class="about-container container" id="c-about">
    <div class="about-text">
      <h6 class="h6">ACERCA DEL CONGRESO</h6>
      <h2 class="h2">XII COREINSI</h2>
      <p class="p1">
        Proin viverra elit ipsum, id maximus ante porttitor vel. Etiam efficitur arcu libero. Proin blandit lacinia ante vel euismod. Ut nec semper velit, quis semper ante. In rutrum vel velit ut iaculis. Duis varius tellus metus, non iaculis odio rhoncus a. Vivamus semper lectus sapien, finibus elementum massa semper sed. Etiam eu congue velit. Sed tempus est id nisl cursus malesuada.
      </p>

      <img src="../assets/logo-unsch.png" class="ceis-logo" />

      <button type="button" class="btn-round btn-fb-lr-wp about-btn" @click="scrollToComponent('c-schedule')">
        {{ $t('home2-button') }}
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </button>

      <h6 class="h62">CUENTA REGRESIVA</h6>
      <ul class="countdown">
        <li class="counter">
          <p>00</p>
          <p class="counter-label">MESES</p>
        </li>
        <li class="counter">
          <p>00</p>
          <p class="counter-label">HORAS</p>
        </li>
        <li class="counter">
          <p>00</p>
          <p class="counter-label">DÍAS</p>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerAbout',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .about-container{
    background: linear-gradient($purple2, $purple);
  }
  .about-text{
    margin: 0 auto;
    margin-top: 50px;
    font-size: 5vw;
    width: 90%;
    text-align: center;
  }
  .p1{
    text-align: justify;
    color: $white;
    font-size: 4.25vw;
  }
  .h2{
    margin: 2.25vh auto;
    color: $gold;
    text-align: left;
  }
  .h6{
    color: $chiffon;
    margin: 0 auto;
    border-bottom: 3px solid;
    text-align: left;
  }
  .h62{
    color: $chiffon;
    margin: 0 auto;
  }
  .ceis-logo{
    display: block;
    max-width: 40%;
    margin: 2vh auto;
  }
  .about-btn{
    font-size: 75%;
    padding: .75em 1.25em;
    margin-bottom: 2.5vh;
  }
  .countdown {
    margin: 0 auto;
    border-top: 3px solid $chiffon;
    border-bottom: 3px solid $chiffon;
    padding: 1vh;
    font-size: 8vw;
    font-weight: bold;
    color: $chiffon;
    width: 60%;
    .counter {
      display: inline-block;
      width: 33.33%;
    }
  }
  .counter-label {
    color: $white;
    font-size: 4vw;
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/


  /****************************************************************************|
  |* RESPONSIVITY LARGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  @include breakpoint(large){
    .about-text{
      margin-top: 60px;
      font-size: 2vw;
      width: 80%;
    }
    .p1{
      font-size: 1.75vw;
    }
    .ceis-logo{
      max-width: 20%;
      margin: 2.5vh auto;
    }
    .about-btn{
      font-size: 60%;
    }
    .countdown {
      font-size: 3vw;
      width: 50%;
    }
    .counter-label {
      font-size: 1.5vw;
    }
  } //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-|


  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/


  /****************************************************************************|
  |* RESPONSIVITY X-LARGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ *|
  |****************************************************************************/
  @include breakpoint(x-large){
    .about-text{
      margin-top: 60px;
      font-size: 1.75vw;
      width: 80%;
    }
    .p1{
      font-size: 1.3vw;
    }
    .ceis-logo{
      max-width: 16%;
    }
    .about-btn{
      font-size: 55%;
    }
    .countdown {
      font-size: 2.5vw;
      width: 30%;
    }
    .counter-label {
      font-size: 1.25vw;
    }
  }
</style>
