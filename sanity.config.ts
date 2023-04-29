import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = process.env.projectId!
const dataset = process.env.dataset!


export default defineConfig({
    basePath: "/studio",
    name: 'Arie_Bauer_Content_Studio',
    title: 'Arie Bauer Dentist Studio',
    projectId,
    dataset,
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
})
