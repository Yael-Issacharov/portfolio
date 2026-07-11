// Small helpers shared by the home gallery and the project page.
import { getCollection, type CollectionEntry } from 'astro:content';

// Turn a folder id like "1-tambour/index" into a clean URL slug "tambour".
// (The leading number just controls order; it's dropped from the URL.)
export function slugForEntry(entry: CollectionEntry<'projects'>): string {
  return entry.id.replace(/\/index$/, '').replace(/^\d+[-_]/, '');
}

// All projects, sorted by the `order` field (1 first).
export async function getSortedProjects(): Promise<CollectionEntry<'projects'>[]> {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order);
}
