<template>
    <div class="app">
        <header class="app__header">
            <typeface-loader/>
        </header>
        <div class="app__content">
            <content-container/>
        </div>
    </div>
</template>

<script>
    import TypefaceLoader from './components/TypefaceLoader';
    import Content from './components/Content';

    export default {
        name: 'app',
        components: {
            'typeface-loader': TypefaceLoader,
            'content-container': Content,
        }
    }
</script>

<style lang="scss">
    body {
        padding: 0;
        margin: 0;
    }

    .app {
        position: relative;
    }

    .app__header {
        align-items: center;
        background-color: white;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        height: 3rem;
        padding: 0 1rem;
        top: 0;

        [data-scrolldir="up"] & {
            position: sticky;
        }
    }

</style>
