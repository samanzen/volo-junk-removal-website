import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'zlvpcgia',
  dataset: 'production',
  apiVersion: '2024-02-13', // Use a recent API version
  useCdn: true, // `false` if you want to ensure fresh data
})
