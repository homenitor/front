<script lang="ts">
  import DisplayLastTemperature from "./ui/components/DisplayLastTemperature.svelte";
  import DisplayLastHumidity from "./ui/components/DisplayLastHumidity.svelte";
</script>

<main>
  <DisplayLastTemperature />
  <DisplayLastHumidity />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
