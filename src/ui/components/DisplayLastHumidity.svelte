<script lang="ts">
  import { ServiceFactory } from "../../factories/ServiceFactory";

  $: promise = getLastHumidity();
  $: humidity = undefined;
  $: humidityMessage = `L'humidité est de ${humidity}°C`;

  async function getLastHumidity() {
    const service = ServiceFactory.getService();
    const response = await service.getLastHumidity("livingroom");
    humidity = response.Value();
  }

  const interval = 1000 * 5;
  setInterval(() => {
    promise = getLastHumidity();
  }, interval);
</script>

<main>
  {#await promise}
    {#if humidity == undefined}
      <h1>En attente de données...</h1>
    {:else}
      <h1>{humidityMessage}</h1>
    {/if}
  {:then}
    <h1>{humidityMessage}</h1>
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
