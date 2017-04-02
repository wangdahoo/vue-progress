<template>
  <div class="card">
    <div class="card-content">
      <slot name="content"></slot>
    </div>
    <div class="card-footer">
      <div class="text"><slot name="footer"></slot></div>
    </div>
  </div>
</template>
<style>
  .card {
    font-family: Raleway, Helvetica, sans-serif;
    color: #555;
    border: 1px solid rgba(160, 160, 160, 0.3);
    margin-bottom: 50px;
  }

  .card-content {
    height: 200px;
    position: relative;
  }

  .card-footer {
    background-color: #fafafa;
    padding: 10px 20px;
  }

  .card-footer .text {
    text-align: right;
    margin: 0;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
</style>
