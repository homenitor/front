<script lang="ts">
	import { Service } from './app/Service'

	$: promise = getLastTemperature()
	$: temperature = undefined

	const interval = 1000 * 60

	async function getLastTemperature() {
		const service = new Service()
		const response = await service.getLastTemperature('livingroom')
		temperature = response.Value()
	}

	setInterval(() => {
		promise = getLastTemperature()
	}, interval)
</script>

<main>
{#await promise}
	{#if temperature == undefined}
		<h1>...waiting</h1>
	{:else}
		<h1>La température est de {temperature}°C</h1>
	{/if}
{:then}
	<h1>La température est de {temperature}°C</h1>
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