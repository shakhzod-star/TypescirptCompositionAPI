<template>
    <div class="mt-[100rem]" id="scrollArea">
        <div id="listItem" ref="interserver" class="max-w-[1000px] mx-auto my-0">
            {{ count }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'observer',
    data() {
        return {
            numbers: [10],
            count: 0
        }
    },
    methods: {
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio === 1) {
                        var numberCount = setInterval(() => {
                            if (this.count < this.numbers[0]) this.count++
                        },1)
                    } else {
                        clearInterval(numberCount)
                        this.count = 0
                    }
                })
            }, { threshold: 1, }
            )
            observer.observe(this.$refs.interserver)
        }
    },
    mounted() {
        this.scrollTrigger()
    },
}
</script>
