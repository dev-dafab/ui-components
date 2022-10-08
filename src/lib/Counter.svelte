<svelte:options tag="ui-mi-counter"/>

<script lang="ts">
  export let count: number = 0;
  const increment = () => {
    count += 1
  }
</script>


<button data-test="ui-button" on:click={increment}>
  count is {count}
</button>

<style>
  button {
    border: 2px solid red;
    background-color: lightblue;
  }

  button:hover {
    border: 2px solid rebeccapurple;
    background-color: mediumturquoise;
    cursor: pointer;
  }
</style>
