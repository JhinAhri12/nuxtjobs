<script setup>
const { path } = useRoute()
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <div class="bg-white p-5">
    <TheHero>
      <template v-slot:default><span class="titleArticle">{{ blogPost.title }}</span></template>&nbsp;&nbsp;

      <template v-slot:subtitle>
        <BlogPostMeta
          :author="blogPost.author"
          :date="blogPost.dates.published"
        />
      </template>
    </TheHero>
    <div class=" ">
      <section class="articles">
        <div class="">
          <section class="blog-post-card card article text-zinc-500">
            <div class="">
              <div class="contentArticle">
                <ContentDoc />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

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
.titleArticle{
  color: #0f5e59;
}
</style>