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
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: var(--tracking-snug);
  color: var(--color-text-strong);
}

.intro {
  margin: 0 0 1.75rem;
  color: var(--color-text-muted);
}

.intro a {
  color: var(--color-text-strong);
  text-decoration: underline;
  text-decoration-color: var(--color-border-strong);
  text-underline-offset: 0.2em;
}

.intro a:hover {
  text-decoration-color: currentcolor;
}

.form {
  padding: var(--card-pad);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
}

.field {
  margin-bottom: 1.75rem;
}

label,
.label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-text-strong);
}

input[type="text"],
textarea {
  width: 100%;
  padding: 0.75rem 0.9rem;
  box-sizing: border-box;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-canvas);
  color: var(--color-text-strong);
  font: inherit;
  transition: border-color var(--duration-fast) ease;
}

input[type="text"]:focus,
textarea:focus {
  border-color: var(--color-text-muted);
}

textarea {
  resize: vertical;
  min-height: 6rem;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0.4rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-canvas);
  color: var(--color-text);
  font-weight: 400;
  cursor: pointer;
  transition: border-color var(--duration-fast) ease;
}

.checkbox-label:hover {
  border-color: var(--color-border-strong);
}

.checkbox-label input[type="checkbox"] {
  width: 1rem;
  height: 1rem;
  margin: 0;
  cursor: pointer;
  accent-color: var(--color-ink);
}

button {
  width: 100%;
  height: 3rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-ink);
  color: var(--color-on-ink);
  font: inherit;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color var(--duration-fast) ease,
    transform var(--duration-fast) var(--ease-out);
}

button:hover {
  background: var(--color-ink-hover);
}

button:active {
  transform: var(--press);
}
</style>
