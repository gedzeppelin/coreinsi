<template>
  <div class="info-view">
    <ContainerHome />
    <ContainerAbout />
    <ContainerSpeakers />
    <ContainerSchedule />
    <ContainerPricing />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ContainerHome from '@/components/ContainerHome.vue';
  import ContainerAbout from '@/components/ContainerAbout.vue';
  import ContainerSpeakers from '@/components/ContainerSpeakers.vue';
  import ContainerSchedule from '@/components/ContainerSchedule.vue';
  import ContainerPricing from '@/components/ContainerPricing.vue';

  export default {
    name: 'infoPage',
    components: {
      ContainerHome,
      ContainerAbout,
      ContainerSpeakers,
      ContainerSchedule,
      ContainerPricing
    }
  }
</script>

<style lang="scss">
  .info-view{
    display: flex;
    flex-direction: column;
  }

  .test-margin{
    display: block;
    position: relative;
    padding-top: 7vh;
  }
</style>
