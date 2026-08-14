/**
 * Build — zero dependencies.
 *
 * The site is already plain HTML/CSS/JS, so "building" is just assembling the
 * shippable files into dist/ (the directory Figma Make deploys from).
 */
import { cp, mkdir, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const ROOT = process.cwd()
const DIST = resolve(ROOT, 'dist')

/** Everything the served site needs, relative to the repo root. */
const ARTIFACTS = ['index.html', 'assets']

await rm(DIST, { recursive: true, force: true })
await mkdir(DIST, { recursive: true })

for (const artifact of ARTIFACTS) {
  await cp(resolve(ROOT, artifact), resolve(DIST, artifact), { recursive: true })
  console.log(`  + ${artifact}`)
}

console.log(`\nBuilt to ${DIST}`)
