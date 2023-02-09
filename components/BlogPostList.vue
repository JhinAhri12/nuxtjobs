

<template>
  <div class="container">
    <section class="articles">
      <div class="m-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div
          v-for="blogPost in blogPostList"
          :key="blogPost._path"
          class="card article"
        >
          <NuxtLink :to="blogPost._path">
            <section class="blog-post-card card article">
              <div class="media">
                <div class="media-content">
                  <h3 class="title article-title">
                    {{ blogPost.title }}
                  </h3>
                  <BlogPostMeta
                    :author="blogPost.author"
                    :date="blogPost.dates.published"
                  />
                </div>
              </div>
              <div class="card-content">
                <div class="content article-body">
                  {{ blogPost.description }}
                </div>
              </div>
            </section>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<style scoped>
.blog-post-card {
  padding-top: 2.5rem;
  padding-bottom: 3rem;
}
.blog-post-card .card-content {
  padding: 1rem;
}
.blog-post-card .title {
  margin-bottom: 1rem;
}
h3{
  color: #22c55d;
}
</style>