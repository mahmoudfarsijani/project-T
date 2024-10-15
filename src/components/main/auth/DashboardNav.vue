<template>
    <nav class="w-[10%] min-h-screen bg-red-600">
        dashboard
        <ul>
            <Button tag="RouterLink" to="/dashboard/home" :is-icon-only="false" :is-left="true" icon="home">
                home
            </Button>
            <Button tag="RouterLink" to="/dashboard/pages" :is-icon-only="false" :is-left="true" icon="pages">
                pages
            </Button>
            <Button tag="RouterLink" to="/dashboard/chat" :is-icon-only="false" :is-left="true" icon="chat">
                chat
            </Button>
            <Button tag="RouterLink" to="/dashboard/task" :is-icon-only="false" :is-left="true" icon="task">
                tasks
            </Button>
            <Button tag="RouterLink" to="/dashboard/mail" :is-icon-only="false" :is-left="true" icon="mails">
                mail
            </Button>
            <Button tag="RouterLink" to="/dashboard/auth" :is-icon-only="false" :is-left="true" icon="locked">
                authentication
            </Button>
        </ul>
        <div>
            <Button :is-icon-only="false" :is-left="true" icon="logout">
                logout
            </Button>
        </div>
    </nav>
</template>



<script setup>
    import Button from '@/components/base/Button.vue'
    import Row from '@/components/base/Row.vue'
</script>