<script>
  import { onMount } from 'svelte';
  
  let particleContainer;
  
  onMount(() => {
    console.log('Particle background loaded');
  });
</script>

<div class="particle-background" bind:this={particleContainer}>
  <div class="particles">
    {#each Array(30) as _, i}
      <div 
        class="particle" 
        style="--delay: {i * 0.2}s; --duration: {4 + Math.random() * 3}s; --x: {Math.random() * 100}%; --y: {Math.random() * 100}%;"
      ></div>
    {/each}
  </div>
</div>

<style>
  .particle-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }

  .particles {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: rgba(59, 130, 246, 0.8);
    border-radius: 50%;
    animation: float var(--duration, 5s) infinite ease-in-out var(--delay, 0s);
    left: var(--x, 50%);
    top: var(--y, 50%);
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }

  .particle:nth-child(2n) {
    background: rgba(16, 185, 129, 0.7);
    width: 8px;
    height: 8px;
    animation-name: floatReverse;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);
  }

  .particle:nth-child(3n) {
    background: rgba(245, 158, 11, 0.6);
    width: 4px;
    height: 4px;
    animation-name: pulse;
    box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
  }

  .particle:nth-child(4n) {
    background: rgba(139, 92, 246, 0.7);
    width: 7px;
    height: 7px;
    animation-name: spiral;
    box-shadow: 0 0 14px rgba(139, 92, 246, 0.3);
  }

  .particle:nth-child(5n) {
    background: rgba(236, 72, 153, 0.6);
    width: 5px;
    height: 5px;
    animation-name: drift;
    box-shadow: 0 0 10px rgba(236, 72, 153, 0.4);
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) translateX(0px) scale(1);
      opacity: 0.8;
    }
    25% {
      transform: translateY(-30px) translateX(20px) scale(1.2);
      opacity: 1;
    }
    50% {
      transform: translateY(-15px) translateX(-25px) scale(0.8);
      opacity: 0.6;
    }
    75% {
      transform: translateY(-40px) translateX(15px) scale(1.3);
      opacity: 0.9;
    }
  }

  @keyframes floatReverse {
    0%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0deg);
      opacity: 0.7;
    }
    25% {
      transform: translateY(25px) translateX(-20px) rotate(90deg);
      opacity: 0.9;
    }
    50% {
      transform: translateY(12px) translateX(30px) rotate(180deg);
      opacity: 0.5;
    }
    75% {
      transform: translateY(35px) translateX(-15px) rotate(270deg);
      opacity: 0.8;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      transform: scale(3);
      opacity: 1;
    }
  }

  @keyframes spiral {
    0% {
      transform: rotate(0deg) translateX(20px) rotate(0deg);
      opacity: 0.7;
    }
    100% {
      transform: rotate(360deg) translateX(20px) rotate(-360deg);
      opacity: 0.4;
    }
  }

  @keyframes drift {
    0%, 100% {
      transform: translateX(0px) translateY(0px);
      opacity: 0.6;
    }
    33% {
      transform: translateX(50px) translateY(-30px);
      opacity: 1;
    }
    66% {
      transform: translateX(-40px) translateY(25px);
      opacity: 0.4;
    }
  }

  /* Test visibility */
  .particle:first-child {
    background: rgba(255, 0, 0, 1) !important;
    width: 20px !important;
    height: 20px !important;
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.8) !important;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .particle {
      width: 4px;
      height: 4px;
    }
    
    .particle:nth-child(2n) {
      width: 5px;
      height: 5px;
    }
    
    .particle:nth-child(4n) {
      width: 6px;
      height: 6px;
    }
  }
</style> 