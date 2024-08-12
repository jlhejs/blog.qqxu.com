<script setup lang="ts">
import { getStarsRankingUrl } from '../logics/getStarsRanking'
</script>

<template>
  <a :href="getStarsRankingUrl()" target="_blank">所有项目按照Starts排序</a>
</template>
