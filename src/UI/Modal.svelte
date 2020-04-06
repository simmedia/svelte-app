<script>
import { createEventDispatcher } from 'svelte'
  import Button from './Button.svelte'

const dispatch = createEventDispatcher()

  export let title

function closeModal() {
    dispatch('cancel')
}

</script> 

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, .6);
    z-index: 20;
}
.modal {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    min-width: 300px;
    padding: 30px;
    background: #fff;
    z-index: 22;
}
h1 {
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

@media (min-width: 760px) {
    .modal {
        width: 40%;
    }
}

</style>

<div class="modal-backdrop" on:click={closeModal}></div>
<div class="modal">
  <h1>{title}</h1>
  <div class="content"><slot /></div>
  <footer>
  <slot name="footer">

  </slot>
  </footer>
</div>