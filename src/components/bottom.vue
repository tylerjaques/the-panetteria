<template>
  <footer class="bottom">
    <div class="flex flex-wrap gap-x-16 xl:gap-x-24">
      <section class="mt-8" aria-labelledby="hours-heading">
        <h2 id="hours-heading" class="text-2xl mb-2">Bakery Hours</h2>
        <dl class="details">
          <template v-for="entry in hours" :key="entry.days.join()">
            <dt>{{ formatDays(entry.days) }}</dt>
            <dd>{{ formatHours(entry) }}</dd>
          </template>
        </dl>
        <template v-if="holidayActive">
          <h2 class="text-2xl mt-8 mb-2">Holiday Hours</h2>
          <dl class="details">
            <template v-for="entry in holidayHours.entries" :key="entry.label">
              <dt>{{ entry.label }}</dt>
              <dd>{{ formatHours(entry) }}</dd>
            </template>
          </dl>
        </template>
      </section>
      <section class="mt-8" aria-labelledby="info-heading">
        <h2 id="info-heading" class="text-2xl mb-2">Information</h2>
        <dl class="details">
          <dt>Email</dt>
          <dd><a :href="`mailto:${business.email}`">{{ business.email }}</a></dd>
          <dt>Phone</dt>
          <dd><a :href="`tel:+1-${business.phone}`">{{ business.phone }}</a></dd>
          <dt>Socials</dt>
          <dd class="flex gap-4">
            <a v-for="social in business.socials" :key="social.name" :href="social.url" :aria-label="social.name" class="no-underline">
              <font-awesome-icon :icon="['fab', social.icon]" />
            </a>
          </dd>
        </dl>
      </section>
      <section class="my-8 w-full max-w-md" aria-labelledby="location-heading">
        <h2 id="location-heading" class="text-2xl mb-2">Location</h2>
        <address class="not-italic">
          {{ business.address.street }}<br>
          {{ business.address.city }}, {{ business.address.province }}, Canada<br>
          {{ business.address.postalCode }}
        </address>
        <p class="mt-2"><a :href="business.directionsUrl">Get directions</a></p>
        <iframe
          class="mt-4 w-full max-w-md aspect-[4/3] border-0"
          title="Map showing The Panetteria at 248 Ramsay St, Amherstburg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.237069628985!2d-83.1139347845518!3d42.10239327920499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b3c84c9d7c001%3A0x1e02cf6f022618b!2s248%20Ramsay%20St%2C%20Amherstburg%2C%20ON%20N9V%201Y2!5e0!3m2!1sen!2sca!4v1618187247268!5m2!1sen!2sca"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  </footer>
</template>

<script setup>
import config from '@/assets/data/config.json';
import { formatDays, formatHours, isActive } from '@/hours.js';

const { business, hours, holidayHours } = config;
const holidayActive = isActive(holidayHours);
</script>
