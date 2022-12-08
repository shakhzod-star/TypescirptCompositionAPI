<script setup lang="ts">
import { ref } from 'vue'
const open = ref<boolean>(false)
</script>
<template>
    <div>
        <div id="menu">
            <button class="text-black" @click="open = !open">hello</button>
            <p id="list" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, eaque officiis vel consequatur dicta accusamus ipsa
                expedita
                nesciunt perspiciatis nam quae non quibusdam incidunt voluptatem, sed temporibus ipsum nostrum dignissimos repellat ipsam
                magnam, et dolor maxime? Id molestias deleniti numquam enim consequatur eum officiis aliquam quibusdam ipsam quasi facilis
                voluptatem error pariatur assumenda laudantium ipsum quam alias, optio placeat expedita repellat modi esse eveniet quae!
                Voluptatibus, vitae ex odit illum error veniam? Quia dolor rerum porro perferendis tenetur iure minima cupiditate, voluptas
                id?
                Nam dolores error nihil vitae exercitationem hic explicabo reprehenderit? Incidunt dolorem voluptate fugiat tempora facilis.
                Praesentium, consectetur.
            </p>
        </div>
         

    </div>
</template>


<style  scoped>
#menu #list {
    max-height: 0;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    background: #d5d5d5;
}

#menu:hover #list {
    max-height: 500px;
    transition: max-height 0.25s ease-in;
}
</style>