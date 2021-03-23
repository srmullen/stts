<script lang="ts">
  import Tailwind from './Tailwind.svelte';
  import Counter from './components/Counter.svelte';
</script>

<Tailwind />

<div class="bg-gray-50 h-screen">
  <div class="mx-auto max-w-3xl text-gray-800 py-8 px-4">
    <h1 class="text-center text-xl sm:text-4xl font-bold mb-8">
      Svelte / Typescript / Tailwind / Snowpack
    </h1>
    
    <p class="mb-4 text-center">
      A template for a fun, fast development experience!
    </p>
    
    <p class="text-center">
      <a class="text-indigo-700 hover:text-indigo-500" href="https://github.com/srmullen/stts">https://github.com/srmullen/stts</a>
    </p>
    <div class="my-4 flex justify-center">
      <Counter id="counter" />
    </div>
  </div>
</div>

<style>
  :root {
    --svelte-rgb: 255, 62, 0;
  }
</style>