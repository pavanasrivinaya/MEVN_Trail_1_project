<template>
<div>
    <h1>Create a Post</h1>
    <form @submit.prevent = "addPost">
        <div>
            <label for="">Post Title:</label>
            <input type="text" v-model="post.title">
        </div>
        <div>
            <label for="">Post body</label>
            <textarea name="" id="" cols="30" rows="10" v-model="post.body"></textarea>
        </div>
        <br>
        <button>Create</button>
    </form>
</div>
</template>
<script>
export default {
    data() {
        return {
            post: {}
        }
    },
    methods: {
        addPost() {
            let uri = '//localhost:4000/posts/add';
            this.axios.post(uri, this.post).then(() => {
                this.$router.push({name: 'posts'});
            });
        }
    }
}
</script>