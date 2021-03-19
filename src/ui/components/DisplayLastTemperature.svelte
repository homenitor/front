<script lang="ts">
  import { ServiceFactory } from "../../factories/ServiceFactory";

  $: promise = getLastTemperature();
  $: temperature = undefined;
  $: temperatureMessage = `La température est de ${temperature}°C`;

  async function getLastTemperature() {
    const service = ServiceFactory.getService();
    const response = await service.getLastTemperature("livingroom");
    temperature = response.Value();
  }

  const interval = 1000 * 60;
  setInterval(() => {
    promise = getLastTemperature();
  }, interval);
</script>

<main>
  {#await promise}
    {#if temperature == undefined}
      <h1>En attente de données...</h1>
    {:else}
      <h1>{temperatureMessage}</h1>
    {/if}
  {:then}
    <h1>{temperatureMessage}</h1>
  {:catch error}
    <h1 style="color: red">{error}</h1>
  {/await}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
