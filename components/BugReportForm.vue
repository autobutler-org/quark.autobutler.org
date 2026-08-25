<script setup lang="ts">
import { ref } from "vue";

import { support } from "~/data/copy";

const formData = ref({
  title: "",
  component: [] as string[],
  whatHappened: "",
  browsers: [] as string[],
  url: "",
  logs: "",
});

const submitToGitHub = () => {
  const params = new URLSearchParams();
  params.append("template", "bug.yaml");
  params.append("title", `[Bug] ${formData.value.title}`);

  if (formData.value.whatHappened) {
    params.append("what-happened", formData.value.whatHappened);
  }
  if (formData.value.url) {
    params.append("url", formData.value.url);
  }
  if (formData.value.logs) {
    params.append("logs", formData.value.logs);
  }

  window.open(`${support.githubIssuesUrl}?${params.toString()}`, "_blank");
};
</script>

<template>
  <div>
    <h2 class="report-heading">{{ support.reportHeading }}</h2>
    <p class="intro">
      {{ support.reportIntroPrefix }}
      <a :href="support.featureRequestLink.href" target="_blank" rel="noopener">{{
        support.featureRequestLink.label
      }}</a
      >{{ support.reportIntroSuffix }}
    </p>

    <form class="form" @submit.prevent="submitToGitHub">
      <div class="field">
        <label for="title">{{ support.form.titleLabel }}</label>
        <input
          id="title"
          v-model="formData.title"
          type="text"
          :placeholder="support.form.titlePlaceholder"
          required
        />
      </div>

      <div class="field">
        <span class="label">{{ support.form.componentLabel }}</span>
        <div class="checkbox-group">
          <label
            v-for="option in support.form.componentOptions"
            :key="option"
            class="checkbox-label"
          >
            <input v-model="formData.component" type="checkbox" :value="option" />
            {{ option }}
          </label>
        </div>
      </div>

      <div class="field">
        <label for="what-happened">{{ support.form.whatHappenedLabel }}</label>
        <textarea
          id="what-happened"
          v-model="formData.whatHappened"
          :placeholder="support.form.whatHappenedPlaceholder"
          rows="6"
          required
        />
      </div>

      <div class="field">
        <span class="label">{{ support.form.browsersLabel }}</span>
        <div class="checkbox-group">
          <label
            v-for="browser in support.form.browserOptions"
            :key="browser"
            class="checkbox-label"
          >
            <input v-model="formData.browsers" type="checkbox" :value="browser" />
            {{ browser }}
          </label>
        </div>
      </div>

      <div class="field">
        <label for="url">{{ support.form.urlLabel }}</label>
        <input
          id="url"
          v-model="formData.url"
          type="text"
          :placeholder="support.form.urlPlaceholder"
        />
      </div>

      <div class="field">
        <label for="logs">{{ support.form.logsLabel }}</label>
        <textarea
          id="logs"
          v-model="formData.logs"
          :placeholder="support.form.logsPlaceholder"
          rows="6"
        />
      </div>

      <button type="submit">{{ support.form.submitLabel }}</button>
    </form>
  </div>
</template>

<style scoped>
.report-heading {
  margin: 0 0 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text-strong);
}

.intro {
  margin: 0 0 2rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.intro a {
  color: var(--color-accent);
  text-decoration: none;
}

.intro a:hover {
  color: var(--color-accent-hover);
  text-decoration: underline;
}

.form {
  padding: 2rem;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
}

.field {
  margin-bottom: 1.5rem;
}

label,
.label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text-bright);
}

input[type="text"],
textarea {
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  background: var(--color-surface-subtle);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  color: var(--color-text-strong);
  font-size: 1rem;
  font-family: inherit;
}

input[type="text"]:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-accent-faint);
  background: var(--color-surface-strong);
}

textarea {
  resize: vertical;
  min-height: 6rem;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem 0;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-bright);
  font-weight: normal;
  cursor: pointer;
  font-size: 0.95rem;
}

.checkbox-label input[type="checkbox"] {
  cursor: pointer;
  width: 1.1rem;
  height: 1.1rem;
  accent-color: var(--color-accent);
}

button {
  width: 100%;
  padding: 1rem 2rem;
  margin-top: 1rem;
  border: 1px solid var(--color-accent-border);
  border-radius: var(--radius-md);
  background: var(--gradient-accent);
  color: var(--color-text-strong);
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-accent);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

button:hover {
  transform: var(--lift-sm);
  box-shadow: var(--shadow-accent-hover);
}

@media (max-width: 640px) {
  .checkbox-group {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
