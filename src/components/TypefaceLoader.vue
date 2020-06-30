<template>
    <div class="typeface-loader">
        <div class="typeface-loader__group">
            <button type="button" @click="previousHeaderTypeface"> &laquo;</button>
            <select v-model="currentHeaderTypeface" class="typeface-loader__select">
                <option v-for="typeface in typefaces" v-bind:key="typeface">
                    {{ typeface }}
                </option>
            </select>
            <button type="button" @click="nextHeaderTypeface"> &raquo;</button>
        </div>
        <div class="typeface-loader__group">
            <button type="button" @click="previousBodyTypeface"> &laquo;</button>
            <select v-model="currentBodyTypeface" class="typeface-loader__select">
                <option v-for="typeface in typefaces" v-bind:key="typeface">
                    {{ typeface }}
                </option>
            </select>
            <button type="button" @click="nextBodyTypeface"> &raquo;</button>
        </div>
    </div>
</template>

<script>
    import WebFont from 'webfontloader';

    export default {
        name: "TypefaceLoader",

        data() {
            return {
                currentHeaderTypeface: 'karmina',
                currentBodyTypeface: 'karmina-sans',
                typefaces: [
                    'karmina',
                    'lemonde-journal',
                    'lemonde-livre',
                    'lemonde-courrier',
                    'monarcha',
                    'capitolium-2',
                    'freight-text-pro',
                    'freight-sans-pro',
                    'utopia-std',
                    'adonis-web',
                    'kepler-std',
                    'ff-tisa-web-pro',
                    'calluna',
                    'ff-meta-serif-web-pro',
                    'ff-nexus-serif',
                    'odile',
                    'alda',
                    'source-serif-pro',
                    'alverata',
                    'cardo',
                    'vollkorn',
                    'gelo',
                    'mencken-std',
                    'novel-pro',
                    'bunyan-pro',
                    'leo',
                    'itc-giovanni',
                    'karmina-sans',
                    'lemonde-sans',
                    'ff-tisa-sans-web-pro',
                    'calluna-sans',
                    'ff-nexus-sans',
                    'source-sans-pro',
                    'novel-sans-pro',
                    'aller',
                ],
            }
        },

        watch: {
            currentHeaderTypeface: {
                immediate: true,
                handler(typeface) {
                    document.documentElement.style.setProperty('--header-typeface', typeface);
                },
            },

            currentBodyTypeface: {
                immediate: true,
                handler(typeface) {
                    document.documentElement.style.setProperty('--body-typeface', typeface);
                },
            }
        },

        mounted() {
            WebFont.load({
                typekit: {
                    id: 'rxa7vjf',
                }
            });

            window.addEventListener('keyup', (e) => {
                if (e.key === 'ArrowLeft') {
                    if (e.shiftKey) {
                        this.previousBodyTypeface();

                        return;
                    }
                    this.previousHeaderTypeface();
                }
                if (e.key === 'ArrowRight') {
                    if (e.shiftKey) {
                        this.nextBodyTypeface();

                        return;
                    }
                    this.nextHeaderTypeface();
                }
            });
        },

        methods: {
            nextHeaderTypeface() {
                const index = this.typefaces.indexOf(this.currentHeaderTypeface);

                if (index >= 0 && index < this.typefaces.length - 1) {
                    this.currentHeaderTypeface = this.typefaces[index + 1];
                }
            },

            previousHeaderTypeface() {
                const index = this.typefaces.indexOf(this.currentHeaderTypeface);

                if (index >= 1) {
                    this.currentHeaderTypeface = this.typefaces[index - 1];
                }
            },

            nextBodyTypeface() {
                const index = this.typefaces.indexOf(this.currentBodyTypeface);

                if (index >= 0 && index < this.typefaces.length - 1) {
                    this.currentBodyTypeface = this.typefaces[index + 1];
                }
            },

            previousBodyTypeface() {
                const index = this.typefaces.indexOf(this.currentBodyTypeface);

                if (index >= 1) {
                    this.currentBodyTypeface = this.typefaces[index - 1];
                }
            },
        }
    }
</script>

<style lang="scss">
    .typeface-loader {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .typeface-loader__select {
        font-size: 16px;
    }
</style>
