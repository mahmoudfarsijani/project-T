<template>
    <nav class="w-[15%] flex flex-col justify-between min-h-screen bg-slate-200 p-[10px] overflow-hidden rounded-r-lg">
       <div class="flex flex-col gap-[10px]">
        <h2 class="title capitalize font-kanit text-[20px] pb-[10px] border-b-[1px] border-black">
            dashboard
        </h2>
        <Row tag="ul" :is-col="true">
            <Button tag="RouterLink" to="/dashboard/home" :is-icon-only="false" :is-left="true" icon="home" class="gap-[10px] capitalize">
                home
            </Button>
            <Button tag="RouterLink" to="/dashboard/pages" :is-icon-only="false" :is-left="true" icon="pages" class="gap-[10px] capitalize">
                pages
            </Button>
            <Button tag="RouterLink" to="/dashboard/chat" :is-icon-only="false" :is-left="true" icon="chat" class="gap-[10px] capitalize">
                chat
            </Button>
            <Button tag="RouterLink" to="/dashboard/task" :is-icon-only="false" :is-left="true" icon="task" class="gap-[10px] capitalize">
                tasks
            </Button>
            <Button tag="RouterLink" to="/dashboard/mail" :is-icon-only="false" :is-left="true" icon="mails" class="gap-[10px] capitalize">
                mail
            </Button>
            <Button tag="RouterLink" to="/dashboard/auth" :is-icon-only="false" :is-left="true" icon="locked" class="gap-[10px] capitalize">
                authentication
            </Button>
        </Row>
       </div>
        <div>
            <Button :is-icon-only="false" :is-left="true" icon="logout" class="gap-[10px] capitalize" @click="logout">
                logout
            </Button>
        </div>
    </nav>
</template>



<script setup>
    import Button from '@/components/base/Button.vue'
    import Row from '@/components/base/Row.vue'
    import {useRouter} from 'vue-router'

    const router = useRouter()

    const logout = () => {
        router.replace({name:'auth'})
    }
</script>