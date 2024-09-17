<template>
  <div class="box_footer">
    <div class="box_1">
      <h3 class="title">Get In Touch</h3>
      <p class="subtitle">
        No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum
        tempor no vero est magna amet no
      </p>
      <div class="box_contact">
        <div class="flex flex-nowrap items-center gap-[15px]">
          <Icon name="loc"/>
          <span class="whitespace-nowrap">123 Street, New York, USA</span>
        </div>
        <div class="flex flex-nowrap items-center gap-[15px]">
          <Icon name="gmail"/>
          <span>info@example.com</span>
        </div>
        <div class="flex flex-nowrap items-center gap-[15px]">
          <Icon name="phone"/>
          <span class="whitespace-nowrap">+012 345 67890</span>
        </div>
      </div>
    </div>
    <div class="box_2">
      <h3 class="title">Quick Shop</h3>
      <Row tag="ul" :is-col="true" class="list_contact">
        <Button  v-for="item in dataFooter" :key="item.id" tag="button" :is-icon-only="false" icon="right" :is-left="true" >
            {{ item.name }}
        </Button>
      </Row>
    </div>
    <div class="box_3">
      <h3 class="title">Newsletter</h3>
      <p class="subtitle">Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
      <div class="box_email">
        <InputBox :is-icon-only="false" title-btn="sign up" :is-dangered="true" :is-left="true" :is-right="true" :is-bigged="true"/>
      </div>
      <h4 class="follow_title">
        follow us
      </h4>
      <Row tag="ul" :is-col="false" class="box_social">
        <Button v-for="item in dataButton" :key="item.id" tag="button" :is-icon-only="true"  :icon="item.icon" :is-primary="true" :is-rounded-full="true" class="p-[10px] justify-center items-center"/>
      </Row>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/base/Button.vue'
import Icon from '@/components/base/Icon.vue'
import Row from '@/components/base/Row.vue'
import InputBox from '@/components/main/store/InputBox.vue'
import { listDataFooter } from '@/data/listRouteStoreFooter.js'

const { dataFooter,dataButton } = listDataFooter()
</script>

<style scoped>
.box_footer {
  @apply w-full  flex smm:flex-col  md:flex-row smm:flex-wrap lg:flex-nowrap   lg:justify-between;
}

.box_1 {
    @apply smm:w-full md:w-[35%] flex flex-col gap-[25px]
}

.title {
    @apply font-kanit text-[22px]
}
.subtitle {
  @apply text-justify w-full 
}

.box_contact {
    @apply flex flex-col gap-[10px]
}

.box_social {
    @apply flex flex-nowrap items-center gap-[10px]
}

.box_2 {
    @apply flex flex-col gap-[20px]
}

.box_3 {
    @apply flex flex-col gap-[25px]
}

.follow_title {
  @apply font-kanit text-[20px] capitalize
}
</style>
